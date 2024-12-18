import Image from 'next/image';
import Link from 'next/link';
import { formattedLinks } from './ProjectCard.helpers';
import { spartan } from 'fonts';
import clsx from 'clsx';
import BgPattern from 'components/BgPattern/BgPattern';
import ProjectCardBg from './ProjectCardBg';

interface ProjectCardType {
  title: string;
  summary: string;
  liveLink: string;
  slug: string;
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
  return (
    <div
      className={clsx(
        'flex flex-col relative',
        featured
          ? 'w-full md:text-center md:mb-20'
          : 'max-w-full md:max-w-[45%]',
        className
      )}
    >
      <div
        className={clsx(
          'relative overflow-hidden rounded-lg shadow-md drop-shadow-md'
        )}
      >
        <Link href={formattedLinks(slug)}>
          <Image
            className={clsx(
              'hover:scale-110 transition-transform duration-500 object-cover',
              featured ? 'aspect-[4/2] lg:aspect-[4/1]' : 'aspect-[2/1]'
            )}
            src={formattedLinks(imageLink)}
            alt={`${title} screenshot`}
            width={featured ? 2800 : 1400}
            height={700}
          />
        </Link>
      </div>

      <div
        className={clsx(
          ' flex flex-col gap-3 max-w-96  bg-radial-[at_25%_25%] from-white to-zinc-800 to-100%',
          featured ? 'md:self-center' : 'self-start '
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
        <div className="h-full w-full absolute bottom-0 bg-conic/[in_hsl_longer_hue] from-red-600 to-red-600 size-24 rounded-full"></div>
      </div>
    </div>
  );
}
