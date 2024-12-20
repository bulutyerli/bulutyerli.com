'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { usePathname, useRouter } from '../../navigation';

export default function LocaleSwitcher() {
  const locale = useLocale();

  const [, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  function onLanguageChange(lang: string) {
    startTransition(() => {
      router.replace({ pathname }, { locale: lang });
    });
  }

  return (
    <div className="flex gap-1 pr-2">
      <button
        aria-label="Switch to English"
        className={`${
          locale === 'en'
            ? 'text-zinc-700 font-semibold dark:text-zinc-300'
            : 'text-zinc-500 dark:text-zinc-400'
        }`}
        onClick={() => {
          onLanguageChange('en');
        }}
      >
        EN
      </button>
      <div className="border border-l-0 border-zinc-400"></div>
      <button
        aria-label="Switch to Turkish"
        className={`${
          locale === 'tr'
            ? 'text-zinc-700 font-semibold dark:text-zinc-300'
            : 'text-zinc-500 dark:text-zinc-400'
        }`}
        onClick={() => {
          onLanguageChange('tr');
        }}
      >
        TR
      </button>
    </div>
  );
}
