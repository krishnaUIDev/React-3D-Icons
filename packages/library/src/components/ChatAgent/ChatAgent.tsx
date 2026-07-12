import React, { useState, useRef, useEffect } from "react";

export interface ChatMessage {
  id: string;
  sender: "user" | "agent";
  text: string;
  timestamp: string;
  actions?: Array<{
    label: string;
    type: "apply_preset" | "show_icon" | "navigate";
    payload: any;
  }>;
}

export interface ChatAgentProps {
  agentName?: string;
  systemPrompt?: string;
  placeholderText?: string;
  theme?: "light" | "dark";
  onActionTriggered?: (action: { type: string; payload: any }) => void;
  onSoundTrigger?: (soundType: "send" | "reply" | "click") => void;
}

export const ChatAgent: React.FC<ChatAgentProps> = ({
  agentName = "R3D-Assistant",
  placeholderText = "Ask about 3D icons, presets, or parameters...",
  onActionTriggered,
  onSoundTrigger
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "agent",
      text: `Hello! I am your 3D Icon assistant. Ask me to preview icons (like Gamepad, Router, or Shield) or apply material presets (like Gold, Glass, or Hologram)!`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      actions: [
        { label: "🎮 Show Gamepad", type: "show_icon", payload: "Gamepad" },
        { label: "✨ Apply Gold Preset", type: "apply_preset", payload: "gold" }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg_${Date.now()}`,
      sender: "user",
      text: inputValue.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    onSoundTrigger?.("send");

    // Simulate Agent response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      onSoundTrigger?.("reply");

      const reply = generateAgentReply(userMsg.text);
      setMessages((prev) => [...prev, reply]);
    }, 1200);
  };

  const handleAction = (type: string, payload: any) => {
    onSoundTrigger?.("click");
    onActionTriggered?.({ type, payload });
  };

  const generateAgentReply = (query: string): ChatMessage => {
    const q = query.toLowerCase();
    const ts = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const id = `reply_${Date.now()}`;

    // Gamepad matching
    if (q.includes("gamepad") || q.includes("game") || q.includes("console")) {
      return {
        id,
        sender: "agent",
        text: "I've located the 3D Gamepad Icon asset! It's styled with physical joysticks and responsive buttons. Let's load the model in the customizer sandbox.",
        timestamp: ts,
        actions: [{ label: "🎮 Load Gamepad Icon", type: "show_icon", payload: "Gamepad" }]
      };
    }

    // Router matching
    if (q.includes("router") || q.includes("network") || q.includes("wifi")) {
      return {
        id,
        sender: "agent",
        text: "The 3D Router Icon features dual dual-band antennas, dynamic connection indicator LEDs, and a premium metallic chassis structure. You can customize the casing roughness and metalness parameter sliders.",
        timestamp: ts,
        actions: [{ label: "📶 Load Router Icon", type: "show_icon", payload: "Router" }]
      };
    }

    // Shield matching
    if (
      q.includes("shield") ||
      q.includes("security") ||
      q.includes("protect") ||
      q.includes("lock")
    ) {
      return {
        id,
        sender: "agent",
        text: "The 3D Shield Icon represents state-of-the-art protection layout. It looks incredibly gorgeous with the 'hologram' or 'glassmorphic' presets.",
        timestamp: ts,
        actions: [{ label: "🛡️ Load Shield Icon", type: "show_icon", payload: "Shield" }]
      };
    }

    // Gold preset matching
    if (q.includes("gold")) {
      return {
        id,
        sender: "agent",
        text: "Applying the premium 'Gold' material configuration. This increases the metalness index to 1.0, drops roughness to 0.15, and applies a rich polished gold reflectivity map.",
        timestamp: ts,
        actions: [{ label: "✨ Apply Gold", type: "apply_preset", payload: "gold" }]
      };
    }

    // Glass preset matching
    if (q.includes("glass") || q.includes("frosted") || q.includes("translucent")) {
      return {
        id,
        sender: "agent",
        text: "Setting up the 'Glassmorphism' preset configuration. This activates the light-transmission layer (physical glass refraction) with an high clearcoat intensity.",
        timestamp: ts,
        actions: [
          { label: "🔮 Apply Glassmorphism", type: "apply_preset", payload: "glassmorphism" }
        ]
      };
    }

    // Hologram preset matching
    if (q.includes("hologram") || q.includes("neon") || q.includes("cyber")) {
      return {
        id,
        sender: "agent",
        text: "Switching configuration to the 'Hologram' look. This adjusts refraction indexes and uses a vivid violet emission mapping for that cybernetic look.",
        timestamp: ts,
        actions: [{ label: "💫 Apply Hologram", type: "apply_preset", payload: "hologram" }]
      };
    }

    // Default reply
    return {
      id,
      sender: "agent",
      text: "I can help you customize the 3D models in real-time. Try asking me to apply material profiles (like Gold, Glassmorphism, or Hologram) or navigate to specific sections!",
      timestamp: ts,
      actions: [
        { label: "✨ Apply Gold Preset", type: "apply_preset", payload: "gold" },
        { label: "🛠️ Go to Layout Sandbox", type: "navigate", payload: "sandbox" }
      ]
    };
  };

  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-white/40 dark:bg-zinc-950/20 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.04)]">
      {/* Header */}
      <div className="px-5 py-4 border-b border-zinc-200/50 dark:border-white/5 flex items-center justify-between bg-white/30 dark:bg-zinc-950/30">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white text-xs font-black shadow-md shadow-indigo-500/20">
              AI
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0e111a]" />
          </div>
          <div>
            <h3 className="text-xs font-black text-zinc-800 dark:text-white uppercase tracking-wider leading-none">
              {agentName}
            </h3>
            <span className="text-[9px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mt-0.5 block">
              3D Icons Specialist
            </span>
          </div>
        </div>
      </div>

      {/* Messages area */}
      <div
        ref={scrollRef}
        className="flex-grow overflow-y-auto p-5 space-y-4 max-h-[480px] min-h-[300px]"
        style={{ scrollbarGutter: "stable" }}
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col max-w-[85%] ${
              m.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
            }`}
          >
            <div
              className={`px-4 py-3 rounded-2xl text-[11px] font-medium leading-relaxed ${
                m.sender === "user"
                  ? "bg-indigo-600 text-white rounded-tr-none shadow-md shadow-indigo-600/10"
                  : "bg-white/70 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-white/5 rounded-tl-none"
              }`}
            >
              {m.text}
            </div>

            {/* Actions attached to messages */}
            {m.actions && m.actions.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {m.actions.map((act) => (
                  <button
                    key={act.label}
                    onClick={() => handleAction(act.type, act.payload)}
                    className="px-2.5 py-1 rounded-lg border border-zinc-200/60 dark:border-white/5 bg-white/60 dark:bg-zinc-900/40 hover:bg-white dark:hover:bg-zinc-800 hover:scale-[1.03] transition-all text-[9px] font-bold text-indigo-500 dark:text-indigo-400 cursor-pointer shadow-sm"
                  >
                    {act.label}
                  </button>
                ))}
              </div>
            )}

            <span className="text-[8px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mt-1.5 px-1 block">
              {m.timestamp}
            </span>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-1.5 bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-white/5 px-4 py-3 rounded-2xl rounded-tl-none mr-auto">
            <span
              className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="p-4 border-t border-zinc-200/50 dark:border-white/5 bg-white/20 dark:bg-zinc-950/20">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholderText}
            className="flex-grow bg-white/50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-white/5 rounded-xl px-4 py-2.5 text-xs text-zinc-800 dark:text-white focus:outline-none focus:border-indigo-500/50 transition-colors shadow-inner"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition active:scale-95 cursor-pointer shadow-md shadow-indigo-600/10"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
