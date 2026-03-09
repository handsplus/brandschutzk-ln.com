import Link from "next/link";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/constants";

export interface HeroProps {
  /** Hauptüberschrift (z. B. H1) */
  title: string;
  /** Optional: Teil der Headline, der hervorgehoben wird (auf rotem Grund: Creme) */
  titleHighlight?: string;
  /** Untertitel / Subheadline */
  subtitle?: string;
  /** Optionaler Fließtext unter der Subheadline (wie im Referenz-Layout) */
  description?: string;
  /** CTA-Button: Text (z. B. "Kostenlose Erstberatung →") */
  ctaLabel?: string;
  /** CTA-Button: Link (default: /kontakt) */
  ctaHref?: string;
  /** Zweiter CTA-Button (z. B. "Unsere Leistungen") */
  secondaryCtaLabel?: string;
  /** Link für zweiten CTA (default: /leistungen) */
  secondaryCtaHref?: string;
  /** Einzelner Badge-Text (falls nur einer) */
  badge?: string;
  /** Zwei kleine Badges (Brandschutzbeauftragter, Brandschutzmanager) – kompakt wie Referenz */
  badges?: [string, string];
  /** Kontaktzeile unter dem Hero (Telefon, E-Mail, WhatsApp) */
  showContactStrip?: boolean;
  /** "dark" = roter Hintergrund, weiße Schrift (1:1 wie Referenz) */
  variant?: "light" | "dark";
  className?: string;
  asH1?: boolean;
}

/**
 * Hero 1:1 wie Referenz: roter Hintergrund, weiße Schrift, Badge, 2 Buttons, Kontaktzeile.
 */
export function Hero({
  title,
  titleHighlight,
  subtitle,
  description,
  ctaLabel = "Kostenlose Erstberatung",
  ctaHref = "/kontakt",
  secondaryCtaLabel = "Unsere Leistungen",
  secondaryCtaHref = "/leistungen",
  badge,
  badges,
  showContactStrip = true,
  variant = "light",
  className,
  asH1 = true,
}: HeroProps) {
  const isRedBg = variant === "dark";
  const HeadingTag = asH1 ? "h1" : "h2";

  const headlineContent = titleHighlight ? (
    <>
      {title.split(titleHighlight)[0]}
      <span className={isRedBg ? "text-heroHighlight" : "text-brand-red"}>{titleHighlight}</span>
      {title.split(titleHighlight)[1]}
    </>
  ) : (
    title
  );

  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 sm:py-20 lg:py-28",
        isRedBg ? "bg-brand-red text-white" : "bg-gradient-to-b from-stone-50 to-white",
        className
      )}
      aria-labelledby="hero-title"
    >
      <div className={cn("container-narrow", isRedBg ? "text-left" : "text-center")}>
        {/* Zwei kleine Badge-Kästchen (kompakt wie Referenz) oder ein einzelner Badge */}
        {badges && badges.length >= 2 ? (
          <div className="mb-8 flex flex-wrap gap-2">
            {badges.map((label) => (
              <span
                key={label}
                className={cn(
                  "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium",
                  isRedBg
                    ? "border-white/40 bg-white/15 text-white shadow-sm"
                    : "border-stone-200 bg-stone-100 text-stone-700"
                )}
              >
                {label}
              </span>
            ))}
          </div>
        ) : badge ? (
          <div
            className={cn(
              "mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium",
              isRedBg
                ? "border-white/30 bg-white/10 text-white"
                : "border-stone-200 bg-stone-100 text-stone-700"
            )}
          >
            <svg
              className="h-5 w-5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 010-4.438 3.42 3.42 0 001.946-.806 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            {badge}
          </div>
        ) : null}

        {/* Hauptüberschrift – sehr groß, fett, Teil hervorgehoben */}
        <HeadingTag
          id="hero-title"
          className={cn(
            "text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl",
            isRedBg ? "text-white" : "text-stone-900"
          )}
        >
          {headlineContent}
        </HeadingTag>
        {subtitle && (
          <p className={cn("mt-4 text-lg font-medium sm:text-xl", isRedBg ? "text-white" : "text-brand-red")}>
            {subtitle}
          </p>
        )}
        {description && (
          <p
            className={cn(
              "mt-6 max-w-2xl text-base leading-relaxed sm:text-lg",
              isRedBg ? "text-white/95" : "mx-auto mt-6 text-stone-600"
            )}
          >
            {description}
          </p>
        )}

        {/* Zwei Buttons wie Referenz: Primär hell, Sekundär dunkler */}
        <div className="mt-10 flex flex-wrap gap-4">
          {ctaLabel && (
            <Link
              href={ctaHref}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold shadow-sm focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-red",
                isRedBg
                  ? "bg-white text-brand-red hover:bg-stone-100 focus-visible:ring-white"
                  : "bg-brand-red text-white hover:bg-brand-redDark focus-visible:ring-brand-red"
              )}
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </Link>
          )}
          {secondaryCtaLabel && (
            <Link
              href={secondaryCtaHref}
              className={cn(
                "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2",
                isRedBg
                  ? "bg-black/25 text-white hover:bg-black/35 focus-visible:ring-offset-brand-red focus-visible:ring-white/40"
                  : "border-2 border-stone-300 bg-transparent text-stone-700 hover:bg-stone-100 focus-visible:ring-stone-400"
              )}
            >
              {secondaryCtaLabel}
            </Link>
          )}
        </div>

        {/* Kontaktzeile unten – Telefon, E-Mail, WhatsApp wie Referenz */}
        {isRedBg && showContactStrip && (
          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/25 pt-10">
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="flex items-center gap-3 text-white hover:text-heroHighlight focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-heroHighlight focus-visible:ring-offset-2 focus-visible:ring-offset-brand-red"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs font-medium text-white/80">Telefon</span>
                <span className="font-medium">{CONTACT.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 text-white hover:text-heroHighlight focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-heroHighlight focus-visible:ring-offset-2 focus-visible:ring-offset-brand-red"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs font-medium text-white/80">E-Mail</span>
                <span className="font-medium">{CONTACT.email}</span>
              </span>
            </a>
            <a
              href={CONTACT.whatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-heroHighlight focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-heroHighlight focus-visible:ring-offset-2 focus-visible:ring-offset-brand-red"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs font-medium text-white/80">WhatsApp</span>
                <span className="font-medium">Chat starten</span>
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
