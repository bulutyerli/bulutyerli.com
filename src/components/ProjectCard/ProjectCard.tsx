'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { formatLink } from './ProjectCard.helpers';
import { Link as I18Link } from '@/i18n/routing';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  FaGithub,
  FaExternalLinkSquareAlt,
  FaRegFileAlt,
} from 'react-icons/fa';

interface ProjectCardType {
  title: string;
  summary: string;
  liveLink: string;
  slug?: string;
  imageLink: string;
  className?: string;
  featured?: boolean;
  freelance?: boolean;
  gitHubLink?: string;
}

export default function ProjectCard({
  title,
  summary,
  liveLink,
  slug,
  imageLink,
  featured,
  className,
  freelance = false,
  gitHubLink,
}: ProjectCardType) {
  const t = useTranslations('Projects');

  const formattedImage = formatLink(imageLink);

  return (
    <motion.div
      key={title}
      initial={{ y: 50, opacity: 0, scale: freelance ? 0.9 : 1 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: 'spring',
        bounce: 0.25,
      }}
      className={clsx(
        'relative flex flex-col pb-6',
        featured
          ? 'w-full md:mb-20 md:text-center'
          : 'max-w-full md:max-w-[45%]',
        className,
      )}
    >
      {!freelance ? (
        <I18Link
          href={{
            pathname: '/case-study/[slug]',
            params: { slug: slug },
          }}
        >
          <Image
            className={clsx(
              'rounded-lg object-cover shadow-md drop-shadow-md transition-transform duration-500 hover:scale-105',
              featured ? 'aspect-4/2 lg:aspect-4/1' : 'aspect-2/1',
            )}
            src={formattedImage}
            alt={`${title} screenshot`}
            width={featured ? 2800 : 1400}
            height={700}
          />
        </I18Link>
      ) : (
        <Link href={liveLink} rel="noopener noreferrer" target="_blank">
          <Image
            className={clsx(
              'relative z-10 overflow-hidden rounded-lg object-cover shadow-md drop-shadow-md transition-transform duration-500 hover:scale-105',
              featured ? 'aspect-4/2 lg:aspect-4/1' : 'aspect-2/1',
            )}
            src={formattedImage}
            alt={`${title} screenshot`}
            width={1400}
            height={700}
          />
        </Link>
      )}
      <div
        className={clsx(
          'flex max-w-96 flex-col gap-3',
          featured ? 'justify-self-center md:self-center' : 'self-start',
        )}
      >
        <div>
          <h2
            className={clsx(
              'font-spartan mt-6 text-zinc-800 dark:text-zinc-200',
              freelance
                ? 'text-2xl'
                : 'text-3xl font-semibold tracking-tighter lg:text-4xl',
            )}
          >
            {title}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">{summary}</p>
          <div className="mt-6 flex w-full justify-between">
            {!freelance && (
              <I18Link
                className="group flex items-center gap-2 hover:underline"
                href={{
                  pathname: '/case-study/[slug]',
                  params: { slug: slug },
                }}
              >
                <FaRegFileAlt className="transition-transform duration-500 group-hover:scale-125" />
                {t('case-study')}
              </I18Link>
            )}
            {!freelance && (
              <Link
                className="group flex items-center gap-2 hover:underline"
                href={gitHubLink}
                target="_blank"
              >
                <FaGithub className="transition-transform duration-500 group-hover:scale-125" />
                GitHub
              </Link>
            )}
            <Link
              className="group flex items-center gap-2 hover:underline"
              href={liveLink}
              target="_blank"
            >
              <FaExternalLinkSquareAlt className="transition-transform duration-500 group-hover:scale-125" />
              {t('visit')}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
