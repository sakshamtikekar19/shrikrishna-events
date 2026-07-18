"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { media } from "@/data/media";
import { LazyVideo } from "@/components/ui/LazyVideo";

export const Services = () => {
  return (
    <section id="services" className="py-28 md:py-40 bg-background-secondary relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="text-royal-gold font-subheading text-[10px] uppercase tracking-[0.5em] mb-3 block">
            Our Elite Services
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-cream-marble">
            Divine Mastery
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32 items-center">
          {media.services.map((service, index) => {
            return (
              <div
                key={service.key}
                className="flex flex-col items-center gap-10 lg:gap-14 w-full max-w-4xl text-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className="w-full relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden border border-royal-gold/20"
                >
                  <LazyVideo
                    src={service.video}
                    poster={service.image}
                    title={`${service.title} — Shree Krishna Event Management`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="space-y-6 md:space-y-8"
                >
                  <div className="space-y-4">
                    <span className="text-royal-gold font-subheading text-[10px] uppercase tracking-[0.45em]">
                      Excellence 0{index + 1}
                    </span>
                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-cream-marble leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-secondary-text text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
                    {service.description}
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/contact/"
                      className="luxury-button-outline inline-block px-12 py-4 text-[11px]"
                    >
                      Explore Details
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
