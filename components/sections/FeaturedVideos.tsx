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
    <section className="py-16 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-royal-gold font-subheading text-[10px] uppercase tracking-[0.5em] mb-3 block">
            Cinematic Highlights
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-cream-marble">
            Our Stories
          </h2>
        </motion.div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          breakpoints={{
            768: { slidesPerView: 1.15, spaceBetween: 24 },
          }}
          className="featured-videos-swiper"
        >
          {media.featuredVideos.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="relative h-[260px] sm:h-[380px] md:h-[480px] overflow-hidden border border-royal-gold/15 group cursor-pointer">
                <LazyVideo
                  src={item.video}
                  poster={item.poster}
                  title={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/45 transition-colors duration-400 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-royal-gold/40 flex items-center justify-center text-royal-gold bg-background/40">
                    <Play fill="currentColor" size={22} />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-cream-marble tracking-wide drop-shadow-lg">
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
