import './style.css'
import { storeBadges } from '../shared/icons.js'

const base = import.meta.env.BASE_URL

const apps = [
  {
    name: 'Animal Quiz – Kids',
    slug: `${base}animal-quiz/`,
    icon: `${base}images/animal-quiz/launch-icon.png`,
    description: 'An interactive quiz that helps kids learn about animals — their habitats, sounds, and fascinating facts. Bright, friendly, and built to keep little learners engaged.',
    accent: '#22c55e',
    accentDark: '#14532d',
    playStore: 'https://play.google.com/store/apps/details?id=com.animalquiz.app1947',
    appStore: '#',
  },
  {
    name: 'Light Factory',
    slug: `${base}light-factory/`,
    icon: `${base}images/light-factory/launch-icon.png`,
    description: 'A steampunk puzzle game where you bend light through a Victorian-era workshop of brass mirrors, prisms, and crystal targets. Sixty hand-crafted levels of think-and-reflect.',
    accent: '#b45309',
    accentDark: '#3f2417',
    playStore: '#',
    appStore: '#',
  },
  {
    name: 'Repped',
    slug: `${base}repped/`,
    icon: `${base}images/repped/launch-icon.png`,
    description: 'Turn your phone into a personal rep counter. AI pose detection counts your reps in real time — no wearables, no manual logging.',
    accent: '#06d6a0',
    accentDark: '#064e3b',
    playStore: 'https://play.google.com/store/apps/details?id=com.my_pushup_buddy.app1947',
    appStore: '#',
  },
  {
    name: 'TA Rail',
    slug: `${base}ta-rail/`,
    icon: `${base}images/ta-rail/launch-icon.png`,
    description: 'Quickly calculate your travelling allowance with in-built calculations based on the Indian Railway Establishment Code. Generate submittable PDF documents in minutes.',
    accent: '#eab308',
    accentDark: '#713f12',
    playStore: 'https://play.google.com/store/apps/details?id=com.harshbishnoi.ta_rail_1947',
    appStore: 'https://apps.apple.com/us/app/ta-rail/id6765936339',
  },
]

const statusBarIcons = {
  signal: `<svg viewBox="0 0 18 12" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="0.5"/><rect x="5" y="5" width="3" height="7" rx="0.5"/><rect x="10" y="2" width="3" height="10" rx="0.5"/><rect x="15" y="0" width="3" height="12" rx="0.5"/></svg>`,
  wifi: `<svg viewBox="0 0 16 12" fill="currentColor"><path d="M8 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM3.5 7.2a6.4 6.4 0 0 1 9 0l-1.4 1.4a4.4 4.4 0 0 0-6.2 0L3.5 7.2zM0.8 4.5a10.2 10.2 0 0 1 14.4 0l-1.4 1.4a8.2 8.2 0 0 0-11.6 0L0.8 4.5z"/></svg>`,
  battery: `<svg viewBox="0 0 24 12" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="0.5" y="0.5" width="21" height="11" rx="2.5"/><rect x="2" y="2" width="18" height="8" rx="1.2" fill="currentColor"/><rect x="22" y="4" width="1.5" height="4" rx="0.5" fill="currentColor"/></svg>`,
}

function phoneMockup(app) {
  return `
    <div class="phone" style="--accent: ${app.accent}; --accent-dark: ${app.accentDark};">
      <div class="phone-screen">
        <div class="phone-statusbar">
          <span>9:41</span>
          <span class="status-icons">${statusBarIcons.signal} ${statusBarIcons.wifi} ${statusBarIcons.battery}</span>
        </div>
        <div class="phone-island"></div>
        <div class="phone-body">
          <div class="phone-icon-pad">
            <img src="${app.icon}" alt="${app.name} icon" />
          </div>
          <span class="phone-app-name">${app.name}</span>
        </div>
        <div class="phone-home-indicator"></div>
      </div>
    </div>
  `
}

function appSection(app, index) {
  const num = String(index + 1).padStart(2, '0')
  const total = String(apps.length).padStart(2, '0')
  return `
    <section class="app-section" id="app-${index + 1}" style="--accent: ${app.accent};">
      <div class="container">
        <div class="app-section-inner">
          <div class="phone-col">
            ${phoneMockup(app)}
          </div>
          <div class="text-col">
            <span class="app-eyebrow">${num} / ${total}</span>
            <h2>${app.name}</h2>
            <p class="app-description">${app.description}</p>
            <div class="app-cta-row">
              <a href="${app.slug}" class="app-primary-cta">View App <span class="arrow">→</span></a>
              <div class="app-store-badges">
                <a href="${app.playStore}" aria-label="Get on Google Play">${storeBadges.googlePlay}</a>
                <a href="${app.appStore}" aria-label="Download on the App Store">${storeBadges.appStore}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

const headline = ['We', 'Build', 'Apps', 'People', 'Love']

document.querySelector('#app').innerHTML = `
  <nav class="nav">
    <div class="container nav-inner">
      <a href="${base}portfolio/" class="nav-logo">29 Tech&trade;</a>
      <div class="nav-links">
        <a href="#showcase">Apps</a>
        <span class="nav-contact">contact@29tech.co.in</span>
      </div>
    </div>
  </nav>

  <header class="hero">
    <div class="hero-orb" aria-hidden="true"></div>
    <div class="hero-content">
      <h1>${headline.map((w, i) => `<span class="word" style="animation-delay:${i * 90}ms">${w}${i < headline.length - 1 ? '&nbsp;' : ''}</span>`).join('')}</h1>
      <p class="hero-subtitle">Simple tools that solve real problems... designed for everyday people.</p>
      <a href="#showcase" class="hero-cta">Explore Our Apps <span class="arrow">↓</span></a>
    </div>
  </header>

  <main id="showcase" class="showcase">
    ${apps.map((app, i) => appSection(app, i)).join('')}
  </main>

  <footer class="footer">
    <div class="container">
      <span>&copy; ${new Date().getFullYear()} 29 Tech&trade;. All rights reserved.</span>
    </div>
  </footer>
`

// Reveal animations via IntersectionObserver
const sections = document.querySelectorAll('.app-section')
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' })

  sections.forEach((s) => observer.observe(s))
} else {
  sections.forEach((s) => s.classList.add('in-view'))
}
