import '../shared/base.css'
import './style.css'

const base = import.meta.env.BASE_URL

const apps = [
  {
    name: 'Animal Quiz - Kids',
    slug: `${base}animal-quiz/`,
    icon: `${base}images/animal-quiz/launch-icon.png`,
    tagline: 'Learn about animals in a fun and interactive way',
    accentColor: '#22c55e',
  },
  {
    name: 'Light Factory',
    slug: `${base}light-factory/`,
    icon: `${base}images/light-factory/launch-icon.png`,
    tagline: 'A steampunk puzzle of mirrors, prisms & light',
    accentColor: '#b45309',
  },
  {
    name: 'Repped',
    slug: `${base}repped/`,
    icon: `${base}images/repped/launch-icon.png`,
    tagline: 'AI-powered workout rep counter',
    accentColor: '#06d6a0',
  },
  {
    name: 'TA Rail',
    slug: `${base}ta-rail/`,
    icon: `${base}images/ta-rail/launch-icon.png`,
    tagline: 'Indian Railway travelling allowance calculator',
    accentColor: '#eab308',
  },
]

document.querySelector('#app').innerHTML = `
  <header class="home-header">
    <div class="container">
      <span class="logo">29 Tech&trade;</span>
    </div>
  </header>

  <main>
    <section class="home-hero section">
      <div class="container">
        <h1>We Build Apps<br>People Love</h1>
        <p class="subtitle">Simple tools that solve real problems</p>
      </div>
    </section>

    <section class="apps-section section">
      <div class="container">
        <div class="apps-grid">
          ${apps.map(app => `
            <a href="${app.slug}" class="app-card" style="--card-accent: ${app.accentColor}">
              <div class="app-card__icon">
                <img src="${app.icon}" alt="${app.name} icon" width="80" height="80" />
              </div>
              <h2 class="app-card__name">${app.name}</h2>
              <p class="app-card__tagline">${app.tagline}</p>
              <span class="app-card__cta">View App &rarr;</span>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  </main>

  <footer class="home-footer">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} 29 Tech&trade; &middot; harshupbishnoi@gmail.com</p>
    </div>
  </footer>
`
