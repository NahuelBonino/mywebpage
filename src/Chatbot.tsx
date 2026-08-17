import { useEffect, useRef, useState, type FormEvent } from 'react'

// ── Config (sobrescribí estas variables en un archivo .env) ───────────────
const CHATBOT_URL = import.meta.env.VITE_CHATBOT_URL ?? 'https://TU-BACKEND/portfolio-chatbot/'
const PORTFOLIO_TOKEN = import.meta.env.VITE_PORTFOLIO_TOKEN ?? ''

// ── Tipos ──────────────────────────────────────────────────────────────────
type ChatRole = 'user' | 'assistant'

interface ChatMessage {
  role: ChatRole
  content: string
}

// ── Icons ──────────────────────────────────────────────────────────────────

function ChatIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function SendIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

function CloseIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

function BotIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}

// ── Helpers ────────────────────────────────────────────────────────────────

/** Extrae el texto de la respuesta del backend tolerando distintos formatos. */
function extractAssistantText(data: unknown): string {
  if (typeof data === 'string' && data.trim()) return data
  if (data && typeof data === 'object') {
    const obj = data as Record<string, unknown>
    for (const key of ['response', 'reply', 'content', 'message', 'answer', 'text']) {
      const value = obj[key]
      if (typeof value === 'string' && value.trim()) return value
    }
    // Responde anidada tipo { assistant: { content } } o { data: { ... } }
    const nested = obj.assistant ?? obj.data
    if (nested && typeof nested === 'object') {
      const inner = nested as Record<string, unknown>
      for (const key of ['content', 'message', 'response', 'reply', 'text']) {
        const value = inner[key]
        if (typeof value === 'string' && value.trim()) return value
      }
    }
  }
  return 'Lo siento, no pude procesar la respuesta del servidor.'
}

// ── Componente ─────────────────────────────────────────────────────────────

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [history, setHistory] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Autoscroll al final de la conversación
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [history, isLoading, isOpen])

  // Enfocar el input al abrir el chat
  useEffect(() => {
    if (isOpen) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 250)
      return () => window.clearTimeout(t)
    }
  }, [isOpen])

  // Cerrar con Escape
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  const handleSend = async (e?: FormEvent) => {
    e?.preventDefault()
    const message = input.trim()
    if (!message || isLoading) return

    const historial = history
    const userMsg: ChatMessage = { role: 'user', content: message }

    // Mostrar el mensaje del usuario de inmediato
    setHistory((prev) => [...prev, userMsg])
    setInput('')
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch(CHATBOT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${PORTFOLIO_TOKEN}`,
        },
        body: JSON.stringify({ historial, message }),
      })

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
      }
      console.log('Respuesta del backend del chatbot:', res)
      const data: unknown = await res.json()
      const reply = extractAssistantText(data)

      setHistory((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setError('No se pudo conectar con el asistente. Probá de nuevo en unos segundos.')
    } finally {
      setIsLoading(false)
    }
  }

  const hasMessages = history.length > 0

  return (
    <>
      {/* Botón flotante (siempre visible, position fixed) */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
        aria-expanded={isOpen}
        className="fixed bottom-6 right-6 z-[100] grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#22D3EE] to-[#0EA5E9] text-[#05121f] shadow-[0_8px_30px_rgba(34,211,238,0.35)] ring-1 ring-white/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(34,211,238,0.55)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#22D3EE]/40"
      >
        {/* Halo pulsante */}
        <span className="absolute inset-0 -z-10 rounded-full bg-[#22D3EE]/40 blur-md animate-pulse" aria-hidden="true" />
        <span className="transition-transform duration-300" style={{ transform: isOpen ? 'rotate(90deg)' : 'none' }}>
          {isOpen ? <CloseIcon size={24} /> : <ChatIcon size={24} />}
        </span>
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#090D16] bg-emerald-400" aria-hidden="true" />
        )}
      </button>

      {/* Panel del chat */}
      {isOpen && (
        <section
          role="dialog"
          aria-label="Chat con el asistente"
          aria-modal="false"
          className="fixed bottom-24 right-6 z-[99] flex h-[min(600px,calc(100dvh-7.5rem))] w-[calc(100vw-3rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B1120]/95 shadow-[0_25px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl animate-chat-in origin-bottom-right"
        >
          {/* Header */}
          <header className="flex items-center gap-3 border-b border-white/[0.07] bg-gradient-to-r from-[#0EA5E9]/15 to-[#22D3EE]/5 px-4 py-3.5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#22D3EE]/10 text-[#22D3EE] ring-1 ring-[#22D3EE]/30">
              <BotIcon size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[13px] font-bold tracking-wide text-slate-100">Asistente de Nahuel</p>
              <p className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Online · responde en segundos
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar chat"
              className="grid h-8 w-8 place-items-center rounded-lg text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]/40"
            >
              <CloseIcon size={16} />
            </button>
          </header>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin">
            {!hasMessages && (
              <div className="rounded-2xl rounded-bl-md border border-white/[0.06] bg-white/[0.04] px-4 py-3 text-[13px] leading-relaxed text-slate-300">
                ¡Hola! 👋 Soy el asistente de Nahuel. Preguntame sobre su experiencia, proyectos, habilidades o cómo contactarlo.
              </div>
            )}

            {history.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={
                    msg.role === 'user'
                      ? 'max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-md bg-[#22D3EE] px-3.5 py-2.5 text-[13px] leading-relaxed text-[#05121f]'
                      : 'max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-md border border-white/[0.06] bg-white/[0.05] px-3.5 py-2.5 text-[13px] leading-relaxed text-slate-200'
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/[0.06] bg-white/[0.05] px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-[#22D3EE] animate-typing" />
                  <span className="h-2 w-2 rounded-full bg-[#22D3EE] animate-typing [animation-delay:150ms]" />
                  <span className="h-2 w-2 rounded-full bg-[#22D3EE] animate-typing [animation-delay:300ms]" />
                  <span className="sr-only">Escribiendo…</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Error */}
          {error && (
            <div className="mx-4 mb-2 rounded-lg border border-rose-500/25 bg-rose-500/10 px-3 py-2 text-[12px] text-rose-300">
              {error}
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-white/[0.07] bg-[#0B1120] p-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribí tu mensaje…"
              autoComplete="off"
              aria-label="Mensaje"
              className="h-10 flex-1 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3.5 text-[13px] text-slate-100 placeholder:text-slate-500 transition-colors focus:border-[#22D3EE]/50 focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/20"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Enviar mensaje"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#22D3EE] text-[#05121f] transition-all duration-200 hover:bg-[#67e8f9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]/40 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isLoading ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#05121f]/30 border-t-[#05121f]" aria-hidden="true" />
              ) : (
                <SendIcon size={16} />
              )}
            </button>
          </form>
        </section>
      )}
    </>
  )
}
