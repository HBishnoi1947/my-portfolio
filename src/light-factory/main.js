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
        <p>Each level drops you onto a wooden board with beams of colored light shooting across it. Your job is simple to learn, hard to master: place mirrors to redirect the beams, split white light into red, blue, and yellow with prisms, and combine colors through mixers - all under a tight move budget that rewards elegant solutions over brute force.</p>
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
