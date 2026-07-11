import React, { useEffect, useState } from "react";
import { useTranslation } from "../i18n/useTranslation";
import { Sparkles, Download, Copy, Check } from "lucide-react";
import pkg from "../../../library/package.json";
import { GlassmorphismIcon } from "r3d-icons";

interface HeroProps {
  totalIcons?: number;
}

const words = ["3D Icons", "SVG Vectors", "React Icons", "Web Assets"];

export const Hero: React.FC<HeroProps> = ({ totalIcons = 280 }) => {
  const { t } = useTranslation();
  const [version, setVersion] = useState(pkg.version);
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [pm, setPm] = useState<"npm" | "yarn" | "pnpm">("npm");

  const installCmds = {
    npm: "npm i r3d-icons",
    yarn: "yarn add r3d-icons",
    pnpm: "pnpm add r3d-icons"
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCmds[pm]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    // Dynamically retrieve the latest version from NPM registry
    fetch("https://registry.npmjs.org/r3d-icons/latest")
      .then((res) => res.json())
      .then((data) => {
        if (data.version) {
          setVersion(data.version);
        }
      })
      .catch((err) => console.warn("Failed to fetch latest version from npm registry:", err));
  }, []);

  useEffect(() => {
    let timer: any;
    const activeWord = words[wordIndex];

    if (!isDeleting) {
      if (typedText !== activeWord) {
        timer = setTimeout(() => {
          setTypedText(activeWord.substring(0, typedText.length + 1));
        }, 100);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 1600);
      }
    } else {
      if (typedText !== "") {
        timer = setTimeout(() => {
          setTypedText(activeWord.substring(0, typedText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  return (
    <div className="relative pt-8 pb-8 text-center max-w-4xl mx-auto px-6 overflow-hidden">
      {/* Decorative background glow circles */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-72 h-72 rounded-full bg-indigo-400/10 dark:bg-indigo-500/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-10 right-1/4 translate-x-1/2 w-80 h-80 rounded-full bg-pink-400/10 dark:bg-pink-500/5 blur-3xl -z-10 pointer-events-none" />

      {/* Interactive 3D Hero Emblem */}
      <div className="w-28 h-28 mx-auto mb-6 transform hover:scale-105 transition-transform duration-300 relative cursor-grab active:cursor-grabbing">
        {/* Soft colorful backdrop glow behind the 3D Canvas */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl animate-pulse pointer-events-none" />
        <GlassmorphismIcon
          preset="glass"
          theme="dark"
          color="#6366f1"
          accentColor="#ec4899"
          interactive={true}
          spinSpeed={0.6}
          floatHeight={1.2}
        />
      </div>

      {/* Modern Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-indigo-200/50 dark:border-indigo-800/40 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in shadow-sm">
        <Sparkles size={12} className="animate-pulse" />
        <span>Fully Customizable & Procedural</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
        <span className="bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-700 dark:from-white dark:via-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
          {t("hero_title").split(" ").slice(0, -2).join(" ")}
        </span>{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block min-h-[1.1em] align-bottom">
          <span>{typedText || "\u00a0"}</span>
          <span
            className="inline-block w-[3.5px] h-[0.85em] ml-1.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 animate-pulse rounded align-middle"
            style={{ animationDuration: "0.8s" }}
          />
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-6 leading-relaxed font-medium">
        {t("hero_subtitle", { count: totalIcons * 9 })}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => window.open("https://www.npmjs.com/package/r3d-icons", "_blank")}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-bold shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:scale-[1.02] transition active:scale-98 cursor-pointer"
        >
          <Download size={16} />
          <span>
            {t("btn_download_all")} v{version}
          </span>
        </button>
      </div>

      {/* Interactive Installer Command Snippet */}
      <div className="mt-8 max-w-sm mx-auto rounded-2xl border border-zinc-200/50 dark:border-white/10 bg-white/40 dark:bg-[#0c0f1a]/40 backdrop-blur-xl p-2 flex items-center justify-between gap-3 shadow-lg shadow-indigo-500/[0.03] dark:shadow-indigo-500/[0.015]">
        <div className="flex gap-1.5 border-r border-zinc-200 dark:border-zinc-800/80 pr-2.5">
          {(["npm", "yarn", "pnpm"] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPm(p)}
              className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider transition cursor-pointer ${
                pm === p
                  ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/10"
                  : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <code className="text-[10px] sm:text-xs font-mono font-bold text-zinc-700 dark:text-zinc-350 select-all flex-grow text-left pl-1">
          {installCmds[pm]}
        </code>
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-xl border border-zinc-200/50 dark:border-white/5 bg-white/60 dark:bg-[#0e111a]/60 backdrop-blur-md hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer relative"
          title="Copy command to clipboard"
        >
          {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
          {copied && (
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-zinc-900 dark:bg-zinc-850 text-white text-[8px] font-extrabold uppercase tracking-wider pointer-events-none whitespace-nowrap shadow-md">
              Copied!
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
