import { useEffect, useRef, useState } from 'react'
import { FaComments, FaTimes } from 'react-icons/fa'

const initialAssistantMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hi! I'm Shobhan's AI assistant. Ask me anything about his skills, projects, or hiring details.",
}

function normalizeAssistantText(text) {
  if (!text) return ''
  return text
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .trim()
}

function RecruiterChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([initialAssistantMessage])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const messagesEndRef = useRef(null)

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSend = async (event) => {
    event?.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return

    const userMessage = {
      id: `${Date.now()}`,
      role: 'user',
      content: trimmed,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch(
        'https://backend-chatbot-api-portfolio.vercel.app/api/chat',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: trimmed,
          }),
        },
      )

      if (!response.ok) {
        throw new Error('Failed to get response from assistant.')
      }

      const data = await response.json()
      const rawText =
        data.reply || data.message || data.answer || 'Sorry, I could not generate a response.'
      const replyText = normalizeAssistantText(rawText)

      const assistantMessage = {
        id: `${Date.now()}-assistant`,
        role: 'assistant',
        content: replyText,
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const hasOnlyWelcome = messages.length === 1

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages.length, isLoading])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-80 max-w-[90vw] rounded-3xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-indigo-900/90 text-slate-50 shadow-[0_0_35px_rgba(79,70,229,0.6)] border border-indigo-500/40 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-indigo-500/40">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold tracking-wide">
                Chat with <span className="text-indigo-300">Shobhan</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.16em] text-indigo-200/80">
                AI Career Assistant
              </span>
            </div>
            <button
              type="button"
              onClick={toggleOpen}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/90 text-slate-200 hover:bg-slate-700 transition-colors border border-indigo-400/50"
              aria-label="Close chat"
            >
              <FaTimes className="h-3 w-3" />
            </button>
          </div>

          <div className="flex max-h-80 min-h-[220px] flex-col gap-2 overflow-y-auto px-3 py-3 text-[13px]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 whitespace-pre-wrap break-words ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-slate-800 text-slate-50 rounded-bl-sm'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-slate-800 px-3 py-2 text-slate-300 text-xs italic">
                  Shobhan&apos;s assistant is typing...
                </div>
              </div>
            )}
            {error && (
              <div className="text-[11px] text-red-400 px-1">
                {error}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-indigo-500/40 px-3 py-2 bg-slate-950/40">
            <input
              type="text"
              value={input}
              onChange={handleChange}
              placeholder="Ask about skills, projects..."
              className="flex-1 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-3 py-2 text-xs font-semibold text-white shadow-md hover:from-indigo-400 hover:to-fuchsia-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              disabled={!input.trim()}
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={toggleOpen}
        className={`relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-[0_0_35px_rgba(251,191,36,0.7)] hover:from-indigo-400 hover:via-fuchsia-400 hover:to-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-slate-950 transition-transform duration-200 hover:scale-105 ${
          !isOpen && hasOnlyWelcome ? 'animate-pulse' : ''
        }`}
        aria-label="Open recruiter chat"
      >
        <FaComments className="h-6 w-6 drop-shadow" />
        {!isOpen && hasOnlyWelcome && (
          <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-[9px] font-bold text-slate-950 shadow-lg">
            AI
          </span>
        )}
      </button>
    </div>
  )
}

export default RecruiterChatWidget

