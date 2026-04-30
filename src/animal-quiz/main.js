import '../shared/base.css'
import './style.css'
import { icons, storeBadges } from '../shared/icons.js'

const features = [
  { icon: icons.camera, title: 'Picture Quizzes', desc: 'Can you guess the animal from its picture? Identify animals from different habitats around the world.' },
  { icon: icons.brain, title: 'Fact Quizzes', desc: 'Learn interesting and fun facts about animals. Discover what they eat, where they live, and more!' },
  { icon: icons.globe, title: 'National Animals', desc: 'Test your knowledge of geography and wildlife by identifying the national animals of different countries.' },
  { icon: icons.timer, title: 'Timed Tests', desc: 'Take a full test to see how much you\'ve learned. Track your progress and beat your high score.' },
  { icon: icons.star, title: 'Kid-Friendly Design', desc: 'Colorful graphics, simple navigation, and a user-friendly design that kids can use on their own.' },
]

document.querySelector('#app').innerHTML = `
  <header class="app-header">
    <div class="container header-inner">
      <a href="/animal-quiz/" class="brand">
        <img src="/images/animal-quiz/launch-icon.png" alt="Animal Quiz" class="brand-icon" />
        <span class="brand-name">Animal Quiz - Kids</span>
      </a>
    </div>
  </header>

  <section class="hero section">
    <div class="container hero-inner">
      <div class="hero-text">
        <h1>Explore the Wild World of Animals!</h1>
        <p class="hero-subtitle">The ultimate learning and fun experience for children. Dive into the amazing world of animals with engaging and educational quizzes.</p>
        <div class="hero-actions store-badges">
          <a href="#" class="store-badge-link">${storeBadges.googlePlay}</a>
          <a href="#" class="store-badge-link">${storeBadges.appStore}</a>
        </div>
      </div>
      <div class="hero-visual">
        <img src="/images/animal-quiz/launch-icon.png" alt="Animal Quiz App" class="hero-app-icon" />
        <p class="hero-app-name">Animal Quiz - Kids</p>
      </div>
    </div>
  </section>

  <section class="features section">
    <div class="container">
      <h2 class="section-title">Key Features</h2>
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

  <section class="about-section section">
    <div class="container">
      <h2 class="section-title">About the App</h2>
      <p class="about-text">
        Designed to be both entertaining and educational, Animal Quiz - Kids makes learning about the animal kingdom a delightful adventure. It's a great tool for parents and teachers to help children build their knowledge in a fun and interactive format. Get ready to explore the wild world of animals!
      </p>
    </div>
  </section>

  <footer class="app-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand-col">
          <div class="footer-brand">
            <img src="/images/animal-quiz/launch-icon.png" alt="" class="footer-icon" />
            <span>Animal Quiz - Kids</span>
          </div>
          <p class="footer-brand-desc">The ultimate learning and fun experience for children. Explore the wild world of animals!</p>
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
            <li><a href="/animal-quiz/privacy-policy/">Privacy Policy</a></li>
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
