import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { FaqSection } from "@/components/seo/FaqSection";
import { PageHeader } from "@/components/seo/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata, PAGES } from "@/lib/seo";
import {
  breadcrumbSchema,
  contactPageSchema,
  faqSchema,
  webPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata(PAGES.contact);

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact/" },
];

export default function ContactPage() {
  const page = PAGES.contact;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: page.title,
            description: page.description,
            path: page.path,
          }),
          breadcrumbSchema(breadcrumbs),
          contactPageSchema(),
          faqSchema(),
        ]}
      />
      <article className="pb-8">
        <PageHeader
          title="Contact Our Bhubaneswar Event Team"
          description="Call +91 93373 00540 or visit Plot No 1970/7731, Third Floor, Kesura, Mangrajpoint, Near Indira Basanti Complex, Bhubaneswar, Odisha 751006."
          breadcrumbs={breadcrumbs}
        />
        <Contact />
        <FaqSection />
      </article>
    </>
  );
}
