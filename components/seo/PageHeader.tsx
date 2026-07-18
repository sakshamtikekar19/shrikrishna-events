import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import type { BreadcrumbItem } from "@/lib/jsonld";

type PageHeaderProps = {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
};

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <header className="pt-24 sm:pt-28 pb-2 md:pb-4">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-cream-marble leading-tight max-w-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 md:mt-5 text-secondary-text text-sm md:text-base leading-relaxed max-w-2xl">
            {description}
          </p>
        ) : null}
        <p className="mt-6 text-[10px] uppercase tracking-[0.28em] font-subheading text-royal-gold/70">
          <Link
            href="/contact/"
            className="hover:text-royal-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-gold focus-visible:outline-offset-4"
          >
            Book a consultation in Bhubaneswar →
          </Link>
        </p>
      </div>
    </header>
  );
}
