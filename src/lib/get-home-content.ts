import {
  fallbackHomeContent,
  type HomeContent,
  type PortfolioItem,
  type ServiceItem
} from "@/lib/content";
import { isSanityConfigured, sanityClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { homePageQuery } from "@/sanity/lib/queries";

type SanityHomeResponse = {
  settings?: {
    headline?: string;
    intro?: string;
    coverage?: string;
    heroImage?: unknown;
  };
  services?: Array<{
    title?: string;
    shortDescription?: string;
  }>;
  portfolio?: Array<{
    title?: string;
    slug?: { current?: string };
    category?: string;
    subcategory?: string;
    location?: string;
    coverImage?: unknown;
    videoUrl?: string;
  }>;
};

function mapServices(items?: SanityHomeResponse["services"]): ServiceItem[] {
  const mapped =
    items
      ?.filter((item) => item.title)
      .map((item) => ({
        title: item.title as string,
        shortDescription: item.shortDescription
      })) || [];

  return mapped.length > 0 ? mapped : fallbackHomeContent.services;
}

function mapPortfolio(items?: SanityHomeResponse["portfolio"]): PortfolioItem[] {
  const mapped =
    items
      ?.filter((item) => item.title && item.category)
      .map((item, index) => {
        const fallbackImage =
          fallbackHomeContent.portfolio[index % fallbackHomeContent.portfolio.length].image;
        const image = item.coverImage
          ? urlFor(item.coverImage)?.width(1200).height(900).fit("crop").url() || fallbackImage
          : fallbackImage;

        return {
          title: item.title as string,
          slug: item.slug?.current || `project-${index + 1}`,
          category: item.category as string,
          categorySlug:
            fallbackHomeContent.portfolio.find((entry) => entry.category === item.category)?.categorySlug || "other",
          subcategory: item.subcategory || (item.category as string),
          image,
          location: item.location,
          videoUrl: item.videoUrl
        };
      }) || [];

  return mapped.length > 0 ? mapped : fallbackHomeContent.portfolio;
}

export async function getHomeContent(): Promise<HomeContent> {
  if (!isSanityConfigured) {
    return fallbackHomeContent;
  }

  try {
    const data = await sanityClient.fetch<SanityHomeResponse>(
      homePageQuery,
      {},
      { next: { revalidate: 60 } }
    );

    const heroImage = data.settings?.heroImage
      ? urlFor(data.settings.heroImage)?.width(1800).height(1200).fit("crop").url()
      : undefined;

    return {
      headline: data.settings?.headline || fallbackHomeContent.headline,
      intro: data.settings?.intro || fallbackHomeContent.intro,
      coverage: data.settings?.coverage || fallbackHomeContent.coverage,
      heroImage: heroImage || fallbackHomeContent.heroImage,
      services: mapServices(data.services),
      portfolio: mapPortfolio(data.portfolio),
      stats: fallbackHomeContent.stats
    };
  } catch {
    return fallbackHomeContent;
  }
}
