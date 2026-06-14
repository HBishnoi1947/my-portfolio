import '../shared/base.css'
import './style.css'
import { icons, storeBadges } from '../shared/icons.js'

const base = import.meta.env.BASE_URL

const features = [
  { icon: icons.scan, title: 'AI Pose Detection', desc: 'Real-time rep counting using your camera and advanced pose detection. No wearables needed.' },
  { icon: icons.target, title: '7 Workout Packages', desc: 'Structured programs from Desk Warrior to Wedding Ready. Personalized schedules with progressive overload.' },
  { icon: icons.film, title: 'Workout Reels', desc: 'Record and generate sped-up highlight reels with stylish overlays and filters.' },
  { icon: icons.chart, title: 'Progress Tracking', desc: 'Daily rep counts, personal bests, streak tracking, activity trends, and exercise breakdowns.' },
]

const exercises = ['Push-ups', 'Squats', 'Dand', 'Bomber Burpees', 'Plank']

document.querySelector('#app').innerHTML = `
  <header class="app-header">
    <div class="container header-inner">
      <a href="${base}repped/" class="brand">
        <img src="${base}images/repped/launch-icon.png" alt="Repped" class="brand-icon" />
        <span class="brand-name">Repped</span>
      </a>
    </div>
  </header>

  <section class="hero section">
    <div class="container hero-inner">
      <div class="hero-text">
        <h1>Smart. Automatic.<br>Motivating.</h1>
        <p class="hero-subtitle">Turn your phone into a personal rep counter. Repped uses your camera and AI pose detection to automatically count your reps in real-time. No wearables, no manual logging.</p>
        <div class="hero-actions store-badges">
          <a href="https://play.google.com/store/apps/details?id=com.my_pushup_buddy.app1947" class="store-badge-link">${storeBadges.googlePlay}</a>
          <a href="#" class="store-badge-link">${storeBadges.appStore}</a>
        </div>
      </div>
      <div class="hero-visual">
        <img src="${base}images/repped/launch-icon.png" alt="Repped App" class="hero-app-icon" />
        <p class="hero-app-name">Repped</p>
      </div>
    </div>
  </section>

  <section class="how-it-works section">
    <div class="container">
      <h2 class="section-title">How It Works</h2>
      <div class="steps-grid">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Place Your Phone</h3>
          <p>Set up your phone where it can see you</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h3>Select Exercise</h3>
          <p>Choose from supported exercises</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <h3>Start Working Out</h3>
          <p>AI counts every rep automatically</p>
        </div>
      </div>
      <div class="exercises-list">
        ${exercises.map(e => `<span class="exercise-pill">${e}</span>`).join('')}
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

  <footer class="app-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand-col">
          <div class="footer-brand">
            <img src="${base}images/repped/launch-icon.png" alt="" class="footer-icon" />
            <span>Repped</span>
          </div>
          <p class="footer-brand-desc">Turn your phone into a personal rep counter. AI-powered pose detection counts your reps in real-time.</p>
        </div>
        <div class="footer-col">
          <h4>Download</h4>
          <ul>
            <li><a href="https://play.google.com/store/apps/details?id=com.my_pushup_buddy.app1947">Android (Google Play)</a></li>
            <li><a href="#">iOS (App Store)</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="${base}repped/privacy-policy/">Privacy Policy</a></li>
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
