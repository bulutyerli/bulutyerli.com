import FilteredCards from '@/components/Mdx/FilteredCards/FilteredCards';
import MotionWrapper from '@/components/Mdx/MotionWrapper/MotionWrapper';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { Locale } from '@/i18n/routing';
import fs from 'fs';
import { getTranslations } from 'next-intl/server';
import path from 'path';

const overrideComponents = {
  h1: ({ children }) => (
    <MotionWrapper tag="h1" delay={0.2} duration={0.3}>
      {children}
    </MotionWrapper>
  ),
  h2: ({ children }) => (
    <MotionWrapper tag="h2" delay={0.2} duration={0.3}>
      {children}
    </MotionWrapper>
  ),
  ul: ({ children }) => (
    <MotionWrapper tag="ul" delay={0.3} duration={0.3}>
      {children}
    </MotionWrapper>
  ),
  p: ({ children }) => (
    <MotionWrapper tag="p" delay={0.3} duration={0.3}>
      {children}
    </MotionWrapper>
  ),
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; locale: Locale }>;
}) {
  const slug = (await params).slug;
  const locale = (await params).locale;
  const { default: Post } = await import(`@/content/${slug}/${locale}.mdx`);
  const t = await getTranslations('ProjectDetails');

  return (
    <>
      <Post components={overrideComponents} />
      <section className="mt-20">
        <SectionTitle className="not-prose">{t('other')}</SectionTitle>
        <FilteredCards slug={slug} />
      </section>
    </>
  );
}

export function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src/content');
  const slugs = fs.readdirSync(contentDir); // Reads all folders/files in the content dir

  // Generate params for each slug
  const params = slugs.map((slug) => ({ slug }));

  return params;
}

export const dynamicParams = false;
