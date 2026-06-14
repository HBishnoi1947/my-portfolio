# Light Factory Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Light Factory marketing page (with Privacy Policy and Terms of Use subpages) to the 29 Tech portfolio site, and add it as a card on the home page.

**Architecture:** Static multi-page Vite site. Each app lives in its own folder with `index.html` and a corresponding `src/<slug>/main.js + style.css`. Shared base styles in `src/shared/base.css` provide layout primitives; each app overrides theme variables via its own `:root` block. Legal subpages follow the same pattern nested under the app slug.

**Tech Stack:** Vite 8 (multi-page mode), vanilla JS template literals, plain CSS with custom-property theming.

**Testing strategy:** This codebase has no automated tests. Verification is `npm run build` (catches missing rollup inputs and JS syntax errors) plus `npm run dev` for visual checks in the browser.

**Reference templates:** Mirror the **TA Rail** files closely — it's the only existing app with both a privacy policy *and* terms of use. Use Repped for hero/store-badge placeholder pattern.

---

## File Structure

**Created:**
- `light-factory/index.html` — page entry
- `light-factory/privacy-policy/index.html` — legal entry
- `light-factory/terms-of-use/index.html` — legal entry
- `src/light-factory/main.js` — page renderer
- `src/light-factory/style.css` — brass theme + page-specific overrides
- `src/light-factory/privacy-policy/main.js` — privacy policy renderer
- `src/light-factory/privacy-policy/style.css` — legal page theme
- `src/light-factory/terms-of-use/main.js` — terms renderer
- `src/light-factory/terms-of-use/style.css` — legal page theme
- `public/images/light-factory/launch-icon.png` — copied from `about/Light Factory/images/app icon.png`

**Modified:**
- `vite.config.js` — add 3 rollup input entries
- `src/home/main.js` — add Light Factory card to `apps` array

---

## Task 1: Copy app icon to public assets

**Files:**
- Create: `public/images/light-factory/launch-icon.png`
- Source: `about/Light Factory/images/app icon.png`

- [ ] **Step 1: Create the directory and copy the icon**

Run (from project root `e:/29 Tech website/my-portfolio/`):
```bash
mkdir -p public/images/light-factory && cp "about/Light Factory/images/app icon.png" public/images/light-factory/launch-icon.png
```

- [ ] **Step 2: Verify the file exists**

Run:
```bash
ls -la public/images/light-factory/launch-icon.png
```
Expected: file listed with non-zero size.

- [ ] **Step 3: Commit**

```bash
git add public/images/light-factory/launch-icon.png
git commit -m "feat: add Light Factory app icon to public assets"
```

---

## Task 2: Create main page HTML entry

**Files:**
- Create: `light-factory/index.html`

- [ ] **Step 1: Create the HTML entry file**

Write `light-factory/index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Light Factory — A Steampunk Light Puzzle Game</title>
  <meta name="description" content="A steampunk puzzle game where you bend light through a Victorian-era workshop of brass mirrors, prisms, and crystal targets." />
  <link rel="icon" href="/images/light-factory/launch-icon.png" />
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/light-factory/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add light-factory/index.html
git commit -m "feat: add Light Factory page HTML entry"
```

---

## Task 3: Create main page theme CSS

**Files:**
- Create: `src/light-factory/style.css`

