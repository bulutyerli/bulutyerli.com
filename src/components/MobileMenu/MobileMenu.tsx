'use client';

import { NavLink } from 'types/types';
import LocaleSwitcher from 'components/LocaleSwitcher/LocaleSwitcher';
import { Link } from 'i18n/routing';
import clsx from 'clsx';

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
      className={clsx(
        'fixed z-30  backdrop-blur-3xl top-16 right-0 w-full h-screen dark:bg-zinc-800/90 bg-white/80 text-zinc-800 dark:text-zinc-300  transition-all ease-in duration-500',
        menuOpen ? 'translate-x-0' : 'translate-x-[200%]'
      )}
    >
      <ul className="px-3 text-right flex flex-col gap-10 mr-6 mt-10">
        <li className="self-end ">
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
