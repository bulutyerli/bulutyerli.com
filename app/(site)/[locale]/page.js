import Hero from "@/components/Hero";
import Container from "@/components/Container";
import { sanityFetch } from "@/lib/sanity.client";
import { featuredProjectQuery } from "@/lib/sanity.query";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { getTranslations } from "next-intl/server";

export default async function Home({ params: { locale } }) {
  const project = await sanityFetch({
    query: featuredProjectQuery,
    tags: ["projects"],
    qParams: { lang: locale },
  });

  const t = await getTranslations("Hero");

  return (
    <main>
      <Hero title={t("title")} secondTitle={t("secondTitle")} />
      <Container>
        <SectionTitle title={"featured project."} />
        <ProjectCard data={project} lang={locale} />
      </Container>
    </main>
  );
}
