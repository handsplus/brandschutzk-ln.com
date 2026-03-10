# brandschutzköln.com – Deploy (z. B. Vercel)

Das Projekt ist jetzt ein Git-Repo mit einem Commit. So bringst du es live:

## Option A: Über GitHub + Vercel (empfohlen)

1. **Neues Repository auf GitHub anlegen**
   - https://github.com/new
   - Name z. B. `brandschutzköln` oder `brandschutzköln.com`
   - **Ohne** README/ .gitignore anlegen (es gibt schon welche)
   - Erstellen

2. **Remote hinzufügen und pushen** (in diesem Ordner im Terminal):
   ```bash
   git remote add origin https://github.com/DEIN-BENUTZERNAME/DEIN-REPO-NAME.git
   git branch -M main
   git push -u origin main
   ```
   Ersetze `DEIN-BENUTZERNAME` und `DEIN-REPO-NAME` durch deine GitHub-Daten.

3. **Bei Vercel deployen**
   - https://vercel.com → Login
   - "Add New Project" → "Import Git Repository" → dein GitHub-Repo wählen
   - Framework: **Next.js** (wird erkannt)
   - "Deploy" → Fertig
   - Domain: In den Vercel-Projekt-Settings unter "Domains" z. B. `brandschutzköln.com` eintragen und DNS anpassen (Hinweise gibt Vercel)

Nach jedem `git push` zu `main` baut Vercel automatisch neu und die Seite ist aktuell.

## Option B: Vercel CLI (ohne GitHub)

1. **Vercel CLI installieren und einloggen:**
   ```bash
   npm i -g vercel
   vercel login
   ```

2. **Im Projektordner deployen:**
   ```bash
   vercel
   ```
   Den Anweisungen folgen (Projekt anlegen, Domain bestätigen). Für Produktion:
   ```bash
   vercel --prod
   ```

## Nach dem Deploy

- Kontaktformular nutzt fest **https://formspree.io/f/mnjgpqoq** (Form „BrandschutzKoeln.com“, keine Umgebungsvariable nötig).
- Unter Formspree → Projekt → Settings "Restrict to Domain" auf `brandschutzköln.com` setzen (ohne https://), damit nur deine Seite Formulare senden kann.
