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
    <header className="pt-32 sm:pt-48 pb-12 md:pb-20">
      <div className="premium-container flex flex-col">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="leading-[1.1] max-w-5xl mt-6">
          {title}
        </h1>
        {description ? (
          <p className="mt-8 md:mt-10 max-w-luxury opacity-80">
            {description}
          </p>
        ) : null}
        <p className="mt-12 text-[11px] uppercase tracking-[0.4em] font-subheading text-royal-gold/60">
          <Link
            href="/contact/"
            className="hover:text-royal-gold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-gold focus-visible:outline-offset-8 border-b border-royal-gold/20 pb-1 hover:border-royal-gold"
          >
            Book a consultation in Bhubaneswar →
          </Link>
        </p>
      </div>
    </header>
  );
}
