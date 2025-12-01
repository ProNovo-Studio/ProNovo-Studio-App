import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, X } from "lucide-react";
import { useAppStore } from "../stores/appStore";
import {
  useChatHistoryStore,
  useActiveSession,
} from "../stores/chatHistoryStore";
import { useMessage } from "../../../sdk/src/custom_hooks";
import type { Message } from "../../../sdk/src/codegen_models/message";
import { CodeExecutor } from "../../utils/codeExecutor";
import { api } from "../../utils/api";
import { v4 as uuidv4 } from "uuid";

export const ChatPanel: React.FC = () => {
  const {
    plugin,
    currentCode,
    setCurrentCode,
    setIsExecuting,
    setActivePane,
    setPendingCodeToRun,
  } = useAppStore();
  const selections = useAppStore((state) => state.selections);
  const removeSelection = useAppStore((state) => state.removeSelection);
  const clearSelections = useAppStore((state) => state.clearSelections);

  // Chat history store
  const { createSession, activeSessionId } = useChatHistoryStore();
  const { activeSession, addMessage } = useActiveSession();

  // Thread/session ID: Zustand primary, fallback to localStorage
  const getThreadId = () => {
    if (activeSessionId) return activeSessionId;
    const saved = localStorage.getItem("chat_thread_id");
    if (saved) return saved;
    return null;
  };
  const threadId = getThreadId();

  // Sync Zustand sessionId to localStorage for continuity
  useEffect(() => {
    if (activeSessionId) {
      localStorage.setItem("chat_thread_id", activeSessionId);
    }
  }, [activeSessionId]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lastAgentId, setLastAgentId] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { sendMessage } = useMessage();

  // Initialize session if none exists
  useEffect(() => {
    if (!activeSessionId) {
      createSession();
    }
  }, [activeSessionId, createSession]);

  // Get messages from active session
  const messages = activeSession?.messages || [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const formatSelection = (selection: any) => {
    const chain = selection.labelAsymId ?? selection.authAsymId ?? "";
    const seq =
      selection.labelSeqId != null && selection.labelSeqId !== ""
        ? selection.labelSeqId
        : selection.authSeqId != null
        ? selection.authSeqId
        : "";
    const chainText = chain ? ` (${chain})` : "";
    return `${selection.compId || "?"}${seq !== "" ? seq : ""}${chainText}`;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const renderMessageContent = (content: string) => {
    try {
      const parsed = JSON.parse(content);
      return (
        <pre className="text-xs whitespace-pre-wrap bg-white border border-gray-200 rounded p-2 overflow-x-auto">
          {JSON.stringify(parsed, null, 2)}
        </pre>
      );
    } catch {
      // not JSON
    }

    const lines = content.trim().split(/\r?\n/).filter(Boolean);
    const looksLikeTable =
      lines.length >= 2 &&
      lines[0].includes("|") &&
      (/^-+\|(-+\|?)+$/.test(lines[1].replace(/\s+/g, "")) ||
        lines[1].includes("|"));

    if (looksLikeTable) {
      const header = lines[0].split("|").map((s) => s.trim());
      const dataRows = lines
        .slice(2)
        .map((l) => l.split("|").map((s) => s.trim()));
      return (
        <div className="overflow-x-auto">
          <table className="text-xs w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {header.map((h, i) => (
                  <th
                    key={i}
                    className="text-left px-2 py-1 border-b border-gray-200"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataRows.map((r, ri) => (
                <tr key={ri} className={ri % 2 ? "bg-gray-50" : ""}>
                  {r.map((c, ci) => (
                    <td
                      key={ci}
                      className="px-2 py-1 align-top border-b border-gray-100"
                    >
                      {c || "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return <p className="text-sm">{content}</p>;
  };

  const isLikelyVisualization = (text: string): boolean => {
    const p = String(text || "").toLowerCase();
    const keywords = [
      "show ",
      "display ",
      "visualize",
      "render",
      "color",
      "colour",
      "cartoon",
      "surface",
      "ball-and-stick",
      "water",
      "ligand",
      "focus",
      "zoom",
      "load",
      "pdb",
      "highlight",
      "chain",
      "view",
      "representation",
    ];
    return keywords.some((k) => p.includes(k));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Create Message object matching SDK type
    const userMessage: Message = {
      id: Math.floor(Math.random() * 1000000),
      sender: "user",
      content: input.trim(),
      data: null,
      thread_id: threadId || "default-thread",
    };

    addMessage(userMessage);
    setInput("");
    setIsLoading(true);

    // Send message to backend using SDK hook
    sendMessage({
      message: userMessage,
      onSuccessCallback: (response) => {
        // Add AI response to chat
        const aiMessage: Message = {
          id: Math.floor(Math.random() * 1000000),
          sender: "ai",
          content: response.content,
          data: response.data ?? null,
          thread_id: response.thread_id,
        };
        addMessage(aiMessage);
        setIsLoading(false);
      },
      onErrorCallback: (error) => {
        const errorMessage: Message = {
          id: Math.floor(Math.random() * 1000000),
          sender: "ai",
          content:
            error.detail ||
            "AI backend is unavailable. Please start the server and try again.",
          data: null,
          thread_id: threadId || "default-thread",
        };
        addMessage(errorMessage);
        setIsLoading(false);
      },
    });
  };

  const quickPrompts = [
    "Show insulin",
    "Display hemoglobin",
    "Visualize DNA double helix",
    "Show antibody structure",
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              AI Assistant
            </h2>
            {activeSession && (
              <p className="text-xs text-gray-500 truncate max-w-[200px]">
                {activeSession.title}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.type === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              {message.type === "ai" ? (
                renderMessageContent(message.content)
              ) : (
                <p className="text-sm">{message.content}</p>
              )}
              <div className="text-xs mt-1 opacity-70">
                {new Date(message.timestamp).toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200">
        {/* Multiple selection chips */}
        {selections.length > 0 && (
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-gray-500 font-medium">
                Selected Residues ({selections.length})
              </div>
              {selections.length > 1 && (
                <button
                  onClick={clearSelections}
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  Clear All
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {selections.map((sel, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 border border-blue-200 rounded-full px-3 py-1 text-xs font-medium"
                >
                  <span>{formatSelection(sel)}</span>
                  <button
                    onClick={() => removeSelection(index)}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mb-3">
          <div className="text-xs text-gray-500 mb-2">Quick start:</div>
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => setInput(prompt)}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me to visualize a protein..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
