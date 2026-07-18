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
    <section id="portfolio" className="section-padding bg-background relative overflow-hidden">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-royal-gold font-subheading text-xs sm:text-sm uppercase tracking-[0.6em] mb-6 block">
            A Legacy of Excellence
          </span>
          <h2 className="text-cream-marble mb-12">
            Our Portfolio
          </h2>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-3 font-subheading text-[11px] uppercase tracking-[0.25em] transition-all duration-300 ${
                  activeCategory === cat
                    ? "text-royal-gold"
                    : "text-secondary-text/60 hover:text-royal-gold"
                }`}
              >
                {cat}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-royal-gold transition-all duration-500 ${
                    activeCategory === cat ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="group relative h-[450px] sm:h-[550px] md:h-[650px] overflow-hidden cursor-pointer rounded-[24px] border border-royal-gold/10"
                onClick={() => setSelectedImage(project.image)}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.category} event by Shree Krishna Event Management`}
                  title={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
                  <span className="text-royal-gold font-subheading text-xs uppercase tracking-[0.4em] mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.category}
                  </span>
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-cream-marble transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
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
