import Link from "next/link";
import { NAV_LINKS, SITE, CONTACT } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-300">
      <div className="container-wide py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Marke & Adresse (wie sigeko.koeln) */}
          <div className="lg:col-span-2">
            <p className="font-semibold text-white">
              {SITE.shortName} · Brandschutz Köln
            </p>
            <p className="mt-2 max-w-md text-sm">
              {SITE.name} – Ihr spezialisierter Partner für Brandschutz in Köln und Umgebung.
              Rechtskonform, praxisnah, verantwortungsvoll.
            </p>
            <p className="mt-3 text-sm">
              <a
                href={SITE.groupWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
              >
                {SITE.groupWebsite.replace(/^https?:\/\//, "")}
              </a>
            </p>
            <p className="mt-4 text-sm">
              {CONTACT.address}, {CONTACT.addressZipCity}
              <br />
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-brand-redLight hover:text-white focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
              >
                {CONTACT.email}
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Seiten
            </h3>
            <ul className="mt-4 flex flex-col gap-2" role="list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/impressum"
                  className="text-sm hover:text-white focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
                >
                  Impressum & Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt: Telefon, WhatsApp */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Kontakt
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm" role="list">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-white focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="hover:text-white focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-700 pt-8 text-center text-sm text-stone-400">
          <p>© {currentYear} {SITE.name}. Alle Rechte vorbehalten.</p>
          <p className="mt-1">
            <a
              href={SITE.groupWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
            >
              {SITE.name} – handsplus.de
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
