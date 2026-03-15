import { siteUrl } from "@/lib/seo";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * BreadcrumbList JSON-LD für bessere Suchergebnisse (Breadcrumbs in SERPs).
 */
export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  if (items.length === 0) return null;

  const listItem = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.path === "/" ? siteUrl : `${siteUrl}${item.path}`,
  }));

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: listItem,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
  );
}
