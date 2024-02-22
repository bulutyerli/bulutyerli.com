"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onLanguageChange(lang) {
    startTransition(() => {
      router.replace({ pathname, params }, { locale: lang });
    });
  }

  return (
    <div className="flex gap-1 pr-2">
      <button
        className={`${
          locale === "en"
            ? "text-zinc-700 font-semibold dark:text-zinc-300"
            : "text-zinc-500 dark:text-zinc-400"
        }`}
        onClick={() => {
          onLanguageChange("en");
        }}
      >
        EN
      </button>
      <div className="border border-l-0 border-zinc-400"></div>
      <button
        className={`${
          locale === "tr"
            ? "text-zinc-700 font-semibold dark:text-zinc-300"
            : "text-zinc-500 dark:text-zinc-400"
        }`}
        onClick={() => {
          onLanguageChange("tr");
        }}
      >
        TR
      </button>
    </div>
  );
}
