import Hero from '@/app/components/Hero';
import Container from '@/app/components/Container';
import { sanityFetch } from '@/app/lib/sanity.client';
import { featuredProjectQuery } from '@/app/lib/sanity.query';
import ProjectCard from '@/app/components/ProjectCard';
import SectionTitle from '@/app/components/SectionTitle';
import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';

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
