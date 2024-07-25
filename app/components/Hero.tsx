'use client';

import { useEffect, useRef, useState } from 'react';
import IconSlider from './IconSlider';
import icons from '../lib/Icons';
import { Icons } from '../types/types';

export default function Hero({
  title,
  secondTitle,
}: {
  title: string;
  secondTitle: string;
}) {
  const [positions, setPositions] = useState<
    Array<{ x: number; y: number; icon: Icons }>
  >([]);
  const [fadeIn, setFadeIn] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const generatePositions = () => {
    let iconSize: number;
    let positions = [];

    if (heroRef.current) {
      iconSize =
        heroRef.current.clientWidth < 1000
          ? 48
          : heroRef.current.clientWidth < 600
            ? 32
            : 72;

      for (let i = 0; i < 14; i++) {
        let isUnique = false;
        let x: number = 0;
        let y: number = 0;

        while (!isUnique) {
          x = Math.round(
            Math.random() *
              (heroRef.current.clientWidth < 1000
                ? heroRef.current.clientWidth * 1.5
                : heroRef.current.clientWidth - iconSize)
          );
          y = Math.round(
            Math.random() * (heroRef.current.clientHeight - iconSize)
          );

          isUnique = positions.every((pos) => {
            if (pos.x && pos.y) {
              return (
                Math.abs(pos.x - x) > iconSize ||
                (Math.abs(pos.x - x) < iconSize &&
                  Math.abs(pos.y - y) > iconSize)
              );
            }
          });
        }

        positions.push({ x, y, icon: icons[i] });
      }
    }

    return positions;
  };

  useEffect(() => {
    const positions = generatePositions();
    setPositions(positions);
    setFadeIn(true);
  }, []);

  return (
    <section className="relative">
      <div className="flex flex-col items-center justify-center gap-6 bg-gradient-to-t from-zinc-100 to-white dark:from-black dark:to-zinc-900 min-h-96 md:h-[600px] xl:h-[700px] 2xl:h-[800px]">
        <h1 className="text-2xl md:text-4xl xl:text-6xl text-zinc-700 dark:text-zinc-200">
          {title}
        </h1>
        <h2 className="text-xl md:text-2xl xl:text-4xl text-zinc-600 dark:text-zinc-300">
          {secondTitle}
        </h2>
      </div>
      <svg
        id="visual"
        viewBox="0 0 900 50"
        width="900"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full absolute bottom-0 h-auto fill-white dark:fill-zinc-900 bg-inherit"
        version="1.1"
      >
        <path d="M0 25L50 20.8C100 16.7 200 8.3 300 9.7C400 11 500 22 600 23C700 24 800 15 850 10.5L900 6L900 51L850 51C800 51 700 51 600 51C500 51 400 51 300 51C200 51 100 51 50 51L0 51Z"></path>
      </svg>
      <div
        className={`text-inherit h-5/6 min-w-full overflow-hidden absolute top-0 flex`}
        ref={heroRef}
      >
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
