import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { PageHeader } from "@/components/seo/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata, PAGES } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata(PAGES.about);

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about/" },
];

export default function AboutPage() {
  const page = PAGES.about;

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
          title="About Shree Krishna Event Management"
          description="A luxury event management company in Bhubaneswar crafting premium weddings, corporate celebrations, and divine experiences across Odisha."
          breadcrumbs={breadcrumbs}
        />
        <About />
      </article>
    </>
  );
}
