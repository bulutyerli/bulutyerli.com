'use client';

import Image from 'next/image';
import Link from 'next/link';
import { formatLink } from './ProjectCard.helpers';
import { spartan } from 'fonts';
import clsx from 'clsx';
import { HoverEffect } from './HoverEffect';
import { useMotionValue } from 'framer-motion';

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
  const formattedSlug = slug ? formatLink(slug) : '';
  const linkHref = freelance ? liveLink : formattedSlug;

  return (
    <div
      className={clsx(
        'flex flex-col relative group',
        featured
          ? 'w-full md:text-center md:mb-20'
          : 'max-w-full md:max-w-[45%]',
        className
      )}
      onMouseMove={onMouseMove}
      key={title}
    >
      <div
        className={clsx(
          'relative overflow-hidden rounded-lg shadow-md drop-shadow-md z-10'
        )}
      >
        <Link href={linkHref}>
          <Image
            className={clsx(
              'hover:scale-110 transition-transform duration-500 object-cover',
              featured ? 'aspect-4/2 lg:aspect-4/1' : 'aspect-2/1'
            )}
            src={formattedImage}
            alt={`${title} screenshot`}
            width={featured ? 2800 : 1400}
            height={700}
          />
        </Link>
      </div>
      <div className="relative">
        <div
          className={clsx(
            'flex flex-col gap-3 max-w-96',
            featured ? 'md:self-center justify-self-center' : 'self-start '
          )}
        >
          <h2
            className={clsx(
              spartan.className,
              ' mt-6 text-zinc-800 dark:text-zinc-200',
              freelance
                ? 'text-2xl'
                : 'text-3xl lg:text-4xl font-semibold tracking-tighter'
            )}
          >
            {title}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">{summary}</p>
          <div className="flex justify-between w-full">
            {!freelance && <Link href={linkHref}>Case Study</Link>}
            <Link href={liveLink} target="_blank">
              Live Link
            </Link>
          </div>
        </div>
      </div>
      {!freelance && <HoverEffect mouseX={mouseX} mouseY={mouseY} />}
    </div>
  );
}
