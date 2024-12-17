import Image from 'next/image';
import Link from 'next/link';
import { formattedLinks } from './ProjectCard.helpers';
import { spartan } from 'fonts';
import clsx from 'clsx';

interface ProjectCardType {
  title: string;
  summary: string;
  liveLink: string;
  slug: string;
  imageLink: string;
  className?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  summary,
  liveLink,
  slug,
  imageLink,
  featured,
  className,
}: ProjectCardType) {
  return (
    <div
      className={clsx(
        'flex flex-col',
        featured ? 'w-full text-center' : 'lg:flex-grow',
        className
      )}
    >
      <div
        className={clsx(
          'relative overflow-hidden rounded-lg shadow-md drop-shadow-md',
          featured ? 'aspect-[2/1] md:aspect-[3/1]' : 'aspect-[4/2]'
        )}
      >
        <Link href={formattedLinks(slug)}>
          <Image
            className="object-cover hover:scale-110 transition-transform duration-500"
            src={formattedLinks(imageLink)}
            alt={`${title} screenshot`}
            fill
          />
        </Link>
      </div>

      <div
        className={clsx(
          ' flex flex-col gap-3 max-w-96',
          featured ? 'self-center' : 'self-start '
        )}
      >
        <h2
          className={`${spartan.className} text-3xl lg:text-4xl mt-6 tracking-tighter font-semibold text-zinc-800 dark:text-zinc-200`}
        >
          {title}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">{summary}</p>
        <div className="flex justify-between w-full">
          <Link href={formattedLinks(slug)}>Case Study</Link>
          <Link href={liveLink} target="_blank">
            Live Link
          </Link>
        </div>
      </div>
    </div>
  );
}
