import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'tr'],

  // Used when no locale matches
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/#projects': {
      en: '/#projects',
      tr: '/#projeler',
    },
    '/#about-me': {
      en: '/#about-me',
      tr: '/#hakkimda',
    },
    '/#contact': {
      en: '/#contact',
      tr: '/#iletisim',
    },
    '/case-study/[slug]': {
      en: '/case-study/[slug]',
      tr: '/proje-detayi/[slug]',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
