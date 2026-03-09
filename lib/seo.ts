import type { Metadata } from "next";

const siteUrl = "https://brandschutzköln.com";

export interface PageSeoOptions {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

/** Erzeugt Metadata inkl. Open Graph für eine Seite. */
export function createPageMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: PageSeoOptions): Metadata {
  const url = path ? `${siteUrl}${path}` : siteUrl;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      locale: "de_DE",
      type: "website",
      siteName: "Brandschutz Köln – H&S+",
    },
    alternates: path ? { canonical: url } : undefined,
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}

export { siteUrl };
