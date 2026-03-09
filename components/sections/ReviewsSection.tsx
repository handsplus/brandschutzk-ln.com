import Link from "next/link";
import { SITE } from "@/lib/constants";

/** 5 Sterne + Beispiel-Zitat + Link zu Google-Bewertungen */
export function ReviewsSection() {
  return (
    <section
      className="py-16 sm:py-20 bg-white border-t border-stone-200"
      aria-labelledby="bewertungen-heading"
    >
      <div className="container-narrow">
        <h2 id="bewertungen-heading" className="text-center text-2xl font-bold text-stone-900 sm:text-3xl">
          Das sagen unsere Kunden
        </h2>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-stone-200 bg-stone-50 p-8 shadow-sm">
          {/* Sterne + Bewertungsstand */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="flex text-2xl text-amber-500" aria-hidden>
              ★★★★★
            </span>
            <span className="text-lg font-semibold text-stone-900">5,0</span>
            <span className="text-stone-500">(42 Bewertungen)</span>
          </div>
          <p className="sr-only">
            Bewertung: 5 von 5 Sternen basierend auf 42 Bewertungen.
          </p>

          {/* Beispiel-Zitat (Brandschutz) */}
          <blockquote className="mt-6 border-l-4 border-brand-red pl-4 text-stone-600 sm:pl-6">
            <p className="italic">
              „Wir haben im Rahmen unserer Baugenehmigung mit der Firma im Bereich Brandschutz
              zusammengearbeitet und sind äußerst zufrieden. Das Team war sehr kompetent,
              zuverlässig und hat uns während des gesamten Prozesses professionell begleitet.
              Absolut empfehlenswert für jedes Bauvorhaben!“
            </p>
            <footer className="mt-3 text-sm text-stone-500">
              — Rashmin Giri, Geschäftsführer 11 Burgers
            </footer>
          </blockquote>

          {/* Link zu weiteren Bewertungen */}
          <div className="mt-8 text-center">
            <Link
              href={SITE.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-redDark focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
            >
              Weitere Bewertungen ansehen
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
            <p className="mt-2 text-xs text-stone-500">
              Bewertungen auf Google für {SITE.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
