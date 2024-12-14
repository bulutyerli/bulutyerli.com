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
    <section className="bg-gradient-to-b from-zinc-100 via-zinc-150 to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 relative my-10 lg:my-36">
      <svg
        id="visual"
        viewBox="0 0 900 50"
        className="w-full h-auto fill-zinc-100 bg-white dark:fill-zinc-950 dark:bg-zinc-900 absolute top-0 -translate-y-full z-0"
        version="1.1"
      >
        <path d="M0 25L50 20.8C100 16.7 200 8.3 300 9.7C400 11 500 22 600 23C700 24 800 15 850 10.5L900 6L900 51L850 51C800 51 700 51 600 51C500 51 400 51 300 51C200 51 100 51 50 51L0 51Z"></path>
      </svg>
      <div
        className={clsx(
          'relative min-h-[200px] xl:h-[250px] 2xl:h-[300px] max-w-7xl mx-auto z-10'
        )}
      >
        <div
          className={`text-inherit h-full min-w-full overflow-x-clip absolute inset-0 flex`}
          ref={heroRef}
        >
          <ul
            aria-hidden
            className={clsx(
              'relative min-w-[150%] md:min-w-full h-full animate-infinite-slider-100 transition-all duration-[3s]',
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
                  <div
                    className={clsx(
                      'flex flex-col items-center justify-center cursor-pointer grayscale transition-all duration-[2s] opacity-75 dark:opacity-75',
                      isAnimated === element.icon.id &&
                        'scale-125 opacity-100 grayscale-0'
                    )}
                  >
                    <span>
                      <Icon className="w-10 h-10 md:w-13 md:h-13" />
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
              'relative min-w-[150%] md:min-w-full h-full animate-infinite-slider-100 transition-all duration-[3s] will-change-transform, opacity z-50',
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
                  <div
                    className={clsx(
                      'flex flex-col items-center justify-center cursor-pointer grayscale transition-all duration-[2s] opacity-75 dark:opacity-75',
                      isAnimated === element.icon.id &&
                        'scale-125 opacity-100 grayscale-0 relative'
                    )}
                  >
                    <span>
                      <Icon className="w-10 h-10 md:w-13 md:h-13" />
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
      </div>
      <svg
        id="visual"
        viewBox="0 0 900 50"
        className="w-full h-auto fill-white dark:fill-zinc-900 bg-zinc-100 dark:bg-zinc-950 pt-2 absolute bottom-0 translate-y-full z-0"
        version="1.1"
      >
        <path d="M0 25L50 20.8C100 16.7 200 8.3 300 9.7C400 11 500 22 600 23C700 24 800 15 850 10.5L900 6L900 51L850 51C800 51 700 51 600 51C500 51 400 51 300 51C200 51 100 51 50 51L0 51Z"></path>
      </svg>
    </section>
  );
}
