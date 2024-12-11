'use client';

import { useEffect, useRef, useState } from 'react';
import icons from 'data/Icons';
import { Icons } from 'types/types';
import { generatePositions } from './Skills.helpers';
import IconSlider from 'components/IconSlider/IconSlider';
import SectionTitle from 'components/SectionTitle/SectionTitle';

export default function Skills() {
  const [positions, setPositions] = useState<
    Array<{ x: number; y: number; icon: Icons }>
  >([]);
  const [fadeIn, setFadeIn] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const height = heroRef.current.clientHeight;
    const width = heroRef.current.clientWidth;

    const iconSize = width < 1000 ? 48 : width < 600 ? 32 : 72;

    const newPositions = generatePositions({ icons, iconSize, height, width });
    setPositions(newPositions);
    setFadeIn(true);
  }, []);

  return (
    <section className="relative min-h-96 md:h-[300px] xl:h-[400px] 2xl:h-[500px] bg-gradient-to-t from-zinc-100 to-white dark:from-black dark:to-zinc-900">
      <SectionTitle>my skills.</SectionTitle>

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
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
