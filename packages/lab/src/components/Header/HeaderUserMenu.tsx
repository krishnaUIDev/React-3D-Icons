import React from "react";
import { GlobeIcon, SunIcon, MoonIcon, GithubIcon, DownloadIcon } from "r3d-icons";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import { LanguageCode } from "../../i18n/translations";
import { audioEngine } from "../../utils/audio";

interface HeaderUserMenuProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  langOpen: boolean;
  setLangOpen: (open: boolean) => void;
  languages: { code: LanguageCode; label: string }[];
  isOnline: boolean;
  installPrompt?: any;
  onInstall?: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
}

export const HeaderUserMenu: React.FC<HeaderUserMenuProps> = ({
  theme,
  setTheme,
  lang,
  setLang,
  langOpen,
  setLangOpen,
  languages,
  isOnline,
  installPrompt,
  onInstall,
  mobileMenuOpen,
  setMobileMenuOpen,
  soundEnabled,
  setSoundEnabled
}) => {
  return (
    <div className="flex items-center gap-4 flex-shrink-0">
      {/* Language Switcher */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setLangOpen(!langOpen)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200/50 dark:border-white/5 bg-zinc-100/40 dark:bg-zinc-950/[0.1] hover:bg-zinc-200/60 dark:hover:bg-zinc-950/[0.2] hover:scale-[1.03] hover:border-indigo-500/30 dark:hover:border-cyan-500/35 hover:shadow-[0_0_12px_rgba(99,102,241,0.15)] text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-all cursor-pointer select-none shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
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
            <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />

            <div className="absolute right-0 mt-1.5 w-32 rounded-xl border border-zinc-200/50 dark:border-white/5 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl shadow-xl p-1 z-20 animate-in fade-in slide-in-from-top-1 duration-150">
              {languages.map((l) => (
                <button
                  type="button"
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
          type="button"
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

      {/* Sound FX Toggler */}
      <button
        type="button"
        onClick={() => {
          const nextVal = !soundEnabled;
          setSoundEnabled(nextVal);
          if (nextVal) {
            audioEngine.setEnabled(true);
            audioEngine.playChime();
          } else {
            audioEngine.setEnabled(false);
          }
        }}
        className="p-1.5 rounded-lg border border-zinc-200/50 dark:border-white/5 bg-zinc-100/40 dark:bg-zinc-950/[0.1] hover:bg-zinc-200/60 dark:hover:bg-zinc-950/[0.2] hover:scale-[1.05] hover:border-indigo-500/30 dark:hover:border-cyan-500/35 hover:shadow-[0_0_12px_rgba(99,102,241,0.15)] text-zinc-550 dark:text-zinc-400 hover:text-indigo-650 dark:hover:text-cyan-400 transition-all cursor-pointer flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
        title={soundEnabled ? "Mute Sound Effects" : "Unmute Sound Effects"}
      >
        <div className="w-5.5 h-5.5 flex items-center justify-center pointer-events-none">
          {soundEnabled ? (
            <Volume2 size={16} className="text-emerald-500 dark:text-emerald-400" />
          ) : (
            <VolumeX size={16} className="text-zinc-400 dark:text-zinc-500" />
          )}
        </div>
      </button>

      {/* Theme Toggler */}
      <button
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-1.5 rounded-lg border border-zinc-200/50 dark:border-white/5 bg-zinc-100/40 dark:bg-zinc-950/[0.1] hover:bg-zinc-200/60 dark:hover:bg-zinc-950/[0.2] hover:scale-[1.05] hover:border-indigo-500/30 dark:hover:border-cyan-500/35 hover:shadow-[0_0_12px_rgba(99,102,241,0.15)] text-zinc-655 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-all cursor-pointer flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
        title="Toggle Light/Dark Theme"
      >
        <div className="w-5.5 h-5.5 flex items-center justify-center pointer-events-none">
          {theme === "dark" ? (
            <SunIcon size={16} variant="2d" color="#fbbf24" />
          ) : (
            <MoonIcon size={16} variant="2d" color="#38bdf8" />
          )}
        </div>
      </button>

      {/* Social Links Row */}
      <div className="hidden sm:flex items-center gap-1.5">
        <a
          href="https://github.com/krishnaUIDev/React-3D-Icons"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-lg border border-zinc-200/50 dark:border-white/5 bg-zinc-100/40 dark:bg-zinc-950/[0.1] hover:bg-zinc-200/60 dark:hover:bg-zinc-950/[0.2] hover:scale-[1.05] hover:border-indigo-500/30 dark:hover:border-cyan-500/35 hover:shadow-[0_0_12px_rgba(99,102,241,0.15)] text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center justify-center"
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

      {/* Hamburger Menu Button for Mobile */}
      <button
        type="button"
        onClick={() => {
          audioEngine.playClick();
          setMobileMenuOpen(!mobileMenuOpen);
        }}
        className="md:hidden p-1.5 rounded-lg border border-zinc-200/50 dark:border-white/5 bg-zinc-100/40 dark:bg-zinc-950/[0.1] hover:bg-zinc-200/60 dark:hover:bg-zinc-950/[0.2] text-zinc-655 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all cursor-pointer flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
        title="Open Menu"
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  );
};
