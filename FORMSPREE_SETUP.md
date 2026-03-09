# Formspree: Kontaktformular → E-Mail an kontakt@handsplus.de

## 1. Formular in Formspree anlegen / Form-ID holen

1. Öffne [Formspree Projekt-Einstellungen](https://formspree.io/projects/2953482170783497469/settings).
2. Unter dem Projekt **ein Formular anlegen** (falls noch keins existiert) oder ein bestehendes öffnen.
3. **Form-ID kopieren**: Beim Formular steht der Endpoint z. B. `https://formspree.io/f/abc123xy` – die **Form-ID** ist der Teil nach `/f/` (z. B. `abc123xy`).

## 2. E-Mail-Empfänger in Formspree setzen

- Im Formular unter **Emails** / **Notifications** die Empfänger-Adresse auf **kontakt@handsplus.de** setzen (und speichern).

## 3. Form-ID in Vercel eintragen

- Vercel → Projekt **brandschutzkoeln** → **Settings** → **Environment Variables**
- Variable anlegen:
  - **Name:** `NEXT_PUBLIC_FORMSPREE_FORM_ID`
  - **Wert:** deine Form-ID (z. B. `abc123xy`)
- **Redeploy** auslösen (oder warten bis zum nächsten Deploy), damit die Variable aktiv wird.

Danach werden Absendungen des Kontaktformulars von Formspree an **kontakt@handsplus.de** geschickt; Antworten gehen an die im Formular angegebene E-Mail (_replyto).
