'use client';

import { NavLink } from '@/types/types';
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';
import clsx from 'clsx';
import { Link } from '@/i18n/routing';

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
        'fixed top-16 right-0 z-30 h-screen w-full bg-white/80 text-zinc-800 backdrop-blur-3xl transition-all duration-500 ease-in dark:bg-zinc-800/90 dark:text-zinc-300',
        menuOpen ? 'translate-x-0' : 'translate-x-full',
      )}
    >
      <ul className="mt-10 mr-6 flex flex-col gap-10 px-3 text-right">
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
