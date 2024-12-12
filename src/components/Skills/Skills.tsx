'use client';

import { useEffect, useRef, useState } from 'react';
import { Icons } from 'types/types';
import { generatePositions } from './Skills.helpers';
import IconSlider from 'components/IconSlider/IconSlider';
import skills from './Skills.constants';
import clsx from 'clsx';

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

    const newPositions = generatePositions({ skills, iconSize, height, width });
    setPositions(newPositions);
    setFadeIn(true);
  }, []);

  return (
    <section className="relative min-h-[400px] xl:h-[500px] 2xl:h-[600px] bg-gradient-to-b from-zinc-100 via-zinc-100 to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pt-4">
      <div
        className={`text-inherit h-full min-w-full overflow-hidden absolute inset-0 flex `}
        ref={heroRef}
      >
        <ul
          aria-hidden
          className={clsx(
            'relative min-w-[150%] md:min-w-full h-full animate-infinite-slider-100  transition-all duration-[3s]',
            fadeIn ? 'opacity-100 dark:opacity-70' : 'opacity-0'
          )}
        >
          {positions.map((element) => {
            const Icon = element.icon.icon;
            return (
              <IconSlider
                key={element.icon.name}
                height={element.y.toString()}
                width={element.x.toString()}
              >
                <div className="flex flex-col items-center justify-center cursor-pointer grayscale hover:grayscale-0 transition-all duration-500 hover:scale-150 opacity-75 dark:opacity-75 hover:opacity-100 dark:hover:opacity-100">
                  <span>
                    <Icon className="w-12 h-12" />
                  </span>
                  <p className="text-xs md:text-base text-center text-zinc-800 dark:text-zinc-100">
                    {element.icon.name}
                  </p>
                </div>
              </IconSlider>
            );
          })}
        </ul>
        <ul
          className={clsx(
            'relative min-w-[150%] md:min-w-full h-full animate-infinite-slider-100 transition-all duration-[3s]    will-change-transform, opacity',
            fadeIn ? 'opacity-100 dark:opacity-70' : 'opacity-0'
          )}
        >
          {positions.map((element) => {
            const Icon = element.icon.icon;
            return (
              <IconSlider
                key={element.icon.name}
                height={element.y.toString()}
                width={element.x.toString()}
              >
                <div className="flex flex-col items-center justify-center cursor-pointer grayscale hover:grayscale-0 transition-all duration-500 hover:scale-150 opacity-75 dark:opacity-75 hover:opacity-100 dark:hover:opacity-100">
                  <span>
                    <Icon className="w-12 h-12" />
                  </span>
                  <p className="text-xs md:text-base text-center text-zinc-800 dark:text-zinc-100">
                    {element.icon.name}
                  </p>
                </div>
              </IconSlider>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
