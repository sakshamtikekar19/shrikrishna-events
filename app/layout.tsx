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

export const metadata: Metadata = {
  title: "Shree Krishna Event Management | Creating Divine Celebrations",
  description:
    "From luxury weddings and royal celebrations to large-scale corporate events, Shree Krishna Event Management transforms every vision into an unforgettable experience.",
  keywords: [
    "luxury weddings",
    "royal celebrations",
    "heritage events",
    "premium production",
    "Shree Krishna events",
    "event management India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-foreground selection:bg-royal-gold selection:text-background font-body">
        <Preloader />
        <SmoothScrollProvider>
          <CursorFollower />
          <Navbar />
          <main className="relative w-full overflow-hidden bg-background min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
