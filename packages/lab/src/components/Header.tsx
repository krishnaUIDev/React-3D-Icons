import React, { useState, useEffect } from "react";
import { useTranslation } from "../i18n/useTranslation";
import { useRouter } from "../router/Router";
import { Sun, Moon, Github, Globe, Search, DownloadCloud } from "lucide-react";
import { LanguageCode } from "../i18n/translations";

interface HeaderProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  search: string;
  setSearch: (search: string) => void;
  installPrompt?: any;
  onInstall?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  setTheme,
  search,
  setSearch,
  installPrompt,
  onInstall
}) => {
  const { t, lang, setLang } = useTranslation();
  const { route, navigate } = useRouter();
  const [langOpen, setLangOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const languages: { code: LanguageCode; label: string }[] = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "de", label: "Deutsch" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-[#090b11]/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo and Name */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <button
            onClick={() => navigate("catalog")}
            className="flex items-center gap-3 cursor-pointer group text-left"
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

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 text-[10px] font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400 border-l border-zinc-200/80 dark:border-zinc-800/80 pl-6 h-6">
            <button
              onClick={() => navigate("catalog")}
              className={`transition cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 ${
                route === "catalog" ? "text-indigo-600 dark:text-indigo-400" : ""
              }`}
            >
              Catalog
            </button>
            <button
              onClick={() => navigate("info")}
              className={`transition cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 ${
                route === "info" ? "text-indigo-600 dark:text-indigo-400" : ""
              }`}
            >
              Info
            </button>
            <button
              onClick={() => navigate("saved")}
              className={`transition cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 ${
                route === "saved" ? "text-indigo-600 dark:text-indigo-400" : ""
              }`}
            >
              Saved Presets
            </button>
          </nav>
        </div>

        {/* Centered Search Bar on Catalog Screen */}
        {route === "catalog" && (
          <div className="relative flex-grow max-w-xs md:max-w-sm hidden sm:block">
            <Search size={14} className="absolute top-2.5 left-3 text-zinc-400" />
            <input
              type="text"
              placeholder={t("search_placeholder")}
              aria-label="Search 3D icons"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-100 dark:bg-[#0e111a] border border-zinc-200/60 dark:border-zinc-800 focus:border-indigo-500 rounded-xl py-2 pl-9 pr-4 text-xs focus:outline-none text-zinc-900 dark:text-white transition shadow-sm"
            />
          </div>
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
                <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />

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

          {/* Offline Status Badge */}
          {!isOnline && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider select-none animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Offline</span>
            </div>
          )}

          {/* PWA Install Button */}
          {installPrompt && (
            <button
              onClick={onInstall}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/10 transition hover:scale-[1.02] active:scale-98 cursor-pointer select-none"
              title="Install Web App for Offline Use"
            >
              <DownloadCloud size={14} />
              <span className="hidden xs:inline">Install App</span>
            </button>
          )}

          {/* Theme Toggler */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg border border-zinc-200/80 dark:border-zinc-850 bg-white dark:bg-[#0e111a] hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition cursor-pointer"
            title="Toggle Light/Dark Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Social Links Row */}
          <div className="hidden sm:flex items-center gap-1.5">
            <a
              href="https://github.com/krishnaUIDev/React-3D-Icons"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-zinc-200/80 dark:border-zinc-850 bg-white dark:bg-[#0e111a] hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition shadow-sm"
              title="GitHub Repository"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
