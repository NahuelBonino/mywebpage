import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// Vite config — https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const emitSourcemaps = mode === 'development'
  const chatbotUrl = env.CHATBOT_URL ? new URL(env.CHATBOT_URL) : null
  const chatbotProxy = chatbotUrl
    ? {
        target: chatbotUrl.origin,
        changeOrigin: true,
        rewrite: () => `${chatbotUrl.pathname}${chatbotUrl.search}`,
        configure: (proxy: { on: (event: string, listener: (request: { setHeader: (name: string, value: string) => void }) => void) => void }) => {
          proxy.on('proxyReq', (request) => {
            if (env.PORTFOLIO_TOKEN) {
              request.setHeader('Authorization', `Bearer ${env.PORTFOLIO_TOKEN}`)
            }
          })
        },
      }
    : null

  return {
    base: env.FIGMA_PUBLIC_URL ? `${env.FIGMA_PUBLIC_URL}/` : '/',
    envPrefix: ['VITE_'],
    build: {
      sourcemap: emitSourcemaps ? 'inline' : false,
      minify: !emitSourcemaps,
    },
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: parseInt(env.PORT || '8443'),
      strictPort: true,
      proxy: chatbotProxy ? { '/api/chatbot': chatbotProxy } : undefined,
    },
    preview: {
      host: '0.0.0.0',
      port: parseInt(env.PORT || '8443'),
    },
  }
})
