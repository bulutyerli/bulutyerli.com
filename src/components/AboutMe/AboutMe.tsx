'use client';

import Image from 'next/image';
import { useState } from 'react';
import BgPattern from '../BgPattern/BgPattern';
import { spartan } from 'fonts';
import Container from 'components/Container/Container';

export default function AboutMe() {
  const [loki, setLoki] = useState(false);

  const imageClassNames = `rounded-2xl transform transition-all duration-500`;

  return (
    <section className="relative">
      <Container>
        <article className="relative flex flex-col items-center gap-5 md:gap-10 sm:py-20 py-10 h-full">
          <div className="flex items-center justify-center gap-6">
            <h1
              className={`${spartan.className} text-4xl md:text-6xl xl:text-7xl tracking-tighter font-semibold text-left`}
            >
              Hi there, I&apos;m Bulut.
              <br /> a Full-Stack Developer
            </h1>

            <div className="w-28 h-28 mr-5 md:w-48 md:h-48 relative overflow-y-clip shrink-0 self-end">
              <Image
                src="/profilepicture.png"
                alt={`Bulut Yerli profile`}
                className={`h-full w-full ${imageClassNames}`}
                width={800}
                height={800}
              />
              <Image
                src="/lokiphoto.png"
                alt={`Profile image of Loki`}
                className={`w-full h-full absolute translate-x-10 md:translate-x-20 translate-y-9 bottom-0 scale-[65%] ${imageClassNames} ${
                  loki ? 'opacity-100' : 'opacity-0 '
                }`}
                width={800}
                height={800}
              />
            </div>
          </div>

          <div className="max-w-sm sm:max-w-4xl space-y-2 columns-1 sm:columns-2 gap-24 text-zinc-700 dark:text-zinc-400">
            <p className="break-inside-avoid">
              For 12 years, I worked in the logistics department of corporate
              aviation firms, where I developed strong problem-solving skills
              and the ability to work effectively under time constraints.
            </p>
            <p className="break-inside-avoid">
              However, due to my long-standing interest in software development,
              I pursued a degree in computer programming and decided to change
              my career path.
            </p>
            <p className="break-inside-avoid">
              Currently, I am a full-stack developer, continuously working on
              improving my skills.{' '}
            </p>
            <p>
              Outside of work, I enjoy collecting LEGO sets and action figures.
              For stress management, my greatest companion is our cat;{' '}
              <button
                className="underline font-semibold"
                onClick={() => setLoki(!loki)}
              >
                Loki
              </button>
            </p>
          </div>
          <BgPattern classname="absolute inset-0 h-full w-full -z-10 stroke-zinc-300 dark:stroke-zinc-700 [mask-image:radial-gradient(22rem_22rem_at_center,white,transparent)] " />
        </article>
      </Container>
      <svg
        id="visual"
        viewBox="0 0 900 50"
        width="900"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto rotate-180 fill-white bg-zinc-100 dark:fill-zinc-900 dark:bg-zinc-950 pt-2"
        version="1.1"
      >
        <path d="M0 25L50 20.8C100 16.7 200 8.3 300 9.7C400 11 500 22 600 23C700 24 800 15 850 10.5L900 6L900 51L850 51C800 51 700 51 600 51C500 51 400 51 300 51C200 51 100 51 50 51L0 51Z"></path>
      </svg>
    </section>
  );
}
