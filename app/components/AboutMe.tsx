'use client';

import { spartan } from '@/app/fonts';
import Image from 'next/image';
import { useState } from 'react';
import BgPattern from '@/app/components/BgPattern';
import { urlFor } from '@/app/lib/imageBuilder';
import { PortableText } from '@portabletext/react';

export default function AboutMe({ data }: { data: AboutMeData }) {
  const [loki, setLoki] = useState(false);

  return (
    <article className="relative flex justify-around items-center w-full flex-col gap-4 mb-5 md:grid grid-rows-12 grid-cols-2 justify-items-center">
      <h1
        className={`${spartan.className} mt-2 lg:mt-0 text-5xl md:text-6xl xl:text-7xl tracking-tighter font-semibold text-center col-span-1 row-start-1 row-end-4`}
      >
        {data.title}
      </h1>
      <div className="relative col-start-2 col-end-3 row-start-1 row-end-12">
        <Image
          src={urlFor(data.image).width(800).height(800).url()}
          className={`rounded-2xl h-60 lg:h-96 w-auto  drop-shadow-lg shadow-md transform transition-all duration-500 ${
            loki ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
          }`}
          alt="Bulut Yerli Profile Image"
          width={800}
          height={800}
          placeholder="blur"
          blurDataURL={data.blur}
        />
        <Image
          src={urlFor(data.loki).width(800).url()}
          className={`absolute top-0 rounded-2xl h-60 lg:h-96 w-auto drop-shadow-lg shadow-md transform transition-all duration-500 ${
            loki ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          alt="Loki Profile Image"
          width={800}
          height={800}
          placeholder="blur"
          blurDataURL={data.lokiBlur}
        />
      </div>

      <div className="max-w-xs lg:max-w-lg space-y-2 indent-4 text-zinc-700 dark:text-zinc-400 row-start-4 row-end-12 col-span-1 mx-4 lg:prose-lg">
        <PortableText value={data.content} />
        <button
          className="underline font-semibold"
          onClick={() => setLoki(!loki)}
        >
          Loki
        </button>
      </div>
      <BgPattern classname="absolute inset-x-0 xl:-top-42 -z-10 h-[32rem] lg:h-[62rem] w-full stroke-zinc-200 dark:stroke-zinc-700 [mask-image:radial-gradient(22rem_22rem_at_center,white,transparent)] lg:[mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" />
    </article>
  );
}
