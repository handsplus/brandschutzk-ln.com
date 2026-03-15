import Link from "next/link";
import { NAV_LINKS, SITE, CONTACT, FOOTER_WEBSITES } from "@/lib/constants";

const linkBase =
  "transition-colors duration-200 focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900";

const sectionHeading =
  "text-xs font-semibold uppercase tracking-widest text-stone-400 after:mt-2 after:block after:h-px after:w-8 after:bg-brand-red after:content-['']";

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-red/20 bg-stone-950 text-stone-300">
      <div className="container-wide py-14 md:py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Marke, Adresse, Websites – E-Mail nur unter Kontakt */}
          <div className="lg:col-span-2">
            <p className="text-lg font-semibold tracking-tight text-white">
              <span className="text-brand-red">{SITE.shortName}</span>
              <span className="text-stone-400"> · </span>
              Brandschutz Köln
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-400">
              {SITE.name} – Ihr spezialisierter Partner für Brandschutz in Köln und Umgebung.
              Rechtskonform, praxisnah, verantwortungsvoll.
            </p>
            <p className="mt-5 text-sm text-stone-400">
              {CONTACT.address}, {CONTACT.addressZipCity}
            </p>
            <div className="mt-8">
              <h3 className={sectionHeading}>Websites</h3>
              <ul className="mt-2 flex flex-col gap-1 text-xs text-stone-600" role="list">
                {FOOTER_WEBSITES.map((item) =>
                  item.external ? (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-stone-600 hover:text-stone-500 ${linkBase}`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ) : (
                    <li key={item.label}>
                      <Link href={item.href} className={`text-stone-600 hover:text-stone-500 ${linkBase}`}>
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Seiten */}
          <div>
            <h3 className={sectionHeading}>Seiten</h3>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm text-stone-400" role="list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={`hover:text-white ${linkBase}`}>
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/impressum" className={`hover:text-white ${linkBase}`}>
                  Impressum & Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt – E-Mail, Telefon, WhatsApp (einzige Stelle für Kontaktdaten) */}
          <div>
            <h3 className={sectionHeading}>Kontakt</h3>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm text-stone-400" role="list">
              <li>
                <a href={`mailto:${CONTACT.email}`} className={`inline-flex items-center gap-2 text-stone-400 hover:text-white ${linkBase}`}>
                  <IconMail className="h-4 w-4 shrink-0 opacity-70" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneTel}`} className={`inline-flex items-center gap-2 text-stone-400 hover:text-white ${linkBase}`}>
                  <IconPhone className="h-4 w-4 shrink-0 opacity-70" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-stone-400 hover:text-[#25D366] ${linkBase}`}
                >
                  <IconWhatsApp className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-stone-800 pt-8 text-center text-sm text-stone-500">
          <p>© {currentYear} {SITE.name}. Alle Rechte vorbehalten.</p>
          <p className="mt-2">
            <a
              href={SITE.groupWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-stone-500 hover:text-stone-300 ${linkBase}`}
            >
              {SITE.name} – handsplus.de
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
