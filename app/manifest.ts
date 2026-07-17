import type { MetadataRoute } from "next";
import { BUSINESS, SITE_NAME, SITE_SHORT_NAME, SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_SHORT_NAME,
    description: BUSINESS.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0A0908",
    theme_color: "#0A0908",
    orientation: "portrait-primary",
    categories: ["business", "lifestyle", "entertainment"],
    lang: "en-IN",
    dir: "ltr",
    id: SITE_URL,
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
