import React, { useState, useEffect } from "react";
import { useTranslation } from "../i18n/useTranslation";
import { useRouter } from "../router/Router";
import { LanguageCode } from "../i18n/translations";
import {
  LetterIcon,
  SunIcon,
  MoonIcon,
  GithubIcon,
  GlobeIcon,
  SearchIcon,
  DownloadIcon
} from "r3d-icons";

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
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 dark:border-white/5 bg-zinc-50/50 dark:bg-[#070a13]/[0.15] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-300">
      {/* Background neon light leaks matching the mockup design */}
      <div className="absolute top-0 left-[10%] w-80 h-10 bg-cyan-500/20 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-[20%] w-80 h-10 bg-pink-500/20 dark:bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4 relative z-10">
        {/* Logo and Name */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <button
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

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-2.5 text-[10px] font-black uppercase tracking-wider text-zinc-550 dark:text-zinc-400 border-l border-zinc-200/80 dark:border-zinc-800/80 pl-6">
            <button
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
              onClick={() => navigate("saved")}
              className={`px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] flex items-center justify-center hover:scale-[1.03] ${
                route === "saved"
                  ? "border-indigo-500/40 bg-indigo-50/20 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_12px_rgba(99,102,241,0.1)]"
                  : "border-zinc-200/80 dark:border-white/10 bg-zinc-100/40 dark:bg-zinc-950/[0.2] hover:bg-zinc-200/60 dark:hover:bg-zinc-950/[0.3] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {t("saved_presets_nav" as any)}
            </button>
          </nav>
        </div>

        {/* Centered Search Bar on Catalog Screen */}
        {route === "catalog" && (
          <div className="relative flex-grow max-w-xs md:max-w-sm hidden sm:block">
            <div className="absolute top-2.5 left-3 w-4 h-4 flex items-center justify-center pointer-events-none">
              <SearchIcon
                size={16}
                preset="glass"
                color={theme === "dark" ? "#818cf8" : "#4f46e5"}
                interactive={false}
                cameraZoom={2.2}
              />
            </div>
            <input
              type="text"
              placeholder={t("search_placeholder")}
              aria-label="Search 3D icons"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-100/30 dark:bg-zinc-950/[0.2] border border-zinc-200/80 dark:border-white/5 focus:border-indigo-500/40 focus:bg-zinc-100/50 dark:focus:bg-zinc-950/[0.3] backdrop-blur-md rounded-xl py-2 pl-9 pr-4 text-xs focus:outline-none text-zinc-900 dark:text-white transition-all shadow-sm focus:shadow-[0_0_12px_rgba(99,102,241,0.1)] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
            />
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200/80 dark:border-white/10 bg-zinc-100/40 dark:bg-zinc-950/[0.2] hover:bg-zinc-200/60 dark:hover:bg-zinc-950/[0.3] hover:scale-[1.03] hover:border-indigo-500/30 dark:hover:border-cyan-500/35 hover:shadow-[0_0_12px_rgba(99,102,241,0.15)] text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-all cursor-pointer select-none shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
            >
              <div className="w-4 h-4 flex items-center justify-center pointer-events-none">
                <GlobeIcon
                  size={16}
                  preset="glass"
                  color={theme === "dark" ? "#818cf8" : "#4f46e5"}
                  interactive={false}
                  cameraZoom={2.8}
                />
              </div>
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
              <div className="w-4 h-4 flex items-center justify-center pointer-events-none">
                <DownloadIcon
                  size={16}
                  preset="metal"
                  color="#ffffff"
                  interactive={false}
                  cameraZoom={2.8}
                />
              </div>
              <span className="hidden xs:inline">Install App</span>
            </button>
          )}

          {/* Theme Toggler */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1.5 rounded-lg border border-zinc-200/80 dark:border-white/10 bg-zinc-100/40 dark:bg-zinc-950/[0.2] hover:bg-zinc-200/60 dark:hover:bg-zinc-950/[0.3] hover:scale-[1.05] hover:border-indigo-500/30 dark:hover:border-cyan-500/35 hover:shadow-[0_0_12px_rgba(99,102,241,0.15)] text-zinc-650 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-all cursor-pointer flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
            title="Toggle Light/Dark Theme"
          >
            <div className="w-5.5 h-5.5 flex items-center justify-center pointer-events-none">
              {theme === "dark" ? (
                <SunIcon
                  size={22}
                  preset="neon-glow"
                  color="#fbbf24"
                  interactive={false}
                  cameraZoom={2.5}
                  angle="front"
                />
              ) : (
                <MoonIcon
                  size={22}
                  preset="glass"
                  color="#38bdf8"
                  interactive={false}
                  cameraZoom={2.5}
                  angle="front"
                />
              )}
            </div>
          </button>

          {/* Social Links Row */}
          <div className="hidden sm:flex items-center gap-1.5">
            <a
              href="https://github.com/krishnaUIDev/React-3D-Icons"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-zinc-200/80 dark:border-white/10 bg-zinc-100/40 dark:bg-zinc-950/[0.2] hover:bg-zinc-200/60 dark:hover:bg-zinc-950/[0.3] hover:scale-[1.05] hover:border-indigo-500/30 dark:hover:border-cyan-500/35 hover:shadow-[0_0_12px_rgba(99,102,241,0.15)] text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] flex items-center justify-center"
              title="GitHub Repository"
            >
              <div className="w-5.5 h-5.5 flex items-center justify-center pointer-events-none">
                <GithubIcon
                  size={22}
                  preset="metal"
                  color={theme === "dark" ? "#cbd5e1" : "#0f172a"}
                  interactive={false}
                  cameraZoom={2.5}
                  angle="front"
                  theme={theme}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
