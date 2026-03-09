import Link from "next/link";
import { Navigation } from "./Navigation";
import { SITE } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container-wide flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-stone-900 focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
          aria-label={`${SITE.name} – Startseite`}
        >
          <span className="text-brand-red">{SITE.shortName}</span>
          <span className="hidden sm:inline">· Brandschutz Köln</span>
        </Link>

        {/* Desktop-Navigation */}
        <div className="hidden md:block">
          <Navigation />
        </div>

        {/* Mobile: Menü (ohne Client-JS) */}
        <details className="group relative md:hidden">
          <summary
            className="inline-flex h-10 w-10 list-none items-center justify-center rounded-md text-stone-600 hover:bg-stone-100 hover:text-stone-900 focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden"
            aria-label="Menü öffnen oder schließen"
          >
            <svg
              className="h-6 w-6 group-open:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="hidden text-xl font-bold group-open:block" aria-hidden="true">
              ×
            </span>
          </summary>

          <div className="absolute right-0 top-12 w-[min(22rem,calc(100vw-2rem))] rounded-xl border border-stone-200 bg-white p-3 shadow-lg">
            <Navigation className="sm:[&>ul]:flex-col sm:[&>ul]:gap-1" />
          </div>
        </details>
      </div>
    </header>
  );
}
