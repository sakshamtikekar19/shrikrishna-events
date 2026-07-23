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
    poster: unsplash("photo-1464366400600-7168b8af9bc3", 1920),
    /** Optional still if video fails / reduced motion */
    image: unsplash("photo-1464366400600-7168b8af9bc3", 1920),
  },

  about: {
    primary: unsplash("photo-1600880292203-757bb62b4baf", 1200), // client meeting
    secondary: unsplash("photo-1552664730-d307ca884978", 1200), // planning team
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-businessmen-discussing-work-around-a-laptop-42442-large.mp4",
    poster: unsplash("photo-1556761175-b413da4baf72", 1200),
  },

  services: [
    {
      key: "weddings",
      title: "Luxury Weddings",
      description:
        "We turn your dream wedding into a royal masterpiece — heritage venues, mandap design, floral artistry, and flawless bridal entries.",
      image: unsplash("photo-1583939003579-730e3918a45a", 1400), // Indian wedding couple
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-luxury-wedding-venue-with-large-chandeliers-41132-large.mp4",
    },
    {
      key: "corporate",
      title: "Corporate Events",
      description:
        "Grand summits, award nights, and gala dinners executed with world-class technical production and high-stakes precision.",
      image: unsplash("photo-1540575861501-7cf05a4b125a", 1400), // conference / gala
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-business-presentation-in-a-large-conference-room-42460-large.mp4",
    },
    {
      key: "activations",
      title: "Brand Activations",
      description:
        "Product launches, influencer evenings, and mall activations that captivate elite audiences with cinematic flair.",
      image: unsplash("photo-1492684223066-81342ee5ff30", 1400), // brand event / lights
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-digital-screen-42439-large.mp4",
    },
    {
      key: "private",
      title: "Private Celebrations",
      description:
        "Intimate birthdays, anniversaries, and luxury private parties styled with the same royal care as our grandest events.",
      image: unsplash("photo-1464349095431-e9a21285b5f3", 1400), // celebration cake / party
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-bright-fireworks-on-the-night-sky-41126-large.mp4",
    },
  ],

  featuredVideos: [
    {
      title: "Luxury Wedding Showcase",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-luxury-wedding-venue-with-large-chandeliers-41132-large.mp4",
      poster: unsplash("photo-1519741497674-611481863552", 1400),
    },
    {
      title: "Corporate Gala Night",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-business-presentation-in-a-large-conference-room-42460-large.mp4",
      poster: unsplash("photo-1505373630572-2d1d4691bb02", 1400),
    },
    {
      title: "Stage & Concert Production",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-musical-band-performing-on-stage-41130-large.mp4",
      poster: unsplash("photo-1470225620780-dba8ba36b745", 1400),
    },
    {
      title: "Grand Celebration",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-bright-fireworks-on-the-night-sky-41126-large.mp4",
      poster: unsplash("photo-1531058021387-39322339d0d3", 1400),
    },
  ],

  portfolio: [
    {
      title: "Eternal Mandap Wedding",
      category: "Wedding",
      image: unsplash("photo-1583939003579-730e3918a45a", 1200),
    },
    {
      title: "Royal Floral Reception",
      category: "Wedding",
      image: unsplash("photo-1520854221256-17451cc331bf", 1200),
    },
    {
      title: "Maharaja Banquet Hall",
      category: "Decor",
      image: unsplash("photo-1464366400600-7168b8af9bc3", 1200),
    },
    {
      title: "Executive Summit Gala",
      category: "Corporate",
      image: unsplash("photo-1540575861501-7cf05a4b125a", 1200),
    },
    {
      title: "Award Night Stage",
      category: "Corporate",
      image: unsplash("photo-1470225620780-dba8ba36b745", 1200),
    },
    {
      title: "Golden Product Launch",
      category: "Launch",
      image: unsplash("photo-1492684223066-81342ee5ff30", 1200),
    },
    {
      title: "Heritage Birthday Soirée",
      category: "Birthday",
      image: unsplash("photo-1464349095431-e9a21285b5f3", 1200),
    },
    {
      title: "Bridal Entry Lights",
      category: "Wedding",
      image: unsplash("photo-1519741497674-611481863552", 1200),
    },
    {
      title: "Concert Stage Install",
      category: "Decor",
      image: unsplash("photo-1459749411177-042180ce673f", 1200),
    },
  ],

  rentals: [
    { name: "LED Walls", image: unsplash("photo-1470229722913-7c0e2dbb8a8b", 1000) },
    { name: "Concert Lighting", image: unsplash("photo-1514525253344-7814d9994a81", 1000) },
    { name: "Professional Sound", image: unsplash("photo-1516280440614-37939bbacd81", 1000) },
    { name: "Stage Setup", image: unsplash("photo-1459749411177-042180ce673f", 1000) },
    { name: "Truss Structures", image: unsplash("photo-1501281668745-f7f57925a1b4", 1000) },
    { name: "Event Furniture", image: unsplash("photo-1567016432779-094069958ad5", 1000) },
    { name: "Projection Mapping", image: unsplash("photo-1492684223066-81342ee5ff30", 1000) },
    { name: "Cold Sparks", image: unsplash("photo-1531058021387-39322339d0d3", 1000) },
    { name: "Celebratory FX", image: unsplash("photo-1530103043960-ef38714abb15", 1000) },
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
    background: unsplash("photo-1566073771259-6a8506099945", 1920), // luxury banquet / hotel
    venue: unsplash("photo-1464366400600-7168b8af9bc3", 1200), // elegant hall
  },

  gallery: [
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.15 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.15 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.16 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.16 PM (2).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.16 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.17 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.17 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.18 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.18 PM (2).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.18 PM (3).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.18 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.19 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.19 PM (2).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.19 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.20 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.20 PM (2).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.20 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.21 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.21 PM (2).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.21 PM (3).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.21 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.22 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.50 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.50 PM (2).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.50 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.51 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.51 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.52 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.52 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.53 PM (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.53 PM (2).jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.53 PM.jpeg",
    "/images/gallery/WhatsApp Image 2026-07-22 at 12.07.54 PM.jpeg",
  ],
} as const;

export type MediaConfig = typeof media;
