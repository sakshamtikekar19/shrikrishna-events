import { FAQS } from "@/lib/jsonld";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 md:py-28 bg-background border-t border-royal-gold/10"
    >
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
        <header className="text-center mb-12 md:mb-16">
          <p className="text-royal-gold font-subheading text-[10px] uppercase tracking-[0.5em] mb-4">
            Frequently Asked Questions
          </p>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-cream-marble"
          >
            Event Planning FAQs
          </h2>
          <p className="mt-4 text-secondary-text text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Common questions about wedding planning, corporate events, and
            event rentals with Shree Krishna Event Management in Bhubaneswar.
          </p>
        </header>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group border border-royal-gold/15 bg-background-secondary/40 open:border-royal-gold/35 transition-colors"
            >
              <summary className="cursor-pointer list-none px-5 sm:px-6 py-5 flex items-start justify-between gap-4 font-heading text-lg sm:text-xl text-cream-marble focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-gold focus-visible:outline-offset-[-2px]">
                <span>{faq.question}</span>
                <span
                  aria-hidden
                  className="text-royal-gold shrink-0 transition-transform group-open:rotate-45 text-2xl leading-none"
                >
                  +
                </span>
              </summary>
              <div className="px-5 sm:px-6 pb-6 text-secondary-text text-sm sm:text-base leading-relaxed">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
