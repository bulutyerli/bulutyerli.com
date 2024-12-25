import ContactSection from 'components/ContactSection/ContactSection';
import Skills from 'components/Skills/Skills';
import AboutMe from 'components/AboutMe/AboutMe';
import Projects from 'components/Projects/Projects';
import { setRequestLocale } from 'next-intl/server';
import { Locale } from 'i18n/routing';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="min-h-screen">
        <AboutMe />
        <Skills />
      </div>
      <Projects />
      <ContactSection />
    </main>
  );
}
