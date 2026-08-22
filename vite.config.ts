import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Serve the static sections (newsletter, blog, faq) at clean URLs
// (e.g. /blog, /blog/origin-post) during dev by mapping extensionless requests
// to their .html files before Vite's static/SPA middleware runs. Asset requests
// (containing a dot) are left alone. Mirrors the vercel.json routes in production.
function staticSectionCleanUrls(): Plugin {
  const sections = ['newsletter', 'blog', 'faq']
  const pattern = new RegExp(`^/(${sections.join('|')})(?:/([^./]+))?/?$`)
  return {
    name: 'static-section-clean-urls',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const reqPath = (req.url || '').split('?')[0]
        const match = reqPath.match(pattern)
        if (match) {
          const [, section, slug] = match
          req.url = slug ? `/${section}/${slug}.html` : `/${section}/index.html`
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), staticSectionCleanUrls()],
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
