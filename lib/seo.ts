/**
 * Central SEO + business config.
 * Update verification IDs when you have Search Console / Analytics access.
 */
import type { Metadata } from "next";

export const SITE_NAME = "Shree Krishna Event Management";
export const SITE_SHORT_NAME = "Shree Krishna Events";
export const SITE_TAGLINE = "Flawless Planning · Divine Execution";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://sakshamtikekar19.github.io/shrikrishna-events";

export const BUSINESS = {
  legalName: SITE_NAME,
  description:
    "Luxury event management company in Bhubaneswar, Odisha — wedding planning, corporate events, brand activations, destination weddings, and premium event production.",
  category: "Event Management Company",
  type: "Luxury Event Management Company",
  email: "info@shreekrishnaevents.com",
  phones: ["+91-8658988831", "+91-9337300540"],
  phoneDisplay: ["+91 86589 88831", "+91 93373 00540"],
  address: {
    streetAddress: "Kesari Managrapoint Chowka, Near Indira Basanti Complex",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    postalCode: "751002",
    addressCountry: "IN",
    full: "Kesari Managrapoint Chowka, Near Indira Basanti Complex, Bhubaneswar, Odisha 751002, India",
  },
  geo: {
    // Approximate Bhubaneswar coordinates — update with exact pin when available
    latitude: 20.2961,
    longitude: 85.8245,
  },
  areaServed: ["Bhubaneswar", "Odisha", "India"],
  openingHours: ["Mo-Sa 10:00-19:00"],
  openingHoursDisplay: "Mon – Sat · 10:00 AM – 7:00 PM · Sunday by appointment",
  sameAs: [
    "https://www.instagram.com/shreekrishnaevent_management/",
  ],
  googleBusinessProfileUrl: "", // add GBP URL when live
  priceRange: "$$$$",
  languages: ["en", "hi", "or"],
} as const;

export const SERVICES = [
  "Corporate Events",
  "Wedding Planning",
  "Destination Weddings",
  "Birthday Parties",
  "Anniversary Celebrations",
  "Brand Activations",
  "Product Launches",
  "Event Rentals",
  "LED Walls",
  "Lighting",
  "Sound Systems",
  "Stage Setup",
  "Decoration",
  "Artist Management",
  "Guest Management",
  "RSVP Management",
  "Venue Management",
  "Catering Consultation",
] as const;

export const PRIMARY_KEYWORDS = [
  "Event Management Company in Bhubaneswar",
  "Wedding Planner in Bhubaneswar",
  "Corporate Event Management Odisha",
  "Luxury Wedding Planner Odisha",
  "Destination Wedding Planner Odisha",
  "Birthday Event Planner Bhubaneswar",
  "LED Wall Rental Bhubaneswar",
  "Stage Decoration Bhubaneswar",
  "Event Production Company Odisha",
  "Corporate Event Planner Odisha",
  "Brand Activation Agency Odisha",
  "Premium Event Management Services",
] as const;

