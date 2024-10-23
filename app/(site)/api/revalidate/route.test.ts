/**
 * @jest-environment node
 */

import { parseBody } from 'next-sanity/webhook';
import { NextRequest } from 'next/server';
import { POST } from './route';
import { revalidateTag } from 'next/cache';

jest.mock('next/cache', () => ({
  revalidateTag: jest.fn(),
}));

jest.mock('next-sanity/webhook', () => ({
  parseBody: jest.fn(),
}));

describe('Revalidate API route test suite', () => {
  let request: NextRequest;

  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  beforeEach(() => {
    request = {} as NextRequest;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 401 for invalid signature', async () => {
    (parseBody as jest.Mock).mockResolvedValue({
      isValidSignature: false,
    });

    const response = await POST(request);
    expect(response.status).toBe(401);
    expect(revalidateTag).not.toHaveBeenCalled();
  });

  it('should return error 400 for missing body type', async () => {
    (parseBody as jest.Mock).mockResolvedValue({
      isValidSignature: true,
      body: {},
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
    expect(revalidateTag).not.toHaveBeenCalled();
  });

  it('should revalidate and return 200 for valid', async () => {
    (parseBody as jest.Mock).mockResolvedValue({
      isValidSignature: true,
      body: {
        _type: 'post',
      },
    });

    const response = await POST(request);
    expect(response.status).toBe(200);
    expect(revalidateTag).toHaveBeenCalledWith('post');
    expect(revalidateTag).toHaveBeenCalledTimes(1);
  });

  it('should return 500 for other errors', async () => {
    (parseBody as jest.Mock).mockRejectedValue(new Error('Test error'));

    const response = await POST(request);

    expect(response.status).toBe(500);
    expect(console.error).toHaveBeenCalled();
  });
});
