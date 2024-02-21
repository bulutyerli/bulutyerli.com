import { groq } from "next-sanity";

export const projectQuery = groq`*[_type == "projects"] | order(_createdAt asc) {
  _createdAt,
  "title": coalesce(title[$lang]),
  "description": coalesce(description[$lang]),
  image,
  skills,
  githubLink,
  liveSiteLink,
}`;

export const featuredProjectQuery = groq`*[_type == "projects" && featured][0] {
  _createdAt,
  "title": coalesce(title[$lang]),
  "description": coalesce(description[$lang]),
  image,
  skills,
  githubLink,
  liveSiteLink,
}`;

export const aboutMeQuery = groq`*[_type == "about"][0] {
  _createdAt,
  "title": coalesce(title[$lang]),
  "content": coalesce(content[$lang]),
  image,
  loki,
}`;
