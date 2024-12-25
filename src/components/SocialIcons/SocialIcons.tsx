'use client';

import { SOCIAL_ICONS } from './SocialIcons.constants';
import Link from 'next/link';
import clsx from 'clsx';
import { motion } from 'motion/react';

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
          <motion.li
            key={href}
            whileHover={{
              x: [-3, 3, -3, 3, 0],
              transition: { duration: 0.4, ease: 'easeInOut' },
            }}
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
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
