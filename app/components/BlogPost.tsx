import Image from 'next/image';
import { BlogType } from '../types/types';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../lib/imageBuilder';

export default function BlogPost({
  post,
  locale,
}: {
  post: BlogType;
  locale: string;
}) {
  const components = {
    types: {
      code: (props) => (
        <pre className="prose prose-sm prose-zinc dark:prose-invert">
          <code>{props.value.code}</code>
        </pre>
      ),
    },
  };

  const date = new Date(post._createdAt);
  const publishDate = date.toLocaleDateString(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="mx-auto mt-10 prose prose-zinc prose-lg dark:prose-invert p-4">
      <h1>{post.title}</h1>
      <span>{publishDate}</span>
      <Image
        className="w-auto h-full rounded-lg"
        src={urlFor(post.image).width(600).url()}
        width={600}
        height={600}
        alt={post.title}
      />
      <PortableText value={post.content} components={components} />
    </article>
  );
}
