import AboutMe from '@/components/AboutMe';
import Container from '@/components/Container';
import { sanityFetch } from '@/lib/sanity.client';
import { aboutMeQuery } from '@/lib/sanity.query';
import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bulut Yerli',
  description:
    'About Bulut Yerli, a Full Stack Web Developer React, Nextjs, Nodejs, Postgresql, MongoDB, Tailwind, CSS, HTML',
};

export default async function AboutMePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const data: AboutMeData = await sanityFetch({
    query: aboutMeQuery,
    tags: ['about'],
    qParams: { lang: locale },
  });

  return (
    <Container className="mt-auto">
      <AboutMe data={data} />
    </Container>
  );
}
