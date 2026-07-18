"use client";

import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaAirbnb } from "react-icons/fa";

const brands = [
  { icon: FaApple, name: "Apple" },
  { icon: FaGoogle, name: "Google" },
  { icon: FaAmazon, name: "Amazon" },
  { icon: FaMicrosoft, name: "Microsoft" },
  { icon: FaAirbnb, name: "Airbnb" },
];

export const TrustedBy = () => {
  const row = [...brands, ...brands, ...brands];

  return (
    <section className="py-12 md:py-16 bg-background border-y border-royal-gold/5 overflow-hidden">
      <div className="premium-container mb-8 text-center">
        <span className="text-[10px] uppercase tracking-[0.5em] text-royal-gold/30 font-button">
          Trusted By Industry Leaders
        </span>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-marquee will-change-transform py-2">
          {row.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="mx-10 sm:mx-16 flex items-center gap-3 sm:gap-4 opacity-15 hover:opacity-30 transition-opacity duration-700"
            >
              <brand.icon size={28} className="text-cream-marble shrink-0" />
              <span className="text-sm sm:text-base font-heading font-bold text-cream-marble tracking-[0.2em] uppercase whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
