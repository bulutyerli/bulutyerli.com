"use client";

import Container from "@/components/Container";
import { useTranslations } from "next-intl";

export default function Error({ error, reset }) {
  const t = useTranslations("Error");

  return (
    <Container className="mt-auto">
      <h1>{t("title")}</h1>
      <button onClick={reset}>{t("retry")}</button>
    </Container>
  );
}
