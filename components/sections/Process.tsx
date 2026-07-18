"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery",
    description:
      "We start by understanding your divine vision through in-depth personal consultations at our heritage studio.",
    number: "01",
  },
  {
    title: "Planning",
    description:
      "Meticulous heritage planning of every exquisite detail, from global venue selection to bespoke logistics.",
    number: "02",
  },
  {
    title: "Design",
    description:
      "Creative masterpieces that bring your event's unique theme to breathtaking life using royal motifs.",
    number: "03",
  },
  {
    title: "Production",
    description:
      "Premium technical production including world-class sound, cinematic lighting, and royal stagecraft.",
    number: "04",
  },
  {
    title: "Execution",
    description:
      "On-site precision management to ensure every single second runs perfectly according to the divine plan.",
    number: "05",
  },
  {
    title: "Celebrate",
    description:
      "The final transcendent moment where you enjoy your extraordinary event while we handle the legacy.",
    number: "06",
  },
];

export const Process = () => {
  return (
    <section id="process" className="section-padding bg-background relative overflow-hidden">
      <div className="premium-container">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-royal-gold font-subheading text-xs sm:text-sm uppercase tracking-[0.6em] mb-4 block">
            The Masterpiece Journey
          </span>
          <h2 className="text-cream-marble leading-[1.2]">
            Our Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.4) }}
              className="premium-card group hover:border-royal-gold/30 transition-all duration-500 p-8 sm:p-10"
            >
              <span className="text-royal-gold/30 font-heading text-3xl md:text-4xl font-bold block mb-6 group-hover:text-royal-gold/60 transition-colors">
                {step.number}
              </span>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-cream-marble mb-4 group-hover:text-royal-gold transition-colors duration-300">
                {step.title}
              </h3>
              <p className="opacity-70 text-[15px] md:text-[17px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
