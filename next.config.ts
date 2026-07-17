import type { NextConfig } from "next";

/** Set automatically in the GitHub Pages deploy workflow */
const repo = "shrikrishna-events";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  ...(isGithubPages
    ? {
        basePath: `/${repo}`,
      }
    : {}),
};

export default nextConfig;
