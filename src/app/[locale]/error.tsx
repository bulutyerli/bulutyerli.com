'use client';

import { useTranslations } from 'next-intl';
import { spartan } from 'fonts';
import Container from '@/components/Container/Container';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('Error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="mt-auto flex flex-col gap-10 text-center">
      <h1
        className={`${spartan.className} text-xl text-red-600 md:text-2xl lg:text-3xl`}
      >
        {t('error')}
      </h1>
      <h2 className={`${spartan.className} text-3xl md:text-4xl lg:text-5xl`}>
        {t('title')}
      </h2>
      <button
        className="max-w-30 self-center rounded-xl bg-zinc-500 px-4 py-2 text-zinc-100 hover:bg-zinc-400"
        onClick={reset}
      >
        {t('retry')}
      </button>
    </Container>
  );
}