/** Placeholders — replace with real verification tokens */
export const VERIFICATION = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
  googleAnalytics: process.env.NEXT_PUBLIC_GA_ID ?? "",
  googleTagManager: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  metaPixel: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  microsoftClarity: process.env.NEXT_PUBLIC_CLARITY_ID ?? "",
} as const;

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export const PAGES: Record<string, PageSeo> = {
  home: {
    title: "Event Management Company in Bhubaneswar | Luxury Wedding & Corporate Planner",
    description:
      "Shree Krishna Event Management is a luxury event management company in Bhubaneswar, Odisha. Expert wedding planning, corporate events, brand activations, destination weddings, and LED wall rentals.",
    path: "/",
    keywords: [...PRIMARY_KEYWORDS],
  },
  about: {
    title: "About Us | Luxury Event Planners in Bhubaneswar, Odisha",
    description:
      "Meet Shree Krishna Event Management — premium wedding planners and corporate event producers in Bhubaneswar serving Odisha with divine celebrations and flawless execution.",
    path: "/about/",
    keywords: [
      "Event Management Company in Bhubaneswar",
      "Premium Event Management Services",
      "Luxury Wedding Planner Odisha",
    ],
  },
  services: {
    title: "Event Management Services in Bhubaneswar | Weddings, Corporate & Activations",
    description:
      "Explore luxury wedding planning, corporate event management, brand activations, destination weddings, and full event production services in Bhubaneswar and across Odisha.",
    path: "/services/",
    keywords: [
      "Wedding Planner in Bhubaneswar",
      "Corporate Event Management Odisha",
      "Brand Activation Agency Odisha",
      "Destination Wedding Planner Odisha",
    ],
  },
  portfolio: {
    title: "Event Portfolio & Gallery | Shree Krishna Event Management Bhubaneswar",
    description:
      "Browse luxury wedding highlights, corporate galas, brand launches, and stage décor installations by Shree Krishna Event Management in Bhubaneswar, Odisha.",
    path: "/portfolio/",
    keywords: [
      "Stage Decoration Bhubaneswar",
      "Luxury Wedding Planner Odisha",
      "Event Production Company Odisha",
    ],
  },
  rentals: {
    title: "LED Wall, Lighting & Stage Rentals in Bhubaneswar | Event Equipment",
    description:
      "Premium LED wall rental, concert lighting, professional sound systems, stage setup, and event furniture rentals in Bhubaneswar from Shree Krishna Event Management.",
    path: "/rentals/",
    keywords: [
      "LED Wall Rental Bhubaneswar",
      "Stage Decoration Bhubaneswar",
      "Event Production Company Odisha",
    ],
  },
  process: {
    title: "Our Event Planning Process | Shree Krishna Event Management Odisha",
    description:
      "Discover how Shree Krishna Event Management plans luxury weddings and corporate events in Bhubaneswar — from discovery and design to production and flawless execution.",
    path: "/process/",
    keywords: [
      "Premium Event Management Services",
      "Corporate Event Planner Odisha",
      "Wedding Planner in Bhubaneswar",
    ],
  },
  contact: {
    title: "Contact Wedding & Event Planner in Bhubaneswar | Book Consultation",
    description:
      "Contact Shree Krishna Event Management in Bhubaneswar. Call +91 86589 88831 or visit Kesari Managrapoint Chowka near Indira Basanti Complex, Odisha 751002.",
    path: "/contact/",
    keywords: [
      "Event Management Company in Bhubaneswar",
      "Wedding Planner in Bhubaneswar",
      "Corporate Event Planner Odisha",
    ],
  },
  corporateEvents: {
    title: "Corporate Event Management in Odisha | Conferences, Launches & Galas",
    description:
      "Corporate event planner in Bhubaneswar and Odisha — conferences, product launches, brand activations, award nights, and premium event production by Shree Krishna Event Management.",
    path: "/services/corporate-events/",
    keywords: [
      "Corporate Event Management Odisha",
      "Corporate Event Planner Odisha",
      "Brand Activation Agency Odisha",
      "Event Production Company Odisha",
    ],
  },
  weddingPlanning: {
    title: "Luxury Wedding Planner in Bhubaneswar | Destination Weddings Odisha",
    description:
      "Luxury wedding planner in Bhubaneswar specializing in destination weddings, heritage celebrations, décor, guest management, and full wedding production across Odisha.",
    path: "/services/wedding-planning/",
    keywords: [
      "Wedding Planner in Bhubaneswar",
      "Luxury Wedding Planner Odisha",
      "Destination Wedding Planner Odisha",
    ],
  },
};

export function absoluteUrl(path = "/"): string {
  const base = SITE_URL.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function buildPageMetadata(page: PageSeo): Metadata {
  const url = absoluteUrl(page.path);
  const keywords = page.keywords ?? [...PRIMARY_KEYWORDS];

  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: [...keywords],
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: BUSINESS.category,
    generator: "Next.js",
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: SITE_NAME,
      title: page.title,
      description: page.description,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
    themeColor: "#0A0908",
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
  };
}

export const rootMetadata: Metadata = {
  ...buildPageMetadata(PAGES.home),
  title: {
    default: PAGES.home.title,
    template: `%s | ${SITE_NAME}`,
  },
  verification: {
    google: VERIFICATION.google || undefined,
    other: {
      ...(VERIFICATION.bing
        ? { "msvalidate.01": VERIFICATION.bing }
        : {}),
    },
  },
};
