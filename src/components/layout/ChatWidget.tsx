"use client";

import { cn } from "@/lib/utils";
import { MessageCircle, Send, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

const markdownComponents: Components = {
  p: ({ children }) => <p className="mb-1.5 last:mb-0">{children}</p>,
  ul: ({ children }) => <ul className="my-1.5 ml-4 list-disc space-y-0.5">{children}</ul>,
  ol: ({ children }) => <ol className="my-1.5 ml-4 list-decimal space-y-0.5">{children}</ol>,
  li: ({ children }) => <li className="leading-snug">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
  h1: ({ children }) => <p className="font-semibold mb-1">{children}</p>,
  h2: ({ children }) => <p className="font-semibold mb-1">{children}</p>,
  h3: ({ children }) => <p className="font-semibold mb-1">{children}</p>,
  h4: ({ children }) => <p className="font-semibold mb-1">{children}</p>,
  code: ({ children }) => (
    <code className="font-mono text-xs bg-bone/80 px-1 py-0.5 rounded text-ochre-deep">
      {children}
    </code>
  ),
};

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  uiOnly?: boolean;
}

export default function ChatWidget() {
  const t = useTranslations("ChatBot");

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: t("welcomeMessage"),
      uiOnly: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [streamingContent, setStreamingContent] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages or streaming content change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingContent]);

  // Focus trap and keyboard handling
  useEffect(() => {
    if (!open) return;

    // Focus textarea when panel opens
    const timer = setTimeout(() => textareaRef.current?.focus(), 50);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (e.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'button:not([disabled]), textarea:not([disabled])'
        )
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const closePanel = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isStreaming) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };

    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setIsStreaming(true);
    setStreamingContent("");

    // Build API payload — exclude UI-only welcome message
    const apiMessages = nextMessages
      .filter((m) => !m.uiOnly)
      .map(({ role, content }) => ({ role, content }));

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok || !response.body) {
        throw new Error("upstream_error");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const doneIndex = chunk.indexOf("[DONE]");
        if (doneIndex !== -1) {
          accumulated += chunk.slice(0, doneIndex).replace(/^\n/, "");
          break;
        }
        accumulated += chunk;
        setStreamingContent(accumulated);
      }

      const finalText = accumulated.trim();
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "assistant", content: finalText },
      ]);
      setStreamingContent("");
      // Announce the complete message once to assistive tech
      setAnnouncement(finalText);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: t("errorMessage"),
        },
      ]);
    } finally {
      setIsStreaming(false);
    }
  };

  const handleTextareaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {/* Chat panel */}
      <div
        id="chat-panel"
        ref={panelRef}
        role="dialog"
        aria-label={t("title")}
        aria-modal="true"
        aria-hidden={!open}
        className={cn(
          "w-[calc(100vw-3rem)] max-w-[360px] max-h-[500px] bg-surface border border-bone rounded-lg shadow-xl flex flex-col transition-all duration-200 motion-reduce:transition-none origin-bottom-right",
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-hero-bg rounded-t-lg px-4 py-3 flex items-center justify-between shrink-0">
          <div>
            <span className="block text-xs font-mono text-ochre-lite leading-none mb-1">
              {t("eyebrow")}
            </span>
            <span className="block text-sm font-medium text-hero-text leading-none">
              {t("title")}
            </span>
          </div>
          <button
            onClick={closePanel}
            aria-label={t("close")}
            className="w-8 h-8 flex items-center justify-center rounded text-hero-text/70 hover:text-hero-text hover:bg-white/10 transition-colors motion-reduce:transition-none"
          >
            <X size={16} />
          </button>
        </div>

        {/* Message list */}
        <div
          className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-0"
          aria-label="Chat messages"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn(
                "rounded-lg px-3 py-2 text-sm text-ink max-w-[88%] leading-relaxed",
                m.role === "user"
                  ? "bg-ochre/15 self-end ml-auto text-right"
                  : "bg-bone/50 self-start"
              )}
            >
              {m.role === "assistant" ? (
                <ReactMarkdown components={markdownComponents}>
                  {m.content}
                </ReactMarkdown>
              ) : (
                m.content
              )}
            </div>
          ))}

          {/* Streaming content (visual only — SR gets the completed announcement) */}
          {streamingContent && (
            <div className="rounded-lg px-3 py-2 text-sm text-ink max-w-[88%] leading-relaxed bg-bone/50 self-start">
              <ReactMarkdown components={markdownComponents}>
                {streamingContent}
              </ReactMarkdown>
            </div>
          )}

          {/* Thinking indicator — shown only before first chunk arrives */}
          {isStreaming && !streamingContent && (
            <div className="rounded-lg px-3 py-2 text-sm text-taupe max-w-[88%] bg-bone/50 self-start">
              {t("thinking")}
            </div>
          )}

          <div ref={messagesEndRef} aria-hidden="true" />
        </div>

        {/* Screen-reader live region — updated once on stream completion */}
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {announcement}
        </div>

        {/* Input form */}
        <form
          onSubmit={handleSubmit}
          className="border-t border-bone p-3 flex gap-2 items-end shrink-0"
        >
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleTextareaKeyDown}
            placeholder={t("placeholder")}
            disabled={isStreaming}
            rows={1}
            className="flex-1 resize-none text-sm text-ink bg-transparent placeholder:text-taupe border-0 outline-none py-1 disabled:opacity-50 leading-relaxed max-h-24 overflow-y-auto"
          />
          <button
            type="submit"
            disabled={isStreaming || !input.trim()}
            aria-label={t("send")}
            className="w-8 h-8 flex items-center justify-center rounded bg-ochre text-hero-text hover:bg-ochre-deep transition-colors motion-reduce:transition-none disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
          >
            <Send size={14} />
          </button>
        </form>
      </div>

      {/* Trigger button — pill with label when closed, icon-only when open */}
      <button
        ref={triggerRef}
        onClick={() => setOpen((v) => !v)}
        aria-label={t("triggerLabel")}
        aria-expanded={open}
        aria-controls="chat-panel"
        className={cn(
          "h-12 rounded-full bg-hero-bg text-ochre-lite flex items-center justify-center shadow-lg hover:bg-ink transition-colors motion-reduce:transition-none",
          open ? "w-12" : "gap-2 px-4"
        )}
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
        {!open && (
          <span className="text-sm font-medium text-hero-text whitespace-nowrap">
            {t("triggerLabel")}
          </span>
        )}
      </button>
    </div>
  );
}
