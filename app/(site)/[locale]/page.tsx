import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';
import { sanityFetch } from '../../lib/sanity.client';
import { projectQuery } from '../../lib/sanity.query';
import Hero from '../../components/Hero';
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';
import ProjectCard from '../../components/ProjectCard';
import { ProjectType } from '../../types/types';

export default async function Home({
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

  const t = await getTranslations('Hero');

  return (
    <main>
      <Hero title={t('title')} secondTitle={t('secondTitle')} />
      <Container>
        <SectionTitle title={'projects.'} />
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
    </main>
  );
}
