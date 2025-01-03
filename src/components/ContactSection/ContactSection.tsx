'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Container from '@/components/Container/Container';
import BgPattern from '@/components/BgPattern/BgPattern';
import SocialIcons from '@/components/SocialIcons/SocialIcons';
import ContactForm from '@/components/ContactForm/ContactForm';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { motion } from 'motion/react';

export default function ContactSection() {
  const t = useTranslations('Contact');

  return (
    <Container
      id={t('id')}
      className="flex min-h-[calc(100vh-var(--footer-height))] scroll-mt-20 flex-col justify-center text-center md:gap-20"
    >
      <SectionTitle className="w-full">contact.</SectionTitle>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: 'spring',
          bounce: 0.25,
        }}
        className="flex flex-col gap-20"
      >
        <div className="mb-7">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{
              duration: 1,
            }}
            className="mb-3 text-2xl text-zinc-700 lg:text-3xl dark:text-zinc-300"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="text-md text-zinc-600 lg:text-lg dark:text-zinc-400"
          >
            {t('content')}
          </motion.p>
        </div>
        <div className="relative flex flex-col-reverse items-center justify-around gap-10 lg:flex-row">
          <Image
            className="hidden max-h-72 w-auto lg:block"
            src="/macbook2.webp"
            alt="laptop illustration"
            width={300}
            height={300}
          />

          <SocialIcons
            className={
              'z-20 hidden text-zinc-500 lg:flex lg:flex-col lg:gap-16'
            }
            size={50}
          />
          <ContactForm />
          <BgPattern classname="absolute inset-0 h-full w-full -z-10 stroke-zinc-300 dark:stroke-zinc-700 [mask-image:radial-gradient(22rem_12rem_at_center,white,transparent)]" />
        </div>
      </motion.div>
    </Container>
  );
}
