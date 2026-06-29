import React, { useState } from "react";
import { useTranslation } from "../i18n/useTranslation";
import { useRouter } from "../router/Router";
import { Sun, Moon, Github, Globe, Search } from "lucide-react";
import { LanguageCode } from "../i18n/translations";

interface HeaderProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  search: string;
  setSearch: (search: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, setTheme, search, setSearch }) => {
  const { t, lang, setLang } = useTranslation();
  const { route, navigate } = useRouter();
  const [langOpen, setLangOpen] = useState(false);

  const languages: { code: LanguageCode; label: string }[] = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "de", label: "Deutsch" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-[#090b11]/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo and Name */}
        <button
          onClick={() => navigate("landing")}
          className="flex items-center gap-3 cursor-pointer group text-left flex-shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/20 flex items-center justify-center font-extrabold text-white text-sm transition group-hover:scale-105">
            3D
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

        {/* Centered Search Bar on Landing Screen */}
        {route === "landing" && (
          <div className="relative flex-grow max-w-xs md:max-w-sm hidden sm:block">
            <Search size={14} className="absolute top-2.5 left-3 text-zinc-400" />
            <input
              type="text"
              placeholder={t("search_placeholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-100 dark:bg-[#0e111a] border border-zinc-200/60 dark:border-zinc-800 focus:border-indigo-500 rounded-xl py-2 pl-9 pr-4 text-xs focus:outline-none text-zinc-900 dark:text-white transition shadow-sm"
            />
          </div>
        )}

        {/* Desktop Navigation Links */}
        {route !== "landing" && (
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => navigate("landing")}
              className="text-sm font-medium transition cursor-pointer text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            >
              {t("explore_link")}
            </button>
            
            <a
              href="https://figma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition flex items-center gap-1"
            >
              {t("figma_link")}
            </a>
          </nav>
        )}

        {/* Action Controls */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200/80 dark:border-zinc-850 bg-white dark:bg-[#0e111a] hover:bg-zinc-50 dark:hover:bg-zinc-800/50 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition cursor-pointer select-none"
            >
              <Globe size={14} className="text-zinc-400" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {langOpen && (
              <>
                {/* Click-away backdrop overlay */}
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setLangOpen(false)}
                />
                
                <div className="absolute right-0 mt-1.5 w-32 rounded-xl border border-zinc-200/80 dark:border-zinc-850 bg-white dark:bg-[#0e111a] shadow-xl p-1 z-20 animate-in fade-in slide-in-from-top-1 duration-150">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
                        lang === l.code
                          ? "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400"
                          : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 hover:text-zinc-950 dark:hover:text-white"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Theme Toggler */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg border border-zinc-200/80 dark:border-zinc-850 bg-white dark:bg-[#0e111a] hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition cursor-pointer"
            title="Toggle Light/Dark Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* GitHub Source Link */}
          <a
            href="https://github.com/krishnaUIDev/React-3D-Icons"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 text-xs font-semibold shadow-sm transition"
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};
