# Cassandra for Ward 6 - Building Hope

Campaign website for **Cassandra Echeverria**, candidate for Alderperson of Ward 6, Aurora, Illinois.
Primary: **February 23, 2027**. General: April 6, 2027.

Built with Astro and vanilla CSS, bilingual EN/ES with a client-side toggle. Read [BRIEF.md](BRIEF.md) before writing copy or components: it holds the verified facts, the voice guide, the design tokens, and the i18n rules.

## Run it

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run i18n:check # EN/ES parity audit
```

## Pages

| Route | What it is |
|---|---|
| `/` | Hero, her idea in her words, three priorities, why now, get involved |
| `/meet` | Who Cassandra is and why she is running |
| `/priorities` | The three planks in depth, plus how she will work |
| `/why-now` | Same alderman since 1985; what fresh representation brings |
| `/volunteer` | Key dates, petition drive, sign-up form, ways to help, donate |
| `/links` | Linktree-style page for social bios |

## Before launch: things marked `[TO CONFIRM]`

Grep for `TO CONFIRM` in `src/` and `public/`. Currently:

- **Photos of Cassandra.** Hero card and Meet page have dashed placeholders. Drop images into `public/images/` and swap the placeholder blocks.
- **Biography.** Years in Ward 6, work, family, community involvement on `/meet`. Nothing is invented; the blanks are bracketed.
- **Committee name** for "Paid for by" in the footer (`src/i18n/parts/shared.*.json`, `footer.paid_for`).
- **Social handles.** Footer icons point to `#`. Set them in `src/components/Footer.astro` and the Navbar drawer.
- **Volunteer form backend.** The form at `/volunteer#signup` opens a pre-filled email to `auroraforcassandra@gmail.com`. Replace with a Google Form or ActBlue form when one exists (see the TODO comment in `src/components/volunteer/SignupForm.astro`).
- **Petition signature count and drive schedule** on `/volunteer`. The filing window is October 19 to 26, 2026 at the City Clerk.
- **Domain.** Set `site` in `astro.config.mjs` and add `public/CNAME` once the domain is registered.
- **OG image.** `public/images/og-card.png` is the logo on cream. Replace with a photo card when one exists.

## Deploy

Live at https://awaisqazi.github.io/cassandra-for-ward6/. `.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages on every push to `main` (Pages source: GitHub Actions). When a custom domain is registered: set `site` to it and `base` to `/` in `astro.config.mjs`, add `public/CNAME`, and set the domain in the repo Pages settings.

## i18n in one paragraph

Every visible string carries `data-i18n="page.key"`. Each page owns a dictionary pair in `src/i18n/parts/<page>.en.json` and `<page>.es.json`; Vite merges them at build time. The HTML text is the English fallback, the JSON wins at runtime. No child HTML inside a `data-i18n` element. Run `npm run i18n:check` after any copy change.
