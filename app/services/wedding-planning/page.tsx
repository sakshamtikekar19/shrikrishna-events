import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/seo/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata, PAGES } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata(PAGES.weddingPlanning);

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services/" },
  { name: "Wedding Planning", path: "/services/wedding-planning/" },
];

export default function WeddingPlanningPage() {
  const page = PAGES.weddingPlanning;

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
            name: "Luxury Wedding Planning",
            description: page.description,
            path: page.path,
          }),
        ]}
      />
      <article className="pb-20 md:pb-28">
        <PageHeader
          title="Luxury Wedding Planner in Bhubaneswar"
          description="Destination weddings, heritage celebrations, décor, guest logistics, and flawless on-site execution across Odisha — crafted by Shree Krishna Event Management."
          breadcrumbs={breadcrumbs}
        />
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl space-y-8 text-secondary-text text-sm md:text-base leading-relaxed">
          <section aria-labelledby="wedding-overview">
            <h2
              id="wedding-overview"
              className="text-2xl md:text-3xl font-heading font-bold text-cream-marble mb-4"
            >
              Destination Wedding Planner Odisha
            </h2>
            <p>
              As a luxury wedding planner in Bhubaneswar, we orchestrate
              intimate ceremonies and grand destination weddings with royal
              décor, stage production, artist management, catering consultation,
              and complete guest &amp; RSVP coordination.
            </p>
          </section>
          <section aria-labelledby="wedding-includes">
            <h2
              id="wedding-includes"
              className="text-2xl md:text-3xl font-heading font-bold text-cream-marble mb-4"
            >
              Wedding Planning Includes
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Full wedding planning and destination wedding logistics</li>
              <li>Stage décor, floral design, and venue management</li>
              <li>LED walls, lighting, and professional sound</li>
              <li>Birthday parties and anniversary celebrations</li>
              <li>Artist management and guest hospitality</li>
            </ul>
          </section>
          <p>
            Also explore our{" "}
            <Link href="/services/corporate-events/" className="text-royal-gold hover:underline">
              corporate event management
            </Link>
            ,{" "}
            <Link href="/portfolio/" className="text-royal-gold hover:underline">
              event gallery
            </Link>
            , and{" "}
            <Link href="/contact/" className="text-royal-gold hover:underline">
              contact page
            </Link>{" "}
            to start planning your celebration.
          </p>
        </div>
      </article>
    </>
  );
}
