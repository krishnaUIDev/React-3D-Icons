import React from "react";
import { TranslationKey } from "../../i18n/translations";
import { audioEngine } from "../../utils/audio";

interface HeaderMobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  route: string;
  navigate: (route: string) => void;
  t: (key: TranslationKey, replacements?: Record<string, string | number>) => string;
}

export const HeaderMobileMenu: React.FC<HeaderMobileMenuProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  route,
  navigate,
  t
}) => {
  if (!mobileMenuOpen) return null;

  return (
    <>
      <div
        className="md:hidden fixed inset-0 top-16 bg-zinc-950/20 dark:bg-black/40 backdrop-blur-[2px] z-40 transition-opacity"
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className="md:hidden absolute top-16 left-0 right-0 border-b border-zinc-200/80 dark:border-white/5 bg-white/95 dark:bg-[#070a13]/95 backdrop-blur-2xl shadow-xl flex flex-col gap-2.5 p-5 animate-in slide-in-from-top-3 duration-200 z-50">
        <button
          type="button"
          onClick={() => {
            audioEngine.playClick();
            navigate("catalog");
            setMobileMenuOpen(false);
          }}
          className={`w-full text-left px-4 py-3 rounded-xl border text-xs font-black uppercase tracking-wider transition cursor-pointer select-none ${
            route === "catalog"
              ? "border-indigo-500/40 bg-indigo-50/20 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400"
              : "border-zinc-200/60 dark:border-white/5 bg-zinc-50/40 dark:bg-zinc-900/20 text-zinc-650 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/30"
          }`}
        >
          Explore Catalog
        </button>
        <button
          type="button"
          onClick={() => {
            audioEngine.playClick();
            navigate("info");
            setMobileMenuOpen(false);
          }}
          className={`w-full text-left px-4 py-3 rounded-xl border text-xs font-black uppercase tracking-wider transition cursor-pointer select-none ${
            route === "info"
              ? "border-indigo-500/40 bg-indigo-50/20 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400"
              : "border-zinc-200/60 dark:border-white/5 bg-zinc-50/40 dark:bg-zinc-900/20 text-zinc-650 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/30"
          }`}
        >
          Info / Docs
        </button>
        <button
          type="button"
          onClick={() => {
            audioEngine.playClick();
            navigate("saved");
            setMobileMenuOpen(false);
          }}
          className={`w-full text-left px-4 py-3 rounded-xl border text-xs font-black uppercase tracking-wider transition cursor-pointer select-none ${
            route === "saved"
              ? "border-indigo-500/40 bg-indigo-50/20 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400"
              : "border-zinc-200/60 dark:border-white/5 bg-zinc-50/40 dark:bg-zinc-900/20 text-zinc-655 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/30"
          }`}
        >
          {t("saved_presets_nav" as any)}
        </button>
        <button
          type="button"
          onClick={() => {
            audioEngine.playClick();
            navigate("sandbox");
            setMobileMenuOpen(false);
          }}
          className={`w-full text-left px-4 py-3 rounded-xl border text-xs font-black uppercase tracking-wider transition cursor-pointer select-none ${
            route === "sandbox"
              ? "border-indigo-500/40 bg-indigo-50/20 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400"
              : "border-zinc-200/60 dark:border-white/5 bg-zinc-50/40 dark:bg-zinc-900/20 text-zinc-655 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/30"
          }`}
        >
          {t("sandbox_nav" as any)}
        </button>
        <button
          type="button"
          onClick={() => {
            audioEngine.playClick();
            navigate("requests");
            setMobileMenuOpen(false);
          }}
          className={`w-full text-left px-4 py-3 rounded-xl border text-xs font-black uppercase tracking-wider transition cursor-pointer select-none ${
            route === "requests"
              ? "border-indigo-500/40 bg-indigo-50/20 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400"
              : "border-zinc-200/60 dark:border-white/5 bg-zinc-50/40 dark:bg-zinc-900/20 text-zinc-655 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/30"
          }`}
        >
          {t("requests_nav" as any)}
        </button>
        <button
          type="button"
          onClick={() => {
            audioEngine.playClick();
            navigate("chat");
            setMobileMenuOpen(false);
          }}
          className={`w-full text-left px-4 py-3 rounded-xl border text-xs font-black uppercase tracking-wider transition cursor-pointer select-none ${
            route === "chat"
              ? "border-indigo-500/40 bg-indigo-50/20 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400"
              : "border-zinc-200/60 dark:border-white/5 bg-zinc-50/40 dark:bg-zinc-900/20 text-zinc-655 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/30"
          }`}
        >
          {t("chat_nav" as any)}
        </button>
      </div>
    </>
  );
};
