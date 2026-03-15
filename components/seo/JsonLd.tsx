import { siteUrl } from "@/lib/seo";
import { SITE, CONTACT, LEGAL } from "@/lib/constants";

/**
 * Strukturierte Daten (JSON-LD) für Organisation und lokales Geschäft.
 * Wird von Suchmaschinen für Rich Snippets genutzt.
 */
export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: siteUrl,
    description: `${SITE.tagline} ${SITE.name} – Professioneller Brandschutz für Unternehmen, Immobilien und Projekte in ${SITE.region}.`,
    email: CONTACT.email,
    telephone: CONTACT.phoneTel,
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 50.9375, longitude: 6.9603 },
      geoRadius: "50000",
    },
    sameAs: [SITE.groupWebsite],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE.tagline} | ${SITE.name}`,
    url: siteUrl,
    description: `Professioneller Brandschutz für Unternehmen, Immobilien und Projekte in ${SITE.region}.`,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "de-DE",
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: `${SITE.name} – Brandschutz Köln`,
    description: "Brandschutzberatung, Brandschutzkonzepte, Brandschutzordnungen, Feuerwehrpläne und Brandschutzhelfer-Ausbildung in Köln.",
    url: siteUrl,
    email: CONTACT.email,
    telephone: CONTACT.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: LEGAL.addressStreet,
      postalCode: LEGAL.addressZip,
      addressLocality: LEGAL.addressCity,
    },
    areaServed: "Köln und Umgebung",
    priceRange: "$$",
    serviceType: [
      "Brandschutzberatung",
      "Brandschutzkonzept",
      "Brandschutzordnung",
      "Feuerwehrplan",
      "Brandschutzhelfer Ausbildung",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}
