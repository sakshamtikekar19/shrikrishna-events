"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/lib/seo";

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center bg-background">
      {/* Mobile: logo backdrop - using object-cover to fill entire screen without black areas */}
      <div className="absolute inset-0 left-0 right-0 z-0 sm:hidden">
        <Image
          src={getAssetPath("/logo.png")}
          alt="Shree Krishna Event Management"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 brightness-[1.1]"
        />
      </div>

      {/* Desktop: palace scene - restored to original 62% opacity */}
      <div className="absolute inset-0 left-0 right-0 z-0 hidden sm:block">
        <Image
          src={getAssetPath("/hero-bg.png")}
          alt="Luxury palace-inspired backdrop"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center opacity-[0.62] brightness-[1.15] contrast-[1.05] saturate-[0.95]"
        />
      </div>

      {/* Restored scrims for better contrast and depth */}
      <div className="absolute inset-0 left-0 right-0 z-10 bg-background/45 sm:bg-background/40" />
      <div className="absolute inset-0 left-0 right-0 z-10 bg-gradient-to-b from-background/70 via-background/35 to-background/80" />
      <div className="absolute inset-0 left-0 right-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(10,9,8,0.55)_0%,rgba(10,9,8,0.25)_45%,rgba(10,9,8,0.55)_100%)]" />

      <div className="relative z-20 w-full text-center premium-container pt-32 sm:pt-40 pb-32 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 sm:mb-12 w-full"
        >
          <span className="text-royal-gold font-subheading text-xs sm:text-sm md:text-base uppercase tracking-[0.55em] mb-6 sm:mb-8 block font-semibold drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Flawless Planning · Divine Execution
          </span>
          <h1 className="text-white leading-[1.1] tracking-tight drop-shadow-[0_4px_32px_rgba(0,0,0,0.95)] [text-shadow:0_4px_30px_rgba(0,0,0,0.85)] max-w-[1200px] mx-auto">
            Shree Krishna Event Management
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-luxury mx-auto mb-12 sm:mb-16 font-body drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)] [text-shadow:0_1px_12px_rgba(0,0,0,0.8)] opacity-90"
        >
          Creating divine celebrations as Bhubaneswar&apos;s luxury event
          management company — weddings, corporate events, and premium
          production across Odisha.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full"
        >
          <Link
            href="/services"
            className="luxury-button-outline w-full sm:w-auto min-w-[240px]"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="luxury-button-outline w-full sm:w-auto min-w-[240px]"
          >
            Book Consultation
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center opacity-35">
        <div className="w-px h-10 bg-gradient-to-b from-royal-gold to-transparent" />
      </div>
    </section>
  );
};
