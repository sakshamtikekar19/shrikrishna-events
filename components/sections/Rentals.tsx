"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { media } from "@/data/media";

export const Rentals = () => {
  return (
    <section id="rentals" className="py-16 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-royal-gold font-subheading text-[10px] uppercase tracking-[0.5em] mb-3 block">
            Elite Equipment
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-cream-marble">
            Royal Inventory
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {media.rentals.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.2) }}
              className="group relative h-[260px] sm:h-[300px] overflow-hidden border border-royal-gold/15 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={`${item.name} rental in Bhubaneswar — Shree Krishna Event Management`}
                title={`${item.name} — Event rental Bhubaneswar`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 pb-10 text-center">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-cream-marble text-center tracking-wide max-w-[80%]">
                  {item.name}
                </h3>
                <div className="mt-5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <button className="luxury-button-outline px-8 py-2.5 text-[10px] uppercase tracking-[0.25em]">
                    Check Availability
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
