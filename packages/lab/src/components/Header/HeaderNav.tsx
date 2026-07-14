import React from "react";
import { TranslationKey } from "../../i18n/translations";

interface HeaderNavProps {
  route: string;
  navigate: (route: string) => void;
  t: (key: TranslationKey, replacements?: Record<string, string | number>) => string;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ route, navigate, t }) => {
  return (
    <nav className="hidden md:flex items-center gap-2.5 text-[10px] font-black uppercase tracking-wider text-zinc-555 dark:text-zinc-400 border-l border-zinc-200/80 dark:border-zinc-800/80 pl-6">
      <button
        type="button"
        onClick={() => navigate("info")}
        className={`px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] flex items-center justify-center hover:scale-[1.03] ${
          route === "info"
            ? "border-indigo-500/40 bg-indigo-50/20 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_12px_rgba(99,102,241,0.1)]"
            : "border-zinc-200/80 dark:border-white/10 bg-zinc-100/40 dark:bg-zinc-950/[0.2] hover:bg-zinc-200/60 dark:hover:bg-zinc-950/[0.3] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
        }`}
      >
        Info
      </button>
      <button
        type="button"
        onClick={() => navigate("saved")}
        className={`px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] flex items-center justify-center hover:scale-[1.03] ${
          route === "saved"
            ? "border-indigo-500/40 bg-indigo-50/20 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_12px_rgba(99,102,241,0.1)]"
            : "border-zinc-200/80 dark:border-white/10 bg-zinc-100/40 dark:bg-zinc-950/[0.2] hover:bg-zinc-200/60 dark:hover:bg-zinc-950/[0.3] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
        }`}
      >
        {t("saved_presets_nav" as any)}
      </button>
      <button
        type="button"
        onClick={() => navigate("sandbox")}
        className={`px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] flex items-center justify-center hover:scale-[1.03] ${
          route === "sandbox"
            ? "border-indigo-500/40 bg-indigo-50/20 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_12px_rgba(99,102,241,0.1)]"
            : "border-zinc-200/80 dark:border-white/10 bg-zinc-100/40 dark:bg-zinc-950/[0.2] hover:bg-zinc-200/60 dark:hover:bg-zinc-950/[0.3] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
        }`}
      >
        {t("sandbox_nav" as any)}
      </button>
      <button
        type="button"
        onClick={() => navigate("requests")}
        className={`px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] flex items-center justify-center hover:scale-[1.03] ${
          route === "requests"
            ? "border-indigo-500/40 bg-indigo-50/20 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_12px_rgba(99,102,241,0.1)]"
            : "border-zinc-200/80 dark:border-white/10 bg-zinc-100/40 dark:bg-zinc-950/[0.2] hover:bg-zinc-200/60 dark:hover:bg-zinc-950/[0.3] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
        }`}
      >
        {t("requests_nav" as any)}
      </button>
      <button
        type="button"
        onClick={() => navigate("chat")}
        className={`px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] flex items-center justify-center hover:scale-[1.03] ${
          route === "chat"
            ? "border-indigo-500/40 bg-indigo-50/20 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_12px_rgba(99,102,241,0.1)]"
            : "border-zinc-200/80 dark:border-white/10 bg-zinc-100/40 dark:bg-zinc-950/[0.2] hover:bg-zinc-200/60 dark:hover:bg-zinc-950/[0.3] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
        }`}
      >
        {t("chat_nav" as any)}
      </button>
    </nav>
  );
};
