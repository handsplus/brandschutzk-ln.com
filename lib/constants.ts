/** Zentrale Konstanten für die Website (Daten von sigeko.koeln / H&S+) */

export const SITE = {
  name: "Health and Safety +",
  shortName: "H&S+",
  tagline: "Brandschutz Köln – Brandschutz beginnt mit Expertise.",
  domain: "brandschutzköln.com",
  region: "Köln und Umgebung",
  /** Zwei kleine Badges im Hero (mit Symbol, (VdS) bei beiden) */
  heroBadge1: "Zertifizierter Brandschutzbeauftragter (VdS)",
  heroBadge2: "Zertifizierter Brandschutzmanager (VdS)",
  /** Link zu Google-Bewertungen (H&S+ / Brandschutz Köln) */
  googleReviewsUrl:
    "https://www.google.com/search?q=Health+and+Safety+%2B+%7C+Arbeitsschutz+%26+Brandschutz+K%C3%B6ln+Rezensionen&tbm=lcl",
  /** Dachmarke / Unternehmenswebsite für Vertrauen und Sichtbarkeit */
  groupWebsite: "https://www.handsplus.de",
} as const;

/** Externe Links – Partner, Dachmarken und thematisch passende Angebote (sinnvoll verlinkt). */
export const EXTERNAL_LINKS = [
  { url: "https://www.handsplus.de", label: "H&S+ – handsplus.de", description: "Dachmarke Arbeitsschutz & Brandschutz" },
  { url: "https://www.sigeko.koeln", label: "SIGEKO Köln", description: "Sicherheit & Gesundheit Köln" },
  { url: "https://www.arbeitssicherheit.nrw", label: "Arbeitssicherheit NRW", description: "Landesportal Arbeitssicherheit" },
  { url: "https://www.arbeitssicherheitkoeln.de", label: "Arbeitssicherheit Köln", description: "Arbeitssicherheit in Köln" },
] as const;

/** Reihenfolge der Websites in der Fußzeile (Überschrift „Websites“). */
export const FOOTER_WEBSITES = [
  { href: "https://www.sigeko.koeln", label: "www.sigeko.koeln", external: true },
  { href: "https://www.handsplus.de", label: "www.handsplus.de", external: true },
  { href: "https://www.arbeitssicherheit.nrw", label: "www.arbeitssicherheit.nrw", external: true },
  { href: "/", label: "www.brandschutzkoeln.com", external: false },
  { href: "https://www.arbeitssicherheitkoeln.de", label: "www.arbeitssicherheitkoeln.de", external: true },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/brandschutz-koeln", label: "Brandschutz in Köln" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

/** Kontaktdaten (wie sigeko.koeln) */
export const CONTACT = {
  email: "kontakt@handsplus.de",
  phone: "0152 282 61619",
  phoneTel: "+4915228261619",
  address: "Barcelona-Allee 12",
  addressZipCity: "51103 Köln",
  whatsApp: "https://wa.me/4915228261619",
} as const;

/** Impressum / Angaben gemäß § 5 TMG (wie sigeko.koeln) */
export const LEGAL = {
  owner: "Amin Korkae",
  addressStreet: "Barcelona-Allee 12",
  addressZip: "51103",
  addressCity: "Köln",
} as const;
