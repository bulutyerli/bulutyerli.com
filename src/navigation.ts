import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'tr'];
export const localePrefix = 'always'; // Default

export const pathnames = {
  '/': '/',

  '/about-me': {
    en: '/about-me',
    tr: '/hakkimda',
  },
  '/contact': {
    en: '/contact',
    tr: '/iletisim',
  },
  '/blog': {
    en: '/blog',
    tr: '/blog',
  },
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
