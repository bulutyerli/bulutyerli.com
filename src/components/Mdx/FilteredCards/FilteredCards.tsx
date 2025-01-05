import ProjectCard from '@/components/ProjectCard/ProjectCard';
import projectsData from '@/data/projects.json';
import { useTranslations } from 'next-intl';

export default function FilteredCards({ slug }: { slug: string }) {
  const t = useTranslations('Projects');

  const selfProjects = Object.keys(projectsData)
    .map((key) => ({
      ...projectsData[key],
      title: t(`self.${key}.title`),
      summary: t(`self.${key}.summary`),
    }))
    .filter((project) => project.slug !== slug);

  return (
    <div className="not-prose flex h-full flex-wrap justify-around gap-20 md:gap-5 xl:justify-between">
      {selfProjects.map((project) => {
        const id = project.title;
        return (
          <ProjectCard
            key={id}
            featured={false}
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
  );
}
