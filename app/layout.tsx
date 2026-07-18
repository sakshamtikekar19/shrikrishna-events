import type { Metadata } from "next";
import "./globals.css";

import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/cinzel/400.css";
import "@fontsource/cinzel/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";

import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CursorFollower } from "@/components/ui/CursorFollower";
import { Preloader } from "@/components/ui/Preloader";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnalyticsPlaceholders } from "@/components/seo/AnalyticsPlaceholders";
import { rootMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="dark scroll-smooth overflow-x-hidden">
      <body className="bg-background text-foreground selection:bg-royal-gold selection:text-background font-body w-full max-w-full overflow-x-hidden">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <AnalyticsPlaceholders />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-royal-gold focus:text-background focus:px-4 focus:py-2 focus:font-subheading focus:text-xs focus:uppercase focus:tracking-widest"
        >
          Skip to main content
        </a>
        <Preloader />
        <SmoothScrollProvider>
          <CursorFollower />
          <Navbar />
          <main
            id="main-content"
            className="relative w-full max-w-full overflow-hidden bg-background min-h-screen"
          >
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
