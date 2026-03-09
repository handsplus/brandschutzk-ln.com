import { Hero } from "@/components/ui/Hero";
import { LeistungsTeaser } from "@/components/ui/LeistungsTeaser";
import { CTA } from "@/components/ui/CTA";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { getLeistungenTeaser } from "@/content/leistungen";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE } from "@/lib/constants";

export default function HomePage() {
  const teaserItems = getLeistungenTeaser();

  return (
    <>
      <Hero
        variant="dark"
        badges={[SITE.heroBadge1, SITE.heroBadge2]}
        title="Brandschutz Köln für Ihr Unternehmen und Bauvorhaben"
        titleHighlight="für Ihr Unternehmen und Bauvorhaben"
        description="Professionelle Brandschutz-Leistungen gemäß BauO NRW, ArbSchG und ASR A2.2 in Köln und Umgebung. Wir sorgen für Sicherheit, Rechtskonformität und einen reibungslosen Betrieb."
        ctaLabel="Kostenlose Erstberatung"
        ctaHref="/kontakt"
        secondaryCtaLabel="Unsere Leistungen"
        secondaryCtaHref="/leistungen"
        showContactStrip
        asH1
      />

      {/* Warum professioneller Brandschutz */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="warum-brandschutz">
        <div className="container-narrow">
          <SectionHeader
            id="warum-brandschutz"
            title="Warum professioneller Brandschutz unverzichtbar ist"
            align="center"
            subtitle="Rechtssicherheit, Personenschutz und Werterhalt – mit dem richtigen Partner an Ihrer Seite."
          />
          <div className="prose prose-stone mx-auto max-w-3xl text-stone-600">
            <p>
              Brandschutz ist gesetzliche Pflicht und unternehmerische Verantwortung zugleich.
              Die Bauordnung, der Arbeitsschutz und die Anforderungen der Feuerversicherer
              verlangen klare Konzepte, dokumentierte Abläufe und geschulte Mitarbeiter.
              Ein professioneller Brandschutzpartner unterstützt Sie dabei, alle Anforderungen
              zu erfüllen – ohne böse Überraschungen bei Begehungen, Versicherungen oder im
              Ernstfall. In Köln und Umgebung setzen wir genau dort an: mit Expertise,
              regionaler Kenntnis und dem Fokus auf Ihre Sicherheit.
            </p>
          </div>
        </div>
      </section>

      {/* Leistungen-Teaser */}
      <LeistungsTeaser
        items={teaserItems}
        moreHref="/leistungen"
        moreLabel="Alle Leistungen ansehen"
      />

      {/* Vertrauenselemente */}
      <section className="py-16 sm:py-20 bg-stone-50" aria-labelledby="vertrauen">
        <div className="container-wide">
          <SectionHeader
            id="vertrauen"
            title="Ihr Partner für Brandschutz in Köln"
            subtitle="Erfahrung, Fachkompetenz und regionale Verankerung – dafür steht H&S+."
            align="center"
          />
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" role="list">
            <li className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-stone-900">Erfahrung</h3>
              <p className="mt-2 text-stone-600">
                Langjährige Praxis in Brandschutzkonzepten, Brandschutzordnungen und
                Schulungen – für Gewerbe, Industrie, Büros, Hotels und Immobilien.
              </p>
            </li>
            <li className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-stone-900">Fachkompetenz</h3>
              <p className="mt-2 text-stone-600">
                BauO NRW, ArbSchG, ASR A2.2, DGUV und Vorgaben der Feuerversicherer –
                wir kennen die Regeln und setzen sie verständlich und umsetzbar um.
              </p>
            </li>
            <li className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-stone-900">Regionale Verankerung</h3>
              <p className="mt-2 text-stone-600">
                Köln und Umgebung sind unser Fokus. Wir kennen die örtlichen Behörden,
                typischen Anforderungen und unterstützen Sie vor Ort.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Google-Bewertungen: 5 Sterne, Beispiel, Link zu weiteren Bewertungen */}
      <ReviewsSection />

      <CTA
        title="Jetzt kostenlose Erstberatung sichern"
        description="Lassen Sie sich unverbindlich beraten. Wir finden die passende Brandschutz-Lösung für Ihr Unternehmen – professionell und zuverlässig."
        buttonLabel="Erstberatung anfordern"
        buttonHref="/kontakt"
        variant="accent"
      />
    </>
  );
}
