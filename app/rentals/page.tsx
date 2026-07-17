import type { Metadata } from "next";
import { Rentals } from "@/components/sections/Rentals";
import { PageHeader } from "@/components/seo/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata, PAGES } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata(PAGES.rentals);

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Rentals", path: "/rentals/" },
];

export default function RentalsPage() {
  const page = PAGES.rentals;

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
            name: "LED Wall & Event Equipment Rentals",
            description: page.description,
            path: page.path,
          }),
        ]}
      />
      <article className="pb-8">
        <PageHeader
          title="LED Wall, Lighting & Stage Rentals in Bhubaneswar"
          description="Premium LED walls, concert lighting, sound systems, stage setup, and event furniture rentals for weddings and corporate productions across Odisha."
          breadcrumbs={breadcrumbs}
        />
        <Rentals />
      </article>
    </>
  );
}
