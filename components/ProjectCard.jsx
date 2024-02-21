"use client";

import Image from "next/image";
import { urlFor } from "@/lib/imageBuilder";
import Link from "next/link";
import { BiLogoGithub } from "react-icons/bi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useState } from "react";

export default function ProjectCard({ data, lang }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <article className="flex flex-col gap-5 lg:grid lg:grid-cols-12 items-center mb-20">
      <h3 className="text-zinc-700 text-xl md:text-2xl xl:text-3xl row-start-1 row-end-2 col-start-7 text-nowrap">
        {data.title}
      </h3>

      <div className="col-start-1 col-end-7 row-start-1 row-end-4 w-full max-w-lg lg:min-w-full flex flex-col gap-4">
        <Image
          src={urlFor(data.image).width(800).url()}
          alt={`${data.title} homepage`}
          width={600}
          height={600}
          className="rounded-3xl shadow-md"
        ></Image>
      </div>
      <ul className="flex col-start-9 col-end-13 row-start-3 row-end-4 justify-center lg:justify-end gap-6 w-full lg:self-baseline text-sm lg:text-base">
        {data.githubLink && (
          <li>
            <Link
              href={data.githubLink}
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-2"
            >
              <div className="text-zinc-700 hover:text-zinc-800">
                <BiLogoGithub size={"1.5rem"} />
              </div>
              <span className="font-semibold text-zinc-500 hover:text-zinc-600 hover:underline">
                GitHub
              </span>
            </Link>
          </li>
        )}
        <li>
          <Link
            href={data.liveSiteLink}
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-2"
          >
            <div className="text-zinc-700 hover:text-zinc-800">
              <HiOutlineExternalLink size={"1.5rem"} />
            </div>
            <span className="font-semibold text-zinc-500 hover:text-zinc-600 hover:underline">
              {lang === "tr" ? "Ziyaret Et" : "Visit"}
            </span>
          </Link>
        </li>
        <li className="lg:hidden">
          <button
            onClick={() => setDetailsOpen(!detailsOpen)}
            className="flex items-center gap-2"
          >
            <div className="text-zinc-700 hover:text-zinc-800">
              {detailsOpen ? (
                <MdArrowDropUp size={"1.5rem"} />
              ) : (
                <MdArrowDropDown size={"1.5rem"} />
              )}
            </div>
            <span className="font-semibold text-zinc-500 hover:text-zinc-600 hover:underline">
              {lang === "tr" ? "Detaylar" : "Details"}
            </span>
          </button>
        </li>
      </ul>
      <p
        className={`text-zinc-700 col-start-6 col-end-13 row-start-2 row-end-3 border border-zinc-300 rounded-3xl p-6 bg-zinc-100 shadow-md text-sm md:text-base max-w-xl lg:max-w-3xl relative lg:block ${
          detailsOpen ? "block" : "hidden"
        }`}
      >
        {data.description}

        <span className="absolute -top-16 text-8xl left-16 -z-10 text-zinc-200/30 hidden lg:block">
          {data.title}
        </span>
      </p>
      <ul className="flex flex-wrap gap-2 text-xs col-start-1 col-end-7 justify-center">
        {data.skills.map((skill) => {
          return (
            <li
              key={skill}
              className="border rounded-full py-1 px-2 shadow-md bg-zinc-50 text-zinc-600"
            >
              {skill}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
