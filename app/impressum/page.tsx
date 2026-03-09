import { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { SITE, CONTACT, LEGAL } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata({
  title: "Impressum & Datenschutz | H&S+ Brandschutz Köln",
  description:
    "Impressum und Datenschutzhinweise – Health and Safety +, Brandschutz Köln. Angaben gemäß § 5 TMG.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Impressum & Datenschutz
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-stone-50" aria-labelledby="impressum">
        <div className="container-narrow prose prose-stone max-w-none">
          <h2 id="impressum" className="text-2xl font-bold text-stone-900">
            Impressum
          </h2>
          <h3 className="mt-6 text-lg font-semibold text-stone-900">
            Angaben gemäß § 5 TMG
          </h3>
          <p className="mt-2 text-stone-600">
            <strong>{SITE.name}</strong>
            <br />
            Inhaber: {LEGAL.owner}
            <br />
            {LEGAL.addressStreet}
            <br />
            {LEGAL.addressZip} {LEGAL.addressCity}
          </p>

          <h3 className="mt-8 text-lg font-semibold text-stone-900">Kontakt</h3>
          <p className="mt-2 text-stone-600">
            Telefon:{" "}
            <a href={`tel:${CONTACT.phoneTel}`} className="text-brand-red hover:underline">
              {CONTACT.phone}
            </a>
            <br />
            E-Mail:{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-brand-red hover:underline">
              {CONTACT.email}
            </a>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" aria-labelledby="datenschutz">
        <div className="container-narrow prose prose-stone max-w-none">
          <h2 id="datenschutz" className="text-2xl font-bold text-stone-900">
            Datenschutzerklärung
          </h2>

          <h3 className="mt-6 text-lg font-semibold text-stone-900">
            1. Datenschutz auf einen Blick
          </h3>
          <h4 className="mt-4 font-medium text-stone-900">Allgemeine Hinweise</h4>
          <p className="mt-2 text-stone-600">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
            identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz
            entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>

          <h4 className="mt-4 font-medium text-stone-900">
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </h4>
          <p className="mt-2 text-stone-600">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
            Dessen Kontaktdaten können Sie dem Abschnitt „Impressum“ auf dieser Seite
            entnehmen.
          </p>

          <h4 className="mt-4 font-medium text-stone-900">Wie erfassen wir Ihre Daten?</h4>
          <p className="mt-2 text-stone-600">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
            Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular
            eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
            Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
            technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
            Seitenaufrufs).
          </p>

          <h4 className="mt-4 font-medium text-stone-900">Wofür nutzen wir Ihre Daten?</h4>
          <p className="mt-2 text-stone-600">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
            Website zu gewährleisten. Andere Daten können zur Analyse Ihres
            Nutzerverhaltens verwendet werden.
          </p>

          <h4 className="mt-4 font-medium text-stone-900">
            Welche Rechte haben Sie bezüglich Ihrer Daten?
          </h4>
          <p className="mt-2 text-stone-600">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser
            Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
            haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
            Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung
            der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren
            steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-stone-900">
            2. Verantwortliche Stelle
          </h3>
          <p className="mt-2 text-stone-600">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="mt-2 text-stone-600">
            {SITE.name}
            <br />
            {LEGAL.owner}
            <br />
            {LEGAL.addressStreet}
            <br />
            {LEGAL.addressZip} {LEGAL.addressCity}
            <br />
            Telefon: {CONTACT.phone}
            <br />
            E-Mail: {CONTACT.email}
          </p>

          <h3 className="mt-8 text-lg font-semibold text-stone-900">Speicherdauer</h3>
          <p className="mt-2 text-stone-600">
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer
            genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck
            für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen
            geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
            werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen
            Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
          </p>

          <p className="mt-8 text-sm text-stone-500">
            <Link href="/" className="text-brand-red hover:underline">
              ← Zurück zur Startseite
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
