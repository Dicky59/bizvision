# BizVision — Website Build Brief

A reference spec for building bizvision.fi with Claude Code. Drop this in the repo
root. Build in plan mode,
phase by phase, getting the design system approved on the homepage before
rolling it across the other pages.

---

## 1. What this is

Marketing site for **BizVision** — an AI-native software
development consultancy run by a senior freelance engineer. Six pages, plus a
site-wide AI chatbot.

**Positioning:** senior-level execution, AI-accelerated engineering, full-stack +
UX + AI as one capability, no agency overhead, EU/GDPR-aware. Clients are Finnish
SMEs and public-sector organisations.

**Tone:** confident, plain, senior. Never salesy. Active voice. Name things by
what the client recognises, not by how the system is built.

---

## 2. Stack & hosting

- **Next.js (App Router) + TypeScript**
- **Tailwind CSS** + **shadcn/ui** for base components
- Deploy on **Vercel**, custom domain `www.bizvision.fi`
- Fonts via `next/font` (Google Fonts) — self-hosted, no layout shift
- The site is itself a portfolio piece: clean Lighthouse scores and real
  accessibility are part of the deliverable, not an afterthought.
- App code lives in src/app/

---

## 3. Internationalization — locale-ready, English-only at launch

Ship English-only content now; Finnish will be added later once the site is
complete. To make that a content-only task rather than a painful restructure,
scaffold locale-aware routing from Phase 0 — do NOT build flat routes.

- Use `next-intl` (or App Router native i18n) with a `[locale]` segment from
  the start. Only the `en` dictionary exists at launch; `fi` is added later.
- Use "as-needed" locale prefixing so the default locale has clean URLs:
  `bizvision.fi/about` serves English, and Finnish later lives at
  `bizvision.fi/fi/about`. No `/en` prefix on the default.
- Keep all UI copy in dictionary files (not hardcoded in components) so adding
  Finnish means adding a `fi.json` + page copy, nothing structural.

---

## 4. Design direction

The brief liked: **light theme overall, dark high-impact hero, warm colours,
not startup-purple.** Honour that exactly. But avoid the default.

**Trap to avoid:** current AI-generated sites cluster on three looks — (1) warm
cream bg + high-contrast serif + terracotta accent; (2) near-black bg + single
acid-green/vermilion accent; (3) broadsheet hairline-rule layout. The warm-light
direction here sits right next to look (1). Do **not** render this as
cream + serif + terracotta. Keep it warm, but make the choices specific to a
Finnish senior-engineering brand.

### Starting tokens (propose final values in your plan; these are the direction, not gospel)

Grounded in Nordic design restraint + material warmth — warm without being
trendy, engineered without being cold.

```
--paper      #F7F4EE   /* warm bone base, light theme            */
--ink        #1F1A16   /* warm near-black text (not pure #000)    */
--hero-bg    #231C17   /* deep warm espresso — the dark hero      */
--accent     #C2882F   /* ochre / amber-gold — NOT terracotta-red */
--accent-deep#8A5A1E   /* hover / pressed                          */
--muted      #6E655C   /* secondary text, warm taupe-grey         */
--line       #E4DDD2   /* hairlines, card borders                 */
```

The warm _dark_ hero (espresso, not cold near-black) is the grounded signature
move — most sites reach for a cold near-black hero.

### Typography

- **Display:** a confident grotesque with Nordic provenance — e.g.
  **Schibsted Grotesk** (Scandinavian, free on Google Fonts). Avoid plain
  Inter-as-display and avoid the high-contrast-serif cliché.
- **Body:** keep quiet and readable — **Inter** or **Hanken Grotesk**.
- **Mono/utility:** **JetBrains Mono** or **IBM Plex Mono**, used sparingly for
  eyebrows, labels, and data. This is the engineering/AI signal — restraint, not
  decoration.

### Structure & signature

- **Signature:** a restrained monospace "annotation" layer — small mono
  eyebrows/labels in the ochre accent, reading like quiet code comments. Gives
  the whole site an engineered texture with no heavy animation.
