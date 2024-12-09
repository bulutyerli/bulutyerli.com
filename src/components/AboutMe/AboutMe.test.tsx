import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AboutMeData } from 'types/types';
import AboutMe from './AboutMe';

jest.mock('@sanity/client', () => ({
  createClient: jest.fn(),
}));

jest.mock('lib/imageBuilder', () => ({
  urlFor: jest.fn(() => ({
    width: jest.fn(() => ({
      height: jest.fn(() => ({
        url: jest.fn(() => '/test-image-link'),
      })),
    })),
  })),
}));

describe('About Me component test suite', () => {
  const mockData: AboutMeData = {
    title: 'About Me',
    image: { asset: { _ref: 'mockImage.jpg', _type: 'image' } },
    loki: { asset: { _ref: 'mockLoki.jpg', _type: 'image' } },
    blur: 'mockBlur',
    lokiBlur: 'mockLokiBlur',
    content: [
      {
        children: [
          {
            marks: [],
            text: 'test text',
            _key: 'unique sample key',
            _type: 'span',
          },
        ],
        _type: 'span',
        style: 'exampleStyle',
        _key: 'exampleKey',
        markDefs: ['test'],
      },
    ],
    _createdAt: 'test',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render component with content and image', async () => {
    const user = userEvent.setup();
    render(<AboutMe data={mockData} />);

    const title = screen.getByRole('heading', { name: mockData.title });
    const bulutImage = screen.getByAltText(/bulut yerli profile/i);
    const lokiImage = screen.getByAltText(/loki/i);
    const lokiButton = screen.getByRole('button', { name: /loki/i });

    expect(title).toBeInTheDocument();
    expect(bulutImage).toHaveClass('opacity-100');
    expect(lokiImage).toHaveClass('opacity-0');

    //change image to loki image on click "loki"
    await user.click(lokiButton);
    expect(bulutImage).toHaveClass('opacity-0');
    expect(lokiImage).toHaveClass('opacity-100');
  });
});
