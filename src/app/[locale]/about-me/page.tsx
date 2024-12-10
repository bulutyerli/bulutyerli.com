import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Container from 'components/Container/Container';
import AboutMe from 'components/AboutMe/AboutMe';

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

  return (
    <Container className="mt-auto">
      <AboutMe />
    </Container>
  );
}
