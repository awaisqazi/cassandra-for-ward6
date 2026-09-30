# Cassandra for Ward 6 - Campaign Site Brief

Single source of truth for facts, voice, and design. Read before writing any copy or component.
Architecture is modeled on the sibling project `/Users/fezqazi/Documents/BSL for Congress` (Astro, vanilla CSS, client-side EN/ES i18n) but the brand, voice, and candidate are entirely different. Do not copy Byron's copy, colors, or "machine vs. movement" framing.

## The race (verified 2026-09-29)

| Fact | Value | Source |
|---|---|---|
| Candidate | **Cassandra Echeverria** | ActBlue page |
| Office | Alderperson, **Ward 6, City of Aurora, Illinois** | ActBlue, aurora.il.us |
| Campaign name / slogan | **Cassandra for Ward 6 - Building Hope** | Logo |
| Core message | **"People should come before power."** | ActBlue |
| Donate | https://secure.actblue.com/donate/cassandrabuildinghope | ActBlue |
| Contact | auroraforcassandra@gmail.com | ActBlue |
| **Consolidated primary: the key date for this campaign** | **Tuesday, February 23, 2027** | aurora.il.us/Elections (listed as "if needed"; the campaign treats it as the decisive first vote) |
| Consolidated general election | **Tuesday, April 6, 2027** | aurora.il.us/Elections |
| Petition filing window | Mon Oct 19 - Mon Oct 26, 2026, City Clerk, 8am-5pm | aurora.il.us/Elections |
| Objection deadline | Mon Nov 2, 2026 | aurora.il.us/Elections |
| Wards on the 2027 ballot | At-Large (1 seat), Wards 1, 3, 5, 6, 8 | aurora.il.us/Elections |

### Her platform, in her words (ActBlue, verbatim - safe to quote)

> "I'm running on a simple idea: People should come before power.
> That means working toward safer neighborhoods through accountability and community-centered public safety. It means making sure our unhoused neighbors and struggling families are not treated as problems to move out of sight, but as people who deserve practical solutions and dignity. It means investing in our neighborhoods, our youth, and the services that help Aurora residents actually thrive.
> This campaign is powered by everyday people, like yourself, and NOT corporations.
> Every contribution helps us reach more Ward 6 residents, communicate our message, organize in our neighborhoods, and build a campaign rooted in the people I'm asking to represent."

Spanish version (also verbatim from ActBlue, use it rather than re-translating):

> "Estoy haciendo campaña con una idea sencilla: las personas deben estar antes que el poder.
> Eso significa trabajar para lograr vecindarios más seguros mediante la rendición de cuentas y una seguridad pública centrada en la comunidad. Significa asegurarnos de que nuestros vecinos que no tienen vivienda y las familias que están pasando por dificultades no sean tratados como problemas que debemos esconder, sino como personas que merecen soluciones reales y dignidad. Significa invertir en nuestros vecindarios, en nuestros jóvenes y en los servicios que ayudan a que los residentes de Aurora puedan realmente salir adelante.
> Esta campaña está impulsada por personas comunes y trabajadoras, como usted, y NO por corporaciones."

Three planks: **(1) Community-centered public safety with accountability. (2) Dignity and practical solutions for unhoused neighbors and struggling families. (3) Investment in neighborhoods, youth, and the services that help people thrive.**

### What we do NOT know yet (use `[TO CONFIRM]` placeholders, never invent)

- Cassandra's biography: where she grew up, job, family, years in Ward 6, prior community work.
- Photos of the candidate (none exist in the project yet; use a tasteful placeholder block).
- Committee name for the "Paid for by" line (placeholder: `Paid for by Friends of Cassandra Echeverria [TO CONFIRM]`).
- Social handles (placeholder links to `#`, marked TO CONFIRM in a comment).
- Volunteer form (use a `mailto:auroraforcassandra@gmail.com` link and a simple form shell; no Google Form ID yet).
- Ward 6 neighborhood names and boundaries (say "Ward 6 on Aurora's west side" only if confirmed; otherwise "Ward 6").

## The incumbent (verified, keep factual and respectful)

Michael B. Saville, Ward 6 Alderman. **Appointed May 1985**; re-elected 1987, 1991, 1995, 1999, 2003, 2007, 2011, 2015, 2019, 2023. Mayor Pro Tem. Chair of the Building, Zoning and Economic Development Committee. Originated the Riverwalk Commission (1988) and the City of Lights Ukulele Festival. Source: yourvoice.aurora.il.us/ward6 and aurora.il.us Ward 6 page.

- **Say "since 1985" and "more than 40 years" / "41 years."** Not "50 years": that is inaccurate and would be a gift to the opponent.
- Fair framings that are true: "the same alderman since 1985," "appointed in 1985 and re-elected ten times," "longer than most Ward 6 residents have lived here," "a career, not a term," "Ward 6 has not had a real choice in a generation."
- Never attack him personally, his age, or his motives. The contrast is: 41 years of the same approach vs. fresh energy, new ideas, and a neighbor who will listen. Thank him for his service where it fits; then say it is time.
- Do not use his name in headlines. Use it at most once or twice, in body copy, on the "Why now" page.

