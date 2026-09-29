# Portfolio Personal â€” Nahuel Bonino

Sitio web personal profesional que presenta mi perfil, experiencia, proyectos y habilidades como Full Stack Developer y estudiante de IngenierÃ­a en ComputaciÃ³n.

## Contenido del sitio

- **Hero**: PresentaciÃ³n principal con nombre, rol y CTAs
- **Sobre mÃ­**: Bio personal, motivaciÃ³n y estadÃ­sticas rÃ¡pidas
- **Proyectos**: Carousel de trabajo seleccionado (Ronda, Ingenia, 2Teams, Lista de Archivos, Globo)
- **Experiencia**: Timeline de experiencia laboral (Sofis Solutions, Humana IT, Ingenia)
- **EducaciÃ³n**: FormaciÃ³n acadÃ©mica en UdelaR
- **Habilidades**: Stack tecnolÃ³gico organizado por categorÃ­a
- **Contacto**: Links a email, LinkedIn, GitHub y WhatsApp
- **Chatbot**: Asistente flotante (position fixed) que conversa con los visitantes vÃ­a API

## Stack tecnolÃ³gico

- **Vite 8** â€” Build tool y dev server
- **React 19** â€” UI library
- **TypeScript** â€” Tipado estÃ¡tico
- **Tailwind CSS v4** â€” Estilos utility-first
- **pnpm** â€” Package manager

## Compatibilidad de navegadores

El build apunta a Chrome/Edge 80+, Firefox 78+ y Safari/iOS 13+. Vite compila
JavaScript y minifica CSS con esos objetivos; `@vitejs/plugin-legacy` usa Babel
para generar el bundle de respaldo y los polyfills necesarios.

GSAP 3 tiene compatibilidad amplia, pero por sí solo no vuelve compatible a toda
la aplicación: también importan los plugins usados y las APIs del navegador.
Internet Explorer 11 no está soportado por React 19.

## Comandos

```bash
pnpm install     # Instalar dependencias
pnpm dev         # Iniciar dev server
pnpm build       # Build de producciÃ³n
pnpm preview     # Preview del build
pnpm format      # Formatear cÃ³digo con oxfmt
```

## Chatbot

El sitio incluye un chatbot flotante (esquina inferior derecha) que mantiene el historial de la conversaciÃ³n por sesiÃ³n.

### Configuraci?n

Configur? estas variables como secretos del entorno server-side (por ejemplo, en Vercel Project Settings). No las uses con el prefijo `VITE_` ni las expongas al frontend:

```bash
CHATBOT_URL=https://TU-BACKEND/portfolio-chatbot/
PORTFOLIO_TOKEN=TU-TOKEN-AQUI
```

El frontend llama a `/api/chatbot`. La funci?n [`api/chatbot.js`](./api/chatbot.js) mantiene el token en el servidor y lo agrega al reenviar la solicitud al backend. Para desarrollo local con `pnpm dev`, Vite crea un proxy equivalente usando las variables privadas de `.env`; en producci?n, Vercel usa la funci?n serverless.

### Contrato de la API

El navegador env?a `POST /api/chatbot` sin credenciales:

```json
{
  "historial": [{ "role": "user", "content": "Hola" }],
  "message": "?Qu? proyectos ten?s?"
}
```

El proxy reenv?a la solicitud al endpoint configurado con el header privado `Authorization: Bearer ${PORTFOLIO_TOKEN}`.

Donde:

- `historial` ? array con toda la conversaci?n de la sesi?n, en el formato `{ role: 'user' | 'assistant', content: string }`.
- `message` ? el mensaje actual del usuario (no incluido en `historial`).

El componente acepta la respuesta en varios formatos (`response`, `reply`, `content`, `message`, `answer`, `text`, o anidada en `assistant`/`data`) y la agrega al historial de la sesi?n. Ajust? `extractAssistantText` en `src/Chatbot.tsx` si tu backend usa otro formato.

## Contacto

- **Email**: [nahuelboninoa@gmail.com](mailto:nahuelboninoa@gmail.com)
- **LinkedIn**: [linkedin.com/in/nahuel-bonino-acuÃ±a](https://www.linkedin.com/in/nahuel-bonino-acu%C3%B1a/)
- **GitHub**: [@NahuelBonino](https://github.com/NahuelBonino)
- **WhatsApp**: [095 458 701](https://api.whatsapp.com/send?phone=095458701)
- **UbicaciÃ³n**: Montevideo, Uruguay

---

Â© 2026 Nahuel Bonino
