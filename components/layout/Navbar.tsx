"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowLeft } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Rentals", href: "/rentals" },
  { name: "Process", href: "/process" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <header className="relative z-[1000]">
      <nav
        aria-label="Primary"
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-700 ${
          isScrolled
            ? "py-3 sm:py-4 bg-background/90 border-b border-royal-gold/15"
            : "py-4 sm:py-6 bg-transparent"
        }`}
      >
        <div className="premium-container flex items-center justify-between">
          {!isHome ? (
            <Link
              href="/"
              className="relative w-12 h-12 flex items-center justify-center rounded-full border border-royal-gold/15 text-royal-gold hover:bg-royal-gold hover:text-background transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-gold focus-visible:outline-offset-4 shadow-lg"
              aria-label="Back to home"
            >
              <ArrowLeft size={20} strokeWidth={1.5} />
            </Link>
          ) : (
            <span className="w-12 h-12" aria-hidden />
          )}

          <button
            type="button"
            onClick={toggleMenu}
            className="relative w-12 h-12 flex items-center justify-center rounded-full border border-royal-gold/15 text-royal-gold hover:bg-royal-gold/10 transition-all duration-500 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-gold focus-visible:outline-offset-4 shadow-lg"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="absolute inset-0 rounded-full border border-royal-gold scale-0 group-hover:scale-100 transition-transform duration-700 opacity-20" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="primary-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1500] bg-background flex flex-col items-center overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 z-[1600] w-12 h-12 rounded-full border border-royal-gold/20 flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-background transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-gold focus-visible:outline-offset-4"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-marble.png')] scale-150" />
            </div>

            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-5 md:gap-7 z-10 my-auto py-28 px-6 w-full"
            >
              {navLinks.map((link, i) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group relative"
                  >
                    <motion.span
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.12 + i * 0.04, duration: 0.35 }}
                      className={`block text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-center uppercase tracking-widest transition-colors duration-300 ${
                        active
                          ? "text-royal-gold"
                          : "text-foreground hover:text-royal-gold"
                      }`}
                    >
                      {link.name}
                    </motion.span>
                    <span
                      className={`absolute -bottom-2 left-0 h-px bg-royal-gold transition-all duration-500 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}

              <div className="pt-10 flex flex-col items-center gap-5">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="luxury-button px-12 py-4 text-sm tracking-[0.2em]"
                >
                  Contact The Palace
                </Link>
                <div className="text-[10px] text-royal-gold/60 font-subheading uppercase tracking-[0.4em]">
                  Divine Celebrations · Royal Execution
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
