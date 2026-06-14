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
