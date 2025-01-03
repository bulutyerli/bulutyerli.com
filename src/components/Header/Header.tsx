'use client';

import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { NavLink } from 'types/types';
import Logo from '../Logo/Logo';
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';
import { Link, usePathname } from '@/i18n/routing';
import { sectionNames } from './Header.constants';
import { isActive } from './Header.helpers';
import clsx from 'clsx';
import { motion } from 'motion/react';
import useActiveSection from '@/hooks/useActiveSection';
import { useHash } from '@/hooks/useHash';

export default function Header() {
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();
  const path = useActiveSection(sectionNames[locale], pathName);
  const t = useTranslations('Header');
  const isHomepage = pathName === '/';

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [menuOpen]);

  const navLinks: NavLink[] = [
    {
      title: t('aboutMe'),
      href: '/#about-me',
    },
    {
      title: t('projects'),
      href: '/#projects',
    },
    {
      title: t('contact'),
      href: '/#contact',
    },
  ];

  return (
    <header className="sticky top-0 z-20 mx-auto flex h-(--header-height) w-full max-w-7xl items-center justify-between overflow-x-clip bg-white/90 py-2 backdrop-blur-md dark:bg-zinc-900/80">
      <Link aria-label="Homepage" onClick={() => setMenuOpen(false)} href={'/'}>
        <div className="mb-4 ml-2 h-auto w-16 cursor-pointer xl:w-24">
          <Logo />
        </div>
      </Link>
      <nav className="flex items-center justify-between gap-3 px-3">
        <div className="flex items-center md:hidden">
          <ThemeSwitcher aria-label="Toggle Theme Mobile" />
        </div>
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <MobileMenu
          navLinks={navLinks}
          menuOpen={menuOpen}
          setMenuOpen={() => setMenuOpen(false)}
        />
        <ul aria-label="desktop-nav" className="hidden gap-10 md:flex">
          {navLinks.map((nav) => {
            return (
              <li
                className={clsx(
                  'font-spartan relative rounded-sm p-2 pb-1',
                  !isActive(path, nav.href) && 'hover:underline',
                )}
                key={nav.title}
              >
                <Link href={nav.href}>{nav.title}</Link>
                {isHomepage && isActive(path, nav.href) && (
                  <motion.div
                    layoutId="background"
                    className="absolute inset-0 -z-10 rounded-md bg-zinc-100 dark:bg-zinc-700"
                  ></motion.div>
                )}
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
