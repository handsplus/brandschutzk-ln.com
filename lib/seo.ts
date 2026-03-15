import type { Metadata } from "next";

const siteUrl = "https://brandschutzköln.com";

export interface PageSeoOptions {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

/** Maximale Länge Meta-Description (empfohlen für Snippets). */
const MAX_DESCRIPTION_LENGTH = 160;

/** Erzeugt Metadata inkl. Open Graph für eine Seite. */
export function createPageMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: PageSeoOptions): Metadata {
  const url = path ? `${siteUrl}${path}` : siteUrl;
  const trimmedDescription =
    description.length > MAX_DESCRIPTION_LENGTH
      ? description.slice(0, MAX_DESCRIPTION_LENGTH - 3).trim() + "…"
      : description;
  return {
    title,
    description: trimmedDescription,
    openGraph: {
      title,
      description: trimmedDescription,
      url,
      locale: "de_DE",
      type: "website",
      siteName: "Brandschutz Köln – H&S+",
    },
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}

export { siteUrl };
