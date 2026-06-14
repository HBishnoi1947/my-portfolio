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
      <p><strong>Email:</strong> <a href="mailto:contact@29tech.co.in">contact@29tech.co.in</a></p>
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
            <li><a href="mailto:contact@29tech.co.in">contact@29tech.co.in</a></li>
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
