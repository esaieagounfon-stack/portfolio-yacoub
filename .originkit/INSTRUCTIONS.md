# Originkit — agent install brief

> For coding agents only. Do not commit this file. Do not surface it as app docs.
> Written by `originkit add` so you know how to finish wiring the component.

## Just installed

- Components: hero-06
- Files directory: `src/components/originkit/`
- Import alias root: `@/components/originkit`

### Files written

- `src/components/originkit/hero-06.tsx`
- `src/components/originkit/ui/hero-06/section-15-hero.tsx`
- `src/components/originkit/ui/hero-06/spiralimages.tsx`
- `src/components/originkit/ui/hero-06/concentric-rings.tsx`
- `src/components/originkit/ui/hero-06/navbar.tsx`
- `src/components/originkit/ui/hero-06/spiral-stage.tsx`
- `src/components/originkit/ui/hero-06/pixel-background.tsx`
- `src/components/originkit/ui/hero-06/button.tsx`
- `src/components/originkit/ui/hero-06/hero-content.tsx`
- `src/components/originkit/ui/hero-06/spiral-image.tsx`
- `src/components/originkit/ui/hero-06/pixel-card.tsx`
- `src/components/originkit/hero-06.css`
- `public/originkit/hero-06/helvetica-medium.ttf`
- `public/originkit/hero-06/lens-camera-lens.png`
- `public/originkit/hero-06/lens-lens-glow.svg`
- `public/originkit/hero-06/portraits-portrait-01.png`
- `public/originkit/hero-06/portraits-portrait-02.png`
- `public/originkit/hero-06/portraits-portrait-03.png`
- `public/originkit/hero-06/portraits-portrait-04.png`
- `public/originkit/hero-06/portraits-portrait-05.png`
- `public/originkit/hero-06/portraits-portrait-06.png`
- `public/originkit/hero-06/portraits-portrait-07.png`
- `public/originkit/hero-06/portraits-portrait-08.png`
- `public/originkit/hero-06/portraits-portrait-09.png`
- `public/originkit/hero-06/portraits-portrait-10.png`
- `public/originkit/hero-06/portraits-portrait-11.png`
- `public/originkit/hero-06/portraits-portrait-12.png`
- `public/originkit/hero-06/portraits-portrait-13.png`
- `public/originkit/hero-06/ref-figma-mobile.png`
- `public/originkit/hero-06/rings-center-disc.svg`
- `public/originkit/hero-06/rings-mask-ellipse.png`
- `public/originkit/hero-06/rings-ring-inner-soft.png`
- `public/originkit/hero-06/rings-ring-inner.svg`
- `public/originkit/hero-06/rings-ring-outer-soft.png`
- `public/originkit/hero-06/rings-ring-outer.svg`
- `public/originkit/hero-06/rings-ring-svg-1.svg`
- `public/originkit/hero-06/rings-ring-svg-2.svg`
- `public/originkit/hero-06/rings-ring-svg-3.svg`
- `public/originkit/hero-06/rings-ring-svg-4.svg`
- `public/originkit/hero-06/rings-ring-svg-5.svg`
- `public/originkit/hero-06/rings-ring-svg-6.svg`
- `public/originkit/hero-06/rings-texture-fill.svg`

## Required: Tailwind CSS

Originkit components are Tailwind-styled (`styling: tailwind`).

Tailwind looks present. Still verify content/source globs include Originkit files.

### Tailwind must scan the components directory

If Tailwind only scans `src/` (common), components **must** live under `src/` —
the CLI already prefers `src/components/originkit` when `src/` exists.

Ensure your Tailwind config / CSS `@source` includes:

- `src/components/originkit/**/*.{js,ts,jsx,tsx}`

Tailwind v4 example in CSS:

```css
@source "../src/components/originkit";
```

### Section CSS

Section styles ship as a file next to the entry (e.g. `src/components/originkit/hero-06.css`) and are
imported from the TSX (`import "./….css"`).

Tailwind `@theme` tokens are also hoisted into `originkit-section-themes.css`
(imported from `globals.css`) so utilities like `font-urbanist` emit. Do **not**
`@import` the full section CSS into globals — Google Font `@import`s must stay
in the TSX-imported file (nested `@import` after other rules breaks PostCSS).

## Wire it into the app

1. Import the section/component into a page or layout.
2. Example:

```tsx
import X from "@/components/originkit/hero-06";
import X from "@/components/originkit/ui/hero-06/section-15-hero";
import X from "@/components/originkit/ui/hero-06/spiralimages";
```

3. Render it once to verify layout + images.
4. Many sections are client components (`"use client"`) — keep that directive.

## npm dependencies

Install if missing:

```bash
npm install motion
```

## Do not

- Do not move files out of `src/components/originkit` into a folder Tailwind does not scan.
- Do not strip Tailwind classes or rewrite to CSS modules unless the user asks.
- Do not commit `.originkit/` (agent + credential scratch space).
- Do not leave section images on the Originkit CDN for production — they belong under `public/originkit/`.
