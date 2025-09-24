import FilteredCards from '@/components/Mdx/FilteredCards/FilteredCards';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { Locale } from '@/i18n/routing';
import fs from 'fs';
import { getTranslations } from 'next-intl/server';
import path from 'path';

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
      <Post />
      <section className="mt-20">
        <SectionTitle className="not-prose">{t('other')}</SectionTitle>
        <FilteredCards slug={slug} />
      </section>
    </>
  );
}

export function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src/content');
  const slugs = fs.readdirSync(contentDir);

  const params = slugs.map((slug) => ({ slug }));

  return params;
}

export const dynamicParams = false;
