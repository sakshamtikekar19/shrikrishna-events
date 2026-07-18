import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/jsonld";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 md:mb-10 flex justify-center">
      <ol className="flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-subheading text-secondary-text/70 text-center">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden className="text-royal-gold/40">
                  /
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className="text-royal-gold">
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
