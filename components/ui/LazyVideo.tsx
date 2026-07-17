"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  playInView?: boolean;
  priority?: boolean;
};

/**
 * Lazy cinematic video — loads near viewport, pauses off-screen.
 */
export const LazyVideo = ({
  src,
  poster,
  className = "",
  playInView = true,
  priority = false,
}: LazyVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          if (playInView && !reducedMotion) {
            void el.play().catch(() => {});
          }
        } else if (playInView) {
          el.pause();
        }
      },
      { rootMargin: "180px", threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [playInView, reducedMotion, shouldLoad]);

  if (reducedMotion && poster) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={poster}
        alt=""
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    );
  }

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      autoPlay={priority && !reducedMotion}
      preload={priority ? "metadata" : "none"}
      poster={poster}
      className={`object-cover ${className}`}
    >
      {shouldLoad ? <source src={src} type="video/mp4" /> : null}
    </video>
  );
};
