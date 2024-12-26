'use client';

import { useEffect, useRef, useState } from 'react';
import { Icons } from '@/types/types';
import { generatePositions } from './Skills.helpers';
import IconSlider from '@/components/IconSlider/IconSlider';
import skills from './Skills.constants';
import clsx from 'clsx';

export default function Skills() {
  const [positions, setPositions] = useState<
    Array<{ x: number; y: number; icon: Icons }>
  >([]);
  const [fadeIn, setFadeIn] = useState(false);
  const [isAnimated, setIsAnimated] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const height = heroRef.current.clientHeight;
    const width = heroRef.current.clientWidth;
    const newIconSize = (width < 800 ? 10 : 12) * 4; // *4 because of rem to px change
    const newPositions = generatePositions({
      skills,
      iconSize: newIconSize,
      height,
      width,
    });
    setPositions(newPositions);
    setFadeIn(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimated((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="via-zinc-150 relative my-10 bg-linear-to-b from-zinc-100 to-zinc-100 lg:my-36 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <svg
        id="visual"
        viewBox="0 0 900 50"
        className="absolute top-0 z-0 h-auto w-full -translate-y-full bg-white fill-zinc-100 dark:bg-zinc-900 dark:fill-zinc-950"
        version="1.1"
      >
        <path d="M0 25L50 20.8C100 16.7 200 8.3 300 9.7C400 11 500 22 600 23C700 24 800 15 850 10.5L900 6L900 51L850 51C800 51 700 51 600 51C500 51 400 51 300 51C200 51 100 51 50 51L0 51Z"></path>
      </svg>
      <div
        className={clsx(
          'relative z-10 mx-auto min-h-[200px] max-w-7xl xl:h-[250px] 2xl:h-[300px]',
        )}
      >
        <div
          className={`absolute inset-0 flex h-full min-w-full overflow-x-clip text-inherit`}
          ref={heroRef}
        >
          <ul
            aria-hidden
            className={clsx(
              'animate-infinite-slider-100 relative h-full min-w-[150%] transition-all duration-[3s] md:min-w-full',
              fadeIn ? 'opacity-100 dark:opacity-70' : 'opacity-0',
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
                  <div
                    className={clsx(
                      'flex cursor-pointer flex-col items-center justify-center opacity-75 grayscale transition-all duration-[2s] dark:opacity-75',
                      isAnimated === element.icon.id &&
                        'scale-125 opacity-100 grayscale-0',
                    )}
                  >
                    <span>
                      <Icon className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" />
                    </span>
                    <p className="text-center text-xs text-zinc-800 md:text-base dark:text-zinc-100">
                      {element.icon.name}
                    </p>
                  </div>
                </IconSlider>
              );
            })}
          </ul>
          <ul
            className={clsx(
              'animate-infinite-slider-100 will-change-transform, opacity relative z-50 h-full min-w-[150%] transition-all duration-[3s] md:min-w-full',
              fadeIn ? 'opacity-100 dark:opacity-70' : 'opacity-0',
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
                  <div
                    className={clsx(
                      'flex cursor-pointer flex-col items-center justify-center opacity-75 grayscale transition-all duration-[2s] dark:opacity-75',
                      isAnimated === element.icon.id &&
                        'relative scale-125 opacity-100 grayscale-0',
                    )}
                  >
                    <span>
                      <Icon className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" />
                    </span>
                    <p className="text-center text-xs text-zinc-800 md:text-base dark:text-zinc-100">
                      {element.icon.name}
                    </p>
                  </div>
                </IconSlider>
              );
            })}
          </ul>
        </div>
      </div>
      <svg
        id="visual"
        viewBox="0 0 900 50"
        className="absolute bottom-0 z-0 h-auto w-full translate-y-full bg-zinc-100 fill-white pt-2 dark:bg-zinc-950 dark:fill-zinc-900"
        version="1.1"
      >
        <path d="M0 25L50 20.8C100 16.7 200 8.3 300 9.7C400 11 500 22 600 23C700 24 800 15 850 10.5L900 6L900 51L850 51C800 51 700 51 600 51C500 51 400 51 300 51C200 51 100 51 50 51L0 51Z"></path>
      </svg>
    </section>
  );
}
