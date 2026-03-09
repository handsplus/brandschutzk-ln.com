import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/ui/CTA";

export const metadata: Metadata = createPageMetadata({
  title: "Brandschutz in Köln – Regionale Besonderheiten | H&S+",
  description:
    "Brandschutz in Köln: Behördenanforderungen, typische Risiken in Gewerbe, Industrie, Hotels und Büros. Ihr Überblick für die Region Köln.",
  path: "/brandschutz-koeln",
});

export default function BrandschutzKoelnPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Brandschutz in Köln
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            Regionale Besonderheiten, Behördenanforderungen und typische Risiken – was Sie
            in Köln und Umgebung beachten sollten.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-stone-50" aria-labelledby="regionale-besonderheiten">
        <div className="container-narrow">
          <SectionHeader
            id="regionale-besonderheiten"
            title="Regionale Besonderheiten"
            subtitle="Köln und Umgebung: Struktur, Nutzungen und Anforderungen."
          />
          <div className="prose prose-stone max-w-none text-stone-600">
            <p>
              Köln ist als Wirtschafts- und Kulturstandort vielfältig: Büros, Handel,
              Industrie, Hotels, Gesundheitswesen, Bildung und Wohnimmobilien prägen das
              Bild. Jede Nutzung bringt spezifische brandschutztechnische Anforderungen
              mit sich – von der Bauordnung über den Arbeitsschutz bis zu den Vorgaben der
              Feuerversicherer. Die Bauaufsicht und die Feuerwehr in Köln arbeiten auf
              Grundlage der BauO NRW und der örtlichen Gegebenheiten. Ein regional
              verankerter Brandschutzpartner kennt diese Rahmenbedingungen und kann Sie
              zielgerichtet beraten.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" aria-labelledby="behoerden">
        <div className="container-narrow">
          <SectionHeader
            id="behoerden"
            title="Behördenanforderungen (allgemein)"
            subtitle="Bauaufsicht und Feuerwehr – worauf es ankommt."
          />
          <div className="prose prose-stone max-w-none text-stone-600">
            <p>
              Die Bauaufsicht in Köln überwacht die Einhaltung der Bauordnung NRW bei
              Neu-, Um- und Erweiterungsbauten sowie bei Nutzungsänderungen. Anträge,
              Brandschutzkonzepte und Nachweise werden dort eingereicht und geprüft. Die
              Feuerwehr Köln nimmt unter anderem Brandschauen vor und berät in
              brandschutztechnischen Fragen. Beide Stellen erwarten fachlich fundierte,
              vollständige Unterlagen und eine klare Darstellung der geplanten oder
              bestehenden Maßnahmen. Wir unterstützen Sie bei der Vorbereitung und
              Einreichung sowie bei der Umsetzung von Auflagen.
            </p>
            <p className="mt-4">
              <strong>Hinweis:</strong> Konkrete Ansprechpartner, Formulare und
              Verfahren finden Sie auf den offiziellen Seiten der Stadt Köln bzw. der
              zuständigen Behörden. Wir übernehmen keine behördlichen Aufgaben, sondern
              die fachliche Beratung und Erstellung der erforderlichen Unterlagen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-stone-50" aria-labelledby="risiken">
        <div className="container-narrow">
          <SectionHeader
            id="risiken"
            title="Typische Risiken nach Branchen"
            subtitle="Gewerbe, Industrie, Hotels, Büros, Immobilien – worauf zu achten ist."
          />
          <ul className="space-y-6" role="list">
            <li className="rounded-lg border border-stone-200 bg-white p-6">
              <h3 className="font-semibold text-stone-900">Gewerbe & Industrie</h3>
              <p className="mt-2 text-stone-600">
                Lager, Produktion, Maschinen und oft brennbare oder gefährliche Stoffe
                erfordern eine angepasste Beurteilung von Brand- und Explosionsgefahren,
                ausreichende Löschmittel und klare Evakuierungs- und Rettungswege. Die
                Brandschutzordnung und die Ausbildung von Brandschutzhelfern sind hier
                ebenso Pflicht wie die Abstimmung mit Bauaufsicht und Versicherer.
              </p>
            </li>
            <li className="rounded-lg border border-stone-200 bg-white p-6">
              <h3 className="font-semibold text-stone-900">Hotels & Beherbergung</h3>
              <p className="mt-2 text-stone-600">
                Fremde Nutzer, Nachtbetrieb und hohe Personendichte erfordern
                durchdachte Evakuierungskonzepte, eindeutige Flucht- und Rettungspläne
                und eine gut geschulte Belegschaft. Brandschutzordnungen (Teil A/B/C),
                Alarmierung und regelmäßige Übungen sind unverzichtbar.
              </p>
            </li>
            <li className="rounded-lg border border-stone-200 bg-white p-6">
              <h3 className="font-semibold text-stone-900">Büros & Verwaltung</h3>
              <p className="mt-2 text-stone-600">
                Oft viele Beschäftigte auf mehreren Etagen. Brandschutzordnung,
                Evakuierungskonzept, ausreichend Brandschutzhelfer und Evakuierungsübungen
                sind Standard. Bei Umzügen, Anmietungen oder Nutzungsänderungen sollten
                Brandschutzkonzepte und Fluchtwege frühzeitig geprüft werden.
              </p>
            </li>
            <li className="rounded-lg border border-stone-200 bg-white p-6">
              <h3 className="font-semibold text-stone-900">Immobilien (Mehrfamilienhäuser, Mischnutzung)</h3>
              <p className="mt-2 text-stone-600">
                Bei Neu-, Um- und Erweiterungsbauten sowie Nutzungsänderungen greifen
                die Anforderungen der BauO NRW. Eigentümer und Verwalter müssen
                Brandschutzordnungen, Fluchtwege und ggf. Anlagentechnik (Rauchwarnmelder,
                Löschanlagen) im Blick behalten. Behörden und Feuerversicherer fordern
                oft aktuelle Nachweise und Begehungen.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <CTA
        title="Brandschutz in Köln – wir unterstützen Sie"
        description="Ob erste Einschätzung oder konkrete Leistung: Sprechen Sie mit uns."
        buttonLabel="Erstberatung anfordern"
        buttonHref="/kontakt"
        variant="filled"
      />
    </>
  );
}
