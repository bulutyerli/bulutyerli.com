"use client";

import { spartan } from "@/app/fonts";
import Container from "@/components/Container";
import { useTranslations } from "next-intl";

export default function Error({ error, reset }) {
  const t = useTranslations("Error");

  return (
    <Container className="mt-auto gap-10 flex flex-col text-center">
      <h1
        className={`${spartan.className} text-xl md:text-2xl lg:text-3xl text-red-600`}
      >
        {t("error")}
      </h1>
      <h2 className={`${spartan.className} text-3xl md:text-4xl lg:text-5xl`}>
        {t("title")}
      </h2>
      <button
        className="bg-zinc-500 max-w-30 self-center px-4 py-2 rounded-xl hover:bg-zinc-400 text-zinc-100"
        onClick={reset}
      >
        {t("retry")}
      </button>
    </Container>
  );
}
