import Container from 'components/Container/Container';
import ProjectCard from 'components/ProjectCard/ProjectCard';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { useMessages, useTranslations } from 'next-intl';

export default function Projects() {
  const t = useTranslations('projects');
  const messages = useMessages();
  const keys = Object.keys(messages.projects);

  return (
    <section>
      <Container>
        <SectionTitle>projects.</SectionTitle>
        <div className="flex flex-wrap items-start justify-center gap-20 mt-10">
          {keys.map((project) => {
            return (
              <ProjectCard
                title={t(`${project}.title`)}
                summary={t(`${project}.summary`)}
                slug={t(`${project}.slug`)}
                imageLink={t(`${project}.imageLink`)}
                liveLink={t(`${project}.liveLink`)}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
