import { render, screen } from '@testing-library/react';
import ErrorPage from './error'; // Ensure the filename matches your setup
import userEvent from '@testing-library/user-event';

describe('Error page test suite', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should display error message and reset button', async () => {
    const errorMock = new Error('test error message');
    const resetMock = jest.fn();
    const user = userEvent.setup();

    render(<ErrorPage error={errorMock} reset={resetMock} />);

    const title = screen.getByRole('heading', {
      name: /something went wrong!/i,
    });
    const resetButton = screen.getByRole('button', { name: /try again/i });

    expect(console.error).toHaveBeenCalled();
    expect(title).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();

    await user.click(resetButton);

    expect(resetMock).toHaveBeenCalledTimes(1);
  });
});
