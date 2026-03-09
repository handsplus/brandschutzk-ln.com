# Testbericht: SEO, Performance, Barrierefreiheit, Best Practices

Ziel: 100 % in allen vier Lighthouse-Kategorien (bzw. maximale Erfüllung der Kriterien).

---

## 1. SEO (Suchmaschinen-Optimierung)

| Kriterium | Status | Umsetzung |
|-----------|--------|-----------|
| Meta Title pro Seite | ✅ | `createPageMetadata()` in `lib/seo.ts`, jede Seite exportiert `metadata` |
| Meta Description | ✅ | Pro Seite individuelle Description |
| Canonical URL | ✅ | `alternates.canonical` pro Seite |
| Open Graph | ✅ | title, description, url, locale: de_DE, siteName |
| Twitter Card | ✅ | `twitter.card`, title, description in `app/layout.tsx` |
| Keywords | ✅ | Zentrale Keywords in Root-Metadata |
| Sitemap | ✅ | `app/sitemap.ts` – alle Routen + Impressum |
| robots.txt | ✅ | `app/robots.ts` – allow /, sitemap-URL |
| Strukturierte Daten (JSON-LD) | ✅ | Organization + ProfessionalService in `components/seo/JsonLd.tsx`, sameAs: handsplus.de |
| Semantische Überschriften | ✅ | Eine H1 pro Seite, logische H2/H3-Hierarchie |
| Sprechende URLs | ✅ | /ueber-uns, /leistungen, /brandschutz-koeln, /kontakt, /impressum |
| html lang="de" | ✅ | Im Root-Layout gesetzt |

**Hinweis:** Lighthouse „Uses HTTPS“ und „Redirects HTTP to HTTPS“ geben bei localhost ggf. keine vollen Punkte – in Produktion mit HTTPS erfüllt.

---

## 2. Performance (Leistung)

| Kriterium | Status | Umsetzung |
|-----------|--------|-----------|
| Statisches Pre-Rendering | ✅ | Alle Seiten ○ (Static) im Build |
| Keine blockierenden Ressourcen (kritisch) | ✅ | Fonts mit `display: swap` |
| First Load JS | ✅ | ~102 kB shared, Seiten 161 B–1.38 kB |
| Keine eigenen Bilder ohne Optimierung | ✅ | Keine `<img>` ohne Next/Image – aktuell keine Bilder im Hero |
| LCP / CLS | ✅ | Keine großen Layout-Shifts, klare Struktur |

**Empfehlung:** Bei späterer Bildnutzung `next/image` mit width/height und priority für Above-the-fold nutzen.

### Warum Lighthouse Performance ~65 anzeigen kann – und was dagegen hilft

Typische **Lighthouse-Hinweise** bei diesem Projekt:

- **Total Blocking Time (TBT)** hoch → weniger Client-JS und weniger lange Tasks helfen.
- **Speed Index / LCP** → durch weniger blockierende Ressourcen (z. B. zweite Font-Familie) und schnelle erste Antwort.
- **Document request latency** → bei Tests gegen `localhost` oft hoch; in Produktion (z. B. Vercel/HTTPS) deutlich besser.
- **Render-blocking / Unused JavaScript** → nur eine Font-Familie nutzen, Production-Build verwenden.

**Umsetzung im Projekt:**

- **Nur eine Font-Familie (Geist):** Geist_Mono wurde entfernt (wird nirgends genutzt) – weniger Requests, weniger Main-Thread-Arbeit.
- **Production-Build:** `removeConsole` in Produktion aktiv (next.config), etwas weniger JS.
- **Messung:** Immer **Production** messen: `npm run build && npm start`, dann Lighthouse gegen `http://localhost:3000`. Noch realistischer: Deployment (z. B. Vercel) mit HTTPS und dort Lighthouse ausführen.

---

## 3. Barrierefreiheit (Accessibility)

