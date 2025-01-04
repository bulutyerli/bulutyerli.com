'use client';

import Image from 'next/image';
import { useState } from 'react';
import BgPattern from '../BgPattern/BgPattern';
import Container from '@/components/Container/Container';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';

export default function AboutMe() {
  const [loki, setLoki] = useState(false);
  const t = useTranslations('AboutMe');

  const imageClassNames = `rounded-2xl transform transition-all duration-500`;

  return (
    <Container id={t('id')} className="relative -mb-1 -scroll-m-10">
      <article className="relative flex h-full flex-col items-center gap-5 py-10 sm:py-20 md:gap-10">
        <div className="flex items-center justify-center gap-6">
          <h1
            className={clsx(
              'font-spartan text-left text-4xl font-semibold tracking-tighter md:text-6xl xl:text-7xl',
            )}
          >
            {t('title')}
            <br />
            {t('secondTitle')}
          </h1>
          <div className="relative mr-5 h-28 w-28 shrink-0 self-end overflow-y-clip md:h-48 md:w-48">
            <Image
              src="/profilepicture.png"
              alt={`Bulut Yerli profile`}
              className={`h-full w-full ${imageClassNames}`}
              width={800}
              height={800}
            />
            <Image
              src="/lokiphoto.png"
              alt={`Profile image of Loki`}
              className={`absolute bottom-0 h-full w-full translate-x-10 translate-y-10 scale-[60%] md:translate-x-20 ${imageClassNames} ${
                !loki ? 'translate-y-full -rotate-45' : 'rotate-0'
              }`}
              width={800}
              height={800}
            />
          </div>
        </div>

        <div className="max-w-sm columns-1 gap-24 space-y-2 text-sm text-zinc-700 sm:max-w-4xl sm:columns-2 md:text-base dark:text-zinc-400">
          {t.raw('content')?.map((p: string, index: number) => {
            return (
              <p className="break-inside-avoid" key={index}>
                {p.includes('<button>')
                  ? t.rich(`content.${index}`, {
                      button: (chunks) => (
                        <button
                          className="cursor-pointer font-semibold underline transition-all duration-300 hover:scale-105 hover:text-zinc-700 dark:hover:text-zinc-300"
                          onClick={() => setLoki(!loki)}
                        >
                          {chunks}
                        </button>
                      ),
                    })
                  : p}
              </p>
            );
          })}
        </div>
        <BgPattern classname="absolute inset-0 h-full w-full -z-10 stroke-zinc-300 dark:stroke-zinc-700 [mask-image:radial-gradient(22rem_22rem_at_center,white,transparent)]" />
      </article>
    </Container>
  );
}
