import { BiLogoGmail, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';
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
      <ul className={clsx('flex gap-2 text-zinc-500 ', className)}>
        <li className="hover:text-zinc-600">
          <Link
            href="https://github.com/bulutyerli"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BiLogoGithub size={size} />
          </Link>
        </li>
        <li className="hover:text-zinc-600">
          <Link
            href="https://www.linkedin.com/in/bulutyerli/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BiLogoLinkedin size={size} />
          </Link>
        </li>
        <li className="hover:text-zinc-600">
          <Link
            href="mailTo:bulutyerli@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BiLogoGmail size={size} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
