"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { media } from "@/data/media";
import { LazyVideo } from "@/components/ui/LazyVideo";

export const Services = () => {
  const router = useRouter();

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="text-royal-gold font-subheading text-xs sm:text-sm uppercase tracking-[0.6em] mb-4 block">
            Our Elite Services
          </span>
          <h2 className="text-cream-marble leading-[1.2]">
            Divine Mastery
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-36">
          {media.services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.key}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-24`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden border border-royal-gold/15 rounded-[18px] cursor-pointer"
                  onClick={() => router.push("/gallery")}
                >
                  <LazyVideo
                    src={service.video}
                    poster={service.image}
                    title={`${service.title} — Shree Krishna Event Management`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="w-full lg:w-1/2 space-y-6 md:space-y-10"
                >
                  <div className="space-y-4">
                    <span className="text-royal-gold font-subheading text-xs sm:text-sm uppercase tracking-[0.55em]">
                      Excellence 0{index + 1}
                    </span>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-cream-marble leading-[1.2]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="max-w-luxury opacity-80 text-[16px] md:text-[18px]">
                    {service.description}
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/contact/"
                      className="luxury-button-outline px-10 h-[54px] text-xs"
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
