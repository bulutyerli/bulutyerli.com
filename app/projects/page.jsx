import Container from "@/components/Container";
import { sanityFetch } from "@/lib/sanity.client";
import { projectQuery } from "@/lib/sanity.query";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

export default async function ProjectsPage() {
  const projects = await sanityFetch({
    query: projectQuery,
    tags: ["projects"],
  });

  return (
    <section>
      <Container>
        <SectionTitle title={"projects."} />
        {projects.map((data) => {
          return <ProjectCard data={data} />;
        })}
      </Container>
    </section>
  );
}
