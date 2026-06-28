import '../../shared/base.css'
import './style.css'

const base = import.meta.env.BASE_URL

document.querySelector('#app').innerHTML = `
  <header class="app-header">
    <div class="container header-inner">
      <a href="${base}ta-rail/" class="brand">
        <img src="${base}images/ta-rail/launch-icon.png" alt="TA Rail" class="brand-icon" />
        <span class="brand-name">TA Rail&trade;</span>
      </a>
    </div>
  </header>

  <main class="privacy-content">
    <h1>Privacy Policy</h1>
    <p class="last-updated">Effective Date: 1 May 2026 &nbsp;|&nbsp; Last Updated: 1 May 2026</p>
    <p class="intro">This Privacy Policy ("Policy") describes how 29 Tech ("we", "us", or "our") collects, uses, stores, and protects information through the TA Rail mobile application ("Application" or "App").</p>
    <p class="intro">By using the Application, you ("User" or "you") agree to the terms of this Privacy Policy. If you do not agree, please discontinue use and uninstall the Application.</p>

    <h2>1. Information We Collect</h2>

    <h3>1.1 Information You Provide</h3>
    <p>When you register or use the Application, you may provide:</p>
    <ul>
      <li>Phone number (used for account authentication)</li>
      <li>Full name</li>
      <li>Railway branch, zone, and division</li>
      <li>Headquarters location</li>
      <li>Designation and date of appointment or joining</li>
      <li>Basic pay, pay scale, level, and grade pay</li>
      <li>Provident Fund number</li>
      <li>Travelling Allowance rate</li>
      <li>Duty entry details including train numbers, departure and arrival times, stations, routes, and objectives of travel</li>
    </ul>

    <h3>1.2 Subscription Data</h3>
    <p>If you subscribe to premium features:</p>
    <ul>
      <li>All payment transactions are processed by Google Play Store (Google LLC) and/or Apple App Store (Apple Inc.). We do not collect or store your credit card, debit card, or bank account details.</li>
      <li>We receive subscription status information (such as active or expired) through RevenueCat Inc., our subscription management provider, to manage your access to premium features.</li>
    </ul>

    <h3>1.3 Automatically Collected Data</h3>
    <p>We collect minimal technical data necessary for the Application to function:</p>
    <ul>
      <li>Application version</li>
      <li>Platform type (Android or iOS)</li>
      <li>PDF generation logs (document type and timestamp, stored in our database for usage analytics)</li>
    </ul>
    <p>We do not collect device identifiers, advertising IDs, IP addresses, or location data.</p>

    <h2>2. How We Use Your Information</h2>
    <p>We use your information for the following purposes:</p>
    <ul>
      <li>To provide the core features of the Application, including travelling allowance calculations, duty entry management, and PDF generation</li>
      <li>To authenticate your identity via phone number verification</li>
      <li>To store and back up your data on secure servers (for premium users), enabling data restoration across sessions and devices</li>
      <li>To manage your subscription status and premium feature access</li>
      <li>To improve the Application based on aggregated, non-identifying usage patterns</li>
    </ul>

    <h2>3. Third-Party Services</h2>
    <p>The Application uses the following third-party services, each governed by their own privacy policies:</p>
    <ul>
      <li>Firebase Authentication (Google LLC) — for phone number verification and user authentication</li>
      <li>Cloud Firestore (Google LLC) — for storing user profile data and usage logs</li>
      <li>Firebase Cloud Storage (Google LLC) — for storing backup data (premium feature)</li>
      <li>RevenueCat (RevenueCat Inc.) — for managing in-app subscriptions and purchase verification</li>
      <li>Google Play Store (Google LLC) and Apple App Store (Apple Inc.) — for processing payments</li>
    </ul>
    <p>We recommend reviewing the privacy policies of <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google</a>, <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">RevenueCat</a>, and <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">Apple</a> for details on how they handle your information.</p>

    <h2>4. Data Storage and Security</h2>
    <ul>
      <li>Your data is stored on servers provided by Google Cloud (via Firebase). These servers may be located outside India.</li>
      <li>We use industry-standard encryption for data in transit (TLS/SSL). Data stored in Cloud Firestore and Firebase Cloud Storage is encrypted at rest using Google Cloud&rsquo;s default encryption (AES-256). Local data on your device is protected by the operating system&rsquo;s native encryption capabilities.</li>
      <li>Access to your data is restricted and protected by Firebase security rules.</li>
      <li>Local data on your device is stored in a local database and shared preferences.</li>
      <li>No security measure is completely secure. While we take reasonable steps to protect your data, we cannot guarantee absolute security.</li>
    </ul>

    <h2>5. Data Sharing</h2>
    <p>We do not sell, rent, or trade your personal information to any third party.</p>
    <p>We may share your information only in the following cases:</p>
    <ul>
      <li>With the third-party service providers listed in Section 3, solely for the purposes described in this Policy</li>
      <li>When required by law, regulation, or legal process</li>
      <li>To protect the rights, safety, or property of our users or the public</li>
    </ul>

    <h2>6. Data Retention</h2>
    <ul>
      <li>Your data is retained as long as your account is active.</li>
      <li>When you delete your account through the Application, we delete your profile data from our servers, your backup files from cloud storage, and your local data from the device.</li>
      <li>Aggregated, non-identifying data may be retained for analytical purposes.</li>
    </ul>

    <h2>7. Your Rights</h2>
    <p>You have the following rights regarding your data:</p>
    <ul>
      <li><strong>Access and Review:</strong> You can view your data in the My Profile and Preview sections of the Application.</li>
      <li><strong>Correction:</strong> You can update your information directly in the Application.</li>
      <li><strong>Deletion:</strong> You can delete your account and all associated data from the Settings page in the Application. This removes your data from our servers, cloud storage, and your device.</li>
      <li><strong>Data Export:</strong> You can export your duty entries as PDF documents from within the Application.</li>
    </ul>
    <p>For any requests or questions, contact us at: <a href="mailto:harshupbishnoi@gmail.com">harshupbishnoi@gmail.com</a></p>

    <h2>8. Children's Privacy</h2>
    <p>The Application is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.</p>

    <h2>9. Changes to This Privacy Policy</h2>
    <p>We may update this Privacy Policy from time to time. Changes will be posted within the Application. Your continued use of the Application after changes are posted constitutes your acceptance of the updated Policy.</p>

    <h2>10. Disclaimer</h2>
    <p>The TA Rail Application is an independent tool for assisting with travelling allowance calculations. It is not affiliated with, endorsed by, or connected to the Indian Railways, the Ministry of Railways, or the Government of India.</p>

    <h2>11. Governing Law</h2>
    <p>This Privacy Policy is governed by the laws of the Republic of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Madhya Pradesh, India.</p>

    <h2>12. Contact Us</h2>
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
            <img src="${base}images/ta-rail/launch-icon.png" alt="" class="footer-icon" />
            <span>TA Rail&trade;</span>
          </div>
          <p class="footer-brand-desc">Travelling allowance calculation app based on Indian Railway Establishment Code.</p>
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
        <a href="${base}ta-rail/">Back to TA Rail&trade;</a>
      </div>
    </div>
  </footer>
`
