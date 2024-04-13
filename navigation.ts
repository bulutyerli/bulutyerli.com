import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'tr'];
export const localePrefix = 'always'; // Default

export const pathnames = {
  '/': '/',

  '/projects': {
    en: '/projects',
    tr: '/projeler',
  },
  '/about-me': {
    en: '/about-me',
    tr: '/hakkimda',
  },
  '/contact': {
    en: '/contact',
    tr: '/iletisim',
  },
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
