import { fallbackPortfolio, type PortfolioItem } from "@/lib/content";
import { isSanityConfigured, sanityClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { portfolioPageQuery } from "@/sanity/lib/queries";

type SanityProject = {
  title?: string;
  slug?: { current?: string };
  category?: string;
  location?: string;
  coverImage?: Parameters<typeof urlFor>[0];
  gallery?: Parameters<typeof urlFor>[0][];
  videoUrl?: string;
  excerpt?: string;
};

function categorySlug(category: string) {
  const slugs: Record<string, string> = {
    Wedding: "weddings",
    Corporate: "corporate",
    Engagement: "engagements",
    ROM: "rom",
    "Pre-wedding": "pre-wedding",
    Birthday: "birthdays",
    "Live Feed": "live-feed",
    "Live Streaming": "live-streaming"
  };
  return slugs[category] || "other";
}

function mapProject(item: SanityProject, index: number): PortfolioItem | null {
  if (!item.title || !item.category || !item.slug?.current) return null;
  const fallback = fallbackPortfolio[index % fallbackPortfolio.length];
  const image = item.coverImage
    ? urlFor(item.coverImage)?.width(1600).height(1200).fit("crop").url() || fallback.image
    : fallback.image;
  const gallery = item.gallery
    ?.map((entry) => urlFor(entry)?.width(1400).height(1050).fit("crop").url())
    .filter((entry): entry is string => Boolean(entry));

  return {
    title: item.title,
    slug: item.slug.current,
    category: item.category,
    categorySlug: categorySlug(item.category),
    image,
    gallery,
    location: item.location,
    videoUrl: item.videoUrl,
    description: item.excerpt
  };
}

export async function getPortfolioContent(): Promise<PortfolioItem[]> {
  if (!isSanityConfigured) return fallbackPortfolio;
  try {
    const data = await sanityClient.fetch<SanityProject[]>(portfolioPageQuery);
    const projects = data.map(mapProject).filter((item): item is PortfolioItem => Boolean(item));
    return projects.length ? projects : fallbackPortfolio;
  } catch {
    return fallbackPortfolio;
  }
}

export async function getPortfolioProject(slug: string) {
  const projects = await getPortfolioContent();
  return projects.find((project) => project.slug === slug);
}
