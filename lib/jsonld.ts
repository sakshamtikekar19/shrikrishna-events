import {
  BUSINESS,
  SERVICES,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  absoluteUrl,
} from "@/lib/seo";
import { contactInfo } from "@/data/contact";

export type BreadcrumbItem = { name: string; path: string };

export const FAQS = [
  {
    question: "How much does wedding planning cost in Bhubaneswar?",
    answer:
      "Wedding planning costs vary based on guest count, venue, décor, and production needs. Shree Krishna Event Management offers tailored luxury packages for intimate celebrations and grand destination weddings across Odisha. Contact us for a custom quote.",
  },
  {
    question: "Do you organize corporate events in Odisha?",
    answer:
      "Yes. We specialize in corporate event management in Bhubaneswar and across Odisha — including conferences, award nights, product launches, brand activations, and gala dinners with full technical production.",
  },
  {
    question: "Do you provide LED walls and stage rentals?",
    answer:
      "Yes. We offer LED wall rental, concert lighting, professional sound systems, stage setup, truss structures, and event furniture for weddings and corporate productions in Bhubaneswar.",
  },
  {
    question: "Do you arrange destination weddings?",
    answer:
      "Absolutely. Shree Krishna Event Management plans destination weddings across Odisha and beyond, handling venue selection, décor, guest logistics, and premium on-site execution.",
  },
  {
    question: "Where is your office located in Bhubaneswar?",
    answer:
      "We are based at Kesari Managrapoint Chowka, Near Indira Basanti Complex, Bhubaneswar, Odisha 751002. Call +91 86589 88831 or +91 93373 00540 to book a consultation.",
  },
] as const;

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.streetAddress,
    addressLocality: BUSINESS.address.addressLocality,
    addressRegion: BUSINESS.address.addressRegion,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.addressCountry,
  };
}

function geo() {
  return {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.latitude,
    longitude: BUSINESS.geo.longitude,
  };
}

function contactPoints() {
  return BUSINESS.phones.map((telephone) => ({
    "@type": "ContactPoint",
    telephone,
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Odia"],
  }));
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService", "EventPlanner"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    logo: absoluteUrl("/logo.png"),
    image: absoluteUrl("/hero-bg.png"),
    description: BUSINESS.description,
    slogan: SITE_TAGLINE,
    email: BUSINESS.email,
    telephone: BUSINESS.phones[0],
    priceRange: BUSINESS.priceRange,
    address: postalAddress(),
    geo: geo(),
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    contactPoint: contactPoints(),
    sameAs: [...BUSINESS.sameAs, ...(BUSINESS.googleBusinessProfileUrl ? [BUSINESS.googleBusinessProfileUrl] : [])],
    knowsAbout: [...SERVICES],
    makesOffer: SERVICES.map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Bhubaneswar, Odisha, India",
      },
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: BUSINESS.description,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function webPageSchema(opts: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(opts.path)}#webpage`,
    url: absoluteUrl(opts.path),
    name: opts.title,
    description: opts.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "City",
      name: "Bhubaneswar",
      containedInPlace: {
        "@type": "State",
        name: "Odisha",
      },
    },
    url: opts.path ? absoluteUrl(opts.path) : absoluteUrl("/services/"),
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE_NAME}`,
    url: absoluteUrl("/contact/"),
    mainEntity: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function localBusinessExtras() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    image: absoluteUrl("/logo.png"),
    telephone: contactInfo.phones[0].tel,
    email: contactInfo.email,
    address: postalAddress(),
    geo: geo(),
    url: SITE_URL,
    sameAs: BUSINESS.sameAs,
  };
}
