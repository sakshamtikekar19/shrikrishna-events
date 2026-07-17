"use client";

import { whatsappHref } from "@/data/contact";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppFloat = () => {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[1200] flex items-center gap-2.5 rounded-full bg-[#25D366] text-white pl-3.5 pr-5 py-3 shadow-[0_8px_28px_rgba(37,211,102,0.45)] hover:bg-[#1ebe57] hover:scale-105 transition-all duration-300"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
        <FaWhatsapp size={22} />
      </span>
      <span className="text-xs font-button font-semibold uppercase tracking-[0.12em] hidden sm:inline">
        WhatsApp
      </span>
    </a>
  );
};
