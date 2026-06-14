import '../../shared/base.css'
import './style.css'

const base = import.meta.env.BASE_URL

document.querySelector('#app').innerHTML = `
  <header class="app-header">
    <div class="container header-inner">
      <a href="${base}animal-quiz/" class="brand">
        <img src="${base}images/animal-quiz/launch-icon.png" alt="Animal Quiz" class="brand-icon" />
        <span class="brand-name">Animal Quiz - Kids</span>
      </a>
    </div>
  </header>

  <main class="privacy-content">
    <h1>Privacy Policy</h1>
    <p class="placeholder">
      Privacy policy coming soon.<br><br>
      For any questions, contact us at <a href="mailto:contact@29tech.co.in">contact@29tech.co.in</a>
    </p>
  </main>

  <footer class="app-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand-col">
          <div class="footer-brand">
            <img src="${base}images/animal-quiz/launch-icon.png" alt="" class="footer-icon" />
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
            <li><a href="${base}animal-quiz/privacy-policy/">Privacy Policy</a></li>
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
        <a href="${base}animal-quiz/">Back to Animal Quiz</a>
      </div>
    </div>
  </footer>
`
