import Link from "next/link";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/constants";

export interface CTAProps {
  /** Überschrift im CTA-Bereich */
  title: string;
  /** Kurzer Beschreibungstext */
  description?: string;
  /** Button-Text (z. B. „Erstberatung anfordern“) */
  buttonLabel: string;
  /** Button-Link (default: /kontakt) */
  buttonHref?: string;
  /** Optionale CSS-Klassen für den äußeren Container */
  className?: string;
  /** Variante: filled (Brandschutz-Rot), accent (dunkel + Rot DIN), outline */
  variant?: "filled" | "accent" | "outline";
  /** Zusätzliche Buttons wie bei sigeko.koeln: Jetzt anrufen, WhatsApp */
  showPhone?: boolean;
  showWhatsApp?: boolean;
}

/**
 * Call-to-Action-Bereich – Farben nach DIN (Brandschutz-Rot).
 * Optional: Telefon- und WhatsApp-Buttons.
 */
export function CTA({
  title,
  description,
  buttonLabel,
  buttonHref = "/kontakt",
  className,
  variant = "filled",
  showPhone = true,
  showWhatsApp = true,
}: CTAProps) {
  const isFilled = variant === "filled";
  const isAccent = variant === "accent";
  const isDark = isFilled || isAccent;
  const textMuted = isDark ? "text-white/90" : "text-stone-600";

  const sectionBg = isAccent
    ? "bg-hero-bg text-white"
    : isFilled
      ? "bg-brand-red text-white"
      : "bg-stone-100 text-stone-900";

  const primaryButtonClass = isAccent
    ? "bg-brand-red text-white hover:bg-brand-redDark focus-visible:ring-brand-red"
    : isFilled
      ? "bg-white text-brand-red hover:bg-stone-100 focus-visible:ring-white"
      : "bg-brand-red text-white hover:bg-brand-redDark focus-visible:ring-brand-red";

  const secondaryButtonClass = isAccent
    ? "border-white/40 text-white hover:bg-white/10 focus-visible:ring-white/30"
    : isFilled
      ? "border-white text-white hover:bg-white/10 focus-visible:ring-white"
      : "border-brand-red text-brand-red hover:bg-brand-red/5 focus-visible:ring-brand-red";

  return (
    <section
      className={cn("py-16 sm:py-20", sectionBg, className)}
      aria-labelledby="cta-title"
    >
      <div className="container-narrow text-center">
        <h2 id="cta-title" className="text-2xl font-bold sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className={cn("mx-auto mt-4 max-w-xl text-lg", textMuted)}>
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={buttonHref}
            className={cn(
              "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2",
              primaryButtonClass
            )}
          >
            {buttonLabel}
          </Link>
          {showPhone && (
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className={cn(
                "inline-flex items-center justify-center rounded-lg border-2 px-6 py-3 text-base font-semibold focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2",
                secondaryButtonClass
              )}
            >
              Jetzt anrufen
            </a>
          )}
          {showWhatsApp && (
            <a
              href={CONTACT.whatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center rounded-lg border-2 px-6 py-3 text-base font-semibold focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2",
                secondaryButtonClass
              )}
            >
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
