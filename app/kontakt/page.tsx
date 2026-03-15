import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata({
  title: "Kontakt",
  description:
    "Unverbindliche Brandschutzberatung anfragen. Kontaktformular und Ansprechpartner für Brandschutz in Köln – H&S+.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Start", path: "/" }, { name: "Kontakt", path: "/kontakt" }]} />
      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Kontakt
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            Kostenlose und unverbindliche Erstberatung – wir melden uns zeitnah bei Ihnen.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-stone-50" aria-labelledby="kontakt-formular">
        <div className="container-narrow">
          <div className="mx-auto max-w-xl">
            <SectionHeader
              id="kontakt-formular"
              title="Erstberatung anfordern"
              subtitle="Füllen Sie das Formular aus. Wir setzen uns mit Ihnen in Verbindung."
            />
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" aria-labelledby="ansprechpartner">
        <div className="container-narrow">
          <SectionHeader
            id="ansprechpartner"
            title="Ansprechpartner"
            subtitle="Sie erreichen uns auch per E-Mail oder Telefon."
          />
          <ul className="space-y-4 text-stone-600" role="list">
            <li>
              <strong className="text-stone-900">E-Mail:</strong>{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-brand-red hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
              >
                {CONTACT.email}
              </a>
            </li>
            <li>
              <strong className="text-stone-900">Telefon:</strong>{" "}
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="text-brand-red hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
              >
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <strong className="text-stone-900">WhatsApp:</strong>{" "}
              <a
                href={CONTACT.whatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-red hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
              >
                Chat starten
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm text-stone-500">
            Optional: Terminbuchung für ein Beratungsgespräch kann auf Wunsch nach
            Kontaktaufnahme vereinbart werden.
          </p>
        </div>
      </section>
    </>
  );
}
