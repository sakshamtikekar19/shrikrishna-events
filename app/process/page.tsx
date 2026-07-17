import type { Metadata } from "next";
import { Process } from "@/components/sections/Process";
import { PageHeader } from "@/components/seo/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata, PAGES } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata(PAGES.process);

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Process", path: "/process/" },
];

export default function ProcessPage() {
  const page = PAGES.process;

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
          title="Our Event Planning Process"
          description="From discovery and creative design to production and on-site execution — how we deliver luxury weddings and corporate events in Bhubaneswar."
          breadcrumbs={breadcrumbs}
        />
        <Process />
      </article>
    </>
  );
}
