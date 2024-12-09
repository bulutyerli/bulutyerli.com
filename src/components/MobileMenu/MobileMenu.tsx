'use client';

import { Link } from 'navigation';
import { NavLink } from 'types/types';
import LocaleSwitcher from 'components/LocaleSwitcher/LocaleSwitcher';

export default function MobileMenu({
  navLinks,
  menuOpen,
  setMenuOpen,
}: {
  navLinks: NavLink[];
  menuOpen: boolean;
  setMenuOpen: () => void;
}) {
  return (
    <div
      data-testid={'mobile-menu'}
      className={`fixed top-16 left-0 w-full h-full bg-white/30 backdrop-blur-md transition-all  ease-in-out duration-300 ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <ul className="px-3 text-right flex flex-col gap-10 mr-6 mt-10">
        <li className="self-end">
          <LocaleSwitcher />
        </li>
        {navLinks.map((nav) => {
          return (
            <li onClick={() => setMenuOpen()} key={nav.title}>
              <Link href={nav.href}>{nav.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
