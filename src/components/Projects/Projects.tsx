import Container from 'components/Container/Container';
import ProjectCard from 'components/ProjectCard/ProjectCard';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { useTranslations } from 'next-intl';
import projectsData from 'data/projects.json';
import freelanceProjectsData from 'data/freelanceProjects.json';

export default function Projects() {
  const t = useTranslations('projects');

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
    <Container id="projects" className="max-w-7xl">
      <SectionTitle>projects.</SectionTitle>
      <div className="flex flex-wrap justify-around xl:justify-between gap-20 md:gap-5">
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
            />
          );
        })}
      </div>
      <div className="my-44">
        <SectionTitle>freelance projects.</SectionTitle>
        <div className="flex flex-wrap md:flex-nowrap items-start gap-20 md:gap-5 justify-center xl:justify-between">
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
