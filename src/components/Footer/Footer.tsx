import { useTranslations } from 'next-intl';
import SocialIcons from '../SocialIcons/SocialIcons';

export default function Footer() {
  const year = new Date().getFullYear();
  const t = useTranslations('Footer');
  return (
    <footer className="w-full relative h-16 items-center flex bg-white dark:bg-zinc-900">
      <section className="flex items-center justify-between mx-auto max-w-7xl w-full px-2">
        <p className="text-xs md:text-sm xl:text-md text-zinc-600 dark:text-zinc-400">{`© ${year} Bulut Yerli. ${t(
          'copyright'
        )}`}</p>
        <SocialIcons size={32} />
      </section>
    </footer>
  );
}
