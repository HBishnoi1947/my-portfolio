# Portfolio Showcase Page — Design Spec

**Date:** 2026-06-14
**Goal:** Replace the simple `/home/` card grid with a richer, animated, dark-themed `/portfolio/` page that showcases all four 29 Tech apps inside stylized phone mockups.

## User Decisions

| Decision | Choice |
|---|---|
| Page role | Replace `/home/`. Root `/` redirects to `/portfolio/` |
| Phone content | Stylized "home screen" — large app icon centered on branded gradient |
| Animation level | Polished but subtle — scroll reveals, hover lifts, gentle floats |
| Theme | Dark premium showcase with colored per-app glows |

## File Changes

**Create:**
- `portfolio/index.html`
- `src/portfolio/main.js`
- `src/portfolio/style.css`

**Delete:**
- `home/index.html`
- `src/home/main.js`
- `src/home/style.css`

**Modify:**
- `index.html` (root) — meta refresh redirect to `/portfolio/`
- `vite.config.js` — swap `home` entry for `portfolio` entry

## Page Structure

1. **Sticky top nav** — `29 Tech™` logo on left, `Apps · Contact` anchors on right
2. **Hero section** — animated conic-gradient orb backdrop, large heading "We Build Apps People Love", subtitle, "↓ Explore Our Apps" CTA scrolls to first app
3. **App showcase** — one full-viewport section per app, alternating phone-left / phone-right layout:
   - Animal Quiz – Kids (green `#22c55e`)
   - Light Factory (brass `#b45309`)
   - Repped (teal `#06d6a0`)
   - TA Rail (amber `#eab308`)
4. **Footer** — `© 29 Tech™ · harshupbishnoi@gmail.com · Made in India`

## Phone Mockup (CSS-only, no images of phones)

- ~260 × 540 px rounded rectangle (border-radius 36px)
- 1.5px white border at low opacity for the device edge
- Dynamic-island bar: small black pill, ~80×20px, centered horizontally near the top
- Status bar (time "9:41", signal/wifi/battery SVG icons) in white at small size
- Background: `linear-gradient(160deg, var(--accent), darker shade)` per app
- Centered content: app icon ~110px on a soft white "glow pad" (radial-gradient backdrop), app name in white below

## Animations (all vanilla CSS/JS)

- **Hero conic-gradient orb** — slow rotation ~20s infinite (CSS `@keyframes`)
- **Hero headline** — word-by-word fade+rise stagger on load, total ~600ms
- **Phone float** — translateY ±6px over 4s ease-in-out infinite (disabled on `(max-width: 768px)` and `prefers-reduced-motion`)
- **App section reveal** — `IntersectionObserver` adds `.in-view` class when section enters viewport; CSS animates opacity 0→1 + translateY 40px→0 over 700ms
- **Phone hover** — translateY -8px + intensified accent-color halo, 250ms ease
- **CTA smooth scroll** — `behavior: 'smooth'`
- `prefers-reduced-motion` — disables float and conic rotation; reveals become instant

## Theme

```css
--bg: #0a0a0a;
--surface: #141414;
--surface-2: #1c1c1c;
--text-primary: #fafafa;
--text-secondary: #a1a1aa;
--border: rgba(255, 255, 255, 0.08);
```

Body background: `#0a0a0a` + a subtle radial dot-grid overlay (`background-image: radial-gradient(...)`) at ~3% opacity.

Each app section sets its own `--accent` inline (via the renderer) and uses it for the phone gradient and the large blurred glow halo behind the phone (`filter: blur(80px)` on a positioned pseudo-element).

## Mobile Behavior

At `<768px`:
- Sections stack vertically (no alternating L/R)
- Phone above text always
- Phone scales to ~180 × 370 px
- Hero typography reduces
- Float animation disabled
- Hover lift retained (but irrelevant on touch)

## Hero Copy

- H1: `We Build Apps<br>People Love`
- Subtitle: `Simple tools that solve real problems — designed for everyday people.`
- CTA: `Explore Our Apps ↓`

## App Showcase Copy

Each app section uses:
- Eyebrow: `0X / 04` (counter, in accent color)
- H2: app name
- Description: longer than the home tagline — about 2 sentences each (drawn from the existing app pages' hero subtitles)
- Primary CTA: `View App →` linking to `/<slug>/`
- Secondary: store badges (placeholders for apps without real links)

Descriptions:
- **Animal Quiz:** "An interactive quiz that helps kids learn about animals — their habitats, sounds, and fascinating facts. Bright, friendly, and built to keep little learners engaged."
- **Light Factory:** "A steampunk puzzle game where you bend light through a Victorian-era workshop of brass mirrors, prisms, and crystal targets. Sixty hand-crafted levels of think-and-reflect."
- **Repped:** "Turn your phone into a personal rep counter. AI pose detection counts your reps in real time — no wearables, no manual logging."
- **TA Rail:** "Quickly calculate your travelling allowance with in-built calculations based on the Indian Railway Establishment Code. Generate submittable PDF documents in minutes."

## Root Index Redirect

Replace the empty `<body>` with:
```html
<meta http-equiv="refresh" content="0; url=/portfolio/" />
<title>29 Tech™</title>
<link rel="canonical" href="/portfolio/" />
<noscript><p>If you are not redirected, <a href="/portfolio/">click here</a>.</p></noscript>
```

Combined with the existing `appType: 'mpa'` and trailing-slash middleware, this makes the root URL land users on `/portfolio/`.

## Out of Scope

- Real app screenshots (none exist — phone mockup uses icon-on-gradient)
- An "About 29 Tech" section
- A contact form (mailto: link is enough)
- Loading external animation libraries (Framer Motion / GSAP)
- Updating the existing app pages (they're unchanged)
- A separate keep-old-home compatibility page
