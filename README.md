# Comfort Zone Behavioral Health

Responsive React and Vite website for Comfort Zone Behavioral Health, PLLC.

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` folder to a static website host. The build includes HTML entry files for the homepage, Contact, Website Privacy, Privacy Practices, and Terms of Use. Configure the host to serve directory index files.

## Netlify setup

The root `netlify.toml` configures the build command (`npm run build`), publish directory (`dist`), and Node.js version (`24`).

1. Import `erinsebast/comfort-zone-behavioral-health` from GitHub into Netlify.
2. Select `main` as the production branch and leave the base directory blank. The repository root already contains the website.
3. Let Netlify read the build settings from `netlify.toml`.
4. Keep Netlify form detection disabled. The contact form fields, acknowledgments, and submit button remain disabled; no Netlify form integration is configured.
5. After deployment, check `/`, `/contact/`, `/privacy/`, `/privacy-notice/`, and `/terms/` by opening each URL directly and refreshing it.

Each page has its own HTML entry, so do not add a catch-all rewrite to `/index.html`. Domain setup and the first Netlify deployment are separate from this repository configuration.

## Pages

- `/` — homepage with About and Services sections
- `/providers/` — clearly labeled provider profile placeholders
- `/contact/` — practice contact information and form preview
- `/privacy/` — draft website privacy policy
- `/privacy-notice/` — privacy notice information
- `/terms/` — draft website terms

## Current status

The contact form is a disabled preview; submissions are not connected. The homepage appointment button uses the practice phone number. Legal text remains subject to practice review, and the full approved Notice of Privacy Practices still needs to be supplied before public launch.

Source documents, local preview screenshots, environment files, dependencies, and build output are excluded from version control.