## Voice

**Hopeful, plain, concrete, neighborly.** She is building something, not tearing something down. "Building Hope" is the spine.

- Lead with people: neighbors, families, kids, seniors, small businesses, the unhoused neighbor on the corner. Then the policy.
- Short declarative sentences. No jargon ("stakeholders," "equity framework," "holistic"). If a line would sound fine in a grant application, rewrite it.
- "People before power" is the refrain. Use it, don't overuse it: once per page as a callback.
- Warm to neighbors, firm about the status quo. The status quo is the target, not a person.
- Bilingual by nature. The Spanish version is its own writing by a neighbor, not a translation. Same facts, same warmth. Spanish should use "usted" register with warmth (matching the ActBlue text), and "Ward 6" stays "Ward 6" (Aurora uses the English term; "Distrito 6" is acceptable in a sub-line once).
- No em-dashes anywhere (copy or code comments). Use a comma, a period, or " - " with spaces.
- Numbers are receipts: 1985, 41 years, February 23, 2027 (primary), April 6, 2027 (general). The primary is the headline date; countdowns point to it.
- Never claim results she hasn't produced yet. She is a challenger: promises are "will," "plan to," "commit to."

## Design system (all tokens in `src/styles/global.css`)

Brand from the logo: a Didone serif "Cassandra" in purple, "for Ward 6" in black, "BUILDING HOPE" in a geometric sans in purple, with a purple/pink/green flower.

| Token | Hex | Use |
|---|---|---|
| `--purple` | `#782888` | Brand purple: headings, nav links, primary surfaces |
| `--purple-deep` | `#4f1a5c` | Dark sections, footer, hover |
| `--violet` | `#6000b0` | Flower violet: gradients, accents on dark |
| `--pink` | `#f860b0` | Primary CTA (Donate / Volunteer), highlights |
| `--pink-dark` | `#d9418f` | CTA hover |
| `--green` | `#587860` | Leaf green: secondary accents, checkmarks, "growth" motifs |
| `--cream` | `#fbf5ee` | Body background (warm off-white) |
| `--cream-dark` | `#f2e8dc` | Alternate section background |
| `--lilac` | `#f3e6f5` | Light purple tint sections |
| `--black` | `#141414` | "for Ward 6" black, body text |

Fonts (Google): **Bodoni Moda** (display, matches the logo's serif) + **Poppins** (UI, labels, body). `--font-display`, `--font-body`.

Motifs: the flower mark (`/flower.png`) as a section ornament; thin green "stem" divider lines; soft rounded cards; generous white space. It should feel like a fresh spring morning, not a rally poster. Light backgrounds dominate; purple-deep sections provide rhythm (about one per page).

Global utilities available: `.container`, `.container-wide`, `.section-padding`, `.section-label`, `.section-title`, `.btn`, `.btn-pink`, `.btn-purple`, `.btn-outline`, `.btn-cream`, `.btn-massive`, `.animate-in` (scroll reveal), `.hide-mobile`, `.hide-desktop`, `.stem-divider`.

## i18n rules (identical mechanism to the BSL site)

1. Every visible string gets `data-i18n="section.key"`; the HTML text is the English fallback.
2. Each page owns its own dictionary pair: `src/i18n/parts/<page>.en.json` and `src/i18n/parts/<page>.es.json` (e.g. `meet.en.json` / `meet.es.json`). Top-level namespace inside is the page name (`{ "meet": { ... } }`). Shared keys (`nav.*`, `footer.*`, `bar.*`) live in `shared.*.json`; do not edit those. The ES file must mirror the EN file's keys exactly.
3. `i18n.js` writes `textContent`, so no child HTML inside a `data-i18n` element. Split into sibling spans if you need mixed styling.
4. For `<input>` placeholders use `data-i18n` too (engine writes `placeholder`).
5. Multi-paragraph blocks: `key_desc`, `key_desc2`, `key_desc3`.
6. Run `npm run i18n:check` before you finish. It must report no missing keys.
7. Keys are namespaced per page/component: `nav.*`, `hero.*`, `home.*`, `meet.*`, `priorities.*`, `whynow.*`, `volunteer.*`, `footer.*`, `bar.*`.

## Pages

| Route | File | Purpose |
|---|---|---|
| `/` | `src/pages/index.astro` | Hero, "people before power" promise, three priorities teaser, why-now teaser, donate band |
| `/meet` | `src/pages/meet.astro` | Who Cassandra is (placeholders where unknown), why she is running |
| `/priorities` | `src/pages/priorities.astro` | The three planks in depth, with concrete commitments |
| `/why-now` | `src/pages/why-now.astro` | Time for new leadership: 1985 timeline, what has changed since, what fresh representation means |
| `/volunteer` | `src/pages/volunteer.astro` | Ways to help, sign-up shell, petition drive (Oct 19-26, 2026), key dates |
| `/links` | `src/pages/links.astro` | Linktree-style mobile page for the Instagram bio |

Every page: `<Layout title description>` → `<Navbar />` → `<main>` sections → `<Footer />`. Components go in `src/components/<page>/`.
