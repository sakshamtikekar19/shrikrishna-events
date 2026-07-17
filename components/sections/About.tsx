"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { media } from "@/data/media";
import { LazyVideo } from "@/components/ui/LazyVideo";

const counters = [
  { label: "Royal Events", value: 300, suffix: "+" },
  { label: "Happy Families", value: 500, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Satisfaction", value: 100, suffix: "%" },
];

const Counter = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (!isInView || !countRef.current) return;

    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (countRef.current) {
        countRef.current.textContent = String(Math.round(value * eased));
      }
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <div className="flex flex-col items-center sm:items-start space-y-1">
      <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-royal-gold">
        <span ref={countRef}>0</span>
        {suffix}
      </div>
      <div className="text-[9px] uppercase tracking-[0.28em] text-secondary-text font-subheading">
        {label}
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-28 bg-background-secondary relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative space-y-3"
          >
            <div className="relative h-[220px] sm:h-[280px] md:h-[320px] overflow-hidden border border-royal-gold/20">
              <LazyVideo
                src={media.about.video}
                poster={media.about.poster}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-[120px] sm:h-[140px] overflow-hidden border border-royal-gold/15">
                <Image
                  src={media.about.primary}
                  alt="Client planning meeting"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative h-[120px] sm:h-[140px] overflow-hidden border border-royal-gold/15">
                <Image
                  src={media.about.secondary}
                  alt="Event planning team"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          <div className="space-y-8 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-royal-gold font-subheading text-[10px] uppercase tracking-[0.45em] block">
                Our Heritage
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-cream-marble leading-tight">
                Crafting Royal Celebrations With Soul
              </h2>
              <p className="text-secondary-text text-sm md:text-base leading-relaxed">
                Shree Krishna Event Management blends timeless Indian hospitality
                with modern cinematic production — turning every occasion into a
                divine, unforgettable experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 md:gap-8"
            >
              {counters.map((item) => (
                <Counter key={item.label} {...item} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
