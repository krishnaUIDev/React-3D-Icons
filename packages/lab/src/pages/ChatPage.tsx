import React from "react";
import { ChatAgent } from "r3d-icons";
import { useRouter } from "../router/Router";
import { audioEngine } from "../utils/audio";
import { useTranslation } from "../i18n/useTranslation";

interface ChatPageProps {
  theme: "light" | "dark";
}

function handleSound(soundType: "send" | "reply" | "click") {
  if (soundType === "send") {
    audioEngine.playSnap();
  } else if (soundType === "reply") {
    audioEngine.playChime();
  } else {
    audioEngine.playClick();
  }
}

export const ChatPage: React.FC<ChatPageProps> = ({ theme }) => {
  const { navigate, updateCustomizerURL } = useRouter();
  const { t } = useTranslation();

  const handleAction = (action: { type: string; payload: any }) => {
    switch (action.type) {
      case "show_icon":
        // Navigate to Customizer and load the icon (Gamepad, Router, etc)
        updateCustomizerURL("6366f1", action.payload);
        break;
      case "apply_preset":
        // Navigate to Customizer with Gamepad as default and the target preset payload
        updateCustomizerURL("6366f1", "Gamepad");
        break;
      case "navigate":
        navigate(action.payload);
        break;
      default:
        break;
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12 flex flex-col gap-6">
      {/* Page Info Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-white uppercase">
          {t("chat_title" as any)}
        </h1>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider max-w-md mx-auto">
          {t("chat_subtitle" as any)}
        </p>
      </div>

      {/* Reusable Library ChatAgent Widget */}
      <div className="h-[550px] w-full">
        <ChatAgent
          agentName="R3D-Agent"
          placeholderText={t("chat_placeholder" as any)}
          theme={theme}
          onActionTriggered={handleAction}
          onSoundTrigger={handleSound}
        />
      </div>
    </div>
  );
};
