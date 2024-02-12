"use client";

import { useEffect, useRef, useState } from "react";
import IconSlider from "./IconSlider";
import icons from "../lib/Icons";

export default function Hero() {
  const [positions, setPositions] = useState([]);
  const [fadeIn, setFadeIn] = useState(false);

  const heroRef = useRef(null);

  const generatePositions = () => {
    const iconSize = 72;
    const positions = [];

    for (let i = 0; i < 14; i++) {
      let isUnique = false;
      let x, y;

      while (!isUnique) {
        x = Math.round(
          Math.random() * (heroRef.current.clientWidth - iconSize)
        );
        y = Math.round(
          Math.random() * (heroRef.current.clientHeight - iconSize)
        );

        isUnique = positions.every(
          (pos) =>
            Math.abs(pos.x - x) > iconSize ||
            (Math.abs(pos.x - x) < iconSize && Math.abs(pos.y - y) > iconSize)
        );
      }

      positions.push({ x, y, icon: icons[i] });
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
      <div className="flex flex-col items-center justify-center gap-6 bg-gradient-to-t from-zinc-100 to-white min-h-96 md:h-[600px] xl:h-[700px] 2xl:h-[800px]">
        <h1 className="text-2xl md:text-4xl xl:text-6xl text-zinc-700">
          Hi, I am Bulut Yerli
        </h1>
        <h2 className="text-xl md:text-2xl xl:text-4xl text-zinc-600">
          a Full-Stack Developer
        </h2>
      </div>
      <svg
        id="visual"
        viewBox="0 0 900 50"
        width="900"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full absolute bottom-0 h-auto"
        version="1.1"
      >
        <path
          d="M0 25L50 20.8C100 16.7 200 8.3 300 9.7C400 11 500 22 600 23C700 24 800 15 850 10.5L900 6L900 51L850 51C800 51 700 51 600 51C500 51 400 51 300 51C200 51 100 51 50 51L0 51Z"
          fill="#fff"
        ></path>
      </svg>
      <div
        className={`${
          fadeIn ? "opacity-10" : "opacity-0"
        } transition-all duration-[5s] text-inherit h-5/6 min-w-full overflow-hidden absolute top-0 flex`}
        ref={heroRef}
      >
        <ul className="relative min-w-full h-full animate-infinite-slider-100">
          {positions.map((element) => {
            return (
              <IconSlider
                key={element.icon.name}
                icon={element.icon.icon}
                height={element.y}
                width={element.x}
              />
            );
          })}
        </ul>
        <ul className="relative min-w-full h-full animate-infinite-slider-100">
          {positions.map((element) => {
            return (
              <IconSlider
                key={element.icon.name}
                icon={element.icon.icon}
                height={element.y}
                width={element.x}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
