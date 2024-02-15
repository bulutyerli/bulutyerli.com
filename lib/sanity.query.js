import { groq } from "next-sanity";

export const projectQuery = groq`*[_type == "projects"] | order(_createdAt asc) {
  _createdAt,
  title,
  description,
  image,
  skills,
  githubLink,
  liveSiteLink,
}`;

export const featuredProjectQuery = groq`*[_type == "projects" && featured][0] {
  _createdAt,
  title,
  description,
  image,
  skills,
  githubLink,
  liveSiteLink,
}`;
