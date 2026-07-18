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
    <section id="about" className="section-padding bg-background-secondary relative overflow-hidden">
      <div className="premium-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative space-y-4"
          >
            <div className="relative h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden border border-royal-gold/15 rounded-[18px]">
              <LazyVideo
                src={media.about.video}
                poster={media.about.poster}
                title="About Shree Krishna Event Management"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <figure className="relative h-[140px] sm:h-[180px] overflow-hidden border border-royal-gold/15 rounded-[12px]">
                <Image
                  src={media.about.primary}
                  alt="Client consultation for wedding planning in Bhubaneswar"
                  title="Wedding planning consultation — Shree Krishna Events"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="sr-only">
                  Client planning meeting at Shree Krishna Event Management
                </figcaption>
              </figure>
              <figure className="relative h-[140px] sm:h-[180px] overflow-hidden border border-royal-gold/15 rounded-[12px]">
                <Image
                  src={media.about.secondary}
                  alt="Event planning team coordinating a luxury celebration"
                  title="Event production team — Bhubaneswar, Odisha"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="sr-only">
                  Event planning team at Shree Krishna Event Management
                </figcaption>
              </figure>
            </div>
          </motion.div>

          <div className="space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-royal-gold font-subheading text-xs sm:text-sm uppercase tracking-[0.6em] block">
                Our Heritage
              </span>
              <h2 className="text-cream-marble leading-[1.2]">
                Crafting Royal Celebrations With Soul
              </h2>
              <p className="max-w-luxury opacity-80 text-[16px] md:text-[18px]">
                Shree Krishna Event Management blends timeless Indian hospitality
                with modern cinematic production — turning every occasion into a
                divine, unforgettable experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8 md:gap-12"
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
