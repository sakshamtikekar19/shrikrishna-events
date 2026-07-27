/**
 * TEMPORARY PRESENTATION MEDIA
 * ----------------------------
 * All royalty-free placeholder URLs live here so client assets can be
 * swapped later by editing this file only (or dropping files into /public/media).
 *
 * Sources: Unsplash (images), Mixkit (videos) — no watermarks.
 * Prefer warm, premium, Indian wedding / luxury corporate tones.
 */

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const media = {
  hero: {
    /** Cinematic luxury venue — replace with client montage */
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-luxury-wedding-venue-with-large-chandeliers-41132-large.mp4",
    poster: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.15_PM.jpeg",
    /** Optional still if video fails / reduced motion */
    image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.15_PM.jpeg",
  },

  about: {
    primary: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.19_PM_2.jpeg", // client meeting
    secondary: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.21_PM_1.jpeg", // planning team
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-businessmen-discussing-work-around-a-laptop-42442-large.mp4",
    poster: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.19_PM_2.jpeg",
  },

  services: [
    {
      key: "weddings",
      title: "Luxury Weddings",
      description:
        "We turn your dream wedding into a royal masterpiece — heritage venues, mandap design, floral artistry, and flawless bridal entries.",
      image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.16_PM_1.jpeg", // Indian wedding couple
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-luxury-wedding-venue-with-large-chandeliers-41132-large.mp4",
    },
    {
      key: "corporate",
      title: "Corporate Events",
      description:
        "Grand summits, award nights, and gala dinners executed with world-class technical production and high-stakes precision.",
      image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.16_PM.jpeg", // conference / gala
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-business-presentation-in-a-large-conference-room-42460-large.mp4",
    },
    {
      key: "activations",
      title: "Brand Activations",
      description:
        "Product launches, influencer evenings, and mall activations that captivate elite audiences with cinematic flair.",
      image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.17_PM.jpeg", // brand event / lights
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-digital-screen-42439-large.mp4",
    },
    {
      key: "private",
      title: "Private Celebrations",
      description:
        "Intimate birthdays, anniversaries, and luxury private parties styled with the same royal care as our grandest events.",
      image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.17_PM_1.jpeg", // celebration cake / party
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-bright-fireworks-on-the-night-sky-41126-large.mp4",
    },
  ],

  featuredVideos: [
    {
      title: "Luxury Wedding Showcase",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-luxury-wedding-venue-with-large-chandeliers-41132-large.mp4",
      poster: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.15_PM.jpeg",
    },
    {
      title: "Corporate Gala Night",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-business-presentation-in-a-large-conference-room-42460-large.mp4",
      poster: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.18_PM_2.jpeg",
    },
    {
      title: "Stage & Concert Production",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-musical-band-performing-on-stage-41130-large.mp4",
      poster: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.16_PM_2.jpeg",
    },
    {
      title: "Grand Celebration",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-bright-fireworks-on-the-night-sky-41126-large.mp4",
      poster: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.21_PM_2.jpeg",
    },
  ],

  portfolio: [
    {
      title: "Eternal Mandap Wedding",
      category: "Wedding",
      image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.15_PM.jpeg",
    },
    {
      title: "Royal Floral Reception",
      category: "Wedding",
      image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.53_PM.jpeg",
    },
    {
      title: "Maharaja Banquet Hall",
      category: "Decor",
      image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.15_PM_1.jpeg",
    },
    {
      title: "Executive Summit Gala",
      category: "Corporate",
      image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.16_PM.jpeg",
    },
    {
      title: "Award Night Stage",
      category: "Corporate",
      image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.18_PM_2.jpeg",
    },
    {
      title: "Golden Product Launch",
      category: "Launch",
      image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.17_PM.jpeg",
    },
    {
      title: "Heritage Birthday Soirée",
      category: "Birthday",
      image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.17_PM_1.jpeg",
    },
    {
      title: "Bridal Entry Lights",
      category: "Wedding",
      image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.51_PM.jpeg",
    },
    {
      title: "Concert Stage Install",
      category: "Decor",
      image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.16_PM_2.jpeg",
    },
  ],

  rentals: [
    { name: "LED Walls", image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.19_PM.jpeg" },
    { name: "Concert Lighting", image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.18_PM_1.jpeg" },
    { name: "Professional Sound", image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.20_PM.jpeg" },
    { name: "Stage Setup", image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.15_PM_1.jpeg" },
    { name: "Truss Structures", image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.18_PM_3.jpeg" },
    { name: "Event Furniture", image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.20_PM_1.jpeg" },
    { name: "Projection Mapping", image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.18_PM.jpeg" },
    { name: "Cold Sparks", image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.21_PM_2.jpeg" },
    { name: "Celebratory FX", image: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.22_PM.jpeg" },
  ],

  testimonials: [
    {
      name: "Rajesh Malhotra",
      role: "Maharaja Luxury Group",
      content:
        "Shree Krishna Event Management handled our annual summit with absolute perfection. Their attention to heritage detail and royal production was world-class.",
      rating: 5,
      avatar: unsplash("photo-1560250097-0b93528c311a", 200), // corporate portrait
    },
    {
      name: "Anjali Sharma",
      role: "Royal Bride",
      content:
        "The wedding of my dreams became a divine reality. Every decor element felt like it was plucked from a palace. Truly magical and flawlessly executed!",
      rating: 5,
      avatar: unsplash("photo-1522673607200-164a2e637a08", 200), // wedding couple tone
    },
    {
      name: "Vikram Singh",
      role: "Director, Heritage Hotels",
      content:
        "Professional, creative, and highly efficient. They transformed our product launch into a massive royal success. Highly recommended for elite events.",
      rating: 5,
      avatar: unsplash("photo-1472099645785-5658abf4ff4e", 200), // handshake / executive
    },
  ],

  contact: {
    background: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.54_PM.jpeg", // luxury banquet / hotel
    venue: "/images/gallery/WhatsApp_Image_2026-07-22_12.07.50_PM_1.jpeg", // elegant hall
  },

  gallery: [
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.15_PM_1.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.15_PM.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.16_PM_1.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.16_PM_2.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.16_PM.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.17_PM_1.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.17_PM.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.18_PM_1.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.18_PM_2.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.18_PM_3.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.18_PM.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.19_PM_1.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.19_PM_2.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.19_PM.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.20_PM_1.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.20_PM_2.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.20_PM.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.21_PM_1.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.21_PM_2.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.21_PM_3.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.21_PM.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.22_PM.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.50_PM_1.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.50_PM_2.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.50_PM.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.51_PM_1.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.51_PM.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.52_PM_1.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.52_PM.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.53_PM_1.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.53_PM_2.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.53_PM.jpeg",
    "/images/gallery/WhatsApp_Image_2026-07-22_12.07.54_PM.jpeg",
  ],
} as const;

export type MediaConfig = typeof media;
