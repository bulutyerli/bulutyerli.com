'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { useMotionValue, motion } from 'motion/react';
import { formatLink } from './ProjectCard.helpers';
import { HoverEffect } from './HoverEffect';
import { Link as I18Link } from '@/i18n/routing';
import Link from 'next/link';

interface ProjectCardType {
  title: string;
  summary: string;
  liveLink: string;
  slug?: string;
  imageLink: string;
  className?: string;
  featured?: boolean;
  freelance?: boolean;
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
}: ProjectCardType) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

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
        'group relative flex flex-col pb-6',
        featured
          ? 'w-full md:mb-20 md:text-center'
          : 'max-w-full md:max-w-[45%]',
        className,
      )}
      onMouseMove={onMouseMove}
    >
      <div
        className={clsx(
          'relative z-10 overflow-hidden rounded-lg shadow-md drop-shadow-md',
        )}
      >
        <I18Link
          href={{
            pathname: '/project-detail/[slug]',
            params: { slug: slug },
          }}
        >
          <Image
            className={clsx(
              'object-cover transition-transform duration-500 hover:scale-110',
              featured ? 'aspect-4/2 lg:aspect-4/1' : 'aspect-2/1',
            )}
            src={formattedImage}
            alt={`${title} screenshot`}
            width={featured ? 2800 : 1400}
            height={700}
          />
        </I18Link>
      </div>
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
          <div className="flex w-full justify-between">
            {!freelance && (
              <I18Link
                href={{
                  pathname: '/project-detail/[slug]',
                  params: { slug: slug },
                }}
              >
                Case Study
              </I18Link>
            )}
            <Link href={liveLink} target="_blank">
              Live Link
            </Link>
          </div>
        </div>
      </div>
      {!freelance && <HoverEffect mouseX={mouseX} mouseY={mouseY} />}
    </motion.div>
  );
}
