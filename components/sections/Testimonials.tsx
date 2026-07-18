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
    <section id="testimonials" className="section-padding bg-background-secondary relative overflow-hidden">
      <div className="premium-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-royal-gold font-subheading text-xs sm:text-sm uppercase tracking-[0.6em] mb-4 block">
            Client Masterpieces
          </span>
          <h2 className="text-cream-marble leading-[1.2]">
            Divine Words
          </h2>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 8000, disableOnInteraction: true }}
          breakpoints={{
            1024: { slidesPerView: 2, spaceBetween: 40 },
          }}
          className="testimonials-swiper !pb-16"
        >
          {media.testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <div className="premium-card h-full flex flex-col justify-between relative group hover:border-royal-gold/30 transition-all duration-500 p-8 sm:p-10">
                <div className="absolute top-6 right-6 text-royal-gold/10 group-hover:text-royal-gold/20 transition-colors duration-500">
                  <FaQuoteLeft size={40} />
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="flex gap-1.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} className="text-royal-gold" size={12} />
                    ))}
                  </div>

                  <p className="text-cream-marble italic font-heading leading-[1.6] max-w-[95%]" style={{ fontSize: 'clamp(18px, 2.5vw, 22px)' }}>
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-royal-gold/10 relative z-10 flex items-center gap-5">
                  <div className="relative w-14 h-14 overflow-hidden rounded-full border border-royal-gold/20 shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name}, ${testimonial.role}`}
                      title={testimonial.name}
                      fill
                      sizes="56px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-heading font-bold text-royal-gold tracking-wide uppercase">
                      {testimonial.name}
                    </h4>
                    <span className="text-secondary-text text-[10px] uppercase tracking-[0.3em] font-subheading block mt-1 opacity-60">
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
