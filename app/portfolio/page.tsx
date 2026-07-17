import type { Metadata } from "next";
import { Portfolio } from "@/components/sections/Portfolio";
import { FeaturedVideos } from "@/components/sections/FeaturedVideos";
import { PageHeader } from "@/components/seo/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata, PAGES } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata(PAGES.portfolio);

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/portfolio/" },
];

export default function PortfolioPage() {
  const page = PAGES.portfolio;

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
        ]}
      />
      <article className="pb-8">
        <PageHeader
          title="Event Gallery & Portfolio"
          description="Luxury weddings, corporate galas, brand launches, and stage décor by Shree Krishna Event Management in Bhubaneswar, Odisha."
          breadcrumbs={breadcrumbs}
        />
        <Portfolio />
        <FeaturedVideos />
      </article>
    </>
  );
}
