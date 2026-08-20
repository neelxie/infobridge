# InfoBridge — Corporate Website

A production-ready Next.js 16 (App Router) marketing site for a multidisciplinary
consultancy spanning technology, applied research, public-sector advisory, and
strategic communications.

## Stack

- **Next.js 16** (App Router, Server Components by default)
- **TypeScript**
- **Tailwind CSS v3** with a full design-token system (see `tailwind.config.ts`)
- **shadcn/ui-style primitives** (Button, Input, Select, Textarea, Checkbox, Label) in `src/components/ui`
- **Lucide React** for icons (two brand glyphs — LinkedIn, X — are hand-drawn in
  `src/components/ui/brand-icons.tsx` since current lucide-react no longer ships
  trademarked brand icons)
- **next/font** (`Source Serif 4`, `IBM Plex Sans`, `IBM Plex Mono` from Google Fonts)
- **Framer Motion** is installed and available, used sparingly per the design brief
- No backend / database — the contact form simulates submission client-side (see below)

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

> **Note on this sandbox:** `next/font/google` fetches font files from Google at
> build time, which requires outbound internet access. Vercel's build environment
> has this by default, so no changes are needed to deploy. If you ever need to
> build somewhere without internet access, swap the three `next/font/google` calls
> in `src/app/layout.tsx` for `next/font/local` with self-hosted font files.

## What's real vs. placeholder

**This site ships with zero invented facts.** Every company-specific detail —
name, address, phone, team bios, client logos, stats, case studies, publications —
is a clearly bracketed placeholder, e.g. `InfoBridge`, `[Team Member Name]`.

All of it lives in **one file**: `src/content/site.ts`. To launch this site for a
real company:

1. Open `src/content/site.ts`.
2. Search for `[` — every match is something to replace with a verified fact.
3. Replace placeholder team members, services (if the real service list differs),
   case studies, insights, and trust stats.
4. Replace `/public/favicon.ico` and add a real Open Graph image at
   `/public/og-image.jpg` (1200×630).
5. Wire up the contact form (see below) and the legal pages (see below).

Nothing else in the codebase needs to change to reflect new company facts —
pages, cards, metadata, and JSON-LD all read from this one file.

## Contact form

`src/components/sections/contact-form.tsx` is fully built (validation, loading,
success and error states) but **has no backend** — submission is simulated with a
timeout so the UI states can be reviewed. Before launch, wire the `handleSubmit`
function to a real endpoint: a serverless function, a form service (e.g. Formspree,
Resend), or your own API route.

## Legal pages

`/privacy` and `/terms` contain a complete, correctly structured section outline
with bracketed placeholder copy. **This is not legal advice and has not been
reviewed by counsel** — replace the placeholder paragraphs with real policy text
before publishing.

## Design system

- **Colors, type scale, spacing, radius, shadows:** `tailwind.config.ts`
- **Base styles, utility classes (`.container-content`, `.eyebrow`, `.card-surface`,
  etc.):** `src/app/globals.css`
- **Signature visual motif:** a sparse node/line network (`src/components/ui/node-field.tsx`)
  representing the synthesis of disciplines — used sparingly as a background layer
  in hero sections, never as competing decoration.

## Project structure

```
src/
  app/                  Routes (App Router)
    about/ services/ team/ projects/ insights/ contact/ privacy/ terms/
    layout.tsx           Root layout, fonts, metadata, Organization JSON-LD
    sitemap.ts robots.ts
  components/
    layout/               Header, footer
    sections/              Page-level sections (hero, CTA, grids, forms)
    ui/                    Reusable primitives (button, card, icon, etc.)
  content/
    site.ts               ALL factual content — the single source of truth
  lib/
    utils.ts               cn() class-merge helper
```

## Accessibility & performance notes

- Semantic landmarks, skip-to-content link, visible focus rings, `prefers-reduced-motion`
  respected in `globals.css`.
- Mobile navigation is a full-screen drawer with proper `aria-expanded`/`aria-controls`.
- Forms have associated labels, `aria-describedby` error messages, and `aria-invalid`.
- Images are intentionally left as labeled placeholder blocks (no fake stock photos)
  — replace with `next/image` calls using real photography before launch; the
  layout has been structured so this is a drop-in change.
- All pages are statically generated (`○`/`●` in the build output) for strong
  Core Web Vitals out of the box.

## Deploying to Vercel

```bash
npm i -g vercel
vercel
```

Or connect the repository in the Vercel dashboard. No environment variables are
required until the contact form is wired to a real backend.
