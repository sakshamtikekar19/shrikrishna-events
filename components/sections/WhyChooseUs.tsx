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
    <section id="why-choose-us" className="py-28 md:py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-royal-gold font-subheading text-[10px] uppercase tracking-[0.5em] mb-4 block">
            The Shree Krishna Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-cream-marble">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.16) }}
              className="border border-royal-gold/15 bg-background-secondary/50 p-8 md:p-10 group hover:border-royal-gold/35 transition-colors duration-300"
            >
              <div className="w-12 h-12 mb-7 border border-royal-gold/25 flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-background transition-colors duration-300">
                <reason.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-cream-marble mb-4 group-hover:text-royal-gold transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-secondary-text text-sm md:text-[15px] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
