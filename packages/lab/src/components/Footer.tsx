import React from "react";
import { useRouter } from "../router/Router";
import { Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-900 bg-white dark:bg-[#07090f] text-zinc-500 py-6 transition-colors duration-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        {/* Left: Branding */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
          <button
            onClick={() => navigate("landing")}
            className="flex items-center gap-2 cursor-pointer group text-left"
          >
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-md flex items-center justify-center font-extrabold text-white text-[10px] transition group-hover:scale-105">
              3D
            </div>
            <span className="font-bold text-xs text-zinc-900 dark:text-white leading-none">
              React 3D Icons
            </span>
          </button>
          <span className="text-zinc-300 dark:text-zinc-800 hidden xs:inline">|</span>
          <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} MIT Licensed. Built with <Heart size={10} className="inline text-red-500 fill-current animate-pulse align-middle -mt-0.5" /> by <a href="https://github.com/krishnaUIDev" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline">Krishna Kondoju</a>
          </span>
        </div>

        {/* Right: Inline Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          <button
            onClick={() => navigate("landing")}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer"
          >
            Catalog
          </button>
          <a
            href="https://www.npmjs.com/package/r3d-icons"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            NPM
          </a>
          <a
            href="https://github.com/krishnaUIDev/React-3D-Icons"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://github.com/krishnaUIDev/React-3D-Icons/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Issues
          </a>
        </div>
      </div>
    </footer>
  );
};
