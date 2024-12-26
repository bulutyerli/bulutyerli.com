/* import fs from 'fs';
import { Locale } from '@/i18n/routing';
import path from 'path';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; locale: Locale }>;
}) {
  const slug = (await params).slug;
  const locale = (await params).locale;
  console.log(slug, locale);
  const { default: Post } = await import(`@/content/${slug}/${locale}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  const contentDir = path.join(process.cwd(), '@/content');
  const slugs = fs.readdirSync(contentDir); // Reads all folders/files in the content dir

  // Generate params for each slug
  const params = slugs.map((slug) => ({ slug }));

  return params;
}

export const dynamicParams = false;
 */
