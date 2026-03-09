import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  /** Überschrift der Sektion */
  title: string;
  /** Optionaler Untertitel / Teaser */
  subtitle?: string;
  /** Ausrichtung: links (default) oder zentriert */
  align?: "left" | "center";
  /** Optionale CSS-Klassen */
  className?: string;
  /** HTML-Element für die Überschrift (h2, h3 …) */
  as?: "h2" | "h3";
  /** Optional: ID für aria-labelledby der umgebenden Section */
  id?: string;
}

/**
 * Einheitlicher Section-Header für konsistente Abschnittsüberschriften.
 */
export function SectionHeader({
  title,
  subtitle,
  align = "left",
  className,
  as: Tag = "h2",
  id,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "mb-8 md:mb-10",
        align === "center" && "text-center",
        className
      )}
    >
      <Tag id={id} className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
        {title}
      </Tag>
      {subtitle && (
        <p className={cn(
          "mt-2 text-stone-600 sm:text-lg",
          align === "center" && "mx-auto max-w-2xl"
        )}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
