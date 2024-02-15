import Hero from "@/components/Hero";
import Container from "@/components/Container";
import { sanityFetch } from "@/lib/sanity.client";
import { featuredProjectQuery } from "@/lib/sanity.query";

import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import Testimonials from "@/components/Testimonials";

export default async function Home() {
  const project = await sanityFetch({
    query: featuredProjectQuery,
    tags: ["projects"],
  });

  return (
    <main>
      <Hero />
      <Container>
        <SectionTitle title={"featured project."} />
        <ProjectCard data={project} />
        <SectionTitle title={"testimonials."} />
        <Testimonials />
      </Container>
    </main>
  );
}
