import { render, screen } from '@testing-library/react';
import { NavLink } from 'types/types';
import MobileMenu from './MobileMenu';

jest.mock('../LocaleSwitcher/LocaleSwitcher', () => {
  const MockLocaleSwitcher = () => <div>locale switcher mock component</div>;
  MockLocaleSwitcher.displayName = 'MockLocaleSwitcher';

  return MockLocaleSwitcher;
});

describe('MobileMenu Test Suite', () => {
  const mockNavLinks = [
    {
      title: 'test-title-1',
      href: 'test-href-1',
    },
    { title: 'test-title-2', href: 'test-href-2' },
  ];

  const mockSetMenuOpen = jest.fn();

  let menuOpen = true;

  it('should render mobile menu with no error', () => {
    render(
      <MobileMenu
        navLinks={mockNavLinks as NavLink[]}
        menuOpen={menuOpen}
        setMenuOpen={mockSetMenuOpen}
        handleRoute={jest.fn()}
      />,
    );

    const localeSwitcher = screen.getByText(/locale switcher mock component/i);

    expect(localeSwitcher).toBeInTheDocument();

    mockNavLinks.map((nav) => {
      expect(screen.getByRole('link', { name: nav.title })).toBeInTheDocument();
    });
  });

  it('should change visibility based on menuOpen', () => {
    const { rerender } = render(
      <MobileMenu
        navLinks={mockNavLinks as NavLink[]}
        menuOpen={menuOpen}
        setMenuOpen={mockSetMenuOpen}
        handleRoute={jest.fn()}
      />,
    );

    const menu = screen.getByTestId('mobile-menu');
    expect(menu).toHaveClass('translate-x-0');

    menuOpen = false;

    rerender(
      <MobileMenu
        navLinks={mockNavLinks as NavLink[]}
        menuOpen={menuOpen}
        setMenuOpen={mockSetMenuOpen}
        handleRoute={jest.fn()}
      />,
    );

    expect(menu).toHaveClass('translate-x-full');
  });
});
