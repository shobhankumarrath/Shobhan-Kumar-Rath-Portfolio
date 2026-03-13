import { useState } from 'react'
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

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-80 max-w-[90vw] rounded-2xl bg-slate-900/95 text-slate-50 shadow-2xl border border-slate-700 backdrop-blur">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Chat with Shobhan</span>
            </div>
            <button
              type="button"
              onClick={toggleOpen}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
              aria-label="Close chat"
            >
              <FaTimes className="h-3 w-3" />
            </button>
          </div>

          <div className="flex max-h-80 min-h-[220px] flex-col gap-2 overflow-y-auto px-3 py-3 text-sm">
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
          </div>

          <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-slate-700 px-3 py-2">
            <input
              type="text"
              value={input}
              onChange={handleChange}
              placeholder="Ask about skills, projects..."
              className="flex-1 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
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
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        aria-label="Open recruiter chat"
      >
        <FaComments className="h-5 w-5" />
      </button>
    </div>
  )
}

export default RecruiterChatWidget

