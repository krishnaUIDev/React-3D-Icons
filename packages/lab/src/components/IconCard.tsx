import React, { useState } from "react";
import { useRouter } from "../router/Router";

interface IconCardProps {
  id: string;
  name: string;
  Component: React.ComponentType<any>;
  theme: "light" | "dark";
  color?: string;
  accentColor?: string;
}

export const IconCard: React.FC<IconCardProps> = ({
  id,
  name,
  Component,
  theme,
  color = "#6366f1",
  accentColor
}) => {
  const { updateCustomizerURL } = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const displayName = name.replace("Icon", "");

  const handleCustomize = () => {
    const cleanColor = color ? color.replace("#", "") : "6366f1";
    updateCustomizerURL(cleanColor, id);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCustomize}
      className="group flex flex-col items-center gap-2 p-3 rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-[#0e111a] hover:border-indigo-500/50 dark:hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer select-none"
    >
      {/* 3D Icon Preview or 2D Fallback */}
      <div className="w-full flex items-center justify-center pointer-events-none min-h-[64px]">
        {isHovered ? (
          <div className="w-14 h-14 sm:w-16 sm:h-16 transform scale-105 transition-transform duration-300">
            <Component
              preset="glass"
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
            <Component
              variant="2d"
              preset="glass"
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
