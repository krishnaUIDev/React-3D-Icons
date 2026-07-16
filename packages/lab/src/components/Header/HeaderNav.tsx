import React from "react";
import { TranslationKey } from "../../i18n/translations";

interface HeaderNavProps {
  route: string;
  navigate: (route: string) => void;
  t: (key: TranslationKey, replacements?: Record<string, string | number>) => string;
}

interface RouteItem {
  id: string;
  labelKey: string;
  defaultLabel: string;
}

const NAV_ITEMS: RouteItem[] = [
  { id: "info", labelKey: "info", defaultLabel: "Info" },
  { id: "saved", labelKey: "saved_presets_footer", defaultLabel: "Saved" },
  { id: "sandbox", labelKey: "sandbox_nav_short", defaultLabel: "Sandbox" },
  { id: "requests", labelKey: "requests_nav_short", defaultLabel: "Requests" },
  { id: "chat", labelKey: "chat_nav_short", defaultLabel: "Chat" }
];

export const HeaderNav: React.FC<HeaderNavProps> = ({ route, navigate, t }) => {
  return (
    <nav className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400 border-l border-zinc-200/50 dark:border-white/5 pl-6">
      {NAV_ITEMS.map((item) => {
        const isActive = route === item.id;
        const label = item.id === "info" ? item.defaultLabel : t(item.labelKey as any);
        return (
          <button
            type="button"
            key={item.id}
            onClick={() => navigate(item.id)}
            className={`px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center justify-center hover:scale-[1.03] ${
              isActive
                ? "border-indigo-500/40 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_16px_rgba(99,102,241,0.15)]"
                : "border-zinc-200/50 dark:border-white/5 bg-zinc-100/40 dark:bg-zinc-950/[0.1] text-zinc-500 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-white/10 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            {label}
          </button>
        );
      })}
    </nav>
  );
};
