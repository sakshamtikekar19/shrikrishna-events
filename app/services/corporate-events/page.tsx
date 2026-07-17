import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/seo/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata, PAGES } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata(PAGES.corporateEvents);

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services/" },
  { name: "Corporate Events", path: "/services/corporate-events/" },
];

export default function CorporateEventsPage() {
  const page = PAGES.corporateEvents;

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
          serviceSchema({
            name: "Corporate Event Management",
            description: page.description,
            path: page.path,
          }),
        ]}
      />
      <article className="pb-20 md:pb-28">
        <PageHeader
          title="Corporate Event Management in Odisha"
          description="Conferences, product launches, brand activations, award nights, and gala dinners — planned and produced in Bhubaneswar with premium technical execution."
          breadcrumbs={breadcrumbs}
        />
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl space-y-8 text-secondary-text text-sm md:text-base leading-relaxed">
          <section aria-labelledby="corp-overview">
            <h2
              id="corp-overview"
              className="text-2xl md:text-3xl font-heading font-bold text-cream-marble mb-4"
            >
              Corporate Event Planner in Bhubaneswar
            </h2>
            <p>
              Shree Krishna Event Management is a trusted corporate event
              management partner in Bhubaneswar and across Odisha. We design and
              deliver brand activations, product launches, conferences, and
              executive celebrations with LED walls, lighting, sound, stage
              setup, and guest management under one roof.
            </p>
          </section>
          <section aria-labelledby="corp-services">
            <h2
              id="corp-services"
              className="text-2xl md:text-3xl font-heading font-bold text-cream-marble mb-4"
            >
              What We Deliver
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Brand activations and experiential campaigns</li>
              <li>Product launches with premium stage production</li>
              <li>Conferences, summits, and award ceremonies</li>
              <li>LED wall rental, lighting, and sound systems</li>
              <li>Artist management and RSVP coordination</li>
            </ul>
          </section>
          <p>
            Looking for a{" "}
            <Link href="/services/wedding-planning/" className="text-royal-gold hover:underline">
              luxury wedding planner
            </Link>{" "}
            or{" "}
            <Link href="/rentals/" className="text-royal-gold hover:underline">
              LED wall rental in Bhubaneswar
            </Link>
            ? Explore our full services or{" "}
            <Link href="/contact/" className="text-royal-gold hover:underline">
              book a consultation
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  );
}
