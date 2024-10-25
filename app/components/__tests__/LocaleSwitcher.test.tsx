import { render, screen } from '@testing-library/react';
import LocaleSwitcher from '../LocaleSwitcher';
import * as nextIntl from 'next-intl';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';

// Import mocks from __mocks__ automatically
jest.mock('next-intl', () => ({
  useLocale: jest.fn(),
}));

describe('LocaleSwitcher Test Suite', () => {
  const mockReplace = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (nextIntl.useLocale as jest.Mock).mockReturnValue('en');

    (useRouter as jest.Mock).mockReturnValue({
      replace: mockReplace,
    });
  });

  it('should render language buttons', () => {
    render(<LocaleSwitcher />);

    const enButton = screen.getByRole('button', { name: /Switch to English/i });
    const trButton = screen.getByRole('button', { name: /Switch to Turkish/i });

    expect(enButton).toBeInTheDocument();
    expect(trButton).toBeInTheDocument();
  });

  it('should change locale and button classes on click', async () => {
    const { rerender } = render(<LocaleSwitcher />);

    const trButton = screen.getByRole('button', { name: /Switch to Turkish/i });
    const enButton = screen.getByRole('button', { name: /Switch to English/i });

    const user = userEvent.setup();
    await user.click(trButton);

    expect(mockReplace).toHaveBeenCalledWith(expect.stringContaining('/tr'));

    (nextIntl.useLocale as jest.Mock).mockReturnValue('tr');
    rerender(<LocaleSwitcher />);

    expect(trButton).toHaveClass(
      'text-zinc-700 font-semibold dark:text-zinc-300'
    );
    expect(enButton).toHaveClass('text-zinc-500 dark:text-zinc-400');
  });
});
