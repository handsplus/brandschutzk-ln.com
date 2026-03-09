"use client";

import { useState } from "react";

/** Formspree: feste Form-URL für Brandschutzköln (https://formspree.io/f/xeeregjo) */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeeregjo";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    setStatus("loading");
    const form = e.currentTarget;
    const honey = (form.querySelector('[name="website"]') as HTMLInputElement)?.value?.trim();
    if (honey) {
      setStatus("success");
      form.reset();
      return;
    }
    const formData = new FormData(form);
    formData.delete("website");
    formData.append("_replyto", (formData.get("email") as string) ?? "");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        errors?: { message?: string }[];
      };
      // Formspree: HTTP 200 = Erfolg (Antwort-Body kann unterschiedlich sein)
      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }
      const errMsg =
        data.error ??
        (Array.isArray(data.errors) ? data.errors.map((e) => e.message).filter(Boolean).join(", ") : null) ??
        "Das Formular konnte nicht gesendet werden.";
      setStatus("error");
      setErrorMessage(errMsg || "Das Formular konnte nicht gesendet werden.");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Netzwerkfehler. Bitte senden Sie die Nachricht per E-Mail an uns oder versuchen Sie es später erneut.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      action={FORMSPREE_ENDPOINT}
      method="POST"
      className="space-y-6"
      noValidate
    >
      {/* Honeypot (Spam-Schutz): sollte leer bleiben */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-stone-700">
          Name <span className="text-brand-red">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          autoComplete="name"
          disabled={status === "loading"}
          aria-required="true"
          className="mt-1 block w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900 shadow-sm focus:border-brand-red focus:outline focus:ring-1 focus:ring-brand-red disabled:opacity-60"
        />
      </div>
      <div>
        <label htmlFor="contact-company" className="block text-sm font-medium text-stone-700">
          Unternehmen
        </label>
        <input
          id="contact-company"
          type="text"
          name="company"
          autoComplete="organization"
          disabled={status === "loading"}
          className="mt-1 block w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900 shadow-sm focus:border-brand-red focus:outline focus:ring-1 focus:ring-brand-red disabled:opacity-60"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-stone-700">
          E-Mail <span className="text-brand-red">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          disabled={status === "loading"}
          aria-required="true"
          aria-invalid={status === "error" && !!errorMessage}
          aria-describedby={status === "error" && errorMessage ? "contact-error" : undefined}
          className="mt-1 block w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900 shadow-sm focus:border-brand-red focus:outline focus:ring-1 focus:ring-brand-red disabled:opacity-60"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-stone-700">
          Telefon
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          disabled={status === "loading"}
          className="mt-1 block w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900 shadow-sm focus:border-brand-red focus:outline focus:ring-1 focus:ring-brand-red disabled:opacity-60"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-stone-700">
          Nachricht <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          disabled={status === "loading"}
          aria-required="true"
          className="mt-1 block w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900 shadow-sm focus:border-brand-red focus:outline focus:ring-1 focus:ring-brand-red disabled:opacity-60"
        />
      </div>

      {status === "error" && errorMessage && (
        <p id="contact-error" className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
      {status === "success" && (
        <p className="text-sm text-green-700" role="status">
          Vielen Dank. Ihre Nachricht wurde gesendet. Wir melden uns in Kürze bei Ihnen.
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-lg bg-brand-red px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-redDark focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 disabled:opacity-60 sm:w-auto"
        >
          {status === "loading" ? "Wird gesendet …" : "Erstberatung anfordern"}
        </button>
      </div>
    </form>
  );
}
