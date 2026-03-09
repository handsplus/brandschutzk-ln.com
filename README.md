# brandschutzköln.com – Next.js Projekt

Website für **Brandschutz Köln** der Marke **Health and Safety + (H&S+)**.  
Next.js (App Router), TypeScript, Tailwind CSS, SEO-optimiert, barrierearm.

## Technischer Stack

- **Next.js** (aktuelle Version, App Router)
- **TypeScript**
- **Tailwind CSS** (inkl. Typography-Plugin)
- **clsx** + **tailwind-merge** für Komponenten-Styling

## Struktur

```
├── app/
│   ├── layout.tsx          # Root-Layout, Metadaten, Skip-Link, JsonLd
│   ├── page.tsx            # Startseite
│   ├── ueber-uns/
│   ├── leistungen/
│   ├── brandschutz-koeln/
│   ├── kontakt/            # inkl. Server Action für Formular
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
├── components/
│   ├── layout/             # Header, Footer, Navigation
│   ├── ui/                 # Hero, SectionHeader, CTA, LeistungsTeaser
│   ├── forms/              # ContactForm
│   └── seo/                # JsonLd
├── content/
│   └── leistungen.ts       # Alle 17 Leistungen (Daten + Teaser)
└── lib/
    ├── constants.ts        # SITE, NAV_LINKS, CONTACT
    ├── seo.ts              # createPageMetadata, siteUrl
    └── utils.ts            # cn()
```

## Entwicklung

```bash
npm install
npm run dev
```

Öffnen: [http://localhost:3000](http://localhost:3000)

## Build & Start

```bash
npm run build
npm start
```

## SEO

- Pro Seite: `createPageMetadata()` für Title, Description, Open Graph, Canonical.
- JSON-LD: Organisation + ProfessionalService in `components/seo/JsonLd.tsx`.
- Sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`
- Keywords: Brandschutz Köln, Brandschutzkonzept Köln, Brandschutzberatung Köln, Brandschutzhelfer Ausbildung Köln, Feuerwehrplan Köln.

## Barrierefreiheit

- Skip-Link „Zum Inhalt springen“
- Semantische Überschriften (h1 pro Seite, dann h2/h3)
- Fokus-Ringe (`:focus-visible`), ausreichende Kontraste
- Formular: Labels, Pflichtfelder, Fehlermeldungen (role="alert")

## Kontaktformular

Die Server Action `app/kontakt/actions.ts` verarbeitet das Formular. Für E-Mail-Versand in Produktion z. B. Resend, SendGrid oder ein Backend anbinden und den TODO in `submitContactForm` ersetzen.

## Domain

- Konfiguration: `lib/constants.ts` (domain, email), `lib/seo.ts` (siteUrl).
- Domain: **brandschutzköln.com**
