"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const AnimatedBorder = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`relative group p-[1px] overflow-hidden rounded-2xl ${className}`}>
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-accent to-transparent"
        animate={{
          left: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: "100%",
          opacity: 0,
        }}
      />
      <div className="relative z-10 bg-card rounded-2xl h-full w-full">
        {children}
      </div>
      
      <style jsx>{`
        div:hover :global(.absolute) {
          opacity: 0.5 !important;
        }
      `}</style>
    </div>
  );
};
