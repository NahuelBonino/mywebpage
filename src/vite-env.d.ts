/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL del backend del chatbot (ej: https://mi-backend/portfolio-chatbot/) */
  readonly VITE_CHATBOT_URL?: string
  /** Token de autorización para el endpoint del chatbot */
  readonly VITE_PORTFOLIO_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
