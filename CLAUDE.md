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

**Palette (revised — "Glacial Ice"):** originally built around a warm
ochre/espresso direction (see history below). Revised in collaboration with
the design partner toward a cooler, more enterprise-credible palette while
still avoiding the generic look — the risk this time being stock Tailwind
slate + blue-600, which is the single most common palette in SaaS/AI tooling
and directly undercuts the differentiation goal below. Landed on cool
slate-blue neutrals with a deep glacial-teal signal instead of blue.

**Trap to avoid (still applies):** current AI-generated sites cluster on a
handful of looks — (1) warm cream bg + high-contrast serif + terracotta
accent; (2) near-black bg + single acid-green/vermilion accent; (3) broadsheet
hairline-rule layout; (4) cool slate neutrals + saturated blue-600 accent
(the shadcn/Tailwind default). Do not render this as any of the four.

### Tokens (implemented in `globals.css`)

Grounded in Nordic cold — glacial water and ice rather than warm cream or
generic tech-blue.

```
--paper        #F1F4F6   /* cool paper base, light theme              */
--ink          #1A232B   /* slate-blue near-black text                */
--hero-bg      #121A20   /* deep glacial-ink — the dark hero          */
--hero-text    #E9EEF0   /* light icy text on the hero                */
--accent       #1D7A82   /* glacial teal — CTA fills, NOT blue-600    */
--accent-deep  #0F4E53   /* teal marks/text on light bg               */
--accent-lite  #5FC2C9   /* teal marks on the dark hero                */
--muted        #55636B   /* secondary text, cool slate-grey           */
--line         #D7DEE2   /* hairlines, card borders                   */
```

Implementation note: `globals.css` keeps the original variable names
(`--color-ochre`, `--color-ochre-deep`, `--color-ochre-lite`, `--color-taupe`,
`--color-bone`) and only swaps their values, so no component code needs
touching. If a future pass wants the variable names to actually say "glacial"
instead of "ochre," that's a separate, larger rename across every component
that references them — flag it before doing it, don't do it silently.

The cold dark hero (glacial-ink, not warm espresso) is now the grounded
signature move, paired with the teal signal instead of blue.

<details>
<summary>Original ochre/espresso direction (superseded)</summary>

```
--paper      #F7F4EE   /* warm bone base, light theme            */
--ink        #1F1A16   /* warm near-black text (not pure #000)    */
--hero-bg    #231C17   /* deep warm espresso — the dark hero      */
--accent     #C2882F   /* ochre / amber-gold — NOT terracotta-red */
--accent-deep#8A5A1E   /* hover / pressed                          */
--muted      #6E655C   /* secondary text, warm taupe-grey         */
--line       #E4DDD2   /* hairlines, card borders                 */
```

</details>

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
  eyebrows/labels in the accent teal, reading like quiet code comments. Gives
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

- WCAG-level colour contrast on all text (check the teal accent on paper)
- Semantic HTML, logical heading order, landmarks
- Visible keyboard focus states, full keyboard navigation
- Reduced-motion respected
- No cookie/tracking that needs consent unless a banner is added properly

---

## 6. Site structure

Five pages (Contact is merged into the About page):

1. **Homepage** — positioning + authority (`content/homepage.md`)
2. **Digital Development** — Web + Mobile + UI/UX as one capability (`content/digital-development.md`)
3. **AI & Intelligent Automation** — the strategic differentiator / thought-leadership page (`content/ai-automation.md`)
4. **Consulting & Architecture** — senior consulting, technical leadership, procurement-relevant (`content/consulting-architecture.md`)
5. **About & Contact** — experience, philosophy, working model, and contact info merged into one page (`content/about-contact.md`)

All five content files include inline layout hints as HTML comments — `<!-- LAYOUT -->`,
`<!-- IMAGE -->`, and `<!-- EYEBROW -->`. Honour them: they set section rhythm, card/grid
usage, image placeholders, and the mono ochre eyebrow + 01/02 numbering signature from §4.

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
- the system prompt content lives in `content/chatbox-content.md`
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
- **Phase 2 — Remaining pages:** ✓ Pages 2–3 complete (Digital Development, AI Automation).
  ✓ Pages 4–5 complete (Consulting & Architecture, About & Contact). All five page content
  files are in `content/`. Contact is merged into the About page — no standalone Contact route.
- **Phase 3 — Chatbot:** API route + widget + rate limiting.
- **Phase 4 — Polish & ship:** metadata/SEO, OG images, sitemap, robots,
  Lighthouse + a11y pass, deploy to Vercel, wire `www.bizvision.fi`.
