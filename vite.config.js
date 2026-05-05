import { resolve } from 'path'
import { existsSync } from 'fs'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  appType: 'mpa',
  plugins: [
    {
      name: 'trailing-slash-redirect',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url.split('?')[0]
          if (!url.endsWith('/') && !url.includes('.')) {
            const dirPath = resolve(__dirname, url.slice(1), 'index.html')
            if (existsSync(dirPath)) {
              res.writeHead(301, { Location: url + '/' })
              res.end()
              return
            }
          }
          next()
        })
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home/index.html'),
        'animal-quiz': resolve(__dirname, 'animal-quiz/index.html'),
        'animal-quiz-privacy': resolve(__dirname, 'animal-quiz/privacy-policy/index.html'),
        repped: resolve(__dirname, 'repped/index.html'),
        'repped-privacy': resolve(__dirname, 'repped/privacy-policy/index.html'),
        'ta-rail': resolve(__dirname, 'ta-rail/index.html'),
        'ta-rail-privacy': resolve(__dirname, 'ta-rail/privacy-policy/index.html'),
        'ta-rail-terms': resolve(__dirname, 'ta-rail/terms-of-use/index.html'),
      },
    },
  },
})
