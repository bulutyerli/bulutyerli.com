import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "tr"];
export const localePrefix = "always"; // Default

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  "/": "/",
  // If locales use different paths, you can
  // specify each external path per locale.
  "/projects": {
    en: "/projects",
    tr: "/projeler",
  },
  "/about-me": {
    en: "/about-me",
    tr: "/hakkimda",
  },
  "/contact": {
    en: "/contact",
    tr: "/iletisim",
  },
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
