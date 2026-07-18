import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { FaqSection } from "@/components/seo/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata, PAGES } from "@/lib/seo";
import { faqSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata(PAGES.home);

export default function Home() {
  const page = PAGES.home;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: page.title,
            description: page.description,
            path: page.path,
          }),
          faqSchema(),
        ]}
      />
      <div className="flex flex-col">
        <Hero />
        <TrustedBy />
        <WhyChooseUs />
        <Services />
        <Process />
        <Testimonials />
        <FaqSection />
        <Contact />
      </div>
    </>
  );
}
