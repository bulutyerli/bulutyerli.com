'use client';

import { useEffect, useRef, useState } from 'react';
import { Icons } from 'types/types';
import { generatePositions } from './Skills.helpers';
import IconSlider from 'components/IconSlider/IconSlider';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import skills from './Skills.constants';

export default function Skills() {
  const [positions, setPositions] = useState<
    Array<{ x: number; y: number; icon: Icons }>
  >([]);
  const [fadeIn, setFadeIn] = useState(false);
  const [animated, setAnimated] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const height = heroRef.current.clientHeight;
    const width = heroRef.current.clientWidth;

    const iconSize = width < 1000 ? 48 : width < 600 ? 32 : 72;

    const newPositions = generatePositions({ skills, iconSize, height, width });
    setPositions(newPositions);
    setFadeIn(true);
  }, []);

  const hoverAnimateHandler = (id: number) => {
    setAnimated(id);
  };

  return (
    <section className="relative min-h-[300px] xl:h-[400px] 2xl:h-[500px] bg-gradient-to-b from-zinc-100 via-zinc-100 to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <SectionTitle className="dark:bg-zinc-950 bg-zinc-100">
        my skills.
      </SectionTitle>
      <div
        className={`text-inherit h-full min-w-full overflow-hidden absolute inset-0 flex `}
        ref={heroRef}
      >
        <ul
          aria-hidden
          className={`${
            fadeIn ? 'opacity-10 dark:opacity-15' : 'opacity-0'
          } relative min-w-full h-full animate-infinite-slider-100  transition-all duration-[3s]`}
        >
          {positions.map((element) => {
            return (
              <IconSlider
                key={element.icon.name}
                icon={element.icon.icon}
                height={element.y.toString()}
                width={element.x.toString()}
                animated={element.icon.id === animated}
              />
            );
          })}
        </ul>
        <ul
          className={`${
            fadeIn ? 'opacity-10 dark:opacity-15' : 'opacity-0'
          } relative min-w-full h-full animate-infinite-slider-100  transition-all duration-[3s]`}
        >
          {positions.map((element) => {
            return (
              <IconSlider
                key={element.icon.name}
                icon={element.icon.icon}
                height={element.y.toString()}
                width={element.x.toString()}
                animated={element.icon.id === animated}
              />
            );
          })}
        </ul>
      </div>
      <ol className="list-none grid grid-cols-2 text-xs sm:text-base sm:grid-cols-3 md:grid-cols-4 text-zinc-700 dark:text-zinc-400 place-self-center gap-4 md:gap-10 h-full py-6 md:py-14">
        {skills.map((skill) => (
          <li
            onMouseEnter={() => hoverAnimateHandler(skill.id)}
            onMouseLeave={() => setAnimated(null)}
            key={skill.id}
            className="pl-4 relative flex items-center gap-2 cursor-pointer"
          >
            <span className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full border-zinc-300 dark:border-zinc-600 border-2" />
            {skill.name}
          </li>
        ))}
      </ol>
    </section>
  );
}
