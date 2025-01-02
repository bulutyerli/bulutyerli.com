'use client';

import Link from 'next/link';
import {
  FaGithub,
  FaExternalLinkSquareAlt,
  FaLaptopCode,
} from 'react-icons/fa';
import { useTranslations } from 'use-intl';

export default function ProjectDetails({
  stackList,
  gitHub,
  liveSite,
}: {
  stackList: string[];
  gitHub: string;
  liveSite: string;
}) {
  const t = useTranslations('ProjectDetails');

  return (
    <section className="prose flex flex-wrap items-start justify-between gap-6 text-sm text-nowrap dark:text-current">
      <div className="max-w-72">
        <div className="mb-4 flex items-center gap-2">
          <FaLaptopCode className="text-xl" />
          <h4 className="not-prose font-bold">{t('stack')}</h4>
        </div>
        <ul className="not-prose flex max-w-prose flex-wrap gap-5">
          {stackList.map((stack) => {
            return (
              <li
                className="border-r-zinc-200 not-last:border-r-2 not-last:pr-5 dark:border-r-zinc-700"
                key={stack}
              >
                {stack}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex max-w-prose gap-6 text-sm">
        <div className="group flex items-center gap-2">
          <FaGithub className="cursor-pointer text-xl transition-transform duration-500 will-change-transform group-hover:scale-125" />
          <Link
            className="not-prose font-bold group-hover:underline"
            href={gitHub}
            rel="noopener noreferrer"
            target="_blank"
          >
            GITHUB
          </Link>
        </div>
        <div className="group flex items-center gap-2">
          <FaExternalLinkSquareAlt className="cursor-pointer text-xl transition-transform duration-500 will-change-transform group-hover:scale-125" />
          <Link
            className="not-prose font-bold group-hover:underline"
            href={liveSite}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('liveSite')}
          </Link>
        </div>
      </div>
    </section>
  );
}
