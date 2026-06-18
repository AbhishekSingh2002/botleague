# BOT LEAGUE — Landing Page

A pixel-faithful recreation of the **BOT LEAGUE — India's Ultimate Robotics Arena** Figma landing page, built as a production-ready single-page app.

**Stack:** React 18 · TypeScript · Vite · Tailwind CSS

---

## Quick start

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

> There is also a zero-build, single-file version at `standalone/botleague.html` 
> (Tailwind via CDN) you can open directly in any browser.

---

## Project structure

```
src/
├─ main.tsx                  # React entry
├─ App.tsx                   # composes every section in order
├─ styles/index.css          # fonts, Tailwind layers, component classes, custom graphics
├─ data/content.ts           # ALL copy & structured data (single source of truth)
├─ components/
│  ├─ ui/                    # reusable primitives
│  │  ├─ Button.tsx          #   primary / outline CTA (renders <button> or <a>)
│  │  ├─ Container.tsx       #   centered page shell with responsive gutters
│  │  ├─ SectionHeading.tsx  #   eyebrow + display title
│  │  └─ TextInput.tsx       #   dark-themed form field
│  ├─ icons/index.tsx        # all inline SVG icons + icon registry
│  ├─ layout/
│  │  ├─ Navbar.tsx          #   sticky nav + mobile drawer
│  │  └─ Footer.tsx
│  └─ sections/              # one component per page section
│     ├─ Hero.tsx
│     ├─ Competitions.tsx
│     ├─ UserJourney.tsx
│     ├─ WhatIs.tsx
│     ├─ Categories.tsx
│     ├─ Disciplines.tsx
│     ├─ LeagueAdvantage.tsx
│     ├─ JoinEcosystem.tsx
│     └─ Sponsors.tsx
```

Edit page copy in **`src/data/content.ts`** — sections render from it, so you rarely
need to touch JSX to change text, events, leaderboard rows, categories, etc.

---

## Design tokens

Defined in `tailwind.config.js`, sampled directly from the Figma export:

| Token            | Value     | Used for                          |
| ---------------- | --------- | --------------------------------- |
| `brand.red`      | `#FF4D4D` | primary CTAs, labels, accents     |
| `brand.gold`     | `#FDC705` | category icons, highlight border  |
| `brand.blue`     | `#2A1AE0` | user-journey rings & connectors   |
| `ink.black`      | `#000000` | dark sections                     |
| `ink.800`        | `#191919` | lighter dark sections             |
| `ink.card`       | `#1F1F1F` | cards                             |
| `muted`          | `#8E8E8E` | secondary text                    |

**Type:** `font-display` = **Michroma** (wide techno headline face), `font-body` =
**Inter**. Both are bundled offline via `@fontsource`, so there are no external font
requests.

---

## Notes on assets

The Figma export was a flat PNG, so the bitmap photography wasn't available. The
following are faithful **placeholders** — drop in the real exports to finish:

- **Hero arena photo** — see the comment in `src/components/sections/Hero.tsx` 
  (replace the `.hero-bg` / `.hero-floor` layers with an `<img>`).
- **Discipline card photos** — `src/components/sections/Disciplines.tsx` 
  (swap each card's `background` gradient for an `<img>`).
- **Sponsor logos** — `src/components/sections/Sponsors.tsx`.

Everything else (bracket, journey rings, leaderboard, category/feature/social icons,
ecosystem line-art, circuit pattern) is recreated in code — no images required.

The headline font is the closest open match to the Figma face. If you have the exact
font, update `font-display` in `tailwind.config.js` and the `@import` in
`src/styles/index.css`.

---

## Accessibility & quality floor

- Responsive from ultra-wide down to ~360px (nav collapses to a drawer; grids stack).
- Visible keyboard focus rings on all interactive elements.
- `prefers-reduced-motion` respected (animations/transitions disabled).
- Semantic landmarks (`header` / `main` / `footer`), labelled inputs, `aria-current` 
  on the active nav item.
