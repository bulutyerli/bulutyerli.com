import { useTheme } from 'next-themes';
import HeaderComponent from '../Header';
import { renderWithProvider, renderWithThemeContext } from './utils';
import { screen, within } from '@testing-library/dom';
import ThemeSwitcher from '../ThemeSwitcher';
import userEvent from '@testing-library/user-event';

jest.mock('../LocaleSwitcher', () => () => <div>locale switcher mock</div>);
jest.mock('../MobileMenu', () => ({ navLinks, menuOpen }) => (
  <div
    data-testid="mobile-menu"
    className={`fixed top-16 left-0 w-full h-full bg-white/30 backdrop-blur-md transition-all ease-in-out duration-300 ${
      menuOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
  >
    {navLinks.map((link) => (
      <a key={link.title} href={link.href}>
        {link.title}
      </a>
    ))}
  </div>
));

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
        <ThemeSwitcher aria-label="Toggle Theme Desktop" />
      </>,
      { theme }
    );
    const spy = screen.getByTestId('theme-spy');

    const toggleButton = screen.getAllByLabelText(/toggle theme desktop/i);

    return { toggleButton, spy };
  };

  it('should render nav links correctly', () => {
    const { getByLabelText } = renderWithProvider(
      <HeaderComponent />,
      'Header'
    );

    const desktopNav = getByLabelText('desktop-nav');

    expect(
      within(desktopNav).getByRole('link', { name: /blog/i })
    ).toBeInTheDocument();
    expect(
      within(desktopNav).getByRole('link', { name: /about/i })
    ).toBeInTheDocument();
    expect(
      within(desktopNav).getByRole('link', { name: /contact/i })
    ).toBeInTheDocument();
  });

  it('should change the theme to the dark and have right logo versions', async () => {
    renderWithProvider(<HeaderComponent />, 'Header');
    const user = userEvent.setup();
    const logo = screen.getByAltText(/bulutyerli.com logo/i);
    const darkLogo = screen.getByAltText(/bulutyerli.com dark logo/i);

    const { toggleButton, spy } = setup('dark');

    expect(spy).toHaveTextContent('dark');
    expect(logo).toHaveClass('dark:hidden');
    expect(darkLogo).toHaveClass('hidden dark:block');

    await user.click(toggleButton[1]);

    expect(spy).toHaveTextContent('light');
  });

  it('should open hamburger menu on menu button click', async () => {
    const user = userEvent.setup();
    renderWithProvider(<HeaderComponent />, 'Header');

    const menuButton = screen.getByLabelText(/open menu/i);

    const mobileMenu = screen.getByTestId('mobile-menu');

    expect(mobileMenu).toHaveClass('translate-x-full');

    await user.click(menuButton);

    expect(mobileMenu).toHaveClass('translate-x-0');
  });
});
