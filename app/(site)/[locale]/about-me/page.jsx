import AboutMe from "@/components/AboutMe";
import Container from "@/components/Container";
import { sanityFetch } from "@/lib/sanity.client";
import { aboutMeQuery } from "@/lib/sanity.query";

export default async function AboutMePage({ params: { locale } }) {
  const data = await sanityFetch({
    query: aboutMeQuery,
    tags: ["about"],
    qParams: { lang: locale },
  });
  console.log(data);
  return (
    <Container className="mt-auto">
      <AboutMe data={data} />
    </Container>
  );
}
