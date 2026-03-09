import Link from "next/link";
import { cn } from "@/lib/utils";

export interface LeistungsTeaserItem {
  title: string;
  description: string;
  href?: string;
}

export interface LeistungsTeaserProps {
  items: LeistungsTeaserItem[];
  /** Link zur vollständigen Leistungsseite */
  moreHref?: string;
  moreLabel?: string;
  className?: string;
}

/**
 * Teaser-Karten für Leistungen mit optionalem Link zur Detailseite.
 */
export function LeistungsTeaser({
  items,
  moreHref = "/leistungen",
  moreLabel = "Alle Leistungen ansehen",
  className,
}: LeistungsTeaserProps) {
  return (
    <section className={cn("py-16 sm:py-20", className)} aria-labelledby="leistungen-teaser-title">
      <div className="container-wide">
        <h2 id="leistungen-teaser-title" className="sr-only">
          Unsere Leistungen im Überblick
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const content = (
              <>
                <h3 className="font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{item.description}</p>
                {item.href && (
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-brand-red">
                    Mehr erfahren
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                )}
              </>
            );
            const cardClass =
              "rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-brand-red focus-within:ring-offset-2";
            if (item.href) {
              return (
                <Link key={item.title} href={item.href} className={cardClass}>
                  {content}
                </Link>
              );
            }
            return (
              <div key={item.title} className={cardClass}>
                {content}
              </div>
            );
          })}
        </div>
        {moreHref && (
          <div className="mt-10 text-center">
            <Link
              href={moreHref}
              className="inline-flex items-center font-medium text-brand-red hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
            >
              {moreLabel}
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
