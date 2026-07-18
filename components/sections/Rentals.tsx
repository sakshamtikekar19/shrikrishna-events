"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { media } from "@/data/media";
import { contactInfo } from "@/data/contact";

export const Rentals = () => {
  const handleInquiry = (itemName: string) => {
    const message = `Hello Shree Krishna Events,\n\nI am interested in renting: *${itemName}*.\n\nPlease provide more details about availability and pricing.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="rentals" className="section-padding bg-background relative overflow-hidden">
      <div className="premium-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-royal-gold font-subheading text-xs sm:text-sm uppercase tracking-[0.6em] mb-6 block">
            Elite Equipment
          </span>
          <h2 className="text-cream-marble leading-[1.15]">
            Royal Inventory
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {media.rentals.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: Math.min(idx * 0.08, 0.4) }}
              className="group relative h-[400px] sm:h-[450px] overflow-hidden rounded-[24px] border border-royal-gold/15 cursor-pointer shadow-2xl"
            >
              <Image
                src={item.image}
                alt={`${item.name} rental in Bhubaneswar — Shree Krishna Event Management`}
                title={`${item.name} — Event rental Bhubaneswar`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 pb-12 text-center">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-cream-marble text-center tracking-wide max-w-[90%] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.name}
                </h3>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
                  <button 
                    onClick={() => handleInquiry(item.name)}
                    className="luxury-button-outline px-10 h-[54px] text-xs"
                  >
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
