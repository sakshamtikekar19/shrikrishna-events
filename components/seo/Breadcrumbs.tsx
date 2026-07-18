import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/jsonld";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-4 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-subheading text-secondary-text/50">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-4">
              {index > 0 && (
                <span aria-hidden className="text-royal-gold/20">
                  •
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className="text-royal-gold/80">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="hover:text-royal-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-gold focus-visible:outline-offset-4"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
