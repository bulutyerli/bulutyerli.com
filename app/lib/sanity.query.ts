import { groq } from 'next-sanity';

export const projectQuery = groq`*[_type == "projects"] | order(_createdAt asc) {
  _createdAt,
  "title": coalesce(title[$lang]),
  "description": coalesce(description[$lang]),
  image,
  skills,
  githubLink,
  liveSiteLink,
  'blur': image.asset->metadata.lqip
}`;

export const aboutMeQuery = groq`*[_type == "about"][0] {
  _createdAt,
  "title": coalesce(title[$lang]),
  "content": coalesce(content[$lang]),
  image,
  loki,
  'blur': image.asset->metadata.lqip,
  'lokiBlur': loki.asset->metadata.lqip
}`;

export const blogListQuery = groq`*[_type == "blogPost"] | order(_createdAt desc) {
  _createdAt,
  "title": coalesce(title[$lang]),
  "slug": slug.current,
  image,
  'blur': image.asset->metadata.lqip
}`;

export const blogDetailQuery = groq`*[_type == "blogPost" && slug.current == $slug][0] {
  _createdAt,
  "title": coalesce(title[$lang]),
  "content": coalesce(content[$lang]),
  image,
  'blur': image.asset->metadata.lqip
}`;
