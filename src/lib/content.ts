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
  subcategory: string;
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
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
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
    title: "Registration of Marriage",
    shortDescription: "Civil registration coverage with a clean, intimate story.",
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

const weddingImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=80"
];
const corporateImages = [
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
];
const engagementImages = ["https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80", ...weddingImages];
const preWeddingImages = ["https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=1200&q=80", ...weddingImages];
const birthdayImages = ["https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80"];
const liveImages = ["https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"];

function makePortfolio(
  category: string,
  categorySlug: string,
  location: string,
  images: string[],
  projects: Array<[title: string, subcategory: string]>
): PortfolioItem[] {
  return projects.map(([title, subcategory], index) => ({
    title,
    slug: `${categorySlug}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`,
    category,
    categorySlug,
    subcategory,
    location,
    image: images[index % images.length],
    gallery: [images[index % images.length], images[(index + 1) % images.length], images[(index + 2) % images.length]],
    description: `A sample ${subcategory.toLowerCase()} portfolio entry prepared for the Studio 7 CMS structure. Replace this with the real client story, gallery and film.`
  }));
}

export const fallbackPortfolio: PortfolioItem[] = [
  ...makePortfolio("Wedding", "weddings", "Malaysia", weddingImages, [
    ["Indian Wedding Celebration", "Indian Wedding"], ["Sikh Anand Karaj", "Sikh Wedding"],
    ["Hindu Wedding Ceremony", "Hindu Wedding"], ["Malay Wedding Reception", "Malay Wedding"],
    ["Church Wedding Story", "Church Wedding"], ["Western Garden Wedding", "Western Wedding"],
    ["Intimate Nikah Ceremony", "Muslim Wedding"], ["Multicultural Wedding Weekend", "Multicultural Wedding"]
  ]),
  ...makePortfolio("Corporate", "corporate", "Malaysia", corporateImages, [
    ["Annual Leadership Conference", "Conference"], ["New Product Launch", "Product Launch"],
    ["Company Town Hall", "Town Hall"], ["Corporate Gala Evening", "Gala Dinner"],
    ["Brand Campaign Production", "Brand Content"], ["Team Profile Series", "Corporate Portraits"],
    ["Industry Awards Night", "Awards Ceremony"]
  ]),
  ...makePortfolio("Engagement", "engagements", "Singapore", engagementImages, [
    ["Garden Engagement Celebration", "Engagement Ceremony"], ["Intimate Family Engagement", "Family Celebration"],
    ["Modern Engagement Portraits", "Portrait Session"], ["Evening Engagement Reception", "Reception"]
  ]),
  ...makePortfolio("Registration of Marriage", "rom", "Singapore", weddingImages, [
    ["Civil Marriage Ceremony", "Civil Ceremony"], ["Registry Day Portraits", "Registry Portraits"],
    ["Intimate Marriage Celebration", "Intimate Celebration"]
  ]),
  ...makePortfolio("Pre-wedding", "pre-wedding", "Malaysia", preWeddingImages, [
    ["City Pre-wedding Story", "Urban"], ["Coastal Pre-wedding Session", "Beach"],
    ["Garden Editorial Portraits", "Garden"], ["Studio Couple Portraits", "Studio"]
  ]),
  ...makePortfolio("Birthday", "birthdays", "Malaysia", birthdayImages, [
    ["First Birthday Celebration", "Children's Birthday"], ["Milestone Birthday Dinner", "Milestone Birthday"],
    ["Family Birthday Gathering", "Family Celebration"]
  ]),
  ...makePortfolio("Live Feed", "live-feed", "Malaysia", liveImages, [
    ["Conference Screen Production", "Conference"], ["Wedding Hall Live Feed", "Wedding"]
  ]),
  ...makePortfolio("Live Streaming", "live-streaming", "Malaysia", liveImages, [
    ["Hybrid Corporate Broadcast", "Corporate Broadcast"], ["Private Event Livestream", "Private Event"]
  ])
];

export const portfolioCategories = [
  { title: "Weddings", slug: "weddings", description: "Wedding photography and cinematic films." },
  { title: "Corporate", slug: "corporate", description: "Events, launches and brand stories." },
  { title: "Engagements", slug: "engagements", description: "Engagement celebrations and portraits." },
  { title: "Registration of Marriage", slug: "rom", description: "Civil registration ceremonies and intimate celebrations." },
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
