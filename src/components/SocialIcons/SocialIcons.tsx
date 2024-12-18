import { SOCIAL_ICONS } from './SocialIcons.constants';
import Link from 'next/link';
import clsx from 'clsx';

export default function SocialIcons({
  size,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div>
      <ul className={clsx('flex gap-2 text-zinc-400', className)}>
        {SOCIAL_ICONS.map(({ label, href, icon: Icon }) => (
          <li
            key={href}
            className="hover:text-zinc-600 transition-colors duration-500"
          >
            <Link
              aria-label={label}
              href={href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon size={size} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
