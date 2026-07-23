# Likewize Design System

> **We are Likewize. We make every tech problem painless.**

A design system distilled from the **Likewize Brand Style Guide (2024)** and the
**Moments** product logo lockup. Likewize is a global device lifecycle company —
device protection, insurance, repair, trade-in and tech support. The brand voice is
confident, plain-spoken and reassuring; the visual world is unmistakably **Pink + Blue**.

This project compiles into a runtime library (`_ds_bundle.js`) plus an indexed token
set. Link **`styles.css`** (the only fixed entry point) to inherit every token and font.

---

## Source materials

Provided by the user (stored in `uploads/`):

| File | Used for |
|---|---|
| `Likewize-Style-Guide-2024.pdf` | Colors, typography, logo rules, iconography & imagery guidance |
| `Likewize-Moments-Lockup-Logo-170226_Page_1–4.jpg` | "Moments — Powered by likewize." lockup in Black / Blue / Pink / Blush → `assets/logos/` |

**Not received:** `Likewize Overview - Q2 - 2026.pptx` was referenced but not present in
`uploads/`. No product codebase, Figma, or app screenshots were provided — so the UI kit
is a brand-faithful *application* of the system, not a pixel recreation of a shipped product.

---

## Content fundamentals — how Likewize writes

- **Purpose-led & declarative.** The master line is *"We make every tech problem painless."*
  Copy states a clear benefit, plainly: *"Every tech problem, solved." · "Protection that just works."*
- **"We" + "you".** First-person plural for the brand ("We are Likewize", "We favor modern imagery"),
  second person for the customer ("you can request assets", "your communications are on-brand").
- **Reassuring, low-jargon, optimistic.** Words like *painless, like-new, in minutes, just works*.
  Avoid fear-based insurance clichés.
- **Casing:** Sentence case for everything UI and editorial. The logo is the one hard rule —
  **always lowercase `likewize.` with the trailing period.** Headlines may run large but stay
  sentence case.
- **Emoji:** not part of the brand system — avoid in product chrome and marketing. (A light,
  intentional wave 👋 in a personal greeting is the outer limit; default to none.)
- **Tone test:** would a calm, competent friend who's great with tech say it? If yes, ship it.

---

## Visual foundations

- **Color.** Predominantly **Pink `#FF96FF`** (PMS 251/252), paired with deep **Blue `#3200BE`**
  (PMS Blue 072) for "a digital edge." Secondary **Blush `#F5D2FA`**, **Frost `#C8FAFA`** and
  **White** are used *sparingly* to soften. Rough hierarchy: Pink 60 / Blue 30 / supportives 10.
  In product: **Blue = primary action** (white text), **Pink = brand highlight / hero fill**
  (black text — pink is too light to carry white type). Functional status colors
  (success/warning/danger) are UI-only additions, *not* brand colors.
- **Type.** Brand font is **Likewize Sans** (proprietary, expressive grotesque), supplied in
  Regular (400) and Bold (700) and wired up via `@font-face` in `tokens/fonts.css`; approved
  fallback is **Arial**. Heavier display weights (800/900) map onto the Bold cut. Display is
  heavy with tight tracking (`-0.02em`); body is regular/medium at 1.5 line-height. Optical
  kerning at large sizes; never let ascenders/descenders touch.
- **Backgrounds.** Light, color-block, dark, gradient, and image surfaces are all valid choices
  per section — white isn't the default with color as trim, it's one option among several. Vary
  the choice section-to-section (or card-to-card) so a layout doesn't repeat the same fill twice
  in a row.
  - *Light:* white or near-white (`--lw-gray-50`) — generous whitespace, still the right call for
    dense/reading-heavy content.
  - *Color block:* solid Pink or Blue fill for hero sections, feature callouts, stat tiles — pair
    with `--text-on-brand`/`--text-on-ink`.
  - *Dark:* deep Blue (`--surface-dark`, `--lw-blue-800`) or near-black surface with light text —
    for a moodier section, a footer, or to make a callout stand out from lighter neighbors.
  - *Gradient:* Pink→Blue (`--gradient-brand`) or Blue→Blush (`--gradient-ink`) duotone fills for
    hero/banner surfaces — a common choice, not an exception.
  - *Image:* palette-tinted photography or a Pink/Blue duotone wash, full-bleed behind a section.
  Photography itself (per the guide) is proprietary, modern, unusual angles/lighting, tinted
  toward the palette hues — *no library imagery was supplied,* so the kit uses solid color tiles
  + icons as photo placeholders.
