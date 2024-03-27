import Container from '@/components/Container';
import Image from 'next/image';
import macbook from '@/public/macbook2.webp';
import BgPattern from '@/components/BgPattern';
import ContactForm from '@/components/ContactForm';
import SocialIcons from '@/components/SocialIcons';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import pick from 'lodash/pick';

export const metadata = {
  title: 'Bulut Yerli',
  description:
    'Contact With Me To Build React, Nextjs, Portfolio, Business, Blog, E-Commerce, Full Stack Websites.',
};

export default function ContactPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Contact');
  const messages = useMessages();

  return (
    <Container className="mt-auto flex flex-col text-center">
      <div className="flex-col gap-3 flex mb-10 lg:mb-20 mt-10 lg:mt-0">
        <h1 className="text-2xl lg:text-3xl text-zinc-700 dark:text-zinc-300">
          {t('title')}
        </h1>
        <p className="text-md lg:text-lg text-zinc-600 dark:text-zinc-400">
          {t('content')}
        </p>
      </div>
      <div className="relative flex flex-col-reverse gap-10 lg:flex-row justify-around items-center">
        <Image
          className="hidden lg:block"
          src={macbook}
          alt="laptop illustration"
        />
        <BgPattern className="absolute inset-x-0 xl:-top-42 -z-10 h-[32rem] lg:h-[64rem] w-full stroke-zinc-200 dark:stroke-zinc-700 [mask-image:radial-gradient(22rem_22rem_at_center,white,transparent)] lg:[mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" />
        <SocialIcons
          className={'lg:flex lg:flex-col lg:gap-16 text-zinc-500 hidden '}
          size={50}
        />
        <NextIntlClientProvider messages={pick(messages, 'Contact')}>
          <ContactForm />
        </NextIntlClientProvider>
      </div>
    </Container>
  );
}