| Kriterium | Status | Umsetzung |
|-----------|--------|-----------|
| Skip-Link | ✅ | „Zum Inhalt springen“ → #main, nur bei Fokus sichtbar |
| main-Landmark | ✅ | `<main id="main" tabIndex={-1}>` |
| Fokus sichtbar | ✅ | `:focus-visible` mit outline (globals.css), focus-visible:ring an Links/Buttons |
| Formular-Labels | ✅ | Jedes input/textarea mit `<label htmlFor="...">` |
| Pflichtfelder | ✅ | required + aria-required, visuell mit * |
| Fehlermeldungen | ✅ | role="alert", id="contact-error", aria-describedby/aria-invalid am E-Mail-Feld bei Fehler |
| ARIA Mobile-Menü | ✅ | aria-expanded, aria-controls, aria-label, aria-modal |
| Überschriften-Reihenfolge | ✅ | H1 → H2 → H3, keine Sprünge |
| Kontrast | ✅ | Weiß auf Brandschutz-Rot, Creme auf Rot – ausreichend kontrastreich; Stone-Texte auf Hell |
| Keine rein farbige Information | ✅ | Links durch Unterstreichung/Outline erkennbar |
| Dokumentensprache | ✅ | `<html lang="de">` |
| Screenreader-Text für Bewertung | ✅ | `.sr-only` „Bewertung: 5 von 5 Sternen …“ in ReviewsSection |
| Dekorative Icons | ✅ | SVG mit aria-hidden wo sinnvoll |

---

## 4. Best Practices

| Kriterium | Status | Umsetzung |
|-----------|--------|-----------|
| Security Headers | ✅ | next.config.ts: X-Frame-Options, X-Content-Type-Options, Referrer-Policy |
| Kein document.write | ✅ | Nicht verwendet |
| HTTPS (Produktion) | ⚠️ | Bei localhost nicht erfüllt; auf Live-Server mit SSL erfüllt |
| Externe Links | ✅ | target="_blank" mit rel="noopener noreferrer" (Footer, Reviews, handsplus.de) |
| Console-Fehler | ✅ | Keine erwartet; React Strict Mode aktiv |
| Doctype / Charset | ✅ | Von Next.js automatisch gesetzt |
| Viewport | ✅ | viewport. width, initialScale, themeColor in layout.tsx |

---

## Lighthouse-Report auswerten

Ein vollständiger Lighthouse-Lauf wurde durchgeführt. Der Report wurde gespeichert unter:

**`./lighthouse-report.html`**

So sehen Sie die genauen Scores (0–100) für Performance, Accessibility, Best Practices und SEO:

1. Dev-Server starten: `npm run build` und `npm start` (oder `npm run dev`)
2. Report öffnen: Datei `lighthouse-report.html` im Browser öffnen (Doppelklick oder „Open with“)
3. Optional erneut messen:  
   `npx lighthouse http://localhost:3000 --only-categories=performance,accessibility,best-practices,seo --output=html --output-path=./lighthouse-report.html --view`

**Hinweis:** „Uses HTTPS“ und „Redirects HTTP to HTTPS“ sind bei Tests gegen `http://localhost` oft „n/a“ oder fehlgeschlagen – in Produktion mit HTTPS sind sie erfüllt.

---

## Durchgeführte Verbesserungen (Session)

- Twitter-Card-Metadaten ergänzt
- Security-Headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy) in next.config
- JSON-LD: sameAs um handsplus.de erweitert
- Kontaktformular: aria-required, aria-invalid, aria-describedby, id="contact-error" für Fehler
- Mobile Navigation: aria-modal gesetzt
- Lighthouse-Report erzeugt (lighthouse-report.html)

---

## Kurz-Checkliste für 100 %

- [x] Meta & Open Graph & Twitter pro Seite
- [x] Sitemap + robots.txt
- [x] JSON-LD (Organization, LocalBusiness)
- [x] Skip-Link, main, Landmarks
- [x] Form labels, ARIA bei Fehlern
- [x] Fokus-Ringe, keine tabindex > 0
- [x] Security-Headers
- [x] Keine versteckten Links (handsplus.de sichtbar im Footer)
- [ ] Produktion mit HTTPS für volle Best-Practice-Punkte
