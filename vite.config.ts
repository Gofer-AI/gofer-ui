import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Serve the static newsletter at clean URLs (/newsletter, /newsletter/jun2026)
// during dev by mapping extensionless requests to their .html files before
// Vite's static/SPA middleware runs. Asset requests (containing a dot) are left alone.
function newsletterCleanUrls(): Plugin {
  return {
    name: 'newsletter-clean-urls',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const reqPath = (req.url || '').split('?')[0]
        if (reqPath === '/newsletter' || reqPath === '/newsletter/') {
          req.url = '/newsletter/index.html'
        } else {
          const match = reqPath.match(/^\/newsletter\/([^./]+)\/?$/)
          if (match) req.url = `/newsletter/${match[1]}.html`
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), newsletterCleanUrls()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.JPG', '**/*.JPEG'],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
