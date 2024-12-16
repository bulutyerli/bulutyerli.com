import Image from 'next/image';
import Link from 'next/link';
import { formattedLinks } from './ProjectCard.helpers';
import { spartan } from 'fonts';

export default function ProjectCard({
  title,
  summary,
  liveLink,
  slug,
  imageLink,
}) {
  return (
    <div className="flex flex-col gap-3 max-w-80">
      <Link href={formattedLinks(slug)}>
        <div className="w-full h-auto shadow-md drop-shadow-md rounded-lg overflow-hidden">
          <Image
            className="rounded-lg hover:scale-110 transition-transform duration-500"
            src={formattedLinks(imageLink)}
            width={800}
            height={800}
            alt={`${title} screenshot`}
          ></Image>
        </div>
      </Link>

      <h2
        className={`${spartan.className} text-3xl tracking-tighter font-semibold text-zinc-800 dark:text-zinc-200`}
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
  );
}
