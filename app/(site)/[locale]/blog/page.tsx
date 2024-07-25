import { unstable_setRequestLocale } from 'next-intl/server';
import { sanityFetch } from '../../../lib/sanity.client';
import { blogListQuery } from '../../../lib/sanity.query';
import { BlogType } from '../../../types/types';
import Image from 'next/image';
import { urlFor } from '../../../lib/imageBuilder';
import SectionTitle from '../../../components/SectionTitle';
import Container from '../../../components/Container';
import Link from 'next/link';

export default async function BlogPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const posts: BlogType[] = await sanityFetch({
    query: blogListQuery,
    tags: ['blogPost'],
    params: { lang: locale },
  });

  return (
    <div>
      {posts.map((post) => {
        const date = new Date(post._createdAt);
        const formattedDate = date.toLocaleDateString(locale, {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        });

        return (
          <Container key={post.title}>
            <Link
              href={`/${locale}//blog/${post.slug}`}
              className="cursor-pointer group"
            >
              <SectionTitle title={'blog.'} />
              <div className="flex gap-4 p-4 border border-zinc-300 dark:border-zinc-600 rounded-lg">
                <div className="relative overflow-hidden">
                  <Image
                    className="h-[150px] w-auto transition-transform duration-300 ease-in-out transform group-hover:scale-[103%]"
                    src={urlFor(post.image).width(300).url()}
                    width={300}
                    height={300}
                    alt={post.title}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-zinc-700 dark:text-zinc-400">
                    {formattedDate}
                  </span>
                  <h2 className="max-w-96 transition-all group-hover:text-zinc-200">
                    {post.title}
                  </h2>
                </div>
              </div>
            </Link>
          </Container>
        );
      })}
    </div>
  );
}
