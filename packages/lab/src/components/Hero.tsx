import React, { useEffect, useState } from "react";
import { useTranslation } from "../i18n/useTranslation";
import { Sparkles, Download } from "lucide-react";
import pkg from "../../../library/package.json";

interface HeroProps {
  totalIcons?: number;
}

export const Hero: React.FC<HeroProps> = ({ totalIcons = 280 }) => {
  const { t } = useTranslation();
  const [version, setVersion] = useState(pkg.version);
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["3D Icons", "SVG Vectors", "React Icons", "Web Assets"];

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

      {/* Modern Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-indigo-200/50 dark:border-indigo-800/40 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in shadow-sm">
        <Sparkles size={12} className="animate-pulse" />
        <span>Fully Customizable & Procedural</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
        <span className="bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-700 dark:from-white dark:via-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
          {t("hero_title").split(" ").slice(0, -2).join(" ")}
        </span>{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-flex items-center">
          <span>{typedText}</span>
          <span className="w-[3.5px] h-[0.85em] ml-1.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 animate-pulse rounded" style={{ animationDuration: "0.8s" }} />
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
          <span>{t("btn_download_all")} v{version}</span>
        </button>
      </div>
    </div>
  );
};
