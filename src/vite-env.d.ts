/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL del backend del chatbot (ej: https://mi-backend/portfolio-chatbot/) */
  readonly CHATBOT_URL?: string
  /** Token de autorización para el endpoint del chatbot */
  readonly PORTFOLIO_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
