import ContactSection from 'components/ContactSection/ContactSection';
import Skills from 'components/Skills/Skills';
import AboutMe from 'components/AboutMe/AboutMe';
import Projects from 'components/Projects/Projects';

export default async function Home() {
  return (
    <main className="flex flex-col gap-20">
      <AboutMe />
      <Skills />
      <Projects />
      <ContactSection />
    </main>
  );
}
