"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { contactInfo, whatsappHref } from "@/data/contact";

const fieldClass =
  "w-full bg-background-secondary/80 border border-royal-gold/15 rounded-sm px-4 py-3.5 text-cream-marble text-[15px] font-body placeholder:text-secondary-text/45 focus:outline-none focus:border-royal-gold/50 focus:bg-background-secondary transition-all duration-300";

const labelClass =
  "block text-[10px] uppercase tracking-[0.28em] text-champagne-gold font-subheading mb-2.5";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Our team will contact you shortly.");
  };

  return (
    <section
      id="contact"
      className="py-28 md:py-40 bg-background-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08),transparent_55%)] pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 max-w-4xl relative z-10 text-center">
        <div className="flex flex-col items-center gap-16 md:gap-24">
          <div className="space-y-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-heading font-bold text-cream-marble leading-[1.15]">
                Book Your{" "}
                <span className="gold-gradient-text italic">Dream</span> Event.
              </h2>
              <p className="text-secondary-text text-sm md:text-lg font-body max-w-2xl mx-auto leading-relaxed">
                From heritage weddings to corporate summits — reach us in
                Bhubaneswar and let&apos;s craft your celebration.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-full border border-royal-gold/30 bg-royal-gold/5 flex items-center justify-center text-royal-gold shrink-0">
                  <Phone size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.32em] text-champagne-gold/70 font-subheading mb-2">
                    Call Us
                  </span>
                  <div className="flex flex-col gap-1">
                    {contactInfo.phones.map((p) => (
                      <a
                        key={p.tel}
                        href={`tel:${p.tel}`}
                        className="text-base md:text-lg font-heading text-cream-marble hover:text-royal-gold transition-colors"
                      >
                        {p.display}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 }}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-full border border-royal-gold/30 bg-royal-gold/5 flex items-center justify-center text-royal-gold shrink-0">
                  <Mail size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.32em] text-champagne-gold/70 font-subheading mb-2">
                    Email
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-base md:text-lg font-heading text-cream-marble hover:text-royal-gold transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-full border border-royal-gold/30 bg-royal-gold/5 flex items-center justify-center text-royal-gold shrink-0">
                  <MapPin size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.32em] text-champagne-gold/70 font-subheading mb-2">
                    Visit Us
                  </span>
                  <address className="not-italic">
                    <a
                      href={contactInfo.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base md:text-lg font-heading text-cream-marble hover:text-royal-gold transition-colors leading-relaxed block max-w-xs mx-auto"
                    >
                      {contactInfo.address.line1}
                      <br />
                      {contactInfo.address.city}
                    </a>
                  </address>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-5 mt-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-background transition-colors duration-300 text-xs font-button uppercase tracking-[0.15em]"
              >
                <FaWhatsapp size={20} />
                Chat on WhatsApp
              </a>
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border border-royal-gold/35 text-royal-gold hover:bg-royal-gold hover:text-background transition-colors duration-300 text-xs font-button uppercase tracking-[0.15em]"
              >
                <FaInstagram size={20} />
                Instagram
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-background/90 border border-royal-gold/20 p-8 sm:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.45)] w-full max-w-2xl mx-auto"
          >
            <span className="pointer-events-none absolute top-0 left-0 w-8 h-8 border-t border-l border-royal-gold/60" />
            <span className="pointer-events-none absolute top-0 right-0 w-8 h-8 border-t border-r border-royal-gold/60" />
            <span className="pointer-events-none absolute bottom-0 left-0 w-8 h-8 border-b border-l border-royal-gold/60" />
            <span className="pointer-events-none absolute bottom-0 right-0 w-8 h-8 border-b border-r border-royal-gold/60" />

            <p className="text-xs uppercase tracking-[0.35em] text-champagne-gold font-subheading mb-10">
              Royal Inquiry
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass} htmlFor="contact-name">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    placeholder="Your name"
                    className={fieldClass}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="contact-phone">
                    Contact Number
                  </label>
                  <input
                    id="contact-phone"
                    required
                    type="tel"
                    placeholder="+91 00000 00000"
                    className={fieldClass}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="contact-email">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  required
                  type="email"
                  placeholder="name@email.com"
                  className={fieldClass}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass} htmlFor="contact-type">
                    Event Category
                  </label>
                  <select
                    id="contact-type"
                    required
                    className={`${fieldClass} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%278%27 viewBox=%270 0 12 8%27%3E%3Cpath fill=%27%23E7D2A2%27 d=%27M1 1l5 5 5-5%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_1rem_center] pr-10`}
                    value={formData.eventType}
                    onChange={(e) =>
                      setFormData({ ...formData, eventType: e.target.value })
                    }
                  >
                    <option value="" disabled className="bg-background text-cream-marble">
                      Select event
                    </option>
                    <option value="wedding" className="bg-background text-cream-marble">
                      Luxury Wedding
                    </option>
                    <option value="corporate" className="bg-background text-cream-marble">
                      Corporate Gala
                    </option>
                    <option value="activation" className="bg-background text-cream-marble">
                      Brand Activation
                    </option>
                    <option value="private" className="bg-background text-cream-marble">
                      Private Celebration
                    </option>
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="contact-date">
                    Preferred Date
                  </label>
                  <input
                    id="contact-date"
                    type="date"
                    className={`${fieldClass} [color-scheme:dark] cursor-pointer`}
                    value={formData.eventDate}
                    onChange={(e) =>
                      setFormData({ ...formData, eventDate: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="contact-message">
                  Your Vision
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Describe your celebration..."
                  className={`${fieldClass} resize-none min-h-[110px]`}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 font-button text-xs uppercase tracking-[0.2em] text-background bg-gradient-to-r from-soft-gold via-royal-gold to-soft-gold bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 border border-champagne-gold/30 shadow-[0_8px_28px_rgba(212,175,55,0.2)]"
                >
                  <span>Submit Inquiry</span>
                  <Send size={15} strokeWidth={1.75} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Map + Visit panel */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative lg:col-span-3 h-[260px] sm:h-[320px] overflow-hidden border border-royal-gold/20"
          >
            <iframe
              title="Shree Krishna Event Management — Bhubaneswar"
              src={contactInfo.mapEmbedUrl}
              className="absolute inset-0 h-full w-full border-0 grayscale-[25%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="lg:col-span-2 border border-royal-gold/20 bg-background/80 p-7 md:p-9 flex flex-col justify-between gap-8"
          >
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.35em] text-champagne-gold font-subheading block mb-3">
                  Visit The Studio
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-cream-marble leading-tight">
                  Find Us in Bhubaneswar
                </h3>
              </div>

              <div className="space-y-4 text-sm text-secondary-text leading-relaxed">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.28em] text-royal-gold/70 font-subheading mb-1.5">
                    Address
                  </p>
                  <p className="text-cream-marble font-heading text-base">
                    {contactInfo.address.line1}
                    <br />
                    {contactInfo.address.line2}
                    <br />
                    {contactInfo.address.city}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.28em] text-royal-gold/70 font-subheading mb-1.5">
                    Consultation Hours
                  </p>
                  <p className="text-cream-marble font-heading text-base">
                    Mon – Sat · 10:00 AM – 7:00 PM
                    <br />
                    Sunday · By appointment
                  </p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.28em] text-royal-gold/70 font-subheading mb-1.5">
                    Prefer a quick chat?
                  </p>
                  <p className="text-secondary-text text-sm">
                    Call or WhatsApp us — we usually respond within a few hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={contactInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-button-outline text-center py-3.5 text-[11px] w-full"
              >
                Open in Google Maps
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-4 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-background transition-colors text-[11px] font-button uppercase tracking-[0.15em] w-full"
              >
                <FaWhatsapp size={16} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