- **Numbering (01/02/…):** earned only where content is a real sequence — i.e.
  the **How We Work** process section. Do not use numbered markers decoratively
  elsewhere.
- **Motion:** minimal and deliberate. Scroll-reveal and hover micro-interactions
  at most. Respect `prefers-reduced-motion`. Over-animation reads AI-generated.

---

## 5. Accessibility & compliance floor (non-negotiable)

The site sells "accessibility" and "GDPR-aware" as capabilities, and targets
Finnish public sector (bound by EU Web Accessibility Directive). So the site must
demonstrate it:

- WCAG-level colour contrast on all text (check the ochre accent on paper)
- Semantic HTML, logical heading order, landmarks
- Visible keyboard focus states, full keyboard navigation
- Reduced-motion respected
- No cookie/tracking that needs consent unless a banner is added properly

---

## 6. Site structure

1. **Homepage** — positioning + authority (full copy in `content/homepage.md`)
2. **Digital Development** — Web + Mobile + UI/UX as one capability
3. **AI & Intelligent Automation** — the strategic differentiator / thought-leadership page
4. **Consulting & Architecture** — senior consulting, technical leadership, procurement-relevant
5. **About** — experience, why BizVision, philosophy, Helsinki credibility, working model
6. **Contact / Consultation** — who should contact, what to prepare, how engagement starts

Copy for pages 2–6 will be provided later. Build the shared layout (header/nav,
footer, page shell) so adding them is content-only.

---

## 7. Homepage sections (from `content/homepage.md`)

In order: Hero (dual CTA: "Discuss your project" primary, "Explore our services"
secondary) → The Problem → What We Do (4 service blocks: Web, Mobile, UI/UX,
AI Agents) → Why BizVision (4 proof points: senior/no-overhead, integrated
stack, security/compliance, Helsinki presence) → Who We Work With (SMEs / Public
Sector / Project-based) → How We Work (4-step numbered process) → What Every
Client Gets → Experience (7+ years, project types, approach) → Closing CTA.

Use the exact copy provided. Hero on `--hero-bg`; everything else on `--paper`.

---

## 8. AI chatbot (Phase 3 — do not build until the site is up)

A site-wide assistant. It's also a proof point — the AI-native consultancy should
have a tasteful AI assistant on its own site.

**Architecture:**

- Route Handler `src/app/api/chat/route.ts` (Node runtime), streaming responses
- `@anthropic-ai/sdk`, key in `ANTHROPIC_API_KEY` env var (Vercel) —
  **never** exposed client-side
- System prompt grounds the assistant in BizVision's services and positioning and
  steers toward "discuss your project" / the contact flow. The site is small
  enough that the content goes straight in the system prompt — **no RAG / vector
  DB needed.**
- Model: **`claude-haiku-4-5`** is plenty for a lead-gen assistant and cheap; bump
  to **`claude-sonnet-4-6`** only if answer quality needs it.

**Gotcha to handle:** a public chatbot is an exposed cost surface. Add basic
**rate limiting** (per-IP, e.g. Upstash/Vercel KV) so the API bill can't be
abused. Flag this in the plan.

**UI:** floating widget — accessible (focus trap, aria labels, keyboard), respects
reduced motion, matches the design tokens.

---

## 9. Build phases (for plan mode)

- **Phase 0 — Scaffold:** Next.js + TS + Tailwind + shadcn, fonts, design tokens
  as CSS vars / Tailwind theme, base layout (header/nav/footer), a11y floor.
  Decide i18n here (§3).
- **Phase 1 — Homepage:** build with the real copy. **Get the design system
  approved here before going further.**
- **Phase 2 — Remaining pages:** 2–6, reusing the system. Content provided later.
- **Phase 3 — Chatbot:** API route + widget + rate limiting.
- **Phase 4 — Polish & ship:** metadata/SEO, OG images, sitemap, robots,
  Lighthouse + a11y pass, deploy to Vercel, wire `www.bizvision.fi`.
