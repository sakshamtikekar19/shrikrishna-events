"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { media } from "@/data/media";
import { LazyVideo } from "@/components/ui/LazyVideo";

import "swiper/css";
import "swiper/css/navigation";

export const FeaturedVideos = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-royal-gold font-subheading text-xs sm:text-sm uppercase tracking-[0.6em] mb-6 block">
            Cinematic Highlights
          </span>
          <h2 className="text-cream-marble leading-[1.15]">
            Our Stories
          </h2>
        </motion.div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={32}
          slidesPerView={1}
          navigation
          breakpoints={{
            1024: { slidesPerView: 1.25, spaceBetween: 48 },
          }}
          className="featured-videos-swiper !overflow-visible"
        >
          {media.featuredVideos.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="relative h-[400px] sm:h-[500px] md:h-[650px] overflow-hidden rounded-[32px] border border-royal-gold/15 group cursor-pointer shadow-2xl">
                <LazyVideo
                  src={item.video}
                  poster={item.poster}
                  title={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-royal-gold/30 flex items-center justify-center text-royal-gold bg-background/30 backdrop-blur-sm transform transition-transform duration-500 group-hover:scale-110">
                    <Play fill="currentColor" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-10 left-10 right-10 sm:bottom-16 sm:left-16">
                  <h4 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-cream-marble tracking-wide drop-shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .featured-videos-swiper .swiper-button-next,
        .featured-videos-swiper .swiper-button-prev {
          color: #d4af37;
          background: rgba(10, 9, 8, 0.75);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(212, 175, 55, 0.25);
        }
        .featured-videos-swiper .swiper-button-next:after,
        .featured-videos-swiper .swiper-button-prev:after {
          font-size: 14px;
        }
        @media (max-width: 640px) {
          .featured-videos-swiper .swiper-button-next,
          .featured-videos-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
