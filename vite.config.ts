import { defineConfig, loadEnv, type ProxyOptions } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// Vite config — https://vitejs.dev/config/
const browserTargets = ['chrome80', 'edge80', 'firefox78', 'safari13', 'ios13']
const browserListTargets = ['chrome >= 80', 'edge >= 80', 'firefox >= 78', 'safari >= 13', 'ios >= 13']

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const emitSourcemaps = mode === 'development'
  const chatbotUrl = env.CHATBOT_URL ? new URL(env.CHATBOT_URL) : null
  const chatbotProxy: ProxyOptions | null = chatbotUrl
    ? {
        target: chatbotUrl.origin,
        changeOrigin: true,
        rewrite: () => `${chatbotUrl.pathname}${chatbotUrl.search}`,
        configure: (proxy) => {
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
      cssTarget: browserTargets,
      sourcemap: emitSourcemaps ? 'inline' : false,
      minify: !emitSourcemaps,
    },
    plugins: [
      react(),
      tailwindcss(),
      legacy({
        targets: browserListTargets,
        modernTargets: browserListTargets,
      }),
    ],
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
