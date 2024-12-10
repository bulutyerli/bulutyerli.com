import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';
import Hero from 'components/Hero/Hero';
import Container from 'components/Container/Container';
import SectionTitle from 'components/SectionTitle/SectionTitle';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations('Hero');

  return (
    <>
      <Hero title={t('title')} secondTitle={t('secondTitle')} />
      <Container>
        <SectionTitle title={'projects.'} />
        <ul
          aria-label="Projects"
          className="flex flex-col gap-0 lg:gap-20 mt-20"
        ></ul>
      </Container>
    </>
  );
}
