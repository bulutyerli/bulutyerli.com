import Container from "@/components/Container";
import { sanityFetch } from "@/lib/sanity.client";
import { projectQuery } from "@/lib/sanity.query";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { getTranslations } from "next-intl/server";

export default async function ProjectsPage({ params: { locale } }) {
  const projects = await sanityFetch({
    query: projectQuery,
    tags: ["projects"],
    qParams: { lang: locale },
  });

  const t = await getTranslations("ProjectPage");

  return (
    <Container>
      <SectionTitle title={t("title")} />
      <ul className="flex flex-col gap-0 lg:gap-20 mt-20">
        {projects.map((data) => {
          return (
            <li key={data.title}>
              <ProjectCard data={data} lang={locale} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
