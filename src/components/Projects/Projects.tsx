import Container from '@/components/Container/Container';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { useTranslations } from 'next-intl';
import projectsData from '@/data/projects.json';
import freelanceProjectsData from '@/data/freelanceProjects.json';

export default function Projects() {
  const t = useTranslations('Projects');

  const selfProjects = Object.keys(projectsData).map((key) => ({
    ...projectsData[key],
    title: t(`self.${key}.title`),
    summary: t(`self.${key}.summary`),
  }));

  const freelanceProjects = Object.keys(freelanceProjectsData).map((key) => ({
    ...freelanceProjectsData[key],
    title: t(`freelance.${key}.title`),
    summary: t(`freelance.${key}.summary`),
  }));

  return (
    <Container id={t('id')} className="max-w-7xl scroll-mt-20 md:scroll-mt-28">
      <SectionTitle>{t('title')}</SectionTitle>
      <div className="flex flex-wrap justify-around gap-20 md:gap-5 xl:justify-between">
        {selfProjects.map((project, index) => {
          const id = project.title;
          return (
            <ProjectCard
              key={id}
              featured={index === 0}
              title={project.title}
              summary={project.summary}
              slug={project.slug}
              imageLink={project.imageLink}
              liveLink={project.liveLink}
              gitHubLink={project.github}
            />
          );
        })}
      </div>
      <div className="mt-44">
        <SectionTitle>{t('freelance-title')}</SectionTitle>
        <div className="flex flex-wrap items-start justify-center gap-20 md:flex-nowrap md:gap-5 xl:justify-between">
          {freelanceProjects.map((project) => {
            const id = project.title;

            return (
              <ProjectCard
                key={id}
                title={project.title}
                summary={project.summary}
                slug={project.slug}
                imageLink={project.imageLink}
                liveLink={project.liveLink}
                freelance={true}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
