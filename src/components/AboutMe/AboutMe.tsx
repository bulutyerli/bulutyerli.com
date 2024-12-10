'use client';

import Image from 'next/image';
import { useState } from 'react';

import BgPattern from '../BgPattern/BgPattern';
import { spartan } from 'fonts';

export default function AboutMe() {
  const [loki, setLoki] = useState(false);

  const imageClassNames = `rounded-2xl h-60 lg:h-96 w-auto drop-shadow-lg shadow-md transform transition-all duration-500`;

  return (
    <article className="relative flex justify-around items-center w-full flex-col gap-4 mb-5 md:grid grid-rows-12 grid-cols-2 justify-items-center">
      <h1
        className={`${spartan.className} mt-2 lg:mt-0 text-5xl md:text-6xl xl:text-7xl tracking-tighter font-semibold text-center col-span-1 row-start-1 row-end-4`}
      >
        Me.
      </h1>

      <div className="relative col-start-2 col-end-3 row-start-1 row-end-12">
        <Image
          src=""
          alt={`Bulut Yerli profile`}
          className={`${imageClassNames} ${
            loki ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
          }`}
          width={800}
          height={800}
        />
        <Image
          src=""
          alt={`Profile image of Loki`}
          className={`${imageClassNames} absolute top-0 ${
            loki ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          width={800}
          height={800}
        />
      </div>

      <div className="max-w-xs lg:max-w-lg space-y-2 indent-4 text-zinc-700 dark:text-zinc-400 row-start-4 row-end-12 col-span-1 mx-4 lg:prose-lg">
        <p>
          For 12 years, I worked in the logistics department of corporate
          aviation firms, where I developed strong problem-solving skills and
          the ability to work effectively under time constraints.
        </p>
        <p>
          However, due to my long-standing interest in software development, I
          pursued a degree in computer programming and decided to change my
          career path.
        </p>
        <p>
          Currently, I am a full-stack developer, continuously working on
          improving my skills. Outside of work, I enjoy collecting LEGO sets and
          action figures. For stress management, my greatest companion is our
          cat;{' '}
          <button
            className="underline font-semibold inline-block"
            onClick={() => setLoki(!loki)}
          >
            Loki
          </button>
        </p>
      </div>

      <BgPattern classname="absolute inset-x-0 xl:-top-42 -z-10 h-[32rem] lg:h-[62rem] w-full stroke-zinc-200 dark:stroke-zinc-700 [mask-image:radial-gradient(22rem_22rem_at_center,white,transparent)] lg:[mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" />
    </article>
  );
}