This defines the brass/antique-copper theme via CSS custom properties and a handful of page-specific overrides. No features-grid or how-it-works styles (the page doesn't use them).

- [ ] **Step 1: Create `src/light-factory/style.css`**

```css
:root {
  color-scheme: light;
  --bg: #fffaf2;
  --surface: #ffffff;
  --text-primary: #1c1917;
  --text-secondary: #57534e;
  --text-heading: #1c1917;
  --accent: #b45309;
  --accent-hover: #92400e;
  --accent-text: #ffffff;
  --accent-shadow: rgba(180, 83, 9, 0.25);
  --accent-bg: rgba(180, 83, 9, 0.08);
  --border: #f0e0c8;
  --card-shadow: rgba(180, 83, 9, 0.08);
  --card-radius: 12px;
  --header-bg: rgba(255, 250, 242, 0.92);
  --hero-bg: linear-gradient(135deg, #3f2417 0%, #78350f 45%, #b45309 100%);
  --hero-text: #ffffff;
  --footer-bg: #1c1917;
  --hero-app-name: #fbbf24;
}

.app-header {
  border-bottom: 1px solid var(--border);
}

.brand-icon {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(180, 83, 9, 0.18);
}

.hero {
  background: var(--hero-bg);
  position: relative;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 80% 50%, rgba(251, 191, 36, 0.18) 0%, transparent 60%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  z-index: 1;
}

.hero-app-icon {
  border-radius: 28px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4), 0 0 0 3px rgba(251, 191, 36, 0.3);
}

.hero-text h1 {
  letter-spacing: -0.5px;
}

.hero-subtitle {
  opacity: 0.88;
}

/* About (narrative) section */
.about-section {
  background: var(--bg);
}

.about-inner {
  max-width: 720px;
  margin-inline: auto;
  text-align: center;
}

.about-inner p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.85;
  margin-bottom: 24px;
}

.about-inner p:last-child {
  margin-bottom: 0;
}

@media (max-width: 480px) {
  .about-inner p {
    font-size: 1rem;
  }
}

/* Footer (dark) */
.app-footer {
  background: var(--footer-bg);
  border-top: none;
  color: #a8a29e;
  --footer-divider: rgba(255, 255, 255, 0.06);
  --footer-heading: #d6d3d1;
  --footer-muted: #a8a29e;
}

.app-footer .footer-brand span {
  color: #fafaf9;
}

.app-footer .footer-col a {
  color: #a8a29e;
}

.app-footer .footer-col a:hover {
  color: #fbbf24;
}

.app-footer .footer-bottom {
  color: #78716c;
}

.app-footer .footer-bottom a {
  color: #a8a29e;
}

.app-footer .footer-bottom a:hover {
  color: #fbbf24;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/light-factory/style.css
git commit -m "feat: add Light Factory brass theme stylesheet"
```

---

## Task 4: Create main page renderer

**Files:**
- Create: `src/light-factory/main.js`

Hero + narrative About section + dark footer. No features grid, no how-it-works, no disclaimer.

- [ ] **Step 1: Create `src/light-factory/main.js`**

```js
import '../shared/base.css'
import './style.css'
import { storeBadges } from '../shared/icons.js'

const base = import.meta.env.BASE_URL

document.querySelector('#app').innerHTML = `
  <header class="app-header">
    <div class="container header-inner">
      <a href="${base}light-factory/" class="brand">
        <img src="${base}images/light-factory/launch-icon.png" alt="Light Factory" class="brand-icon" />
        <span class="brand-name">Light Factory</span>
      </a>
    </div>
  </header>

  <section class="hero section">
    <div class="container hero-inner">
      <div class="hero-text">
        <h1>Brass. Crystal.<br>Light. Think.</h1>
        <p class="hero-subtitle">A steampunk puzzle game where you bend light through a Victorian-era workshop of brass mirrors, prisms, and crystal targets.</p>
        <div class="hero-actions store-badges">
          <a href="#" class="store-badge-link">${storeBadges.googlePlay}</a>
          <a href="#" class="store-badge-link">${storeBadges.appStore}</a>
        </div>
      </div>
      <div class="hero-visual">
        <img src="${base}images/light-factory/launch-icon.png" alt="Light Factory App" class="hero-app-icon" />
        <p class="hero-app-name">Light Factory</p>
      </div>
    </div>
  </section>

  <section class="about-section section">
    <div class="container">
      <div class="about-inner">
        <p>Each level drops you onto a wooden board with beams of colored light shooting across it. Your job is simple to learn, hard to master: place mirrors to redirect the beams, split white light into red, blue, and yellow with prisms, and combine colors through mixers &mdash; all under a tight move budget that rewards elegant solutions over brute force.</p>
        <p>Sixty hand-crafted levels guide you from your first single-mirror bounce to multi-stage routing puzzles that demand planning every reflection. Every solved level is a tiny machine you built yourself, glowing back at you.</p>
      </div>
    </div>
  </section>

  <footer class="app-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand-col">
          <div class="footer-brand">
            <img src="${base}images/light-factory/launch-icon.png" alt="" class="footer-icon" />
            <span>Light Factory</span>
          </div>
          <p class="footer-brand-desc">A steampunk puzzle game of mirrors, prisms, and crystal targets. Brass. Crystal. Light. Think.</p>
        </div>
        <div class="footer-col">
          <h4>Download</h4>
          <ul>
            <li><a href="#">Android (Google Play)</a></li>
            <li><a href="#">iOS (App Store)</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="${base}light-factory/privacy-policy/">Privacy Policy</a></li>
            <li><a href="${base}light-factory/terms-of-use/">Terms of Use</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="mailto:harshupbishnoi@gmail.com">harshupbishnoi@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} 29 Tech&trade;. All rights reserved.</span>
      </div>
    </div>
  </footer>
