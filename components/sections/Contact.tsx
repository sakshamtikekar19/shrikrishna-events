"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { contactInfo, whatsappHref } from "@/data/contact";

const fieldClass =
  "w-full bg-background-secondary/80 border border-royal-gold/50 rounded-sm px-4 py-3 text-cream-marble text-[15px] font-body placeholder:text-secondary-text/45 focus:outline-none focus:border-royal-gold/80 focus:bg-background-secondary transition-all duration-300";

const labelClass =
  "block text-[10px] uppercase tracking-[0.28em] text-champagne-gold font-subheading mb-2";

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
    
    // Construct WhatsApp message with form details
    const message = `*Royal Inquiry - Shree Krishna Events*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Event:* ${formData.eventType || "Not specified"}\n` +
      `*Date:* ${formData.eventDate || "Not specified"}\n` +
      `*Vision:* ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Reset form after redirect (optional but good UX)
    setFormData({
      name: "",
      phone: "",
      email: "",
      eventType: "",
      eventDate: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-background-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08),transparent_55%)] pointer-events-none" />

      <div className="premium-container max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-12 lg:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-cream-marble leading-[1.1]">
                Book Your{" "}
                <span className="gold-gradient-text italic">Dream</span> Event.
              </h2>
              <p className="max-w-md opacity-80 leading-relaxed text-[16px]">
                From heritage weddings to corporate summits — reach us in
                Bhubaneswar and let&apos;s craft your celebration.
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full border border-royal-gold/20 bg-royal-gold/5 flex items-center justify-center text-royal-gold shrink-0 transition-colors duration-500 group-hover:border-royal-gold/50">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <span className="block text-[10px] uppercase tracking-[0.35em] text-champagne-gold/60 font-subheading">
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
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full border border-royal-gold/20 bg-royal-gold/5 flex items-center justify-center text-royal-gold shrink-0 transition-colors duration-500 group-hover:border-royal-gold/50">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <span className="block text-[10px] uppercase tracking-[0.35em] text-champagne-gold/60 font-subheading">
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
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full border border-royal-gold/20 bg-royal-gold/5 flex items-center justify-center text-royal-gold shrink-0 transition-colors duration-500 group-hover:border-royal-gold/50">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <span className="block text-[10px] uppercase tracking-[0.35em] text-champagne-gold/60 font-subheading">
                    Visit Us
                  </span>
                  <address className="not-italic">
                    <a
                      href={contactInfo.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-base font-heading text-cream-marble hover:text-royal-gold transition-colors leading-relaxed block max-w-sm"
                    >
                      {contactInfo.address.line1}
                      <br />
                      {contactInfo.address.city}
                    </a>
                  </address>
                </div>
              </motion.div>

              <div className="flex flex-wrap items-center gap-3 mt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 h-[48px] border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-background transition-all duration-500 text-[10px] font-button uppercase tracking-[0.2em]"
                >
                  <FaWhatsapp size={16} />
                  WhatsApp
                </a>
                <a
                  href={contactInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 h-[48px] border border-royal-gold/35 text-royal-gold hover:bg-royal-gold hover:text-background transition-all duration-500 text-[10px] font-button uppercase tracking-[0.2em]"
                >
                  <FaInstagram size={16} />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-background/90 border border-royal-gold/25 p-8 sm:p-10 rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          >
            <span className="pointer-events-none absolute top-0 left-0 w-8 h-8 border-t border-l border-royal-gold/40 rounded-tl-[20px]" />
            <span className="pointer-events-none absolute top-0 right-0 w-8 h-8 border-t border-r border-royal-gold/40 rounded-tr-[20px]" />
            <span className="pointer-events-none absolute bottom-0 left-0 w-8 h-8 border-b border-l border-royal-gold/40 rounded-bl-[20px]" />
            <span className="pointer-events-none absolute bottom-0 right-0 w-8 h-8 border-b border-r border-royal-gold/40 rounded-br-[20px]" />

            <p className="text-[10px] uppercase tracking-[0.4em] text-champagne-gold font-subheading mb-8 opacity-60">
              Royal Inquiry
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className={labelClass} htmlFor="contact-name">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    placeholder="Your name"
                    className={`${fieldClass} h-[54px] rounded-[8px]`}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className={labelClass} htmlFor="contact-phone">
                    Contact Number
                  </label>
                  <input
                    id="contact-phone"
                    required
                    type="tel"
                    placeholder="+91 00000 00000"
                    className={`${fieldClass} h-[54px] rounded-[8px]`}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className={labelClass} htmlFor="contact-email">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  required
                  type="email"
                  placeholder="name@email.com"
                  className={`${fieldClass} h-[54px] rounded-[8px]`}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className={labelClass} htmlFor="contact-type">
                    Event Category
                  </label>
                  <select
                    id="contact-type"
                    required
                    className={`${fieldClass} h-[54px] rounded-[8px] cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%278%27 viewBox=%270 0 12 8%27%3E%3Cpath fill=%27%23E7D2A2%27 d=%27M1 1l5 5 5-5%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_1.5rem_center] pr-12`}
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
                <div className="space-y-2">
                  <label className={labelClass} htmlFor="contact-date">
                    Preferred Date
                  </label>
                  <input
                    id="contact-date"
                    type="date"
                    className={`${fieldClass} h-[54px] rounded-[8px] [color-scheme:dark] cursor-pointer`}
                    value={formData.eventDate}
                    onChange={(e) =>
                      setFormData({ ...formData, eventDate: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className={labelClass} htmlFor="contact-message">
                  Your Vision
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Describe your celebration..."
                  className={`${fieldClass} rounded-[8px] resize-none min-h-[140px]`}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="luxury-button w-full gap-3 h-[54px] text-[11px]"
                >
                  <span>Submit Inquiry</span>
                  <Send size={16} strokeWidth={1.75} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Map + Visit panel */}
        <div className="mt-16 md:mt-24 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[280px] sm:h-[350px] overflow-hidden rounded-[20px] border border-royal-gold/15 shadow-lg"
          >
            <iframe
              title="Shree Krishna Event Management — Bhubaneswar"
              src={contactInfo.mapEmbedUrl}
              className="absolute inset-0 h-full w-full border-0 grayscale-[40%] contrast-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