- **Shape & elevation.** Geometric, modest rounding — controls `8px`, cards `18px`, pills for
  buttons/badges. Shadows are **soft and low-spread** (airy, not heavy); brand-tinted pink/blue
  glows exist for special emphasis only.
- **Borders.** Hairline `1px` neutral (`--lw-gray-200`) on cards/inputs; `1.5–2px` for control
  outlines and selected states (Blue).
- **Motion.** Quick and calm — `120–360ms`, ease-out (`cubic-bezier(0.16,1,0.3,1)`). Fades and
  small translations/lifts; **no bounce, no decorative loops.**
- **Interaction states.** Hover = a step darker (Blue 600→700, Pink 300→400) or a faint tint
  wash on ghost/secondary; press = one more step darker **plus a 1px downward nudge**; focus =
  3px Blue focus ring. Disabled = 45% opacity.
- **Transparency/blur.** Used only for the app's floating tab bar (frosted white). Otherwise solid.
- **Cards.** White surface, hairline border, `18px` radius, soft `md` shadow; a `brand` variant
  swaps to a soft Blush surface with a pink border and no shadow; `dark` and `gradient` variants
  are available for the same reasons as the Backgrounds guidance above.

---

## Iconography

- Likewize maintains a **proprietary custom icon set** representing its product/service lines —
  **this was not provided.** The system therefore ships an `Icon` component built on **Lucide**
  (MIT) as the closest match: **2px stroke, round caps/joins, 24px grid, no fill** — which suits
  the clean grotesque brand. **This is a flagged substitution; swap in the official SVGs when
  available.** See `components/icons/`.
- Icons inherit color via `currentColor` (Blue, ink, or white on color). Use line icons for UI
  affordances; reserve filled/solid shapes for status dots only.
- **No emoji or unicode glyphs as UI icons.**

---

## Index / manifest

**Root**
- `styles.css` — global entry (import-only). Pulls in everything below.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (radii/shadow/motion/layout), `fonts.css`.
- `assets/logos/` — Moments lockups (Black, Blue, Pink, Blush).
- `guidelines/` — foundation specimen cards (Type, Colors, Spacing, Brand) shown in the Design System tab.

**Components** (`components/…`, exported under `window.LikewizeDesignSystem_c61cfa`)
- `core/` — **Button, Badge, Card, Avatar**
- `forms/` — **Input, Switch, Checkbox**
- `feedback/` — **Alert**
- `navigation/` — **Tabs**
- `icons/` — **Icon** (Lucide-based)

**UI kits** (`ui_kits/…`)
- `moments-app/` — interactive customer protection app (login → home → devices → claims → account → claim flow)

**Other**
- `SKILL.md` — Agent-Skill front matter for downloadable use.

---

## Caveats & open questions

1. **Fonts — resolved.** Likewize Sans was supplied in Regular (400) and Bold (700) and is now
   wired via `@font-face` in `tokens/fonts.css`. Only those two cuts exist; medium/semibold
   (500/600) are synthesized and 800/900 map onto Bold. Upload additional weights if you have them.
2. **Icons — substitution.** Brand uses a proprietary icon library (not supplied). Substituted
   **Lucide**. Please share the official icon SVGs to replace them.
3. **Imagery.** No photography library was supplied; the brand calls for proprietary, palette-tinted
   imagery. UI placeholders use solid color tiles. Please share approved images.
4. **Missing deck.** `Likewize Overview - Q2 - 2026.pptx` wasn't in `uploads/`. No slide template was
   created. Re-attach it via the Import menu and I'll build branded sample slides.
5. **Product accuracy.** With no product code/Figma, the Moments app is an interpretation. Point me at
   the real app and I'll align the kit precisely.
