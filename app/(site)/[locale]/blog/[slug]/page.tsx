import { notFound } from 'next/navigation';
import { client, sanityFetch } from '../../../../lib/sanity.client';
import { blogDetailQuery, blogListQuery } from '../../../../lib/sanity.query';
import { BlogType } from '../../../../types/types';
import { unstable_setRequestLocale } from 'next-intl/server';
import BlogPost from '../../../../components/BlogPost';
import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const post: BlogType = await sanityFetch({
    query: blogDetailQuery,
    qParams: { slug, lang: locale },
    tags: ['blogPost'],
  });

  return {
    title: post.title,
  };
}

export async function generateStaticParams({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const posts: { slug: { current: string } }[] = await client.fetch(
    blogListQuery,
    { lang: locale },
    { perspective: 'published' }
  );

  return posts.map((post) => ({
    slug: post?.slug?.current,
  }));
}

export default async function Page({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  unstable_setRequestLocale(locale);

  const post: BlogType = await sanityFetch({
    query: blogDetailQuery,
    qParams: { slug, lang: locale },
    tags: ['blogPost'],
  });

  if (!post) {
    return notFound();
  }

  return <BlogPost post={post} locale={locale} />;
}
