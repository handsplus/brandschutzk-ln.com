import { siteUrl } from "@/lib/seo";
import { HOMEPAGE_FAQ } from "@/content/faq";

/**
 * FAQPage JSON-LD für die Startseite – kann Rich Snippets (FAQ) in Suchergebnissen auslösen.
 */
export function FaqJsonLd() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOMEPAGE_FAQ.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
    />
  );
}
