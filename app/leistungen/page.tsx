import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/ui/CTA";
import { LEISTUNGEN } from "@/content/leistungen";

export const metadata: Metadata = createPageMetadata({
  title: "Leistungen – Brandschutz Köln | H&S+",
  description:
    "Brandschutzkonzepte, Brandschutzordnungen, Feuerwehrpläne, Brandschutzhelfer-Ausbildung und mehr. Alle Leistungen im Überblick – von H&S+ in Köln.",
  path: "/leistungen",
});

export default function LeistungenPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Leistungen
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            Unser Leistungsspektrum im Brandschutz – von der Konzepterstellung bis zur
            Schulung und Begleitung vor Ort.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-stone-50" aria-labelledby="leistungen-ueberblick">
        <div className="container-wide">
          <SectionHeader
            id="leistungen-ueberblick"
            title="Alle Brandschutz-Leistungen im Überblick"
            subtitle="Jede Leistung mit Kurzbeschreibung, Nutzen, Rechtsgrundlagen, Ablauf und Ergebnis."
          />
          <ul className="space-y-12" role="list">
            {LEISTUNGEN.map((leistung) => (
              <li
                key={leistung.id}
                id={leistung.id}
                className="scroll-mt-24 rounded-xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">
                  {leistung.title}
                </h2>
                <p className="mt-3 text-stone-600">{leistung.description}</p>

                <h3 className="mt-6 font-semibold text-stone-900">Nutzen für Sie</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-stone-600" role="list">
                  {leistung.nutzen.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>

                {leistung.rechtsgrundlagen && leistung.rechtsgrundlagen.length > 0 && (
                  <>
                    <h3 className="mt-6 font-semibold text-stone-900">Rechtliche Grundlagen</h3>
                    <p className="mt-2 text-stone-600">
                      {leistung.rechtsgrundlagen.join(", ")}
                    </p>
                  </>
                )}

                {leistung.ablauf && leistung.ablauf.length > 0 && (
                  <>
                    <h3 className="mt-6 font-semibold text-stone-900">Typischer Ablauf</h3>
                    <ol className="mt-2 list-decimal space-y-1 pl-5 text-stone-600" role="list">
                      {leistung.ablauf.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ol>
                  </>
                )}

                <h3 className="mt-6 font-semibold text-stone-900">Ergebnis / Output</h3>
                <p className="mt-2 text-stone-600">{leistung.ergebnis}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        title="Passende Leistung für Ihr Anliegen?"
        description="Wir beraten Sie gern unverbindlich – ob Konzept, Ordnung, Plan oder Schulung."
        buttonLabel="Erstberatung anfordern"
        buttonHref="/kontakt"
        variant="filled"
      />
    </>
  );
}
