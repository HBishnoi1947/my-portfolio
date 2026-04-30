import '../../shared/base.css'
import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="app-header">
    <div class="container header-inner">
      <a href="/repped/" class="brand">
        <img src="/images/repped/launch-icon.png" alt="Repped" class="brand-icon" />
        <span class="brand-name">Repped</span>
      </a>
    </div>
  </header>

  <main class="privacy-content">
    <h1>Privacy Policy</h1>
    <p class="placeholder">
      Privacy policy coming soon.<br><br>
      For any questions, contact us at <a href="mailto:harshupbishnoi@gmail.com">harshupbishnoi@gmail.com</a>
    </p>
  </main>

  <footer class="app-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand-col">
          <div class="footer-brand">
            <img src="/images/repped/launch-icon.png" alt="" class="footer-icon" />
            <span>Repped</span>
          </div>
          <p class="footer-brand-desc">Turn your phone into a personal rep counter. AI-powered pose detection counts your reps in real-time.</p>
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
            <li><a href="/repped/privacy-policy/">Privacy Policy</a></li>
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
        <a href="/repped/">Back to Repped</a>
      </div>
    </div>
  </footer>
`
