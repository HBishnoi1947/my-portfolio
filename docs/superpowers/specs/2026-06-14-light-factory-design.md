# Light Factory Page — Design Spec

**Date:** 2026-06-14
**Goal:** Add a marketing page for the Light Factory app to the 29 Tech portfolio site, plus a privacy policy and terms of use subpage.

## Context

Light Factory is a steampunk-themed puzzle game. The app contains ads (via AdMob) and has no payment features (no subscriptions, no in-app purchases, no user accounts).

This page joins three existing app pages (`animal-quiz`, `repped`, `ta-rail`) on the Vite multi-page portfolio. The pattern is well established and this page should follow it closely.

## User Decisions

| Decision | Choice |
|---|---|
| Store links | Placeholder `#` (app not yet live) |
| Legal pages | Privacy Policy + Terms of Use (both) |
| Page structure | Narrative-only — no features grid |
| Ads disclosure on page | None (not surfaced to visitor) |
| Privacy policy depth | Basic |

## File Layout

```
/light-factory/index.html
/light-factory/privacy-policy/index.html
/light-factory/terms-of-use/index.html
/src/light-factory/main.js
/src/light-factory/style.css
/src/light-factory/privacy-policy/main.js
/src/light-factory/privacy-policy/style.css   (or re-use ta-rail's pattern)
/src/light-factory/terms-of-use/main.js
/src/light-factory/terms-of-use/style.css
/public/images/light-factory/launch-icon.png  (copied from about/Light Factory/images/app icon.png)
```

Plus modifications to:
- `vite.config.js` — add 3 rollup input entries
- `src/home/main.js` — add Light Factory card to the `apps` array

## Page Structure

Header → Hero (gradient) → About section (narrative) → Dark footer.

No `how-it-works` section (that's Repped-specific) and no `features` grid (decided against). No disclaimer section (that's a TA Rail specific concern about not being affiliated with Indian Railways — not relevant here).

### Hero
- H1: `Brass. Crystal.<br>Light. Think.`
- Subtitle: opening line of marketing copy ("A steampunk puzzle game where you bend light through a Victorian-era workshop of brass mirrors, prisms, and crystal targets.")
- Store badges: Google Play + App Store, both with `href="#"`
- Right side: hero app icon

### About section
Two paragraphs of marketing copy (paragraphs 2 and 3 from `info.txt`). The closing "Brass. Crystal. Light. Think." line is dropped here because it already appears as the H1.

Centered, ~700px max width, larger line-height for readability.

### Footer
Identical pattern to TA Rail/Repped — dark background, 4 columns:
- Brand
- Download (placeholder `#` links)
- Legal (Privacy Policy + Terms of Use)
- Support (email)

## Theme

Brass / antique-copper palette to evoke the Victorian workshop:

```css
--accent: #b45309;             /* burnt amber */
--accent-hover: #92400e;
--accent-text: #ffffff;
--accent-shadow: rgba(180, 83, 9, 0.25);
--accent-bg: rgba(180, 83, 9, 0.08);
--border: #f0e6d0;
--hero-bg: linear-gradient(135deg, #3f2417 0%, #78350f 45%, #b45309 100%);
--hero-app-name: #fbbf24;       /* lamp-glow yellow */
--footer-bg: #1c1917;
```

Distinct from TA Rail's brighter `#eab308` yellow — Light Factory leans warmer and more mahogany.

## Home Card Entry

Add to `src/home/main.js` `apps` array (between `repped` and `ta-rail` alphabetically):

```js
{
  name: 'Light Factory',
  slug: `${base}light-factory/`,
  icon: `${base}images/light-factory/launch-icon.png`,
  tagline: 'A steampunk puzzle of mirrors, prisms & light',
  accentColor: '#b45309',
},
```

## Privacy Policy — Basic

Sized to the app's actual data reality: ads via Google AdMob, no accounts, no payments, no Firebase, no server. Sections:

1. Introduction
2. Information We Collect — explicitly: we do NOT collect personal information directly. AdMob may collect advertising ID and ad interaction data.
3. Third-Party Services — Google AdMob (with link to Google's privacy policy)
4. Data Storage — local game progress only, on device
5. Children's Privacy — puzzle games often attract children; standard COPPA-aligned section
6. Changes to This Policy
7. Contact

Effective Date: 14 June 2026.

## Terms of Use — Basic

Sized to a free, ad-supported puzzle game. Sections:

1. License (personal, non-commercial use)
2. Acceptable Use
3. Advertising (brief — app is ad-supported, ads served by third parties)
4. Disclaimer (AS IS / AS AVAILABLE)
5. Limitation of Liability
6. Termination
7. Platform Providers (Google Play / App Store)
8. Governing Law (India, Madhya Pradesh — matches TA Rail)
9. Changes to These Terms
10. Contact

Subscriptions/payments section from TA Rail is **dropped**.

Effective Date: 14 June 2026.

## Asset

The app icon at `about/Light Factory/images/app icon.png` needs to be copied to `public/images/light-factory/launch-icon.png`. No resizing or processing.

## Out of Scope

- No screenshots (none provided)
- No video/trailer
- No feature cards grid
- No ads disclosure visible on marketing page
- No real download links (placeholders only)
- No favicon changes (site uses one global favicon)
