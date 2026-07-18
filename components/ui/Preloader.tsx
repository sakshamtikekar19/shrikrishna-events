"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 bottom-0 z-[10000] flex flex-col items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <span className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-foreground tracking-[0.12em] sm:tracking-[0.2em] uppercase text-center px-4 leading-tight">
                Shree Krishna Event Management
              </span>
            </motion.div>
            
            <div className="w-64 h-[1px] bg-accent/20 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            
            <motion.span
              className="mt-4 text-accent font-button text-xs uppercase tracking-[0.3em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Loading Excellence {Math.round(progress)}%
            </motion.span>
          </div>

          <div className="absolute bottom-10 text-[10px] text-accent/40 font-button uppercase tracking-[0.5em]">
            © 2026 Shree Krishna Event Management
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
