import '../shared/base.css'
import './style.css'
import { icons, storeBadges } from '../shared/icons.js'

const base = import.meta.env.BASE_URL

const features = [
  { icon: icons.user, title: 'My Profile', desc: 'Store personal details like name, branch, zone, designation, basic pay, and more. Enter once, use always.' },
  { icon: icons.clipboard, title: 'Duty Entry', desc: 'Create a log of duty entries with train number, departure-arrival time, route, and objective of travel.' },
  { icon: icons.eye, title: 'Preview', desc: 'A well-organized glimpse and view of your duty entries for a better on-the-go summary.' },
  { icon: icons.fileText, title: 'Download PDF', desc: 'Generate travelling allowance documents in submittable format. A4 or Legal size. Save, share, or print.' },
  { icon: icons.chart, title: 'Data Analysis', desc: 'Visualize your travel data with graphs and charts for better insights and tracking.' },
  { icon: icons.shield, title: 'Secure Storage', desc: 'Your data is saved and secured. No manual calculations needed — the app handles everything.' },
]

document.querySelector('#app').innerHTML = `
  <header class="app-header">
    <div class="container header-inner">
      <a href="${base}ta-rail/" class="brand">
        <img src="${base}images/ta-rail/launch-icon.png" alt="TA Rail" class="brand-icon" />
        <span class="brand-name">TA Rail&trade;</span>
      </a>
    </div>
  </header>

  <section class="hero section">
    <div class="container hero-inner">
      <div class="hero-text">
        <h1>Calculate Your Travelling Allowance in Minutes</h1>
        <p class="hero-subtitle">A simple travelling allowance calculation app with in-built calculations based on Indian Railway Establishment Code. Get output in submittable PDF format.</p>
        <div class="hero-actions store-badges">
          <a href="https://play.google.com/store/apps/details?id=com.harshbishnoi.ta_rail_1947" class="store-badge-link">${storeBadges.googlePlay}</a>
          <a href="https://apps.apple.com/us/app/ta-rail/id6765936339" class="store-badge-link">${storeBadges.appStore}</a>
        </div>
      </div>
      <div class="hero-visual">
        <img src="${base}images/ta-rail/launch-icon.png" alt="TA Rail App" class="hero-app-icon" />
        <p class="hero-app-name">TA Rail</p>
      </div>
    </div>
  </section>

  <section class="features section">
    <div class="container">
      <h2 class="section-title">Features</h2>
      <div class="features-grid">
        ${features.map(f => `
          <div class="feature-card">
            <div class="feature-icon">${f.icon}</div>
            <h3>${f.title}</h3>
            <p>${f.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="disclaimer-section section">
    <div class="container">
      <div class="disclaimer-box">
        <h2>Disclaimer</h2>
        <p>This app is not affiliated with, endorsed by, or sponsored by any government entity. Calculations are based on the rules and guidelines as published in the Indian Railway Establishment Code, Chapter 16 - Travelling Allowance Rules.</p>
      </div>
    </div>
  </section>

  <footer class="app-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand-col">
          <div class="footer-brand">
            <img src="${base}images/ta-rail/launch-icon.png" alt="" class="footer-icon" />
            <span>TA Rail&trade;</span>
          </div>
          <p class="footer-brand-desc">Travelling allowance calculation app based on Indian Railway Establishment Code.</p>
        </div>
        <div class="footer-col">
          <h4>Download</h4>
          <ul>
            <li><a href="https://play.google.com/store/apps/details?id=com.harshbishnoi.ta_rail_1947">Android (Google Play)</a></li>
            <li><a href="https://apps.apple.com/us/app/ta-rail/id6765936339">iOS (App Store)</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="${base}ta-rail/privacy-policy/">Privacy Policy</a></li>
            <li><a href="${base}ta-rail/terms-of-use/">Terms of Use</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="mailto:contact@29tech.co.in">contact@29tech.co.in</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} 29 Tech&trade;. All rights reserved.</span>
      </div>
    </div>
  </footer>
`
