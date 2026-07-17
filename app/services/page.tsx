import type { Metadata } from "next";
import Link from "next/link";
import { Services } from "@/components/sections/Services";
import { PageHeader } from "@/components/seo/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata, PAGES, SERVICES } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata(PAGES.services);

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services/" },
];

export default function ServicesPage() {
  const page = PAGES.services;

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
            name: "Premium Event Management Services",
            description: page.description,
            path: page.path,
          }),
        ]}
      />
      <article className="pb-8">
        <PageHeader
          title="Event Management Services in Bhubaneswar"
          description="Wedding planning, corporate events, brand activations, destination weddings, LED walls, stage décor, and full event production across Odisha."
          breadcrumbs={breadcrumbs}
        />
        <nav
          aria-label="Featured services"
          className="container mx-auto px-5 sm:px-8 max-w-6xl mb-10 md:mb-14"
        >
          <ul className="flex flex-wrap gap-3 md:gap-4 text-[10px] sm:text-xs uppercase tracking-[0.22em] font-subheading">
            <li>
              <Link
                href="/services/wedding-planning/"
                className="text-royal-gold/80 hover:text-royal-gold border border-royal-gold/25 px-4 py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-gold"
              >
                Wedding Planning
              </Link>
            </li>
            <li>
              <Link
                href="/services/corporate-events/"
                className="text-royal-gold/80 hover:text-royal-gold border border-royal-gold/25 px-4 py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-gold"
              >
                Corporate Events
              </Link>
            </li>
            <li>
              <Link
                href="/rentals/"
                className="text-royal-gold/80 hover:text-royal-gold border border-royal-gold/25 px-4 py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-gold"
              >
                Event Rentals
              </Link>
            </li>
            <li>
              <Link
                href="/contact/"
                className="text-royal-gold/80 hover:text-royal-gold border border-royal-gold/25 px-4 py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-gold"
              >
                Book Consultation
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-secondary-text/80 text-sm leading-relaxed max-w-3xl">
            Our team delivers {SERVICES.slice(0, 8).join(", ")}, and more —
            tailored for luxury celebrations in Bhubaneswar and destination
            events across Odisha.
          </p>
        </nav>
        <Services />
      </article>
    </>
  );
}
