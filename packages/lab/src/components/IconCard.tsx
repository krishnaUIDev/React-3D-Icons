import React, { useState } from "react";
import { useRouter } from "../router/Router";
import { IconPreset } from "r3d-icons";
import { Heart } from "lucide-react";
import { useTranslation } from "../i18n/useTranslation";
import { TranslationKey } from "../i18n/translations";
import { Lazy3DIcon } from "./Lazy3DIcon";

interface IconCardProps {
  id: string;
  name: string;
  theme: "light" | "dark";
  color?: string;
  accentColor?: string;
  category?: string;
  description?: string;
  viewMode?: "grid" | "list";
  preset?: IconPreset;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string, e: React.MouseEvent) => void;
}

export const IconCard: React.FC<IconCardProps> = ({
  id,
  name,
  theme,
  color = "#6366f1",
  accentColor,
  category = "utility",
  description = "Customizable 3D icon element",
  viewMode = "grid",
  preset = "glass",
  isFavorite = false,
  onToggleFavorite
}) => {
  const { updateCustomizerURL } = useRouter();
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [copiedSVG, setCopiedSVG] = useState(false);
  const [copiedTSX, setCopiedTSX] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const displayName = name.replace("Icon", "");

  const handleCustomize = () => {
    const cleanColor = color ? color.replace("#", "") : "6366f1";
    updateCustomizerURL(cleanColor, id);
  };

  const handleCopySVG = (e: React.MouseEvent) => {
    e.stopPropagation();
    const cardEl = e.currentTarget.closest(".group");
    const svgEl = cardEl?.querySelector("svg");
    if (svgEl) {
      const clonedSvg = svgEl.cloneNode(true) as SVGElement;
      clonedSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      clonedSvg.setAttribute("width", "64");
      clonedSvg.setAttribute("height", "64");
      const serialized = new XMLSerializer().serializeToString(clonedSvg);
      navigator.clipboard.writeText(serialized);
      setCopiedSVG(true);
      setTimeout(() => setCopiedSVG(false), 2000);
    }
  };

  const handleCopyTSX = (e: React.MouseEvent) => {
    e.stopPropagation();
    const tsxCode = `import { ${name} } from "r3d-icons";

export default function IconShowcase() {
  return (
    <${name} 
      variant="glass" 
      color="${color}" 
      size={64} 
    />
  );
}`;
    navigator.clipboard.writeText(tsxCode);
    setCopiedTSX(true);
    setTimeout(() => setCopiedTSX(false), 2000);
  };

  if (viewMode === "list") {
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={handleCustomize}
        className="group relative flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-3xl border border-zinc-200/50 dark:border-white/5 bg-white/45 dark:bg-[#0e111a]/45 backdrop-blur-md hover:border-indigo-500/50 dark:hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 cursor-pointer select-none overflow-hidden"
      >
        {isHovered && (
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none transition duration-300 opacity-100"
            style={{
              background: `radial-gradient(240px circle at ${coords.x}px ${coords.y}px, ${color}10, transparent 75%)`
            }}
          />
        )}
        <div className="flex flex-col sm:flex-row items-center gap-4 flex-grow w-full">
          {/* Left: 3D Preview Canvas */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-zinc-50/50 dark:bg-[#090b14]/50 rounded-2xl border border-zinc-150/40 dark:border-zinc-850/40 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
            <div
              className="absolute inset-2 rounded-full blur-xl opacity-10 pointer-events-none"
              style={{ backgroundColor: color }}
            />
            {isHovered ? (
              <div className="w-12 h-12 sm:w-16 sm:h-16 transform scale-105 transition-transform duration-300">
                <Lazy3DIcon
                  name={name}
                  preset={preset}
                  theme={theme}
                  color={color}
                  accentColor={accentColor}
                  interactive={false}
                  spinSpeed={1.4}
                  floatHeight={1.0}
                />
              </div>
            ) : (
              <div className="relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16">
                <Lazy3DIcon
                  name={name}
                  variant="2d"
                  preset={preset}
                  theme={theme}
                  color={color}
                  accentColor={accentColor}
                  interactive={false}
                  size="100%"
                />
              </div>
            )}
          </div>

          {/* Center Info */}
          <div className="flex flex-col text-center sm:text-left gap-1 flex-grow">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h3 className="text-xs sm:text-sm font-extrabold text-zinc-900 dark:text-white uppercase tracking-wider">
                {displayName}
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                {t(`category_${category}` as TranslationKey)}
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-lg">
              {description}
            </p>
          </div>
        </div>

        {/* Right side: persistent buttons overlay */}
        <div className="flex items-center gap-2 flex-shrink-0 z-10 w-full sm:w-auto justify-center sm:justify-end border-t sm:border-t-0 border-zinc-100 dark:border-zinc-800/80 pt-3 sm:pt-0">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite?.(id, e);
            }}
            className={`px-3 py-1.5 rounded-xl border text-[9px] font-extrabold uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 shadow-sm ${
              isFavorite
                ? "border-rose-200 dark:border-rose-950 bg-rose-50/50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-455 hover:bg-rose-100/50"
                : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#0e111a] hover:bg-zinc-50 hover:text-rose-500 text-zinc-500"
            }`}
            title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          >
            <Heart size={10} className={isFavorite ? "fill-current text-rose-500" : ""} />
            <span>{isFavorite ? "Favorited" : "Favorite"}</span>
          </button>

          <button
            type="button"
            onClick={handleCopySVG}
            className="px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#0e111a] hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-indigo-600 dark:hover:text-indigo-400 text-zinc-500 transition relative flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-wider cursor-pointer shadow-sm"
            title="Copy 2D SVG code"
          >
            {copiedSVG ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3 text-emerald-500"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            )}
            <span>Copy SVG</span>
            {copiedSVG && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-zinc-900 dark:bg-zinc-850 text-white text-[8px] font-extrabold uppercase tracking-wider pointer-events-none whitespace-nowrap shadow-md">
                SVG Copied!
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={handleCopyTSX}
            className="px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#0e111a] hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-indigo-600 dark:hover:text-indigo-400 text-zinc-500 transition relative flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-wider cursor-pointer shadow-sm"
            title="Copy React TSX code"
          >
            {copiedTSX ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3 text-emerald-500"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            )}
            <span>Copy TSX</span>
            {copiedTSX && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-zinc-900 dark:bg-zinc-850 text-white text-[8px] font-extrabold uppercase tracking-wider pointer-events-none whitespace-nowrap shadow-md">
                TSX Copied!
              </span>
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={handleCustomize}
      className="group relative flex flex-col items-center gap-2 p-3 rounded-2xl border border-zinc-200/50 dark:border-white/5 bg-white/45 dark:bg-[#0e111a]/45 backdrop-blur-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer select-none overflow-hidden"
      style={{
        borderColor: isHovered ? `${color}40` : undefined,
        boxShadow: isHovered ? `0 10px 20px -5px ${color}15, 0 8px 10px -6px ${color}15` : undefined
      }}
    >
      {isHovered && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition duration-300 opacity-100"
          style={{
            background: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, ${color}0b, transparent 75%)`
          }}
        />
      )}
      {/* Favorite Button (Top-Left overlay) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite?.(id, e);
        }}
        className={`absolute top-2.5 left-2.5 p-1.5 rounded-lg border transition shadow-sm cursor-pointer z-10 ${
          isFavorite
            ? "border-rose-200 dark:border-rose-900 bg-rose-50/95 dark:bg-rose-950/95 text-rose-600 dark:text-rose-450 opacity-100 scale-100"
            : "border-zinc-200/40 dark:border-white/5 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-450 opacity-0 group-hover:opacity-100 hover:text-rose-500 scale-95 hover:scale-100"
        } transition-all duration-300`}
        title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      >
        <Heart size={12} className={isFavorite ? "fill-current" : ""} />
      </button>

      {/* Quick Action Overlay Buttons */}
      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto z-10">
        <button
          type="button"
          onClick={handleCopySVG}
          className="p-1.5 rounded-lg border border-zinc-200/40 dark:border-white/5 bg-white/70 dark:bg-[#0e111a]/70 backdrop-blur-md hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-indigo-600 dark:hover:text-indigo-400 text-zinc-400 transition relative shadow-sm cursor-pointer"
          title="Copy 2D SVG code"
        >
          {copiedSVG ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3 text-emerald-500"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          )}
          {copiedSVG && (
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-zinc-900 dark:bg-zinc-850 text-white text-[8px] font-extrabold uppercase tracking-wider pointer-events-none whitespace-nowrap shadow-md">
              SVG Copied!
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={handleCopyTSX}
          className="p-1.5 rounded-lg border border-zinc-200/40 dark:border-white/5 bg-white/70 dark:bg-[#0e111a]/70 backdrop-blur-md hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-indigo-600 dark:hover:text-indigo-400 text-zinc-400 transition relative shadow-sm cursor-pointer"
          title="Copy React TSX code"
        >
          {copiedTSX ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3 text-emerald-500"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          )}
          {copiedTSX && (
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-zinc-900 dark:bg-zinc-850 text-white text-[8px] font-extrabold uppercase tracking-wider pointer-events-none whitespace-nowrap shadow-md">
              TSX Copied!
            </span>
          )}
        </button>
      </div>

      {/* 3D Icon Preview or 2D Fallback */}
      <div className="w-full flex items-center justify-center pointer-events-none min-h-[64px] relative overflow-hidden">
        {/* Soft colorful backdrop glow behind the 2D/3D icon */}
        <div
          className="absolute w-12 h-12 rounded-full blur-xl transition-opacity duration-300 pointer-events-none"
          style={{
            backgroundColor: color,
            opacity: isHovered ? 0.18 : 0.06
          }}
        />
        {isHovered ? (
          <div className="w-14 h-14 sm:w-16 sm:h-16 transform scale-105 transition-transform duration-300">
            <Lazy3DIcon
              name={name}
              preset={preset}
              theme={theme}
              color={color}
              accentColor={accentColor}
              interactive={false}
              spinSpeed={1.4}
              floatHeight={1.0}
            />
          </div>
        ) : (
          <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
            <Lazy3DIcon
              name={name}
              variant="2d"
              preset={preset}
              theme={theme}
              color={color}
              accentColor={accentColor}
              interactive={false}
              size="100%"
            />
          </div>
        )}
      </div>

      {/* Name Label */}
      <p className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 truncate w-full text-center group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors leading-none pb-0.5">
        {displayName}
      </p>
    </div>
  );
};
