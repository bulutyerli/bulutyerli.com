import { useTheme } from 'next-themes';
import HeaderComponent from './Header';
import { renderWithProvider, renderWithThemeContext } from '../__tests__/utils';
import { screen, within } from '@testing-library/dom';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import userEvent from '@testing-library/user-event';

global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

jest.mock('../LocaleSwitcher/LocaleSwitcher', () => {
  const MockLocaleSwitcher = () => <div>locale switcher mock</div>;
  Object.assign(MockLocaleSwitcher, { displayName: 'LocaleSwitcher' });
  return MockLocaleSwitcher;
});

describe('Header component test suite', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  type ThemeVariant = 'light' | 'dark';

  const ThemeSpy: React.FC = () => {
    const { theme } = useTheme();
    return <span data-testid="theme-spy">{theme + '-spy'}</span>;
  };

  const setup = (theme: ThemeVariant | undefined = 'dark') => {
    renderWithThemeContext(
      <>
        <ThemeSpy />
        <ThemeSwitcher aria-label="Toggle Dark Mode" />
      </>,
      { theme }
    );
    const spy = screen.getByTestId('theme-spy');

    const toggleButton = screen.getAllByLabelText(/toggle dark mode/i);

    return { toggleButton, spy };
  };

  it('should render nav links correctly', () => {
    const { getByLabelText } = renderWithProvider(
      <HeaderComponent />,
      'Header'
    );

    const desktopNav = getByLabelText('desktop-nav');

    expect(
      within(desktopNav).getByRole('link', { name: /about/i })
    ).toBeInTheDocument();
    expect(
      within(desktopNav).getByRole('link', { name: /contact/i })
    ).toBeInTheDocument();
  });

  it('should change the theme to the dark and have  logo ', async () => {
    renderWithProvider(<HeaderComponent />, 'Header');
    const user = userEvent.setup();
    const logo = screen.getByLabelText(/bulutyerli.com logo/i);
    const darkLogoMoon = screen.getByTestId(/dark-element/i);

    const { toggleButton, spy } = setup('dark');

    expect(spy).toHaveTextContent('dark');
    expect(logo).toBeInTheDocument();

    await user.click(toggleButton[1]);

    expect(spy).toHaveTextContent('light');
    expect(darkLogoMoon).toHaveClass('dark:translate-x-[-88px]');
  });
});
