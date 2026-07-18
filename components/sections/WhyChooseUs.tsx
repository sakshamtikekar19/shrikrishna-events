"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Clock, Users, Lightbulb, TrendingUp } from "lucide-react";

const reasons = [
  {
    title: "Tailored Experiences",
    description:
      "Every celebration is uniquely crafted to reflect your personal vision and royal heritage.",
    icon: Target,
  },
  {
    title: "Attention to Detail",
    description:
      "From the grandest palace gates to the smallest flower petal, we ensure divine perfection.",
    icon: ShieldCheck,
  },
  {
    title: "Stress-Free Planning",
    description:
      "Our meticulous heritage planners handle every detail while you celebrate like royalty.",
    icon: Clock,
  },
  {
    title: "Reliable Vendor Network",
    description:
      "Access our elite circle of premium heritage venues, caterers, and luxury decorators.",
    icon: Users,
  },
  {
    title: "Luxury Production",
    description:
      "World-class technical setup including cinematic lighting, sound, and stage fabrication.",
    icon: Lightbulb,
  },
  {
    title: "Creative Excellence",
    description:
      "Our design house creates modern masterpieces inspired by traditional Indian majesty.",
    icon: TrendingUp,
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-background relative overflow-hidden">
      <div className="premium-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-royal-gold font-subheading text-xs sm:text-sm uppercase tracking-[0.6em] mb-4 block">
            The Shree Krishna Advantage
          </span>
          <h2 className="text-cream-marble leading-[1.2]">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.4) }}
              className="premium-card group hover:border-royal-gold/30 transition-all duration-500 p-8 sm:p-10"
            >
              <div className="w-14 h-14 mb-8 border border-royal-gold/20 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-background transition-all duration-500 rounded-xl">
                <reason.icon size={24} strokeWidth={1.25} />
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-cream-marble mb-4 group-hover:text-royal-gold transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="opacity-70 text-[15px] md:text-[17px] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
