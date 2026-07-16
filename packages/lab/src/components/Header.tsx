import React, { useState, useEffect } from "react";
import { useTranslation } from "../i18n/useTranslation";
import { useRouter } from "../router/Router";
import { LanguageCode } from "../i18n/translations";
import { SearchIcon } from "r3d-icons";
import { HeaderLogo } from "./Header/HeaderLogo";
import { HeaderNav } from "./Header/HeaderNav";
import { HeaderUserMenu } from "./Header/HeaderUserMenu";
import { HeaderMobileMenu } from "./Header/HeaderMobileMenu";

interface HeaderProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  search: string;
  setSearch: (search: string) => void;
  installPrompt?: any;
  onInstall?: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
}

const LANGUAGES: { code: LanguageCode; label: string }[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" }
];

export const Header: React.FC<HeaderProps> = ({
  theme,
  setTheme,
  search,
  setSearch,
  installPrompt,
  onInstall,
  soundEnabled,
  setSoundEnabled
}) => {
  const { t, lang, setLang } = useTranslation();
  const { route, navigate } = useRouter();
  const [langOpen, setLangOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [route]);

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

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.25)] transition-colors duration-300 transform-gpu will-change-transform">
      {/* Background neon light leaks matching the mockup design */}
      <div className="absolute top-0 left-[10%] w-80 h-10 bg-cyan-500/20 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-[20%] w-80 h-10 bg-pink-500/20 dark:bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4 relative z-10">
        {/* Logo, Title and Navigation */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <HeaderLogo theme={theme} navigate={navigate} />
          <HeaderNav route={route} navigate={navigate} t={t} />
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
              className="w-full bg-zinc-100/30 dark:bg-zinc-950/[0.2] border border-zinc-200/80 dark:border-white/5 focus:border-indigo-500/40 focus:bg-zinc-100/50 dark:focus:bg-zinc-950/[0.3] backdrop-blur-md rounded-xl py-2 pl-9 pr-4 text-xs focus:outline-none text-zinc-900 dark:text-white transition-all shadow-sm focus:shadow-[0_0_12px_rgba(99,102,241,0.15)] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
            />
          </div>
        )}

        {/* User Settings, Theme, Lang Actions */}
        <HeaderUserMenu
          theme={theme}
          setTheme={setTheme}
          lang={lang}
          setLang={setLang}
          langOpen={langOpen}
          setLangOpen={setLangOpen}
          languages={LANGUAGES}
          isOnline={isOnline}
          installPrompt={installPrompt}
          onInstall={onInstall}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
        />
      </div>

      {/* Mobile navigation panel and overlay */}
      <HeaderMobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        route={route}
        navigate={navigate}
        t={t}
      />
    </header>
  );
};
