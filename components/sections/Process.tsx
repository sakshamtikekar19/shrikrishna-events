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
    <section id="process" className="py-28 md:py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-royal-gold font-subheading text-[10px] uppercase tracking-[0.5em] mb-4 block">
            The Masterpiece Journey
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-cream-marble">
            Our Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-items-center">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: Math.min(idx * 0.05, 0.2) }}
              className="w-full border border-royal-gold/15 bg-background-secondary/60 p-8 md:p-10 group hover:border-royal-gold/35 transition-colors duration-300 text-center"
            >
              <span className="text-royal-gold/40 font-heading text-3xl md:text-4xl font-bold block mb-5 group-hover:text-royal-gold/70 transition-colors">
                {step.number}
              </span>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-cream-marble mb-4 group-hover:text-royal-gold transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-secondary-text text-sm md:text-[15px] leading-relaxed mx-auto max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
