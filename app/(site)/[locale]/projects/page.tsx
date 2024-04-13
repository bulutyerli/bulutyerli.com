import Container from '@/app/components/Container';
import { sanityFetch } from '@/app/lib/sanity.client';
import { projectQuery } from '@/app/lib/sanity.query';
import ProjectCard from '@/app/components/ProjectCard';
import SectionTitle from '@/app/components/SectionTitle';
import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bulut Yerli',
  description:
    'Full-Stack Web Developer Projects Page, Created with React, Nextjs, JavaScript, Tailwind, CSS, HMTL',
};

export default async function ProjectsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const projects: ProjectType[] = await sanityFetch({
    query: projectQuery,
    tags: ['projects'],
    qParams: { lang: locale },
  });

  const t = await getTranslations('ProjectPage');

  return (
    <Container>
      <SectionTitle title={t('title')} />
      <ul className="flex flex-col gap-0 lg:gap-20 mt-20">
        {projects.map((data) => {
          return (
            <li key={data.title}>
              <ProjectCard data={data} lang={locale} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
