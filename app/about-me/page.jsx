"use client";

import Container from "@/components/Container";
import Image from "next/image";
import profilePicture from "@/public/profilepicture.jpeg";
import lokiImage from "@/public/loki.png";
import { spartan } from "../fonts";
import AboutMeBg from "@/components/AboutMeBg";
import { useState } from "react";

export default function AboutMePage() {
  const [loki, setLoki] = useState(false);
  return (
    <Container className="mt-auto">
      <article className="relative flex justify-around items-center w-full flex-col gap-4 mb-5 md:grid grid-rows-12 grid-cols-2 justify-items-center ">
        <h1
          className={`${spartan.className} mt-2 lg:mt-0 text-5xl md:text-6xl xl:text-7xl tracking-tighter font-semibold text-center col-span-1 row-start-1 row-end-4`}
        >
          me.
        </h1>
        <div className="relative col-start-2 col-end-3 row-start-1 row-end-12">
          <Image
            src={profilePicture}
            className={`rounded-2xl h-60 lg:h-96 w-auto  drop-shadow-lg shadow-md transform transition-all duration-500 ${
              loki ? "opacity-0 scale-75" : "opacity-100 scale-100"
            }`}
            alt="Bulut Yerli Profile Image"
          />
          <Image
            src={lokiImage}
            className={`absolute top-0 rounded-2xl h-60 lg:h-96 w-auto drop-shadow-lg shadow-md transform transition-all duration-500 ${
              loki ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            alt="Loki Profile Image"
          />
        </div>

        <div className="flex flex-col gap-4 max-w-xs lg:max-w-lg text-md text-zinc-700 row-start-4 row-end-12 col-span-1 mx-4">
          <p>
            Kurumsal havacılık firmalarında 12 yıl boyunca lojistik bölümünde
            çalıştım. Güzel giden bir iş hayatım olmasına rağmen çocukluğumdan
            beri var olan yazılım hayalimi gerçekleştirmek için bir üniversitede
            bilgisayar programcılığı bölümünü bitirdim ve kariyerimi tamamen
            değiştirdim. Şimdi ise full-stack yazılım uzmanı olarak çalışıyor ve
            her gün kendimi geliştiriyorum.
          </p>
          <p>
            Yazılım hem işim hem de en büyük hobim olsa da lego ve figür
            koleksiyonu yapmayı da seviyorum. Stres yönetimi konusunda ise en
            büyük yardımcım kedimiz{" "}
            <button
              className="underline font-semibold"
              onClick={() => setLoki(!loki)}
            >
              Loki
            </button>
            .
          </p>
        </div>
        <AboutMeBg className="absolute inset-x-0 xl:-top-42 -z-10 h-[32rem] lg:h-[64rem] w-full stroke-zinc-200 [mask-image:radial-gradient(22rem_22rem_at_center,white,transparent)] lg:[mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" />
      </article>
    </Container>
  );
}