`
```

- [ ] **Step 2: Commit**

```bash
git add src/light-factory/main.js
git commit -m "feat: add Light Factory main page renderer"
```

---

## Task 5: Create Privacy Policy subpage (HTML + JS + CSS)

**Files:**
- Create: `light-factory/privacy-policy/index.html`
- Create: `src/light-factory/privacy-policy/main.js`
- Create: `src/light-factory/privacy-policy/style.css`

Basic policy reflecting: app is ad-supported via Google AdMob, no accounts, no payments, no Firebase, no server.

- [ ] **Step 1: Create `light-factory/privacy-policy/index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Privacy Policy — Light Factory</title>
  <meta name="description" content="Privacy Policy for the Light Factory mobile game by 29 Tech." />
  <link rel="icon" href="/images/light-factory/launch-icon.png" />
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/light-factory/privacy-policy/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Create `src/light-factory/privacy-policy/style.css`**

```css
:root {
  color-scheme: light;
  --bg: #fffaf2;
  --surface: #ffffff;
  --text-primary: #1c1917;
  --text-secondary: #57534e;
  --text-heading: #1c1917;
  --accent: #b45309;
  --accent-text: #ffffff;
  --accent-shadow: rgba(180, 83, 9, 0.25);
  --border: #f0e0c8;
  --header-bg: rgba(255, 250, 242, 0.92);
  --footer-bg: #1c1917;
}

.brand-icon {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(180, 83, 9, 0.18);
}

.privacy-content {
  max-width: 800px;
  margin-inline: auto;
  padding: 64px 24px 80px;
}

.privacy-content h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 8px;
}

.privacy-content .last-updated {
  color: var(--text-secondary);
  margin-bottom: 12px;
  font-size: 0.9rem;
}

.privacy-content .intro {
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.7;
}

.privacy-content h2 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 12px;
  color: var(--accent);
}

.privacy-content p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 12px;
}

.privacy-content ul {
  padding-left: 24px;
  list-style: disc;
  margin-bottom: 16px;
}

.privacy-content li {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 4px;
}

.privacy-content a {
  color: var(--accent);
  text-decoration: underline;
}

.privacy-content strong {
  color: var(--text-heading);
  font-weight: 600;
}

.contact-block {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px 24px;
  margin: 16px 0;
}

.contact-block p {
  margin-bottom: 6px;
}

/* Footer (dark) */
.app-footer {
  background: var(--footer-bg);
  border-top: none;
  color: #a8a29e;
  --footer-divider: rgba(255, 255, 255, 0.06);
  --footer-heading: #d6d3d1;
  --footer-muted: #a8a29e;
}

