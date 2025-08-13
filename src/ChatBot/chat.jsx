import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Bot, User, Minimize2, Maximize2, Loader2, Paperclip, Sparkles, MessageSquare } from "lucide-react";

const systemPrompt = `
You are the DIU CPC 2025 Assistant.
Help users with Membership Registration, Login, Events, Announcements, Contact, and Profile management.
Use friendly, concise language and step-by-step guidance.
Warn users about admin-only features.
Provide links or instructions for any actionable items.
`;

const FAQ_RESPONSES = {
  "how to register": "To register, go to the Membership Registration page and fill in your full name, email, phone number, department, academic year, and a strong password. Verify via email before approval.",
  "forgot password": "Click 'Forgot Password' on the login page and follow the instructions sent to your email to reset your password.",
  "upcoming events": "Visit the Events page to see upcoming events with countdown timers. Click 'Register' to RSVP.",
  "announcements": "Check the Announcements section for club news. Subscribe to notifications for urgent updates.",
  "contact support": "Use the Contact form on the Contact page or reach out via our social media links for assistance."
};

async function generateReply(prompt, history) {
  const lower = prompt.toLowerCase();
  for (let key in FAQ_RESPONSES) {
    if (lower.includes(key)) return FAQ_RESPONSES[key];
  }
  // AI call placeholder
  try {
    const r = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          { role: "system", content: systemPrompt },
          ...history.map((m) => ({ role: m.role, content: m.content })),
          { role: "user", content: prompt }
        ]
      })
    });
    const data = await r.json();
    return data.reply || data.choices?.[0]?.message?.content || "(No reply content returned)";
  } catch {
    await new Promise((res) => setTimeout(res, 500));
    return "I\'m a demo AI reply. Connect me to /api/chat for real answers.";
  }
}

function useTypingEffect(fullText, speed = 18) {
  const [text, setText] = useState("");
  useEffect(() => {
    setText("");
    if (!fullText) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setText(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [fullText, speed]);
  return text;
}

function MessageBubble({ role, content }) {
  const isUser = role === "user";
  return (
    <div className={`w-full flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm border ${isUser ? "bg-white/20 backdrop-blur-md border-white/30" : "bg-black/10 dark:bg-white/10 backdrop-blur-md border-white/20"}`}>
        <div className="flex items-start gap-2">
          <div className="mt-0.5 shrink-0">
            {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
          </div>
          <div className="whitespace-pre-wrap break-words">{content}</div>
        </div>
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 text-xs opacity-70">
      <span className="animate-pulse">●</span>
      <span className="animate-pulse [animation-delay:150ms]">●</span>
      <span className="animate-pulse [animation-delay:300ms]">●</span>
    </div>
  );
}

const SUGGESTIONS = [
  "How to register",
  "Forgot password",
  "Upcoming events",
  "Announcements",
  "Contact support"
];

export default function CPCChatbot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ id: cryptoRandomId(), role: "assistant", content: "Hi! I\'m your DIU CPC 2025 assistant. Ask me anything about your membership, events, or announcements." }]);
  const [loading, setLoading] = useState(false);
  const [attachedName, setAttachedName] = useState("");
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const handleAttach = (e) => {
    const f = e.target.files?.[0];
    if (f) setAttachedName(f.name);
  };

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    const newUser = { id: cryptoRandomId(), role: "user", content: text };
    setMessages((m) => [...m, newUser]);
    setInput("");
    setLoading(true);
    try {
      const reply = await generateReply(text, messages);
      const assistant = { id: cryptoRandomId(), role: "assistant", content: reply };
      setMessages((m) => [...m, assistant]);
    } catch {
      setMessages((m) => [...m, { id: cryptoRandomId(), role: "assistant", content: "Sorry, I couldn\'t reach the AI service." }]);
    } finally {
      setLoading(false);
      setAttachedName("");
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const HeaderIcon = useMemo(() => (
    <img src="/assets/cpc-logo.png" onError={(ev) => { ev.currentTarget.style.display = "none"; }} alt="CPC Logo" className="w-6 h-6 rounded-full object-contain" />
  ), []);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <AnimatePresence>
        {!open && (
          <motion.button key="fab" initial={{ opacity: 0, scale: 0.9, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 8 }} onClick={() => setOpen(true)} className="group flex items-center gap-2 rounded-2xl px-4 py-3 shadow-lg border border-white/20 backdrop-blur-xl bg-white/10 hover:bg-white/20 transition text-sm" aria-label="Open chat">
            <div className="relative">{HeaderIcon}<MessageSquare className="w-6 h-6" /></div>
            <span className="font-medium">Chat</span>
            <Sparkles className="w-4 h-4 opacity-80" />
          </motion.button>
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div key="chatwin" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} className="w-[92vw] max-w-[380px] h-[72vh] max-h-[560px] md:w-[360px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-white/25 bg-white/10 dark:bg-black/20 backdrop-blur-2xl flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/20 bg-gradient-to-r from-white/10 to-white/0">
              <div className="flex items-center gap-2">
                <div className="relative w-7 h-7 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/assets/cpc-logo.png" alt="CPC" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  <Bot className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <div className="font-semibold text-sm">CPC Assistant</div>
                  <div className="text-[11px] opacity-70">Generative AI • Glass UI</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 rounded-xl hover:bg-white/10" onClick={() => setMinimized((m) => !m)}>{minimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}</button>
                <button className="p-2 rounded-xl hover:bg-white/10" onClick={() => setOpen(false)}><X className="w-4 h-4" /></button>
              </div>
            </div>

            <div className={`flex-1 flex flex-col ${minimized ? "h-16" : "h-auto"}`}>
              {!minimized && (
                <>
                  <div className="px-3 pt-2 flex gap-2 flex-wrap">
                    {SUGGESTIONS.map((s) => (
                      <button key={s} onClick={() => sendMessage(s)} className="text-xs px-2 py-1 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md">{s}</button>
                    ))}
                  </div>

                  <div ref={listRef} className="flex-1 overflow-y-auto px-3 pb-2 pt-1">
                    {messages.map((m) => <MessageBubble key={m.id} role={m.role} content={m.content} />)}
                    {loading && (
                      <div className="w-full flex justify-start mb-2">
                        <div className="max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm border bg-black/10 dark:bg-white/10 backdrop-blur-md border-white/20">
                          <div className="flex items-center gap-2"><Bot className="w-4 h-4" /><TypingDots /></div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {!minimized && (
              <div className="border-t border-white/20 p-2">
                {attachedName && <div className="text-[11px] opacity-80 px-1 pb-1">Attached: {attachedName}</div>}
                <div className="flex items-end gap-2">
                  <label className="p-2 rounded-xl hover:bg-white/10 cursor-pointer" title="Attach a file"><Paperclip className="w-4 h-4" /><input type="file" className="hidden" onChange={handleAttach} /></label>
                  <textarea ref={listRef} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={onKeyDown} rows={1} placeholder="Type a message..." className="flex-1 resize-none bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 rounded-2xl px-3 py-2 text-sm placeholder:text-white/60 backdrop-blur-md" style={{ maxHeight: 120 }} />
                  <button onClick={() => sendMessage(input)} disabled={!input.trim() || loading} className="p-2 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 disabled:opacity-50">{loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}</button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function cryptoRandomId() {
  try { const a = new Uint8Array(8); window.crypto.getRandomValues(a); return Array.from(a, (b) => b.toString(16).padStart(2, "0")).join(""); } catch { return Math.random().toString(16).slice(2); }
}
