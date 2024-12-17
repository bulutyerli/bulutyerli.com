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
      <Container className="max-w-7xl">
        <SectionTitle>projects.</SectionTitle>
        <div className="flex flex-wrap items-start justify-around xl:justify-between gap-20 mt-10">
          {keys.map((project, index) => {
            const id = `${project}.title`;
            return (
              <ProjectCard
                key={id}
                featured={index === 0}
                title={t(`${project}.title`)}
                summary={t(`${project}.summary`)}
                slug={t(`${project}.slug`)}
                imageLink={t(`${project}.imageLink`)}
                liveLink={t(`${project}.liveLink`)}
              />
            );
          })}
        </div>
        <div className="my-44">
          <SectionTitle>freelance projects.</SectionTitle>
          <div className="flex flex-wrap items-start gap-20 xl:gap-5 justify-center xl:justify-between mt-10">
            {keys.map((project) => {
              const id = `${project}.title`;

              return (
                <ProjectCard
                  key={id}
                  className="max-w-fit"
                  title={t(`${project}.title`)}
                  summary={t(`${project}.summary`)}
                  slug={t(`${project}.slug`)}
                  imageLink={t(`${project}.imageLink`)}
                  liveLink={t(`${project}.liveLink`)}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
