'use client';

import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { NavLink } from 'types/types';
import Logo from '../Logo/Logo';
import LocaleSwitcher from 'components/LocaleSwitcher/LocaleSwitcher';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import { Link } from 'i18n/routing';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();
  const isActive = (href: string) => path === href;
  const t = useTranslations('Header');

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const navLinks: NavLink[] = [
    {
      title: t('aboutMe'),
      href: 'about-me',
    },
    {
      title: t('contact'),
      href: 'contact',
    },
  ];

  return (
    <header className="max-w-7xl mx-auto w-full h-16 z-20 flex items-center justify-between mt-2 sticky top-0 bg-white/50 dark:bg-zinc-900/80 backdrop-blur-md">
      <Link aria-label="Homepage" onClick={() => setMenuOpen(false)} href={'/'}>
        <div className="w-16 xl:w-24 h-auto cursor-pointer ml-2 mb-4">
          <Logo />
        </div>
      </Link>
      <nav className="flex justify-between items-center px-3 gap-3">
        <div className="md:hidden flex items-center">
          <ThemeSwitcher aria-label="Toggle Theme Mobile" />
        </div>
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        {menuOpen && (
          <MobileMenu
            navLinks={navLinks}
            menuOpen={menuOpen}
            setMenuOpen={() => setMenuOpen(false)}
          />
        )}
        <ul aria-label="desktop-nav" className="gap-10 md:flex hidden ">
          {navLinks.map((nav) => {
            return (
              <li key={nav.title}>
                <Link
                  className={` ${isActive(nav.href) && 'underline'}`}
                  href={nav.href}
                >
                  {nav.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="hidden md:flex md:gap-6">
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </header>
  );
}
