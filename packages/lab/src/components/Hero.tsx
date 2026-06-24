import React from "react";
import { useTranslation } from "../i18n/useTranslation";
import { Sparkles, Download, Heart } from "lucide-react";

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative pt-8 pb-8 text-center max-w-4xl mx-auto px-6 overflow-hidden">
      {/* Decorative background glow circles */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-72 h-72 rounded-full bg-indigo-400/10 dark:bg-indigo-500/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-10 right-1/4 translate-x-1/2 w-80 h-80 rounded-full bg-pink-400/10 dark:bg-pink-500/5 blur-3xl -z-10 pointer-events-none" />

      {/* Modern Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-indigo-200/50 dark:border-indigo-800/40 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in shadow-sm">
        <Sparkles size={12} className="animate-pulse" />
        <span>Fully Customizable & Procedural</span>
      </div>

      {/* Main Title Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
        <span className="bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-700 dark:from-white dark:via-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
          {t("hero_title").split(" ").slice(0, -2).join(" ")}
        </span>{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {t("hero_title").split(" ").slice(-2).join(" ")}
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-6 leading-relaxed font-medium">
        {t("hero_subtitle")}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-bold shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:scale-[1.02] transition active:scale-98 cursor-pointer">
          <Download size={16} />
          <span>{t("btn_download_all")}</span>
        </button>

        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e111a] hover:bg-zinc-50 dark:hover:bg-zinc-800/80 hover:scale-[1.02] text-zinc-700 dark:text-zinc-300 text-sm font-bold shadow-sm transition active:scale-98 cursor-pointer">
          <Heart size={16} className="text-pink-500" />
          <span>{t("btn_donate")}</span>
        </button>
      </div>
    </div>
  );
};
