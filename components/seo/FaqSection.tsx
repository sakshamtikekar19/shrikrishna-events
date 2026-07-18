import { FAQS } from "@/lib/jsonld";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding bg-background border-t border-royal-gold/10"
    >
      <div className="premium-container max-w-4xl">
        <header className="text-center mb-16 md:mb-20">
          <p className="text-royal-gold font-subheading text-xs sm:text-sm uppercase tracking-[0.6em] mb-4">
            Frequently Asked Questions
          </p>
          <h2
            id="faq-heading"
            className="text-cream-marble leading-[1.2]"
          >
            Event Planning FAQs
          </h2>
          <p className="mt-6 max-w-luxury mx-auto opacity-80 text-[16px] md:text-[18px]">
            Common questions about wedding planning, corporate events, and
            event rentals with Shree Krishna Event Management in Bhubaneswar.
          </p>
        </header>

        <div className="space-y-4 md:space-y-6">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group border border-royal-gold/20 bg-background-secondary/40 open:border-royal-gold/40 rounded-[12px] transition-all duration-500"
            >
              <summary className="cursor-pointer list-none px-6 sm:px-10 min-h-[72px] flex items-center justify-between gap-4 font-heading text-lg sm:text-xl text-cream-marble focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-gold focus-visible:outline-offset-[-4px] rounded-[12px]">
                <span>{faq.question}</span>
                <span
                  aria-hidden
                  className="text-royal-gold shrink-0 transition-transform duration-500 group-open:rotate-45 text-2xl leading-none"
                >
                  +
                </span>
              </summary>
              <div className="px-6 sm:px-10 pb-8 text-secondary-text leading-relaxed text-[15px] md:text-[17px] max-w-[95%]">
                <p className="opacity-75">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
