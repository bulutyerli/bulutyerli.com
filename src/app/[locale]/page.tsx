import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';
import Hero from 'components/Hero/Hero';
import ContactSection from 'components/ContactSection/ContactSection';
import Skills from 'components/Skills/Skills';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations('Hero');

  return (
    <>
      <Hero />
      <Skills />
      <ContactSection />
    </>
  );
}
