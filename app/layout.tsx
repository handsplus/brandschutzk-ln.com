import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const defaultMetadata = createPageMetadata({
  title: "Brandschutz Köln – Sicherheit beginnt mit Expertise | H&S+",
  description:
    "Professioneller Brandschutz für Unternehmen, Immobilien und Projekte in Köln. Brandschutzkonzepte, Brandschutzordnungen, Feuerwehrpläne und Brandschutzhelfer-Ausbildung – von Ihrem Spezialisten in Köln.",
  path: "/",
});

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL("https://brandschutzköln.com"),
  applicationName: SITE.name,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  keywords: [
    "Brandschutz Köln",
    "Brandschutzkonzept Köln",
    "Brandschutzberatung Köln",
    "Brandschutzhelfer Ausbildung Köln",
    "Feuerwehrplan Köln",
    "Brandschutzordnung",
    "Evakuierungskonzept",
  ],
  authors: [{ name: SITE.name, url: "https://brandschutzköln.com" }],
  creator: SITE.name,
  formatDetection: { telephone: false, email: false },
  twitter: {
    card: "summary_large_image",
    title: "Brandschutz Köln – Sicherheit beginnt mit Expertise | H&S+",
    description: "Professioneller Brandschutz für Unternehmen, Immobilien und Projekte in Köln.",
  },
};

export const viewport: Viewport = {
  themeColor: "#9B2423", /* RAL 3000 Feuerrot (DIN Brandschutz) */
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={geistSans.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-brand-red focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Zum Inhalt springen
        </a>
        <JsonLd />
        <Header />
        <main id="main" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
