export type ServiceItem = {
  title: string;
  shortDescription?: string;
};

export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  location?: string;
  videoUrl?: string;
};

export type HomeContent = {
  headline: string;
  intro: string;
  coverage: string;
  heroImage: string;
  services: ServiceItem[];
  portfolio: PortfolioItem[];
  stats: Array<{
    value: string;
    label: string;
  }>;
};

export const fallbackServices: ServiceItem[] = [
  { title: "Weddings" },
  { title: "Corporate" },
  { title: "Engagements" },
  { title: "ROM" },
  { title: "Pre-wedding" },
  { title: "Birthdays" },
  { title: "Live feed" },
  { title: "Live streaming" }
];

export const fallbackPortfolio: PortfolioItem[] = [
  {
    title: "Wedding Films",
    category: "Wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Corporate Stories",
    category: "Corporate",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Engagement Moments",
    category: "Engagement",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Live Event Coverage",
    category: "Live Streaming",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
  }
];

export const stats = [
  { value: "18K+", label: "Instagram followers" },
  { value: "MY + SG", label: "Coverage areas" },
  { value: "8", label: "Core services" }
];

export const fallbackHomeContent: HomeContent = {
  headline: "Cinematic photo and video for moments that move.",
  intro:
    "Visual-first storytelling for weddings, corporate events, ROM, engagements, birthdays, live feed and live streaming.",
  coverage: "Malaysia & Singapore",
  heroImage:
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=90",
  services: fallbackServices,
  portfolio: fallbackPortfolio,
  stats
};
