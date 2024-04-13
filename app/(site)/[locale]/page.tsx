import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';
import { sanityFetch } from '../../lib/sanity.client';
import { featuredProjectQuery } from '../../lib/sanity.query';
import Hero from '../../components/Hero';
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';
import ProjectCard from '../../components/ProjectCard';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const project: ProjectType = await sanityFetch({
    query: featuredProjectQuery,
    tags: ['projects'],
    qParams: { lang: locale },
  });

  const t = await getTranslations('Hero');

  return (
    <main>
      <Hero title={t('title')} secondTitle={t('secondTitle')} />
      <Container>
        <SectionTitle title={'featured project.'} />
        <ProjectCard data={project} lang={locale} />
      </Container>
    </main>
  );
}
