'use client';

import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { NavLink } from 'types/types';
import Logo from '../Logo/Logo';
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';
import { Link } from '@/i18n/routing';
import { sectionNames } from './Header.constants';
import { handleRoute, isActive } from './Header.helpers';
import clsx from 'clsx';
import { motion } from 'motion/react';
import useActiveSection from '@/hooks/useActiveSection';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = useActiveSection(sectionNames);
  const pathName = usePathname();
  const router = useRouter();
  const t = useTranslations('Header');

  console.log(path);

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
      href: '#about-me',
    },
    {
      title: t('projects'),
      href: '#projects',
    },
    {
      title: t('contact'),
      href: '#contact',
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
          handleRoute={(href) => handleRoute(pathName, href, router)}
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
                <button
                  className="cursor-pointer"
                  onClick={() => handleRoute(pathName, nav.href, router)}
                  id={nav.href}
                  role="link"
                  aria-label={`Navigate to ${nav.title} section`}
                >
                  {nav.title}
                </button>
                {isActive(path, nav.href) && (
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
