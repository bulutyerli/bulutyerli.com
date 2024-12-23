import Image from 'next/image';

import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import pick from 'lodash/pick';
import Container from 'components/Container/Container';
import BgPattern from 'components/BgPattern/BgPattern';
import SocialIcons from 'components/SocialIcons/SocialIcons';
import ContactForm from 'components/ContactForm/ContactForm';
import SectionTitle from 'components/SectionTitle/SectionTitle';

export default function ContactSection() {
  const t = useTranslations('Contact');
  const messages = useMessages();

  return (
    <Container
      id="contact"
      className="text-center min-h-[calc(100vh-var(--footer-height)-var(--header-height)-var(--scroll-margin))] flex flex-col justify-center gap-20"
    >
      <SectionTitle className="w-full">contact.</SectionTitle>
      <div className="flex flex-col gap-20">
        <div className="mb-7">
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
            src="/macbook2.webp"
            alt="laptop illustration"
            width={300}
            height={300}
          />

          <SocialIcons
            className={
              'lg:flex lg:flex-col lg:gap-16 text-zinc-500 hidden z-20'
            }
            size={50}
          />
          <NextIntlClientProvider messages={pick(messages, 'Contact')}>
            <ContactForm />
          </NextIntlClientProvider>
          <BgPattern classname="absolute inset-0 h-full w-full -z-10 stroke-zinc-300 dark:stroke-zinc-700 [mask-image:radial-gradient(22rem_12rem_at_center,white,transparent)]" />
        </div>
      </div>
    </Container>
  );
}
