import { groq } from "next-sanity";

export const homePageQuery = groq`{
  "settings": *[_type == "siteSettings"][0]{
    headline,
    intro,
    coverage,
    heroImage
  },
  "services": *[_type == "service" && isActive != false] | order(orderRank asc, title asc) {
    title,
    shortDescription
  },
  "portfolio": *[_type == "portfolioProject"] | order(featured desc, eventDate desc, _createdAt desc)[0...6] {
    title,
    slug,
    category,
    subcategory,
    location,
    coverImage,
    videoUrl
  }
}`;

export const portfolioPageQuery = groq`*[_type == "portfolioProject"] | order(eventDate desc, _createdAt desc) {
  title,
  slug,
  category,
  subcategory,
  location,
  eventDate,
  coverImage,
  gallery,
  videoUrl,
  excerpt
}`;
