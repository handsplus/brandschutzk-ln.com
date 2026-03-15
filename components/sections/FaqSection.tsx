import { HOMEPAGE_FAQ } from "@/content/faq";

/**
 * FAQ-Bereich auf der Startseite – gut für Nutzer und Page Quality (Inhalt + Schema).
 */
export function FaqSection() {
  return (
    <section
      className="py-16 sm:py-20 bg-stone-50 border-t border-stone-200"
      aria-labelledby="faq-heading"
    >
      <div className="container-narrow">
        <h2
          id="faq-heading"
          className="text-center text-2xl font-bold text-stone-900 sm:text-3xl"
        >
          Häufige Fragen zum Brandschutz in Köln
        </h2>
        <ul className="mt-10 space-y-8" role="list">
          {HOMEPAGE_FAQ.map(({ question, answer }) => (
            <li
              key={question}
              className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold text-stone-900">{question}</h3>
              <p className="mt-3 text-stone-600">{answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
