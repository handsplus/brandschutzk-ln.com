import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/ui/CTA";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata({
  title: "Über uns – Brandschutz Köln | Health and Safety +",
  description:
    "Health and Safety + (H&S+) ist Ihr Spezialist für Brandschutz in Köln. Mission, Werte und Verantwortung – erfahren Sie, warum wir die richtige Wahl für Ihren Brandschutz sind.",
  path: "/ueber-uns",
});

export default function UeberUnsPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Über uns
          </h1>
          <p className="mt-4 text-lg text-brand-red font-medium">
            Ihr Spezialist für Brandschutz in Köln
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-stone-50" aria-labelledby="vorstellung">
        <div className="container-narrow">
          <SectionHeader
            id="vorstellung"
            title={`${SITE.name} als Brandschutz-Spezialist`}
            subtitle="Eine Marke, ein Fokus: Brandschutz in Köln und Umgebung."
          />
          <div className="prose prose-stone max-w-none text-stone-600">
            <p>
              {SITE.name} ({SITE.shortName}) ist die Marke für professionellen Brandschutz in Köln.
              Wir konzentrieren uns ausschließlich auf die Sparte Brandschutz – von der
              Beratung über Konzepte und Brandschutzordnungen bis zur Ausbildung von
              Brandschutzhelfern und der Begleitung bei behördlichen Anforderungen. Damit
              sind wir kein Generalist, sondern Ihr fachlicher Partner, wenn es um
              Sicherheit, Rechtskonformität und praxisnahe Lösungen geht.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" aria-labelledby="mission">
        <div className="container-narrow">
          <SectionHeader
            id="mission"
            title="Mission, Werte und Verantwortung"
            subtitle="Wofür wir stehen und wie wir arbeiten."
          />
          <ul className="space-y-8" role="list">
            <li>
              <h3 className="font-semibold text-stone-900">Mission</h3>
              <p className="mt-2 text-stone-600">
                Wir wollen dazu beitragen, dass Unternehmen und Immobilien in Köln und
                Umgebung brandschutzrechtlich sicher und rechtssicher betrieben werden.
                Dafür liefern wir verständliche, umsetzbare Konzepte und Schulungen – ohne
                unnötige Komplexität, aber mit dem nötigen Expertenniveau.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-stone-900">Werte</h3>
              <p className="mt-2 text-stone-600">
                Fachlichkeit, Verlässlichkeit und Klarheit stehen bei uns im Mittelpunkt.
                Wir orientieren uns an anerkannten Regeln (BauO NRW, ArbSchG, ASR, DGUV,
                VdS) und kommunizieren so, dass Sie als Auftraggeber entscheiden können –
                mit allen relevanten Informationen und ohne versteckte Risiken.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-stone-900">Verantwortung</h3>
              <p className="mt-2 text-stone-600">
                Brandschutz ist Personenschutz und Werterhalt. Wir nehmen diese
                Verantwortung ernst: in der Qualität unserer Leistungen, in der
                Aktualität unserer Kenntnisse und in der Zusammenarbeit mit Behörden,
                Planern und Versicherern. Unser Ziel ist, dass Sie sich auf uns verlassen
                können – in der Planung wie im Ernstfall.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-stone-50" aria-labelledby="beste-wahl">
        <div className="container-narrow">
          <SectionHeader
            id="beste-wahl"
            title="Warum H&S+ die beste Wahl in Köln ist"
            subtitle="Regionale Expertise, klarer Fokus und Ihr Nutzen."
          />
          <div className="prose prose-stone max-w-none text-stone-600">
            <p>
              In Köln und Umgebung gibt es viele Anbieter für Sicherheitsthemen. Wir
              unterscheiden uns durch unseren klaren Fokus auf Brandschutz: Keine
              Mischung aus Arbeitssicherheit, Umweltschutz und Brandschutz in einem
              Guss, sondern tiefe Expertise genau in dem Bereich, den Sie brauchen. Dazu
              kommt die regionale Verankerung – wir kennen die Anforderungen der
              Bauaufsicht und der Feuerwehr in der Region und unterstützen Sie bei der
              Umsetzung vor Ort. Wenn Sie einen Partner suchen, der Brandschutz
              verständlich, rechtssicher und praxisnah umsetzt, sind Sie bei uns richtig.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Sprechen Sie mit uns"
        description="Wir freuen uns auf Ihre Fragen und Ihr Anliegen."
        buttonLabel="Kontakt aufnehmen"
        buttonHref="/kontakt"
        variant="filled"
      />
    </>
  );
}
