import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';
import { sanityFetch } from 'lib/sanity.client';
import { projectQuery } from 'lib/sanity.query';
import Hero from 'components/Hero/Hero';
import Container from 'components/Container/Container';
import { ProjectType } from 'types/types';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import ProjectCard from 'components/ProjectCard/ProjectCard';

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
    <>
      <Hero title={t('title')} secondTitle={t('secondTitle')} />
      <Container>
        <SectionTitle title={'projects.'} />
        <ul
          aria-label="Projects"
          className="flex flex-col gap-0 lg:gap-20 mt-20"
        >
          {projects.map((data) => {
            return (
              <li key={data.title}>
                <ProjectCard data={data} lang={locale} />
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
}
