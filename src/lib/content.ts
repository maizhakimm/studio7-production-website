export type ServiceItem = {
  title: string;
  shortDescription?: string;
  detail?: string;
};

export type PortfolioItem = {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  image: string;
  gallery?: string[];
  location?: string;
  videoUrl?: string;
  description?: string;
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

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Inquiry", href: "/inquiry" },
  { label: "Contact", href: "/contact" }
];

export const fallbackServices: ServiceItem[] = [
  {
    title: "Weddings",
    shortDescription: "Cinematic wedding photo and video coverage.",
    detail: "Full-day storytelling for ceremonies, reception, details and candid moments."
  },
  {
    title: "Corporate",
    shortDescription: "Professional coverage for brands and teams.",
    detail: "Event highlights, internal launches, company milestones and visual content for campaigns."
  },
  {
    title: "Engagements",
    shortDescription: "Warm, expressive moments before the big day.",
    detail: "Photo and video coverage shaped around the couple, setting and family flow."
  },
  {
    title: "ROM",
    shortDescription: "Register of marriage coverage with a clean story.",
    detail: "Compact coverage for official ceremonies, portraits and intimate celebrations."
  },
  {
    title: "Pre-wedding",
    shortDescription: "Styled shoots for couples and campaign-style visuals.",
    detail: "Direction, scene planning and visual treatment for modern pre-wedding stories."
  },
  {
    title: "Birthdays",
    shortDescription: "Lively event coverage for family and private events.",
    detail: "Photo, short reels and video highlights for birthdays and social celebrations."
  },
  {
    title: "Live feed",
    shortDescription: "On-site screen feed for events and venues.",
    detail: "Multi-camera live feed setup for halls, stages, ceremonies and corporate programs."
  },
  {
    title: "Live streaming",
    shortDescription: "Remote audience coverage for important moments.",
    detail: "Streaming support for weddings, corporate events and private celebrations."
  }
];

export const fallbackPortfolio: PortfolioItem[] = [
  {
    title: "Wedding Films",
    slug: "wedding-films-malaysia",
    category: "Wedding",
    categorySlug: "weddings",
    location: "Malaysia",
    description: "Emotional ceremony coverage with cinematic highlight treatment.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Corporate Stories",
    slug: "corporate-event-stories",
    category: "Corporate",
    categorySlug: "corporate",
    location: "Malaysia",
    description: "Brand and corporate event visuals for teams, launches and milestones.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Engagement Moments",
    slug: "engagement-moments-singapore",
    category: "Engagement",
    categorySlug: "engagements",
    location: "Singapore",
    description: "Soft, personal portraits and event coverage for engagement sessions.",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Live Event Coverage",
    slug: "live-feed-event-coverage",
    category: "Live Feed",
    categorySlug: "live-feed",
    location: "Malaysia",
    description: "Live feed and streaming support for stages, halls and hybrid audiences.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "ROM Ceremony",
    slug: "rom-ceremony-singapore",
    category: "ROM",
    categorySlug: "rom",
    location: "Singapore",
    description: "Clean, intimate coverage for register of marriage ceremonies.",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Birthday Highlights",
    slug: "birthday-event-highlights",
    category: "Birthday",
    categorySlug: "birthdays",
    location: "Malaysia",
    description: "Colourful family event coverage made for sharing and remembering.",
    image:
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Pre-wedding Portraits",
    slug: "pre-wedding-portraits",
    category: "Pre-wedding",
    categorySlug: "pre-wedding",
    location: "Malaysia",
    description: "Directed portraits and cinematic couple stories created before the wedding day.",
    image:
      "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Hybrid Event Streaming",
    slug: "hybrid-event-live-streaming",
    category: "Live Streaming",
    categorySlug: "live-streaming",
    location: "Malaysia",
    description: "Multi-camera streaming for remote guests, corporate audiences and private celebrations.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
  }
];

export const portfolioCategories = [
  { title: "Weddings", slug: "weddings", description: "Wedding photography and cinematic films." },
  { title: "Corporate", slug: "corporate", description: "Events, launches and brand stories." },
  { title: "Engagements", slug: "engagements", description: "Engagement celebrations and portraits." },
  { title: "ROM", slug: "rom", description: "Register of marriage ceremonies." },
  { title: "Pre-wedding", slug: "pre-wedding", description: "Directed couple portraits and films." },
  { title: "Birthdays", slug: "birthdays", description: "Family celebrations and event highlights." },
  { title: "Live Feed", slug: "live-feed", description: "On-site multi-camera screen coverage." },
  { title: "Live Streaming", slug: "live-streaming", description: "Remote and hybrid event coverage." }
];

export const stats = [
  { value: "18K+", label: "Instagram followers" },
  { value: "MY + SG", label: "Coverage areas" },
  { value: "8", label: "Core services" }
];

export const fallbackHomeContent: HomeContent = {
  headline: "Stories worth watching twice.",
  intro:
    "Photo and video coverage for weddings, corporate events and everything in between.",
  coverage: "Malaysia & Singapore",
  heroImage:
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=90",
  services: fallbackServices,
  portfolio: fallbackPortfolio,
  stats
};

export const galleryImages = [
  {
    title: "Ceremony Details",
    category: "Wedding",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Stage Coverage",
    category: "Live",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Couple Portraits",
    category: "Pre-wedding",
    image:
      "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Corporate Moments",
    category: "Corporate",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Event Energy",
    category: "Birthday",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Reception Story",
    category: "Wedding",
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1000&q=80"
  }
];
