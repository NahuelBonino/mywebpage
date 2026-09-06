# Portfolio Personal — Nahuel Bonino

Sitio web personal profesional que presenta mi perfil, experiencia, proyectos y habilidades como Full Stack Developer y estudiante de Ingeniería en Computación.

## Contenido del sitio

- **Hero**: Presentación principal con nombre, rol y CTAs
- **Sobre mí**: Bio personal, motivación y estadísticas rápidas
- **Proyectos**: Carousel de trabajo seleccionado (Ronda, Ingenia, 2Teams, Lista de Archivos, Globo)
- **Experiencia**: Timeline de experiencia laboral (Sofis Solutions, Humana IT, Ingenia)
- **Educación**: Formación académica en UdelaR
- **Habilidades**: Stack tecnológico organizado por categoría
- **Contacto**: Links a email, LinkedIn, GitHub y WhatsApp
- **Chatbot**: Asistente flotante (position fixed) que conversa con los visitantes vía API

## Stack tecnológico

- **Vite 8** — Build tool y dev server
- **React 19** — UI library
- **TypeScript** — Tipado estático
- **Tailwind CSS v4** — Estilos utility-first
- **pnpm** — Package manager

## Comandos

```bash
pnpm install     # Instalar dependencias
pnpm dev         # Iniciar dev server
pnpm build       # Build de producción
pnpm preview     # Preview del build
pnpm format      # Formatear código con oxfmt
```

## Chatbot

El sitio incluye un chatbot flotante (esquina inferior derecha) que mantiene el historial de la conversación por sesión.

### Configuración

Copiá `.env.example` a `.env` y completá los valores:

```bash
CHATBOT_URL=https://TU-BACKEND/portfolio-chatbot/
PORTFOLIO_TOKEN=TU-TOKEN-AQUI
```

### Contrato de la API

Cada mensaje se envía con `POST` al endpoint configurado:

```ts
fetch(CHATBOT_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${PORTFOLIO_TOKEN}`,
  },
  body: JSON.stringify({ historial, message }),
})
```

Donde:

- `historial` — array con toda la conversación de la sesión, en el formato `{ role: 'user' | 'assistant', content: string }`.
- `message` — el mensaje actual del usuario (no incluido en `historial`).

El componente acepta la respuesta en varios formatos (`response`, `reply`, `content`, `message`, `answer`, `text`, o anidada en `assistant`/`data`) y la agrega al historial de la sesión. Ajustá `extractAssistantText` en `src/Chatbot.tsx` si tu backend usa otro formato.

## Contacto

- **Email**: [nahuelboninoa@gmail.com](mailto:nahuelboninoa@gmail.com)
- **LinkedIn**: [linkedin.com/in/nahuel-bonino-acuña](https://www.linkedin.com/in/nahuel-bonino-acu%C3%B1a/)
- **GitHub**: [@NahuelBonino](https://github.com/NahuelBonino)
- **WhatsApp**: [095 458 701](https://api.whatsapp.com/send?phone=095458701)
- **Ubicación**: Montevideo, Uruguay

---

© 2026 Nahuel Bonino
