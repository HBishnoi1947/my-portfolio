# Portfolio Showcase Page Implementation Plan

> **For agentic workers:** Execute task-by-task. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Build the new dark-themed animated `/portfolio/` page, remove the old `/home/`, and redirect `/` to `/portfolio/`.

**Architecture:** Vanilla JS template renderer + IntersectionObserver for reveals + CSS keyframe animations. Dark theme with per-app accent glow. Phone mockups built entirely in CSS (no images of phones — only the app icons inside).

**Tech Stack:** Vite 8, vanilla JS, plain CSS. No new dependencies.

**Tasks:**
1. Create portfolio HTML entry
2. Create portfolio CSS
3. Create portfolio renderer JS
4. Update root index.html with redirect
5. Update vite.config.js (swap home for portfolio)
6. Delete /home and /src/home
7. Build + visual verify

---

## Task 1: Create `portfolio/index.html`

Write:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>29 Tech™ — We Build Apps People Love</title>
  <meta name="description" content="29 Tech crafts simple mobile apps that solve real problems — from puzzle games to fitness trackers to railway calculators." />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/portfolio/main.js"></script>
</body>
</html>
```

## Task 2: Create `src/portfolio/style.css`

The full dark-theme stylesheet, including phone mockup, animations, and responsive rules. Contained below in Task 4 execution.

## Task 3: Create `src/portfolio/main.js`

Render apps array; attach IntersectionObserver; smooth-scroll CTA. Contained below.

## Task 4: Replace root `index.html`

Replace empty body with meta-refresh redirect to `/portfolio/`.

## Task 5: Edit `vite.config.js`

Remove `home: resolve(...)` line, add `portfolio: resolve(__dirname, 'portfolio/index.html')`.

## Task 6: Delete `/home/` and `/src/home/`

Remove the old home page files.

## Task 7: Build + dev server

Run `npm run build` (expect zero errors), then `npm run dev`, then visit `/portfolio/` and verify visually.
