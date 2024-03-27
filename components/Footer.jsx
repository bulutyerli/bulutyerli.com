import { useTranslations } from 'next-intl';
import SocialIcons from './SocialIcons';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Footer({ locale }) {
  unstable_setRequestLocale(locale);

  const year = new Date().getFullYear();
  const t = useTranslations('Footer');
  return (
    <footer className="w-full relative h-16 items-center flex bg-white mt-auto dark:bg-zinc-900">
      <section className="flex items-center justify-between mx-auto max-w-7xl w-full px-2">
        <h3 className="text-xs md:text-sm xl:text-md text-zinc-500">{`© ${year} Bulut Yerli. ${t(
          'copyright'
        )}`}</h3>
        <SocialIcons size={32} />
      </section>
    </footer>
  );
}
