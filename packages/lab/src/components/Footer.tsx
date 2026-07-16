import React from "react";
import { useRouter } from "../router/Router";
import { Package, Github, AlertCircle } from "lucide-react";
import { LetterIcon, HeartIcon } from "r3d-icons";

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="border-t border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_-8px_32px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_-8px_32px_rgba(0,0,0,0.25)] text-zinc-550 py-6 transition-colors duration-300 transform-gpu will-change-transform mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-y-5 sm:gap-4 text-xs">
        {/* Left: Branding */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 text-center sm:text-left">
          <button
            type="button"
            onClick={() => navigate("catalog")}
            className="flex items-center gap-2 cursor-pointer group text-left justify-center"
          >
            <div className="w-6 h-6 rounded-lg overflow-hidden border border-zinc-200/50 dark:border-white/5 bg-white/[0.1] dark:bg-zinc-950/[0.2] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_8px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_12px_rgba(0,0,0,0.4)] flex items-center justify-center transition group-hover:scale-105">
              <LetterIcon
                letter="R"
                size={24}
                preset="glass"
                angle="front"
                color="#818cf8"
                accentColor="#f43f5e"
                interactive={false}
                cameraZoom={2.2}
              />
            </div>
            <span className="font-bold text-xs text-zinc-900 dark:text-white leading-none">
              React 3D Icons
            </span>
          </button>
          <span className="text-zinc-300 dark:text-zinc-800 hidden sm:inline">|</span>
          <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} MIT Licensed. Built with{" "}
            <span className="inline-block w-4.5 h-4.5 align-middle mx-0.5">
              <HeartIcon
                size={18}
                preset="clay"
                color="#f43f5e"
                interactive={false}
                cameraZoom={2.2}
                angle="front"
              />
            </span>{" "}
            by{" "}
            <a
              href="https://github.com/krishnaUIDev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline"
            >
              Krishna Kondoju
            </a>
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5 text-[11px] font-bold uppercase tracking-wider text-zinc-555 dark:text-zinc-450">
          <a
            href="https://www.npmjs.com/package/r3d-icons"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <Package size={12} className="text-zinc-400" />
            <span>NPM</span>
          </a>
          <a
            href="https://github.com/krishnaUIDev/React-3D-Icons"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <Github size={12} className="text-zinc-400" />
            <span>GitHub</span>
          </a>
          <a
            href="https://github.com/krishnaUIDev/React-3D-Icons/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <AlertCircle size={12} className="text-zinc-400" />
            <span>Issues</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
