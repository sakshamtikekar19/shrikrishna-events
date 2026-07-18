"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { media } from "@/data/media";

const categories = ["All", "Corporate", "Wedding", "Birthday", "Launch", "Decor"];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? media.portfolio
      : media.portfolio.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-royal-gold font-subheading text-[10px] uppercase tracking-[0.5em] mb-3 block">
            A Legacy of Excellence
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-cream-marble mb-8">
            Our Portfolio
          </h2>

          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 font-subheading text-[9px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  activeCategory === cat
                    ? "text-royal-gold"
                    : "text-secondary-text hover:text-royal-gold"
                }`}
              >
                {cat}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-royal-gold transition-all duration-300 ${
                    activeCategory === cat ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="group relative h-[280px] sm:h-[340px] overflow-hidden cursor-pointer border border-royal-gold/15"
                onClick={() => setSelectedImage(project.image)}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.category} event by Shree Krishna Event Management`}
                  title={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end items-center text-center p-5 sm:p-6">
                  <span className="text-royal-gold font-subheading text-[9px] uppercase tracking-[0.3em] mb-1">
                    {project.category}
                  </span>
                  <h4 className="text-lg sm:text-xl font-heading font-bold text-cream-marble">
                    {project.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 right-0 bottom-0 z-[2000] bg-background/95 flex items-center justify-center p-6 md:p-16"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-8 right-8 text-cream-marble hover:text-royal-gold transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                <X size={32} strokeWidth={1} />
              </button>
              <div className="relative w-full max-w-5xl h-[70vh]">
                <Image
                  src={selectedImage}
                  alt="Enlarged portfolio gallery preview"
                  title="Event portfolio gallery"
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
