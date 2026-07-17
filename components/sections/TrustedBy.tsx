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
    <section className="py-16 md:py-20 bg-background border-y border-royal-gold/5 overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 mb-10 text-center">
        <span className="text-[10px] uppercase tracking-[0.45em] text-royal-gold/50 font-button">
          Trusted By Industry Leaders
        </span>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 sm:w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 sm:w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-marquee will-change-transform">
          {row.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="mx-8 sm:mx-14 flex items-center gap-3 sm:gap-4 opacity-30"
            >
              <brand.icon size={28} className="text-cream-marble shrink-0" />
              <span className="text-sm sm:text-base font-heading font-bold text-cream-marble tracking-widest uppercase whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
