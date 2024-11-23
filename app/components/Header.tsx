'use client';

import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import { usePathname } from 'next/navigation';
import ThemeSwitcher from './ThemeSwitcher';
import { Link } from '../../navigation';
import { NavLink } from '../types/types';
import MobileMenu from './MobileMenu';
import Logo from './Logo';

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
      title: t('blog'),
      href: '/blog',
    },
    {
      title: t('aboutMe'),
      href: '/about-me',
    },
    {
      title: t('contact'),
      href: '/contact',
    },
  ];

  return (
    <header className="max-w-7xl mx-auto w-full h-16 z-10 flex items-center justify-between mt-2 sticky top-0 lg:relative bg-white dark:bg-zinc-900">
      <Link onClick={() => setMenuOpen(false)} href={'/'}>
        <div className="w-16 xl:w-24 h-auto cursor-pointer ml-2">
          <Logo />
        </div>
      </Link>
      <nav className="flex justify-between items-center px-3 gap-3">
        <ThemeSwitcher
          classname={'md:hidden'}
          aria-label="Toggle Theme Mobile"
        />
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        {
          <MobileMenu
            navLinks={navLinks}
            menuOpen={menuOpen}
            setMenuOpen={() => setMenuOpen(false)}
          />
        }
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
        <ThemeSwitcher aria-label="Toggle Theme Desktop" />
        <LocaleSwitcher />
      </div>
    </header>
  );
}
