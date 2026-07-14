import React from "react";
import { LetterIcon } from "r3d-icons";

interface HeaderLogoProps {
  theme: "light" | "dark";
  navigate: (route: string) => void;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ theme, navigate }) => {
  return (
    <button
      type="button"
      onClick={() => navigate("catalog")}
      className="flex items-center gap-3 cursor-pointer group text-left"
    >
      <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/20 dark:border-white/10 bg-white/[0.1] dark:bg-zinc-950/[0.2] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_16px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_4px_24px_rgba(0,0,0,0.4)] flex items-center justify-center transition group-hover:scale-105">
        <LetterIcon
          letter="R"
          size={36}
          preset="glass"
          angle="perspective"
          color={theme === "dark" ? "#818cf8" : "#4f46e5"}
          accentColor="#f43f5e"
          interactive={true}
          spinSpeed={0.5}
          animationType="orbit"
          cameraZoom={2.2}
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-base tracking-tight bg-gradient-to-r from-zinc-950 to-zinc-700 dark:from-white dark:to-zinc-300 bg-clip-text text-transparent leading-none">
          React 3D Icons
        </span>
        <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-semibold uppercase tracking-wider mt-0.5">
          Lab & Sandbox
        </span>
      </div>
    </button>
  );
};