.app-footer .footer-brand span { color: #fafaf9; }
.app-footer .footer-col a { color: #a8a29e; }
.app-footer .footer-col a:hover { color: #fbbf24; }
.app-footer .footer-bottom { color: #78716c; }
.app-footer .footer-bottom a { color: #a8a29e; }
.app-footer .footer-bottom a:hover { color: #fbbf24; }
```

- [ ] **Step 3: Create `src/light-factory/privacy-policy/main.js`**

```js
import '../../shared/base.css'
import './style.css'

const base = import.meta.env.BASE_URL

document.querySelector('#app').innerHTML = `
  <header class="app-header">
    <div class="container header-inner">
      <a href="${base}light-factory/" class="brand">
        <img src="${base}images/light-factory/launch-icon.png" alt="Light Factory" class="brand-icon" />
        <span class="brand-name">Light Factory</span>
      </a>
    </div>
  </header>

  <main class="privacy-content">
    <h1>Privacy Policy</h1>
    <p class="last-updated">Effective Date: 14 June 2026 &nbsp;|&nbsp; Last Updated: 14 June 2026</p>
    <p class="intro">This Privacy Policy ("Policy") describes how 29 Tech ("we", "us", or "our") handles information through the Light Factory mobile game ("Application" or "App").</p>
    <p class="intro">By using the Application, you ("User" or "you") agree to this Privacy Policy. If you do not agree, please discontinue use and uninstall the Application.</p>

    <h2>1. Information We Collect</h2>
    <p>We do not require you to create an account or provide any personal information to use the Application. We do not collect your name, email address, phone number, or contact details.</p>
    <p>Your game progress (such as completed levels and settings) is stored locally on your device and is not transmitted to us.</p>

    <h2>2. Advertising</h2>
    <p>The Application is supported by advertisements served through Google AdMob, a service provided by Google LLC. To deliver advertisements, AdMob may collect or process limited information, including:</p>
    <ul>
      <li>Your device's advertising identifier</li>
      <li>General device information (such as device type and operating system)</li>
      <li>Information about your interaction with advertisements</li>
    </ul>
    <p>This information is collected and used by Google in accordance with the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a>. You can reset or limit ad tracking through your device settings at any time.</p>

    <h2>3. In-App Purchases</h2>
    <p>The Application does not contain any in-app purchases, subscriptions, or other payment features. We do not collect or process any payment information.</p>

    <h2>4. Data Storage</h2>
    <p>All game data is stored locally on your device using the operating system's standard storage mechanisms. We do not operate servers that store your data.</p>

    <h2>5. Children's Privacy</h2>
    <p>The Application is suitable for general audiences but is not specifically directed at children under the age of 13. We do not knowingly collect personal information from children. Parents and guardians who believe their child has provided personal information through the Application's third-party advertising should contact us, and we will work with the relevant providers to address the request.</p>

    <h2>6. Changes to This Privacy Policy</h2>
    <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of the Application after changes are posted constitutes your acceptance of the updated Policy.</p>

    <h2>7. Contact Us</h2>
    <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
    <div class="contact-block">
      <p><strong>29 Tech</strong></p>
      <p><strong>Email:</strong> <a href="mailto:harshupbishnoi@gmail.com">harshupbishnoi@gmail.com</a></p>
    </div>
  </main>

  <footer class="app-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand-col">
          <div class="footer-brand">
            <img src="${base}images/light-factory/launch-icon.png" alt="" class="footer-icon" />
            <span>Light Factory</span>
          </div>
          <p class="footer-brand-desc">A steampunk puzzle game of mirrors, prisms, and crystal targets.</p>
        </div>
        <div class="footer-col">
          <h4>Download</h4>
          <ul>
            <li><a href="#">Android (Google Play)</a></li>
            <li><a href="#">iOS (App Store)</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="${base}light-factory/privacy-policy/">Privacy Policy</a></li>
            <li><a href="${base}light-factory/terms-of-use/">Terms of Use</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="mailto:harshupbishnoi@gmail.com">harshupbishnoi@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} 29 Tech&trade;. All rights reserved.</span>
        <a href="${base}light-factory/">Back to Light Factory</a>
      </div>
    </div>
  </footer>
`
```

- [ ] **Step 4: Commit**

```bash
git add light-factory/privacy-policy/index.html src/light-factory/privacy-policy/
git commit -m "feat: add Light Factory privacy policy page"
```

---

## Task 6: Create Terms of Use subpage (HTML + JS + CSS)

**Files:**
- Create: `light-factory/terms-of-use/index.html`
- Create: `src/light-factory/terms-of-use/main.js`
- Create: `src/light-factory/terms-of-use/style.css`

Basic terms for a free ad-supported puzzle game. No subscriptions section.

- [ ] **Step 1: Create `light-factory/terms-of-use/index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Terms of Use — Light Factory</title>
  <meta name="description" content="Terms of Use (End User License Agreement) for the Light Factory mobile game by 29 Tech." />
  <link rel="icon" href="/images/light-factory/launch-icon.png" />
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/light-factory/terms-of-use/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Create `src/light-factory/terms-of-use/style.css`**

```css
:root {
  color-scheme: light;
  --bg: #fffaf2;
  --surface: #ffffff;
  --text-primary: #1c1917;
  --text-secondary: #57534e;
  --text-heading: #1c1917;
  --accent: #b45309;
  --accent-text: #ffffff;
  --accent-shadow: rgba(180, 83, 9, 0.25);
  --border: #f0e0c8;
  --header-bg: rgba(255, 250, 242, 0.92);
  --footer-bg: #1c1917;
}

.brand-icon {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(180, 83, 9, 0.18);
}

.terms-content {
  max-width: 800px;
  margin-inline: auto;
  padding: 64px 24px 80px;
}

.terms-content h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 8px;
}

.terms-content .last-updated {
  color: var(--text-secondary);
  margin-bottom: 12px;
  font-size: 0.9rem;
}

.terms-content .intro {
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.7;
}

.terms-content h2 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 12px;
  color: var(--accent);
}

.terms-content p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 12px;
}

.terms-content ul {
  padding-left: 24px;
  list-style: disc;
  margin-bottom: 16px;
}

.terms-content li {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 4px;
}

.terms-content a {
  color: var(--accent);
  text-decoration: underline;
}

.terms-content strong {
  color: var(--text-heading);
  font-weight: 600;
}

.terms-content .caps-block {
  font-size: 0.85rem;
  line-height: 1.9;
}

.contact-block {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px 24px;
  margin: 16px 0;
}

.contact-block p {
  margin-bottom: 6px;
}

/* Footer (dark) */
.app-footer {
  background: var(--footer-bg);
  border-top: none;
  color: #a8a29e;
  --footer-divider: rgba(255, 255, 255, 0.06);
  --footer-heading: #d6d3d1;
  --footer-muted: #a8a29e;
}

.app-footer .footer-brand span { color: #fafaf9; }
.app-footer .footer-col a { color: #a8a29e; }
.app-footer .footer-col a:hover { color: #fbbf24; }
.app-footer .footer-bottom { color: #78716c; }
.app-footer .footer-bottom a { color: #a8a29e; }
.app-footer .footer-bottom a:hover { color: #fbbf24; }
```

- [ ] **Step 3: Create `src/light-factory/terms-of-use/main.js`**

```js
import '../../shared/base.css'
import './style.css'

const base = import.meta.env.BASE_URL

document.querySelector('#app').innerHTML = `
  <header class="app-header">
    <div class="container header-inner">
      <a href="${base}light-factory/" class="brand">
        <img src="${base}images/light-factory/launch-icon.png" alt="Light Factory" class="brand-icon" />
        <span class="brand-name">Light Factory</span>
      </a>
    </div>
  </header>

  <main class="terms-content">
    <h1>Terms of Use</h1>
    <p class="last-updated">Effective Date: 14 June 2026 &nbsp;|&nbsp; Last Updated: 14 June 2026</p>
    <p class="intro">These Terms of Use ("Terms") govern your access to and use of the Light Factory mobile game ("Application" or "App") developed and operated by 29 Tech ("we", "us", or "our"). By downloading, installing, or using the Application, you ("User" or "you") agree to be bound by these Terms. If you do not agree, please do not use the Application.</p>

    <h2>1. License</h2>
    <p>We grant you a limited, non-exclusive, non-transferable, revocable license to use the Application on devices that you own or control, solely for your personal, non-commercial purposes and in accordance with these Terms.</p>
    <p>This license does not allow you to:</p>
    <ul>
      <li>Distribute or make the Application available over a network where it could be used by multiple devices at the same time</li>
      <li>Transfer, sublicense, lease, lend, or rent the Application to any third party</li>
      <li>Copy, reverse-engineer, disassemble, decompile, decode, adapt, or attempt to derive the source code of the Application (except to the extent applicable law expressly permits)</li>
      <li>Modify or create derivative works based on the Application</li>
      <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices in the Application</li>
    </ul>

    <h2>2. Acceptable Use</h2>
    <p>You agree not to use the Application to:</p>
    <ul>
      <li>Violate any applicable law, regulation, or government order</li>
      <li>Infringe the intellectual property rights of 29 Tech or any third party</li>
      <li>Transmit malware, viruses, or any other harmful code</li>
      <li>Interfere with or disrupt the Application's functionality</li>
    </ul>

    <h2>3. Advertising</h2>
    <p>The Application is supported by third-party advertisements served through Google AdMob. We do not control the content of these advertisements. Your interactions with advertisers are solely between you and the advertiser. Please refer to our <a href="${base}light-factory/privacy-policy/">Privacy Policy</a> for details about advertising-related data handling.</p>

    <h2>4. No In-App Purchases</h2>
    <p>The Application does not currently offer any in-app purchases, subscriptions, or other paid features. If this changes in the future, updated Terms will be posted on this page.</p>

    <h2>5. Disclaimer</h2>
    <p class="caps-block">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APPLICATION IS OFFERED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>

    <h2>6. Limitation of Liability</h2>
    <p class="caps-block">TO THE EXTENT PERMITTED BY LAW, IN NO EVENT SHALL 29 TECH BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF PROFITS, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APPLICATION, HOWEVER CAUSED AND REGARDLESS OF THE THEORY OF LIABILITY.</p>

    <h2>7. Termination</h2>
    <p>These Terms are effective until terminated. We may suspend or terminate your access to the Application at any time, without prior notice, if you breach any provision of these Terms. Upon termination, your license to use the Application ceases immediately. You may terminate these Terms at any time by uninstalling the Application.</p>

    <h2>8. Platform Providers</h2>
    <p>The Application may be distributed through third-party platforms, including the Google Play Store (Google LLC) and the Apple App Store (Apple Inc.) (collectively, &ldquo;Platform Providers&rdquo;). You acknowledge and agree that:</p>
    <ul>
      <li>These Terms are between you and 29 Tech only, and not with any Platform Provider. Platform Providers are not responsible for the Application or its content.</li>
      <li>Platform Providers have no obligation to furnish any maintenance or support services with respect to the Application.</li>
      <li>Platform Providers are not responsible for addressing any claims by you or any third party relating to the Application.</li>
      <li>Platform Providers are third-party beneficiaries of these Terms and, upon your acceptance, have the right to enforce these Terms against you.</li>
    </ul>

    <h2>9. Changes to These Terms</h2>
    <p>We may update these Terms from time to time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of the Application after changes are posted constitutes your acceptance of the updated Terms.</p>

    <h2>10. Governing Law</h2>
    <p>These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising from these Terms or your use of the Application shall be subject to the exclusive jurisdiction of the courts in Madhya Pradesh, India.</p>

    <h2>11. Contact Us</h2>
    <p>If you have questions or concerns about these Terms of Use, please contact us:</p>
    <div class="contact-block">
      <p><strong>29 Tech</strong></p>
      <p><strong>Email:</strong> <a href="mailto:harshupbishnoi@gmail.com">harshupbishnoi@gmail.com</a></p>
    </div>
  </main>

  <footer class="app-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand-col">
          <div class="footer-brand">
            <img src="${base}images/light-factory/launch-icon.png" alt="" class="footer-icon" />
            <span>Light Factory</span>
          </div>
          <p class="footer-brand-desc">A steampunk puzzle game of mirrors, prisms, and crystal targets.</p>
        </div>
        <div class="footer-col">
          <h4>Download</h4>
          <ul>
            <li><a href="#">Android (Google Play)</a></li>
            <li><a href="#">iOS (App Store)</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="${base}light-factory/privacy-policy/">Privacy Policy</a></li>
            <li><a href="${base}light-factory/terms-of-use/">Terms of Use</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="mailto:harshupbishnoi@gmail.com">harshupbishnoi@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} 29 Tech&trade;. All rights reserved.</span>
        <a href="${base}light-factory/">Back to Light Factory</a>
      </div>
    </div>
  </footer>
`
```

- [ ] **Step 4: Commit**

```bash
git add light-factory/terms-of-use/index.html src/light-factory/terms-of-use/
git commit -m "feat: add Light Factory terms of use page"
```

---

## Task 7: Register pages in vite.config.js

**Files:**
- Modify: `vite.config.js` (rollupOptions.input)

- [ ] **Step 1: Edit `vite.config.js`**

Find this block:
```js
'ta-rail-terms': resolve(__dirname, 'ta-rail/terms-of-use/index.html'),
      },
    },
  },
})
```

Replace with (adds 3 new entries before the closing `},`):
```js
'ta-rail-terms': resolve(__dirname, 'ta-rail/terms-of-use/index.html'),
        'light-factory': resolve(__dirname, 'light-factory/index.html'),
        'light-factory-privacy': resolve(__dirname, 'light-factory/privacy-policy/index.html'),
        'light-factory-terms': resolve(__dirname, 'light-factory/terms-of-use/index.html'),
      },
    },
  },
})
```

- [ ] **Step 2: Commit**

```bash
git add vite.config.js
git commit -m "feat: register Light Factory pages in Vite build inputs"
```

---

## Task 8: Add Light Factory card to home page

**Files:**
- Modify: `src/home/main.js` (apps array)

Insert the new card in the `apps` array. Place it between `Repped` and `TA Rail` (alphabetical: Animal Quiz → Light Factory → Repped → TA Rail). Actually L comes before R — insert between Animal Quiz and Repped.

- [ ] **Step 1: Edit `src/home/main.js`**

Find this block:
```js
  {
    name: 'Animal Quiz - Kids',
    slug: `${base}animal-quiz/`,
    icon: `${base}images/animal-quiz/launch-icon.png`,
    tagline: 'Learn about animals in a fun and interactive way',
    accentColor: '#22c55e',
  },
  {
    name: 'Repped',
```

Replace with (insert Light Factory card between Animal Quiz and Repped):
```js
  {
    name: 'Animal Quiz - Kids',
    slug: `${base}animal-quiz/`,
    icon: `${base}images/animal-quiz/launch-icon.png`,
    tagline: 'Learn about animals in a fun and interactive way',
    accentColor: '#22c55e',
  },
  {
    name: 'Light Factory',
    slug: `${base}light-factory/`,
    icon: `${base}images/light-factory/launch-icon.png`,
    tagline: 'A steampunk puzzle of mirrors, prisms & light',
    accentColor: '#b45309',
  },
  {
    name: 'Repped',
```

- [ ] **Step 2: Commit**

```bash
git add src/home/main.js
git commit -m "feat: add Light Factory card to home page"
```

---

## Task 9: Verify build and run dev server

**Files:** none modified

- [ ] **Step 1: Run production build**

Run:
```bash
npm run build
```
Expected: Build succeeds. The output should list `light-factory/index.html`, `light-factory/privacy-policy/index.html`, and `light-factory/terms-of-use/index.html` among the built pages, with hashed JS/CSS bundles for each. No errors.

If you see "Could not resolve" or "missing" errors, re-check the file paths in `vite.config.js` (Task 7) and the import paths at the top of each `main.js`.

- [ ] **Step 2: Start dev server**

Run (in a background-friendly way):
```bash
npm run dev
```
Expected: server starts on `http://localhost:5173` (or whatever port Vite picks). Keep it running for the visual checks below.

- [ ] **Step 3: Visual smoke-check the home page**

Open `http://localhost:5173/home/` in a browser.

Verify:
- 4 app cards now appear: Animal Quiz, **Light Factory**, Repped, TA Rail (in that order)
- The Light Factory card shows the brass icon, name, tagline "A steampunk puzzle of mirrors, prisms & light", and uses the `#b45309` accent
- Clicking the Light Factory card navigates to the Light Factory page

- [ ] **Step 4: Visual smoke-check the Light Factory page**

Verify at `http://localhost:5173/light-factory/`:
- Header shows brass icon + "Light Factory" brand
- Hero has dark-to-brass gradient background with H1 "Brass. Crystal. Light. Think." and the subtitle
- Two store badges (Google Play, App Store) appear and have `#` hrefs
- About section shows the two narrative paragraphs centered with ~720px max width
- Dark footer with Brand / Download / Legal / Support columns
- Footer "Privacy Policy" link goes to `/light-factory/privacy-policy/`
- Footer "Terms of Use" link goes to `/light-factory/terms-of-use/`

- [ ] **Step 5: Visual smoke-check the legal pages**

Verify at `http://localhost:5173/light-factory/privacy-policy/`:
- "Privacy Policy" h1 renders
- Section headers use the brass `#b45309` color
- 7 numbered sections present (Information We Collect through Contact Us)
- "Back to Light Factory" link in footer bottom navigates back to `/light-factory/`

Verify at `http://localhost:5173/light-factory/terms-of-use/`:
- "Terms of Use" h1 renders
- 11 numbered sections present (License through Contact Us)
- Two ALL-CAPS paragraphs (Disclaimer and Limitation of Liability) render with smaller font size

- [ ] **Step 6: Stop the dev server**

Press Ctrl+C in the terminal where `npm run dev` is running, or close the background shell.

- [ ] **Step 7: No commit needed for verification**

This task produces no code changes; the verification is the deliverable. If any step revealed an issue, return to the relevant earlier task to fix it and re-verify.

---

## Self-Review Checklist (for the implementer)

Before declaring done:
- [ ] All 3 entries appear in `vite.config.js` rollupOptions.input
- [ ] All 4 home-page cards link to working pages (no 404 on Light Factory)
- [ ] No leftover TA Rail or Repped strings on the Light Factory page (search for "TA Rail", "Repped", "Travelling")
- [ ] The icon at `public/images/light-factory/launch-icon.png` displays correctly in header, hero, and footer
- [ ] `npm run build` finishes with zero errors and zero warnings about missing files

## Out of Scope (do NOT do)

- Do not add real store URLs (placeholders only — user will provide when app goes live)
- Do not add a features grid, how-it-works section, or disclaimer section
- Do not add an ads disclosure to the marketing page
- Do not add screenshots, video, or trailer assets
- Do not modify any other app's pages
