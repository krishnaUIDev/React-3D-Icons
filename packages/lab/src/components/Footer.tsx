import React from "react";
import { useRouter } from "../router/Router";
import { Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-900 bg-white dark:bg-[#07090f] text-zinc-600 dark:text-zinc-400 py-12 transition-colors duration-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Brand Section */}
        <div className="md:col-span-6 space-y-4">
          <button
            onClick={() => navigate("landing")}
            className="flex items-center gap-3 cursor-pointer group text-left"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/20 flex items-center justify-center font-extrabold text-white text-xs transition group-hover:scale-105">
              3D
            </div>
            <span className="font-bold text-sm tracking-tight text-zinc-900 dark:text-white leading-none">
              React 3D Icons
            </span>
          </button>
          <p className="text-xs leading-relaxed max-w-sm">
            Beautifully crafted, procedural, and interactive open-source 3D icons for your next React website, dashboard, or design project.
          </p>
        </div>

        {/* Resources Links */}
        <div className="md:col-span-3 space-y-3">
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
            Resources
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => navigate("landing")}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer text-left"
              >
                Icon Catalog
              </button>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/r3d-icons"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                NPM Package
              </a>
            </li>
            <li>
              <a
                href="https://github.com/krishnaUIDev/React-3D-Icons"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                GitHub Repository
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="md:col-span-3 space-y-3">
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
            Community
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href="https://github.com/krishnaUIDev/React-3D-Icons/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                Report Issue / Bug
              </a>
            </li>
            <li>
              <a
                href="https://figma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                Figma File Community
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-zinc-150 dark:border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-semibold text-zinc-500">
        <div className="flex items-center gap-1.5">
          <span>&copy; {new Date().getFullYear()} React 3D Icons. MIT Licensed.</span>
        </div>
        <div className="flex items-center gap-1">
          <span>Built with</span>
          <Heart size={10} className="text-red-500 fill-current animate-pulse" />
          <span>by</span>
          <a
            href="https://github.com/krishnaUIDev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline"
          >
            Krishna Kondoju
          </a>
        </div>
      </div>
    </footer>
  );
};
