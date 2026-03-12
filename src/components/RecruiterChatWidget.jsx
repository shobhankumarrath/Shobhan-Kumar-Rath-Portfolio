import { useState } from 'react'
import { FaComments, FaTimes } from 'react-icons/fa'

const initialAssistantMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hi! I'm Shobhan's AI assistant. Ask me anything about his skills, projects, or hiring details.",
}

function RecruiterChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([initialAssistantMessage])
  const [input, setInput] = useState('')

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSend = (event) => {
    event?.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return

    const newMessage = {
      id: `${Date.now()}`,
      role: 'user',
      content: trimmed,
    }

    setMessages((prev) => [...prev, newMessage])
    setInput('')
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-80 max-w-[90vw] rounded-2xl bg-slate-900/95 text-slate-50 shadow-2xl border border-slate-700 backdrop-blur">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Chat with Shobhan&apos;s AI</span>
              <span className="text-[11px] text-slate-300">
                Recruiter-focused assistant · Beta
              </span>
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
                  className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-slate-800 text-slate-50 rounded-bl-sm'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
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

