"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";
import { media } from "@/data/media";

import "swiper/css";
import "swiper/css/pagination";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 md:py-40 bg-background-secondary relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-royal-gold font-subheading text-[10px] uppercase tracking-[0.5em] mb-4 block">
            Client Masterpieces
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-cream-marble">
            Divine Words
          </h2>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 7000, disableOnInteraction: true }}
          breakpoints={{
            1024: { slidesPerView: 2, spaceBetween: 40 },
          }}
          className="testimonials-swiper !pb-16"
        >
          {media.testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <div className="h-full border border-royal-gold/15 bg-background/50 p-10 md:p-12 flex flex-col items-center text-center justify-between relative group">
                <div className="absolute top-5 right-5 text-royal-gold/15">
                  <FaQuoteLeft size={36} />
                </div>

                <div className="relative z-10 space-y-6 flex flex-col items-center">
                  <div className="flex gap-1 justify-center">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} className="text-royal-gold" size={12} />
                    ))}
                  </div>

                  <p className="text-cream-marble text-lg md:text-xl italic font-heading leading-relaxed max-w-lg mx-auto">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-royal-gold/10 relative z-10 flex flex-col items-center gap-4 w-full">
                  <div className="relative w-14 h-14 overflow-hidden rounded-full border border-royal-gold/30 shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name}, ${testimonial.role}`}
                      title={testimonial.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-heading font-bold text-royal-gold tracking-wide uppercase">
                      {testimonial.name}
                    </h4>
                    <span className="text-secondary-text text-[9px] uppercase tracking-[0.25em] font-subheading block mt-0.5">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #d4af37;
          opacity: 0.25;
          width: 8px;
          height: 8px;
          margin: 0 5px !important;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 22px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};
