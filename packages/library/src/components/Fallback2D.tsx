import React from "react";
import { IconPreset } from "../types";

interface Fallback2DProps {
  id: string;
  color?: string;
  theme?: "light" | "dark";
  preset?: IconPreset;
}

// Adjust hex color brightness/tint dynamically
const adjustColor = (colorStr: string, percent: number) => {
  try {
    let hex = colorStr.trim();
    if (!hex.startsWith("#")) return hex;
    if (hex.length === 4) {
      hex = "#" + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    if (hex.length !== 7) return hex;

    let R = parseInt(hex.substring(1, 3), 16);
    let G = parseInt(hex.substring(3, 5), 16);
    let B = parseInt(hex.substring(5, 7), 16);

    R = Math.min(255, Math.max(0, Math.round(R * (1 + percent))));
    G = Math.min(255, Math.max(0, Math.round(G * (1 + percent))));
    B = Math.min(255, Math.max(0, Math.round(B * (1 + percent))));

    const rHex = R.toString(16).padStart(2, "0");
    const gHex = G.toString(16).padStart(2, "0");
    const bHex = B.toString(16).padStart(2, "0");

    return `#${rHex}${gHex}${bHex}`;
  } catch (e) {
    return colorStr;
  }
};

const getPremiumGradientColors = (
  preset: IconPreset = "glass",
  baseColor: string = "#6366f1",
  theme: "light" | "dark" = "dark"
) => {
  const isDark = theme === "dark";
  const mainColor = baseColor || "#6366f1";

  switch (preset) {
    case "glassmorphism":
      return {
        fillGradient: {
          stops: [
            { offset: "0%", color: isDark ? "#ffffff" : "#64748b", opacity: 0.1 },
            { offset: "100%", color: isDark ? "#cccccc" : "#475569", opacity: 0.3 }
          ]
        },
        strokeGradient: {
          stops: [
            { offset: "0%", color: isDark ? "#ffffff" : "#e2e8f0", opacity: 0.95 },
            { offset: "100%", color: isDark ? "#a1a1aa" : "#94a3b8", opacity: 0.65 }
          ]
        },
        shadowColor: isDark ? "rgba(0, 0, 0, 0.45)" : "rgba(0, 0, 0, 0.18)",
        shadowRadius: 5,
        glowColor: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(100, 116, 139, 0.06)",
        plateBg: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.55)",
        plateBorder: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(100, 116, 139, 0.15)",
        strokeWidth: 2.2
      };
    case "gold":
      return {
        fillGradient: {
          stops: [
            { offset: "0%", color: "#ffe066", opacity: 0.35 },
            { offset: "50%", color: "#f59e0b", opacity: 0.6 },
            { offset: "100%", color: "#d97706", opacity: 0.7 }
          ]
        },
        strokeGradient: {
          stops: [
            { offset: "0%", color: "#fffbeb", opacity: 1 },
            { offset: "35%", color: "#fbbf24", opacity: 1 },
            { offset: "70%", color: "#d97706", opacity: 1 },
            { offset: "100%", color: "#78350f", opacity: 1 }
          ]
        },
        shadowColor: "rgba(120, 53, 15, 0.45)",
        shadowRadius: 6,
        glowColor: "rgba(245, 158, 11, 0.2)",
        plateBg: isDark ? "rgba(217, 119, 6, 0.04)" : "rgba(217, 119, 6, 0.03)",
        plateBorder: "rgba(217, 119, 6, 0.15)",
        strokeWidth: 2.5
      };
    case "silver":
    case "metal":
      return {
        fillGradient: {
          stops: [
            { offset: "0%", color: "#ffffff", opacity: 0.3 },
            { offset: "50%", color: "#e2e8f0", opacity: 0.55 },
            { offset: "100%", color: "#cbd5e1", opacity: 0.65 }
          ]
        },
        strokeGradient: {
          stops: [
            { offset: "0%", color: "#ffffff", opacity: 1 },
            { offset: "40%", color: "#e2e8f0", opacity: 1 },
            { offset: "80%", color: "#94a3b8", opacity: 1 },
            { offset: "100%", color: "#475569", opacity: 1 }
          ]
        },
        shadowColor: "rgba(71, 85, 105, 0.35)",
        shadowRadius: 5,
        glowColor: "rgba(203, 213, 225, 0.15)",
        plateBg: isDark ? "rgba(203, 213, 225, 0.04)" : "rgba(71, 85, 105, 0.03)",
        plateBorder: "rgba(203, 213, 225, 0.15)",
        strokeWidth: 2.2
      };
    case "clay":
      return {
        fillGradient: {
          stops: [
            { offset: "0%", color: adjustColor(mainColor, 0.5), opacity: 0.75 },
            { offset: "100%", color: adjustColor(mainColor, -0.1), opacity: 0.95 }
          ]
        },
        strokeGradient: {
          stops: [
            { offset: "0%", color: adjustColor(mainColor, 0.6), opacity: 1 },
            { offset: "100%", color: adjustColor(mainColor, -0.3), opacity: 1 }
          ]
        },
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowRadius: 6,
        glowColor: `rgba(${parseInt(mainColor.substring(1,3),16)||100}, ${parseInt(mainColor.substring(3,5),16)||100}, ${parseInt(mainColor.substring(5,7),16)||250}, 0.12)`,
        plateBg: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.01)",
        plateBorder: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
        strokeWidth: 2.5
      };
    case "hologram":
      return {
        fillGradient: {
          stops: [
            { offset: "0%", color: "#06b6d4", opacity: 0.35 },
            { offset: "50%", color: "#a855f7", opacity: 0.55 },
            { offset: "100%", color: "#ec4899", opacity: 0.65 }
          ]
        },
        strokeGradient: {
          stops: [
            { offset: "0%", color: "#22d3ee", opacity: 1 },
            { offset: "50%", color: "#c084fc", opacity: 1 },
            { offset: "100%", color: "#f472b6", opacity: 1 }
          ]
        },
        shadowColor: "rgba(168, 85, 247, 0.45)",
        shadowRadius: 6,
        glowColor: "rgba(168, 85, 247, 0.3)",
        plateBg: isDark ? "rgba(168, 85, 247, 0.04)" : "rgba(168, 85, 247, 0.03)",
        plateBorder: "rgba(168, 85, 247, 0.18)",
        strokeWidth: 2.4
      };
    case "carbon":
      return {
        fillGradient: {
          stops: [
            { offset: "0%", color: "#3f3f46", opacity: 0.8 },
            { offset: "50%", color: "#27272a", opacity: 0.9 },
            { offset: "100%", color: "#09090b", opacity: 0.98 }
          ]
        },
        strokeGradient: {
          stops: [
            { offset: "0%", color: "#71717a", opacity: 1 },
            { offset: "50%", color: "#3f3f46", opacity: 1 },
            { offset: "100%", color: "#18181b", opacity: 1 }
          ]
        },
        shadowColor: "rgba(0, 0, 0, 0.65)",
        shadowRadius: 6,
        glowColor: "rgba(0, 0, 0, 0.35)",
        plateBg: isDark ? "rgba(39, 39, 42, 0.06)" : "rgba(0, 0, 0, 0.04)",
        plateBorder: "rgba(63, 63, 70, 0.18)",
        strokeWidth: 2.2
      };
    case "wood":
      return {
        fillGradient: {
          stops: [
            { offset: "0%", color: "#fbbf24", opacity: 0.65 },
            { offset: "50%", color: "#b45309", opacity: 0.8 },
            { offset: "100%", color: "#78350f", opacity: 0.95 }
          ]
        },
        strokeGradient: {
          stops: [
            { offset: "0%", color: "#fbbf24", opacity: 1 },
            { offset: "100%", color: "#451a03", opacity: 1 }
          ]
        },
        shadowColor: "rgba(69, 26, 3, 0.55)",
        shadowRadius: 5,
        glowColor: "rgba(180, 83, 9, 0.15)",
        plateBg: isDark ? "rgba(180, 83, 9, 0.04)" : "rgba(180, 83, 9, 0.02)",
        plateBorder: "rgba(180, 83, 9, 0.15)",
        strokeWidth: 2.3
      };
    case "glass":
    default:
      return {
        fillGradient: {
          stops: [
            { offset: "0%", color: adjustColor(mainColor, 0.4), opacity: 0.25 },
            { offset: "100%", color: adjustColor(mainColor, -0.2), opacity: 0.55 }
          ]
        },
        strokeGradient: {
          stops: [
            { offset: "0%", color: adjustColor(mainColor, 0.5), opacity: 1 },
            { offset: "100%", color: adjustColor(mainColor, -0.3), opacity: 0.85 }
          ]
        },
        shadowColor: `rgba(${parseInt(mainColor.substring(1, 3), 16) || 99}, ${parseInt(mainColor.substring(3, 5), 16) || 102}, ${parseInt(mainColor.substring(5, 7), 16) || 241}, 0.35)`,
        shadowRadius: 5,
        glowColor: `rgba(${parseInt(mainColor.substring(1, 3), 16) || 99}, ${parseInt(mainColor.substring(3, 5), 16) || 102}, ${parseInt(mainColor.substring(5, 7), 16) || 241}, 0.2)`,
        plateBg: isDark ? "rgba(99, 102, 241, 0.04)" : "rgba(99, 102, 241, 0.02)",
        plateBorder: "rgba(99, 102, 241, 0.15)",
        strokeWidth: 2.2
      };
  }
};

const makeEnhanceElement = (
  strokeGradientId: string,
  fillGradientId: string,
  shadowFilterId: string,
  baseStrokeColor: string,
  strokeWidth: number
) => {
  const enhance = (node: React.ReactNode): React.ReactNode => {
    if (!React.isValidElement(node)) return node;

    const props = node.props;
    const newProps: any = { ...props };

    const isShape = typeof node.type === "string" && ["path", "circle", "rect", "line", "polygon", "polyline", "ellipse"].includes(node.type);

    if (isShape) {
      if (!props.fill || props.fill === "none") {
        newProps.fill = `url(#${fillGradientId})`;
      } else if (props.fill === baseStrokeColor) {
        newProps.fill = `url(#${strokeGradientId})`;
      }

      if (!props.stroke || props.stroke === "none" || props.stroke === baseStrokeColor) {
        newProps.stroke = `url(#${strokeGradientId})`;
      }

      if (node.type !== "line") {
        newProps.filter = `url(#${shadowFilterId})`;
      }
      newProps.strokeLinecap = "round";
      newProps.strokeLinejoin = "round";
      newProps.strokeWidth = props.strokeWidth ? parseFloat(props.strokeWidth) * 1.1 : strokeWidth;
    }

    if (props.children) {
      newProps.children = React.Children.map(props.children, enhance);
    }

    return React.cloneElement(node, newProps);
  };

  return enhance;
};

const getRawSVG = (id: string, strokeColor: string, isDark: boolean): React.ReactElement | null => {
  // Letter icons: render bold SVG text for any "letter-*" id
  if (id.startsWith("letter-")) {
    const letter = id.replace("letter-", "").toUpperCase();
    return (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <text
          x="12"
          y="18"
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          fill={strokeColor}
          fontFamily="Arial, Helvetica, sans-serif"
          letterSpacing="-0.5"
        >
          {letter}
        </text>
      </svg>
    );
  }

  // Render premium handcrafted SVG layouts for all icons
  switch (id) {
    case "database":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case "plus":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );
    case "minus":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );
    case "close":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    case "info":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );
    case "alertcircle":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
    case "anchor":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="5" r="3" />
          <line x1="12" y1="8" x2="12" y2="22" />
          <line x1="9" y1="11" x2="15" y2="11" />
          <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        </svg>
      );
    case "diamond":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M6 3h12l4 6-10 12L2 9z" />
          <path d="M11 3 8 9l4 12 4-12-3-6" />
          <path d="M2 9h20" />
        </svg>
      );
    case "filter":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      );
    case "pipeline":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="9" width="5" height="6" rx="1" />
          <rect x="17" y="9" width="5" height="6" rx="1" />
          <rect x="9.5" y="9" width="5" height="6" rx="1" />
          <path d="M7 12h2.5M14.5 12H17" />
        </svg>
      );
    case "refresh":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3l1.2 2.8M22 12.5a10 10 0 0 1-18.8 4.2l-1.2-2.8" />
        </svg>
      );
    case "webhook":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M13 6h3a2 2 0 0 1 2 2v7" />
          <path d="M11 18H8a2 2 0 0 1-2-2V9" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.48-1.95-1.99-3.5-4-3.5a5 5 0 0 0-5 5c-1.37 0-3 1.15-3 3a3.5 3.5 0 0 0 3.5 3.5h10z" />
        </svg>
      );
    case "cpu":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" rx="1" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      );
    case "network":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <path d="M12 8v8M12 12H5v4M12 12h7v4" />
        </svg>
      );
    case "gear":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "rocket":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M12 2C7.5 2 4.5 5 4.5 9.5c0 1.5.5 3.5 1.5 5l4.5-4.5 2 2-4.5 4.5c1.5 1 3.5 1.5 5 1.5 4.5 0 7.5-3 7.5-7.5C22 4.5 19.5 2 12 2z" />
          <path d="M9 15l-5 5M15 9l.01-.01" />
        </svg>
      );
    case "flash":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "folder":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case "wallet":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
          <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
          <path d="M18 12a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4v-6H18z" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case "dollar":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <path d="M17 9H12.5a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 1 0 3H10" />
        </svg>
      );
    case "thumbup":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case "chat":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "key":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3M15.5 7.5L19 4" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "cart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      );
    case "music":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
    case "gamepad":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="6" width="20" height="12" rx="3" />
          <line x1="6" y1="12" x2="10" y2="12" />
          <line x1="8" y1="10" x2="8" y2="14" />
          <circle cx="15" cy="12" r="1" />
          <circle cx="18" cy="12" r="1" />
        </svg>
      );
    case "bell":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    case "sun":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      );
    case "bulb":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <line x1="9" y1="18" x2="15" y2="18" />
          <line x1="10" y1="22" x2="14" y2="22" />
        </svg>
      );
    case "camera":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case "trophy":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
          <path d="M12 2a6 6 0 0 1 6 6c0 3.5-2.5 6-6 6s-6-2.5-6-6a6 6 0 0 1 6-6z" />
        </svg>
      );
    case "lock":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case "mappin":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "creditcard":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      );
    case "wifi":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "trash":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
        </svg>
      );
    case "user":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "play":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      );
    case "gift":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polyline points="20 12 20 22 4 22 4 12" />
          <rect x="2" y="7" width="20" height="5" />
          <line x1="12" y1="22" x2="12" y2="7" />
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "bag":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case "compass":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "send":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "edit":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    case "link":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case "crown":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
          <path d="M3 20h18M21 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <line x1="12" y1="17" x2="12" y2="22" />
          <path d="M5 17h14v-1.76a2 2 0 0 0-.44-1.24l-2.78-3.5A2 2 0 0 1 15 9.24V5a3 3 0 0 0-6 0v4.24a2 2 0 0 1-.78 1.56l-2.78 3.5a2 2 0 0 0-.44 1.24V17z" />
        </svg>
      );
    case "flag":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
        </svg>
      );
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "eye":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "tag":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      );
    case "coffee":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
        </svg>
      );
    case "share":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      );
    case "layers":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "sparkles":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
        </svg>
      );
    case "megaphone":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M11.67 20.33A9 9 0 0 1 18 14h3v-4h-3a9 9 0 0 1-6.33-6.33M4 14v-4M8 12a4 4 0 0 1-4 4V8a4 4 0 0 1 4 4z" />
        </svg>
      );
    case "download":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
        </svg>
      );
    case "upload":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
        </svg>
      );
    case "monitor":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "keyboard":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
          <line x1="6" y1="8" x2="6.01" y2="8" />
          <line x1="10" y1="8" x2="10.01" y2="8" />
          <line x1="14" y1="8" x2="14.01" y2="8" />
          <line x1="18" y1="8" x2="18.01" y2="8" />
          <line x1="6" y1="12" x2="6.01" y2="12" />
          <line x1="10" y1="12" x2="10.01" y2="12" />
          <line x1="14" y1="12" x2="14.01" y2="12" />
          <line x1="18" y1="12" x2="18.01" y2="12" />
          <line x1="7" y1="16" x2="17" y2="16" />
        </svg>
      );
    case "mouse":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="5" y="2" width="14" height="20" rx="7" />
          <line x1="12" y1="6" x2="12" y2="10" />
          <line x1="12" y1="2" x2="12" y2="22" />
        </svg>
      );
    case "harddrive":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <circle cx="12" cy="7" r="1.5" />
          <circle cx="6" cy="17" r="1" />
          <circle cx="10" cy="17" r="1" />
        </svg>
      );
    case "glassmorphism":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* Frosted card overlaying elements behind it */}
          <rect x="3" y="3" width="18" height="18" rx="4" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="18" cy="18" r="4" fill={strokeColor} opacity="0.2" />
          <rect x="6" y="6" width="12" height="12" rx="2" stroke={strokeColor} strokeWidth="2.5" fill={isDark ? "#090d16" : "#ffffff"} fillOpacity="0.6" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      );
    case "google":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M20.86 11a10 10 0 1 1-2.03-5.07l-3.54 3.54a5 5 0 1 0-.95 3.03H12v-5h8.86z" />
        </svg>
      );
    case "router":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="14" width="20" height="6" rx="1" />
          <path d="M6 14V4M18 14V4M12 14v-5" />
          <circle cx="12" cy="6" r="1" />
        </svg>
      );
    case "server":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
          <line x1="2" y1="8" x2="22" y2="8" />
          <line x1="2" y1="16" x2="22" y2="16" />
          <circle cx="6" cy="5" r="1" />
          <circle cx="6" cy="11" r="1" />
          <circle cx="6" cy="17" r="1" />
        </svg>
      );
    case "wrench":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="4" y1="12" x2="20" y2="12" />
        </svg>
      );
    case "smile":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      );
    case "frown":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      );
    case "hearteyes":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <path d="M7 8.5C7 7.5 8 7 8.5 7.5c.5-.5 1.5 0 1.5 1a2 2 0 0 1-1.5 1.5C7 8.5 7 8.5 7 8.5z" fill={strokeColor} />
          <path d="M14 8.5c0-1 1-1.5 1.5-1 .5-.5 1.5 0 1.5 1a2 2 0 0 1-1.5 1.5c-1.5-1.5-1.5-1.5-1.5-1.5z" fill={strokeColor} />
        </svg>
      );
    case "hammer":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="m15 5 6 6" />
          <path d="m9 11-6 6v3h3l6-6" />
          <path d="m19 3 3 3-4 4-3-3 4-4z" />
          <path d="m14 8 2.5 2.5" />
        </svg>
      );
    case "screwdriver":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M8.5 15.5 3 21h-2v-2l5.5-5.5" />
          <path d="m20.5 7.5-.7-.7a3.535 3.535 0 0 0-5 0l-.7.7a3.535 3.535 0 0 0 0 5l.7.7a3.535 3.535 0 0 0 5 0l.7-.7a3.535 3.535 0 0 0 0-5z" />
          <path d="m13.5 10.5 2 2" />
          <path d="m9 15 2-2" />
        </svg>
      );
    case "nut":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
          <circle cx="12" cy="12" r="5" />
        </svg>
      );
    case "printer":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polyline points="6 9 6 2 18 2 18 9" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" rx="1" fill={isDark ? "#090d16" : "#ffffff"} fillOpacity="0.6" />
        </svg>
      );
    case "speaker":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <circle cx="12" cy="14" r="4" />
          <circle cx="12" cy="6" r="1.5" />
        </svg>
      );
    case "ethernet":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="6" y="2" width="12" height="10" rx="1" />
          <path d="M10 12v6a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-6" />
          <path d="M12 20v2" />
          <line x1="8" y1="6" x2="8" y2="8" />
          <line x1="12" y1="6" x2="12" y2="8" />
          <line x1="16" y1="6" x2="16" y2="8" />
        </svg>
      );
    case "satellite":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M13 7 9 3 5 7l4 4 4-4z" />
          <path d="m17 11 4 4-4 4-4-4 4-4z" />
          <path d="m12 12-4 4" />
          <path d="m16 16-2 2" />
          <path d="M4 20a4 4 0 0 1 4-4" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    case "terminal":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 15V9a4 4 0 0 0-4-4H9" />
          <line x1="6" y1="9" x2="6" y2="15" />
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
          <path d="M12 9h3.5a3.5 3.5 0 1 1-3.5 3.5V9z" />
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
        </svg>
      );
    case "barchart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <polyline points="7 13 10 16 17 9" />
        </svg>
      );
    case "container":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="7" width="20" height="12" rx="2" />
          <path d="M2 10h20M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <line x1="8" y1="10" x2="8" y2="19" />
          <line x1="12" y1="10" x2="12" y2="19" />
          <line x1="16" y1="10" x2="16" y2="19" />
        </svg>
      );
    case "shieldcheck":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      );
    case "node":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      );
    case "bug":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect width="8" height="14" x="8" y="6" rx="4" />
          <path d="m19 7-3 2" />
          <path d="m5 7 3 2" />
          <path d="m19 19-3-2" />
          <path d="m5 19 3-2" />
          <path d="M20 13h-4" />
          <path d="M4 13h4" />
          <path d="m10 4 1-2" />
          <path d="m14 4-1-2" />
        </svg>
      );
    case "flask":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M6 3h12" />
          <path d="M14 9V3" />
          <path d="M10 3v6L4.2 18.6C3.5 20 4.5 22 6.1 22h11.8c1.6 0 2.6-2 1.9-3.4L14 9" />
        </svg>
      );
    case "piechart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      );
    case "flame":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case "activity":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case "graduationcap":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
          <path d="M21.5 12v6" />
        </svg>
      );
    case "trendingup":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "package":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
          <polygon points="12 22.08 12 12 3 6.92 3 17.08 12 22.08" />
          <polygon points="12 22.08 21 17.08 21 6.92 12 12 12 22.08" />
          <polygon points="12 12 21 6.92 12 2 3 6.92 12 12" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
          <line x1="12" y1="5.4" x2="12" y2="12" />
        </svg>
      );
    case "airplane":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M21 16V14L13 9V3.5A1.5 1.5 0 0 0 11.5 2A1.5 1.5 0 0 0 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" />
        </svg>
      );
    case "battery":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
          <line x1="23" y1="11" x2="23" y2="13" />
        </svg>
      );
    case "video":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      );
    case "microphone":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      );
    case "sliders":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <line x1="17" y1="16" x2="23" y2="16" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
          <line x1="9" y1="3" x2="9" y2="18" />
          <line x1="15" y1="6" x2="15" y2="21" />
        </svg>
      );
    case "umbrella":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M23 12a11.02 11.02 0 0 0-22 0zm-11 0v9a2 2 0 0 0 4 0" />
        </svg>
      );
    case "scissors":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="9.8" y1="8.2" x2="21" y2="19" />
          <line x1="9.8" y1="15.8" x2="21" y2="5" />
        </svg>
      );
    case "unlock":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 9.9-1" />
        </svg>
      );
    case "archive":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polyline points="21 8 21 21 3 21 3 8" />
          <rect x="1" y="3" width="22" height="5" />
          <line x1="10" y1="12" x2="14" y2="12" />
        </svg>
      );
    case "shieldalert":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
    case "eyeoff":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      );
    case "userplus":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="20" y1="8" x2="20" y2="14" />
          <line x1="17" y1="11" x2="23" y2="11" />
        </svg>
      );
    case "trendingdown":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
          <polyline points="17 18 23 18 23 12" />
        </svg>
      );
    case "copy":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      );
    case "gauge":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M3 18a9 9 0 1 1 18 0" />
          <circle cx="12" cy="14" r="2" />
          <line x1="12" y1="14" x2="16" y2="9" />
        </svg>
      );
    case "magnet":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M5 9v3a7 7 0 0 0 14 0V9" />
          <path d="M9 9v3a3 3 0 0 0 6 0V9" />
          <line x1="5" y1="9" x2="9" y2="9" />
          <line x1="15" y1="9" x2="19" y2="9" />
        </svg>
      );
    case "stack":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 12 12 17 22 12" />
          <polyline points="2 17 12 22 22 17" />
        </svg>
      );
    case "workflow":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="9" y="2" width="6" height="5" rx="1" />
          <rect x="3" y="16" width="6" height="5" rx="1" />
          <rect x="15" y="16" width="6" height="5" rx="1" />
          <path d="M12 7v5M12 12H6v4M12 12h6v4" />
        </svg>
      );
    case "topology":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="4" r="2" />
          <circle cx="12" cy="20" r="2" />
          <circle cx="4" cy="12" r="2" />
          <circle cx="20" cy="12" r="2" />
          <line x1="12" y1="7" x2="12" y2="9" />
          <line x1="12" y1="15" x2="12" y2="17" />
          <line x1="7" y1="12" x2="9" y2="12" />
          <line x1="15" y1="12" x2="17" y2="12" />
        </svg>
      );
    case "file":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );
    case "headphones":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      );
    case "moon":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      );
    case "paperclip":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
        </svg>
      );
    case "bookmark":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "cloudlightning":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 8.58" />
          <polyline points="13 11 9 17 12 17 11 23 15 17 12 17 13 11" />
        </svg>
      );
    case "folderopen":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M2 10h20M22 6a2 2 0 0 0-2-2H9L7 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10z" />
        </svg>
      );
    case "volume":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      );
    case "belloff":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M13.73 21a2 2 0 0 1-3.46 0m3.13-11A6 6 0 0 0 8 8m-2.1 0A6 6 0 0 0 6 8c0 7-3 9-3 9h12.5m2.5-3a7.48 7.48 0 0 0-.8-2" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      );
    case "sunmoon":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      );
    case "piston":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M6 3h12v7H6z" />
          <path d="M6 5.5h12M6 8h12" />
          <circle cx="12" cy="8.5" r="1.5" />
          <line x1="12" y1="10" x2="12" y2="18" />
          <circle cx="12" cy="19.5" r="2" />
        </svg>
      );
    case "spring":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 2v2c4 0 5 1.5 5 3s-3 2-6 2-6 1.5-6 3 3 2 6 2 6 1.5 6 3-3 2-6 2-5 1.5-5 3v2" />
        </svg>
      );
    case "anvil":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M3 8c-2 0-2 4 1 4h2v4a2 2 0 0 0-2 2v1h16v-1a2 2 0 0 0-2-2v-4h2c3 0 3-4 1-4H3z" />
        </svg>
      );
    case "hook":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="9" y="2" width="6" height="6" rx="1.5" />
          <circle cx="12" cy="5" r="1" />
          <path d="M12 8v4a3.5 3.5 0 1 1-3.5 3.5c0-1.5 1-2.5 2-3" />
        </svg>
      );
    case "turbine":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="9.5" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M12 12c.5-3.5 2-6 2.5-6.5S12.5 5 11 7c-.6.8-1 2.2-1 4.5" />
          <path d="M12 12c-2.8-2.2-5.3-3.2-6-3s-.5 2.5 1.8 3.3c.9.3 2.3.4 4.2-.3" />
          <path d="M12 12c2.3 2.8 3.3 5.3 3.5 6s-2 1.5-2.8-.8c-.3-.9-.4-2.3-.7-4.2" />
        </svg>
      );
    case "pliers":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
          <path d="M9 13.5L4 21M15 13.5L20 21M10.5 10.5L8 3h3v5M13.5 10.5L16 3h-3v5" />
        </svg>
      );
    case "drill":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M18 4H8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v8a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V12h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
          <path d="M18 7h4M22 6v2M12 15h3" />
        </svg>
      );
    case "hacksaw":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M2 17h16c1.5 0 2-1 2-2V5c0-1.5-1-2-2-2H4c-1.5 0-2 .5-2 2v8M18 17l2 4M2 17l-1 2a1.5 1.5 0 0 0 1.5 1.5H5" />
          <path d="M3 14h15" />
        </svg>
      );
    case "tapemeasure":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="3" y="3" width="14" height="14" rx="3" />
          <path d="M17 14h4v3" />
          <path d="M7 17v2M12 17v2" />
          <circle cx="10" cy="10" r="3" />
        </svg>
      );
    case "caliper":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M3 5h18M3 5v8M3 5v-2M8 5v5M8 5v-2" />
          <rect x="9" y="4" width="6" height="4" rx="1" />
          <path d="M15 5v8M15 5v-2" />
        </svg>
      );
    case "spiritlevel":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <rect x="8" y="10" width="8" height="4" rx="1" />
          <circle cx="12" cy="12" r="1" />
          <line x1="10" y1="10" x2="10" y2="14" />
          <line x1="14" y1="10" x2="14" y2="14" />
        </svg>
      );
    case "sledgehammer":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="6" y="3" width="12" height="6" rx="1.5" />
          <path d="M12 9v12" />
          <path d="M10 6h4" />
        </svg>
      );
    case "phonemobile":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <circle cx="12" cy="18" r="1" />
          <line x1="10" y1="4" x2="14" y2="4" />
        </svg>
      );
    case "tablet":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <circle cx="12" cy="18" r="1" />
        </svg>
      );
    case "laptop":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M20 16V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12" />
          <path d="M2 16h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
        </svg>
      );
    case "smartwatch":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="6" y="6" width="12" height="12" rx="3" />
          <path d="M9 6V2h6v4M9 18v4h6v-4" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "routerwifi":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="14" width="20" height="6" rx="2" />
          <path d="M5 14V3M19 14V3" />
          <circle cx="6" cy="17" r="0.5" />
          <circle cx="12" cy="17" r="0.5" />
          <circle cx="18" cy="17" r="0.5" />
        </svg>
      );
    case "serverrack":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="3" y="2" width="18" height="20" rx="2" />
          <path d="M3 8h18M3 14h18" />
          <circle cx="6" cy="5" r="1" />
          <circle cx="6" cy="11" r="1" />
          <circle cx="6" cy="17" r="1" />
        </svg>
      );
    case "harddriveexternal":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 18h6" />
          <line x1="12" y1="6" x2="12" y2="12" />
        </svg>
      );
    case "webcam":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="10" r="7" />
          <circle cx="12" cy="10" r="3" />
          <path d="M12 17v3M8 20h8" />
        </svg>
      );
    case "chisel":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M10 3h4v7h-4z M12 10v4 M8 14h8v6l-4 2-4-2z" />
        </svg>
      );
    case "crowbar":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M4 22l14-14 M18 8a3 3 0 0 0 3-3c0-1.5-1.5-2-2.5-1L14.5 8" />
        </svg>
      );
    case "funnel":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M20 3H4v3l6 6v7l4 2v-9l6-6z" />
        </svg>
      );
    case "oilcan":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M8 8h8v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V8z M12 8V4 M12 4l8-2 M6 13a3 3 0 0 1-3-3v-2M12 4l-4 2" />
        </svg>
      );
    case "bearing":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="5.5" r="1.5" />
          <circle cx="12" cy="18.5" r="1.5" />
          <circle cx="5.5" cy="12" r="1.5" />
          <circle cx="18.5" cy="12" r="1.5" />
          <circle cx="7.4" cy="7.4" r="1.5" />
          <circle cx="16.6" cy="7.4" r="1.5" />
          <circle cx="7.4" cy="16.6" r="1.5" />
          <circle cx="16.6" cy="16.6" r="1.5" />
        </svg>
      );
    case "pulley":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="13" r="6" />
          <circle cx="12" cy="13" r="1.5" />
          <path d="M6 13V3h12v10" />
          <circle cx="12" cy="3" r="1" />
        </svg>
      );
    case "sprocket":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M12 2l1.5 2 1.5-2M12 22l-1.5-2-1.5 2M2 12l2-1.5-2-1.5M22 12l-2 1.5 2 1.5" />
        </svg>
      );
    case "projector":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="3" y="8" width="18" height="9" rx="2" />
          <circle cx="16" cy="12.5" r="3.5" />
          <circle cx="16" cy="12.5" r="1.5" />
          <line x1="6" y1="11" x2="10" y2="11" />
          <line x1="6" y1="14" x2="8" y2="14" />
        </svg>
      );
    case "gameconsole":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="8" y="2" width="8" height="20" rx="1.5" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <path d="M6 22h12" />
        </svg>
      );
    case "vrheadset":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="3" y="8" width="18" height="8" rx="3" />
          <path d="M10 8c1 1.5 3 1.5 4 0" />
          <line x1="6" y1="12" x2="18" y2="12" />
        </svg>
      );
    case "smartspeaker":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="6" y="3" width="12" height="18" rx="6" />
          <ellipse cx="12" cy="5" rx="5" ry="1.5" />
          <ellipse cx="12" cy="5" rx="3" ry="1" />
        </svg>
      );
    case "powerbank":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <circle cx="8" cy="5" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="16" cy="5" r="1" />
        </svg>
      );
    case "usbdrive":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="7" y="8" width="10" height="14" rx="2" />
          <rect x="9" y="2" width="6" height="6" />
          <circle cx="12" cy="18" r="1" />
        </svg>
      );
    case "motherboard":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <rect x="6" y="6" width="6" height="6" rx="1" />
          <rect x="15" y="6" width="3" height="12" rx="0.5" />
          <line x1="6" y1="16" x2="12" y2="16" />
        </svg>
      );
    case "ramstick":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="8" width="20" height="8" rx="1" />
          <line x1="3" y1="16" x2="21" y2="16" />
          <rect x="4" y="10" width="2" height="4" />
          <rect x="8" y="10" width="2" height="4" />
          <rect x="12" y="10" width="2" height="4" />
          <rect x="16" y="10" width="2" height="4" />
        </svg>
      );
    case "crank":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="6" cy="18" r="3" />
          <line x1="8" y1="16" x2="16" y2="8" />
          <circle cx="18" cy="6" r="3" />
        </svg>
      );
    case "camshaft":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M6 12a3 3 0 0 1-3-3V6a3 3 0 0 1 6 0v3a3 3 0 0 1-3 3z" />
          <path d="M18 12a3 3 0 0 0 3 3v3a3 3 0 0 0-6 0v-3a3 3 0 0 0 3-3z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "driveshaft":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <line x1="5" y1="12" x2="19" y2="12" />
          <rect x="2" y="9" width="3" height="6" rx="1" />
          <rect x="19" y="9" width="3" height="6" rx="1" />
          <path d="M5 8v8M19 8v8" />
        </svg>
      );
    case "valve":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="2.5" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
      );
    case "propeller":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="2" />
          <path d="M12 10c1.5-2.5 4-3.5 4.5-2s-1.5 3.5-4.5 2z" />
          <path d="M10 12c-2.5 1.5-3.5 4-2 4.5s3.5-1.5 2-4.5z" />
          <path d="M12 14c-1.5 2.5-4 3.5-4.5 2s1.5-3.5 4.5-2z" />
          <path d="M14 12c2.5-1.5 3.5-4 2-4.5s-3.5 1.5-2 4.5z" />
        </svg>
      );
    case "rotor":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="2" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 6h8M12 18H4M6 12V4M18 12v8" />
        </svg>
      );
    case "hydraulicjack":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="6" y="8" width="10" height="12" rx="1" />
          <rect x="9" y="4" width="4" height="4" rx="0.5" />
          <line x1="3" y1="20" x2="21" y2="20" />
          <path d="M16 12h3v6h-3" />
        </svg>
      );
    case "gpu":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="7" cy="12" r="2.5" />
          <circle cx="12" cy="12" r="2.5" />
          <circle cx="17" cy="12" r="2.5" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      );
    case "powersupply":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="12" cy="12" r="5" />
          <path d="M12 7v10M7 12h10" />
          <line x1="17" y1="6" x2="19" y2="6" />
        </svg>
      );
    case "networkswitch":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <rect x="5" y="9" width="3" height="3" />
          <rect x="10" y="9" width="3" height="3" />
          <rect x="15" y="9" width="3" height="3" />
          <circle cx="19" cy="10" r="0.5" />
          <circle cx="19" cy="14" r="0.5" />
        </svg>
      );
    case "smartplug":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="6" y="3" width="12" height="18" rx="4" />
          <circle cx="12" cy="12" r="3" />
          <line x1="10" y1="7" x2="10" y2="9" />
          <line x1="14" y1="7" x2="14" y2="9" />
        </svg>
      );
    case "smartbulb":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M15 14c1.2-1.2 2-3 2-5A5 5 0 0 0 7 9c0 2 .8 3.8 2 5h6z" />
          <rect x="9" y="14" width="6" height="4" />
          <line x1="10" y1="18" x2="14" y2="18" />
          <line x1="11" y1="21" x2="13" y2="21" />
        </svg>
      );
    case "securitycamera":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="6" width="14" height="10" rx="2" />
          <path d="M16 10l5-4v12l-5-4z" />
          <path d="M5 21h8" />
          <line x1="9" y1="16" x2="9" y2="21" />
        </svg>
      );
    case "smartlock":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="15" r="1" />
          <line x1="12" y1="16" x2="12" y2="18" />
        </svg>
      );
    case "thermostat":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
        </svg>
      );
    case "gclamp":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M16 8H8a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h4 M12 8v11 M10 19h4" />
        </svg>
      );
    case "vice":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="3" y="14" width="18" height="4" rx="1" />
          <rect x="6" y="8" width="5" height="6" />
          <rect x="13" y="8" width="5" height="6" />
          <line x1="2" y1="11" x2="22" y2="11" />
        </svg>
      );
    case "greasegun":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="6" y="8" width="12" height="6" rx="1" />
          <path d="M18 11h4v2 M6 11H2 M10 8l-4-4v12" />
        </svg>
      );
    case "gearbox":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="8" cy="12" r="3" />
          <circle cx="16" cy="12" r="4" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      );
    case "differential":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="5" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="12" y1="12" x2="12" y2="22" />
        </svg>
      );
    case "suspension":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 3v18 M7 6l5 3 5-3 M7 18l5-3 5 3" />
          <circle cx="12" cy="9" r="2" />
          <circle cx="12" cy="15" r="2" />
        </svg>
      );
    case "windlass":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="6" y="7" width="12" height="10" rx="1" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M20 8l2 4-2 4" />
        </svg>
      );
    case "earbuds":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="5" y="6" width="14" height="12" rx="3" />
          <circle cx="9" cy="11" r="2" />
          <circle cx="15" cy="11" r="2" />
          <path d="M9 13v3M15 13v3" />
        </svg>
      );
    case "smartring":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="5" r="1" />
        </svg>
      );
    case "drawingtablet":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <rect x="5" y="7" width="14" height="10" />
          <path d="M17 9l2 2-6 6-2-2z" />
        </svg>
      );
    case "barcodescanner":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M16 3H8L6 8h12z M10 8l-2 11h8l-2-11" />
          <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
      );
    case "posregister":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="3" y="14" width="18" height="7" rx="1" />
          <rect x="6" y="4" width="12" height="9" rx="1" />
          <line x1="6" y1="17" x2="18" y2="17" />
        </svg>
      );
    case "calculator":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="4" y="3" width="14" height="18" rx="2" />
          <rect x="6" y="5" width="10" height="4" />
          <circle cx="8" cy="12" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="16" cy="12" r="1" />
          <circle cx="8" cy="16" r="1" />
          <circle cx="12" cy="16" r="1" />
          <circle cx="16" cy="16" r="1" />
        </svg>
      );
    case "remotecontrol":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="6" y="2" width="12" height="20" rx="3" />
          <circle cx="12" cy="6" r="1.5" />
          <circle cx="12" cy="12" r="2.5" />
          <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
      );
    case "soundbar":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="14" width="20" height="4" rx="1" />
          <rect x="15" y="4" width="6" height="9" rx="1" />
          <circle cx="18" cy="8.5" r="2" />
        </svg>
      );
    case "jackhammer":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M4 4h16 M12 4v4 M8 8h8 M8 8l1 6h6l1-6 M12 14v4 M11 18h2 M12 18l-1 4" />
        </svg>
      );
    case "solderingiron":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M7 17l-4 4 M6 13l5 5 M10 9l8 8 M14 5l5 5 M19 5l2-2" />
        </svg>
      );
    case "blowtorch":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="8" y="10" width="8" height="11" rx="1" />
          <path d="M12 10V7 M12 7l4-2 M16 5V3 M12 7h-3" />
        </svg>
      );
    case "wheelbarrow":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M2 17h6l4-7h8v3l-5 4H6l-4-4" />
          <circle cx="17" cy="18" r="2.5" />
          <path d="M6 17l-1 4 M12 14l-1 7" />
        </svg>
      );
    case "plumbbob":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <line x1="12" y1="2" x2="12" y2="9" />
          <path d="M12 9l-4 7 4 5 4-5-4-7z" />
          <circle cx="12" cy="9" r="1.5" />
        </svg>
      );
    case "shears":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M6 6l6 6M6 18l6-6" />
          <circle cx="12" cy="12" r="1.5" />
          <path d="M12 12l7-5M12 12l7 5" />
          <circle cx="20" cy="7" r="2" />
          <circle cx="20" cy="17" r="2" />
        </svg>
      );
    case "wirestripper":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M6 4c0 3 2 5 6 5s6-2 6-5" />
          <circle cx="12" cy="9" r="1.5" />
          <path d="M12 9l-4 11M12 9l4 11" />
          <path d="M10 14h4" />
        </svg>
      );
    case "pipewrench":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="9" y="10" width="6" height="11" rx="1" />
          <path d="M10 10V6h6V3" />
          <path d="M13 10V8" />
        </svg>
      );
    case "floppy":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M4 2h13l3 3v15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
          <rect x="6" y="14" width="12" height="8" />
          <rect x="8" y="2" width="8" height="6" />
        </svg>
      );
    case "tapecassette":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <circle cx="8" cy="11" r="2" />
          <circle cx="16" cy="11" r="2" />
          <rect x="6" y="16" width="12" height="4" />
        </svg>
      );
    case "cd":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "tv":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="7" width="20" height="12" rx="2" />
          <path d="M12 19v3M7 22h10M17 2l-5 5-5-5" />
        </svg>
      );
    case "radio":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="6" width="20" height="14" rx="2" />
          <circle cx="7" cy="13" r="3" />
          <line x1="14" y1="10" x2="18" y2="10" />
          <circle cx="16" cy="15" r="1.5" />
          <path d="M4 6l6-4 M19 6V3" />
        </svg>
      );
    case "walkietalkie":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="6" y="7" width="12" height="14" rx="2" />
          <line x1="8" y1="7" x2="8" y2="2" />
          <circle cx="10" cy="12" r="1" />
          <circle cx="14" cy="12" r="1" />
          <line x1="9" y1="16" x2="15" y2="16" />
        </svg>
      );
    case "headset":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M3 11c0-5 4-9 9-9s9 4 9 9" />
          <rect x="2" y="11" width="3" height="6" rx="1" />
          <rect x="19" y="11" width="3" height="6" rx="1" />
          <path d="M3 17h3l3 4" />
        </svg>
      );
    case "fish":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M2 12c0-3.5 3-6 8-6 4 0 7 2 9 4.5V15.5c-2 2.5-5 4.5-9 4.5-5 0-8-2.5-8-6z M18 12c1.5-1.5 3-1.5 4-1M18 12c1.5 1.5 3 1.5 4 1 M8 9.5a1 1 0 1 0 0 2 1 1 0 1 0 0-2" />
        </svg>
      );
    case "butterfly":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 3v18 M12 6c-2-3-8-3-8 2 0 4 5 5 8 2 M12 6c2-3 8-3 8 2 0 4-5 5-8 2 M12 12c-2-2-8-1-8 4s5 3 8 0 M12 12c2-2 8-1 8 4s-5 3-8 0" />
        </svg>
      );
    case "bird":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M3 16c4 0 7-3 8-7 1 4 4 7 8 7 M11 9c1-3 3-5 6-5 1 2 1 4-1 6.5 M19 9c1-1 2-1 3 0l-3 3 M4 16c-1 2-2 4-2 6h8c-2-2-4-4-6-6z" />
        </svg>
      );
    case "cat":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="13" r="8" />
          <path d="M6 6L4 10 M18 6l2 4 M9 11.5a.5.5 0 1 0 0 1 .5.5 0 1 0 0-1 M15 11.5a.5.5 0 1 0 0 1 .5.5 0 1 0 0-1 M12 14.5l-1.5-1.5h3z M5 16h3M19 16h-3" />
        </svg>
      );
    case "dog":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="13" r="8" />
          <path d="M4 11l-1 5a1 1 0 0 0 1 1h1 M20 11l1 5a1 1 0 0 1-1 1h-1 M9 11.5a1 1 0 1 0 0 2 1 1 0 1 0 0-2 M15 11.5a1 1 0 1 0 0 2 1 1 0 1 0 0-2 M12 15a1.5 1.5 0 1 1-3 0" />
        </svg>
      );
    case "rabbit":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="14" r="7" />
          <path d="M9 7c0-2.5-.5-5-2-5s-2 2.5-2 5 M15 7c0-2.5.5-5 2-5s2 2.5 2 5 M9 12.5a.5.5 0 1 0 0 1 M15 12.5a.5.5 0 1 0 0 1 M12 14.5l-1-1h2z" />
        </svg>
      );
    case "elephant":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12c-2.5 0-3-2.5-3-4s2-2 3-1 M20 12c2.5 0 3-2.5 3-4s-2-2-3-1 M12 14c0 3 .5 6 3 6M10 13l-1.5 2 M14 13l1.5 2" />
        </svg>
      );
    case "owl":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="13" r="8" />
          <circle cx="8.5" cy="11.5" r="2.5" />
          <circle cx="15.5" cy="11.5" r="2.5" />
          <path d="M12 14l-1-1.5h2z M6 6l3 2 M18 6l-3 2" />
        </svg>
      );
    case "turtle":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4V2 M12 20v2 M4 12H2 M20 12h2 M6 6l-2-2 M18 18l2 2 M18 6l2-2 M6 18l-2 2" />
        </svg>
      );
    case "dolphin":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M22 6c-3 0-6 2-9 5s-6 5-11 5c4 0 7-1 9-3s4-5 8-7 M11.5 12l2.5-3.5 M4 16c-.5 1-1.5 2.5-2 3 M18 8.5a.5.5 0 1 0 0-1 .5.5 0 1 0 0 1" />
        </svg>
      );
    case "rose":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 3a5 5 0 0 1 5 5c0 4.5-5 9-5 9s-5-4.5-5-9a5 5 0 0 1 5-5z" />
          <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M12 17v5M10 20h4" />
          <path d="M12 14c1.5-1.5 3-1.5 3.5-3s-.5-3-2-2.5" />
        </svg>
      );
    case "sunflower":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" />
          <path d="M12 6a6 6 0 0 1 6 6M12 18a6 6 0 0 1-6-6" />
        </svg>
      );
    case "tulip":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 20V10M9 20h6" />
          <path d="M12 4c-3.5 0-6 3-6 7.5S8.5 17 12 17s6-1 6-5.5S15.5 4 12 4z" />
          <path d="M12 4v13M8 6c0 4 2 6.5 4 6.5s4-2.5 4-6.5" />
        </svg>
      );
    case "lotus":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 21c-4 0-7-3-7-7 0-4.5 7-11 7-11s7 6.5 7 11c0 4-3 7-7 7z" />
          <path d="M12 10c-2.5 1.5-4 4-4 7h8c0-3-1.5-5.5-4-7z" />
          <path d="M5 14c-1.5 1.5-2 3.5-1.5 5s2 1.5 3.5.5M19 14c1.5 1.5 2 3.5 1.5 5s-2 1.5-3.5.5" />
        </svg>
      );
    case "daisy":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v7M12 15v7M2 12h7M15 12h7M5 5l5 5M14 14l5 5M5 19l5-5M14 10l5-5" />
        </svg>
      );
    case "hibiscus":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 14c3.5 0 6-2 6-5.5S15.5 3 12 3 6 5 6 8.5 8.5 14 12 14z" />
          <path d="M12 14c-2.5 3-2.5 6 0 7s2.5-4 0-7z" />
          <path d="M12 10l5-5M17 5h1M17 5v-1" />
          <circle cx="18" cy="4" r="1" />
        </svg>
      );
    case "orchid":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 3v9M7 5c1 3 3 5 5 7s4-4 5-7" />
          <path d="M6 14c2-1 4 0 6 2s1 5-1 6-4-1-5-3 0-5 0-5z" />
          <path d="M18 14c-2-1-4 0-6 2s-1 5 1 6 4-1 5-3 0-5 0-5z" />
          <circle cx="12" cy="9" r="1.5" />
        </svg>
      );
    case "lily":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 21V10M12 10c-3-1-5-4-5-7h10c0 3-2 6-5 7z" />
          <path d="M7 3c0 3.5 2 6 5 6.5s5-3 5-6.5" />
          <path d="M10 13c1 1.5 3 1.5 4 0" />
        </svg>
      );
    case "cactus":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 3v18M8 21h8" />
          <path d="M12 8c-3 0-4 1-4 4v3" />
          <path d="M12 6c3 0 4 1 4 4v4" />
          <path d="M6 12v2c0 1.5 1 2 2 2" />
          <path d="M18 10v2c0 1.5-1 2-2 2" />
        </svg>
      );
    case "lavender":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 22V10" />
          <path d="M12 10c-1.5-.5-2-1.5-2-2.5s1-1.5 2-1 2 0 2 1-1.5 2-2 2.5z" />
          <path d="M12 6c-1.5-.5-2-1.5-2-2.5s1-1.5 2-1 2 0 2 1-1.5 2-2 2.5z" />
          <path d="M12 14c-1.5-.5-2-1.5-2-2.5s1-1.5 2-1 2 0 2 1-1.5 2-2 2.5z" />
          <path d="M12 18c-1.5-.5-2-1.5-2-2.5s1-1.5 2-1 2 0 2 1-1.5 2-2 2.5z" />
        </svg>
      );
    case "cloudrain":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
          <path d="M16 14v6" />
          <path d="M8 14v6" />
          <path d="M12 16v6" />
        </svg>
      );
    case "cloudsnow":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
          <path d="M8 15h.01M8 19h.01M12 17h.01M12 21h.01M16 15h.01M16 19h.01" />
        </svg>
      );
    case "wind":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
        </svg>
      );
    case "tornado":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M21 4H3M20 8H4M18 12H6M15 16H9M13 20h-2" />
        </svg>
      );
    case "snowflake":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <path d="M20 16l-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4" />
        </svg>
      );
    case "rainbow":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M22 17a10 10 0 0 0-20 0" />
          <path d="M18 17a6 6 0 0 0-12 0" />
          <path d="M14 17a2 2 0 0 0-4 0" />
        </svg>
      );
    case "thermometer":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-13.9.2" />
          <path d="M9 22L19 12" />
        </svg>
      );
    case "tree":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 19V5M5 13l7-7 7 7M3 17l9-9 9 9" />
          <path d="M9 22h6" />
        </svg>
      );
    case "hurricane":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2C6.5 2 2 6.5 2 12c0 2 .6 3.9 1.7 5.5l1.3-1.3C4.4 15 4 13.5 4 12c0-4.4 3.6-8 8-8 1.5 0 3 .4 4.2 1l1.3-1.3C15.9 2.6 14 2 12 2z" />
          <path d="M12 22c5.5 0 10-4.5 10-10 0-2-.6-3.9-1.7-5.5l-1.3 1.3c.6 1.2 1 2.7 1 4.2 0 4.4-3.6 8-8 8-1.5 0-3-.4-4.2-1l-1.3 1.3c1.6 1.1 3.5 1.7 5.5 1.7z" />
        </svg>
      );
    case "burger":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M2 12c0-4 4-8 10-8s10 4 10 8H2z" />
          <path d="M2 12c0 2 2 3 5 3s5-1 5-3m-10 0v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2" />
          <path d="M2 15h20" />
        </svg>
      );
    case "pizza":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M22 11L12 22 2 11c0-5.5 4.5-10 10-10s10 4.5 10 10z" />
          <circle cx="12" cy="7" r="1" />
          <circle cx="8" cy="12" r="1" />
          <circle cx="16" cy="12" r="1" />
          <path d="M2 11h20" />
        </svg>
      );
    case "apple":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 22c4.97 0 9-3.03 9-8 0-4.5-3-6-5-6-.5 0-1.07.13-1.63.38A5.86 5.86 0 0 0 12 8c-.78 0-1.64.13-2.37.38C9.07 8.13 8.5 8 8 8c-2 0-5 1.5-5 6 0 4.97 4.03 8 9 8z" />
          <path d="M12 8V4c0-1 1-2 2-2" />
        </svg>
      );
    case "banana":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M16 3c.5 1.5-.5 3-2.5 4.5s-5.5 3-8 5.5-3.5 5-3.5 7.5c2.5 0 5-1 7.5-3.5s4-6 5.5-8 3-3 4.5-2.5z" />
          <path d="M3 21.5l-1 1" />
        </svg>
      );
    case "cake":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <rect x="6" y="5" width="12" height="6" rx="2" />
          <line x1="12" y1="5" x2="12" y2="2" />
          <path d="M12 2c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1z" />
        </svg>
      );
    case "icecream":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V22l4-2 4 2v-7.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
          <path d="M5 9h14" />
        </svg>
      );
    case "donut":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <path d="M10 5.5a1 1 0 1 0 0-2" />
          <path d="M14 19a1 1 0 1 0 0 2" />
          <path d="M5 13a1 1 0 1 0 0 2" />
          <path d="M18.5 9.5a1 1 0 1 0 0-2" />
        </svg>
      );
    case "popcorn":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M18 8l-1.5 14H7.5L6 8h12z" />
          <path d="M10 8v14M14 8v14" />
          <path d="M6.5 8C5.5 8 5 7 5 6s1-2 2-2 2 1 2.5 2M18.5 8c1 0 1.5-1 1.5-2s-1-2-2-2-2 1-2.5 2M9 6a3 3 0 0 1 6 0" />
        </svg>
      );
    case "watermelon":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M22 12a10 10 0 0 1-20 0h20z" />
          <path d="M18 12a6 6 0 0 1-12 0" />
          <circle cx="9" cy="14" r="0.5" />
          <circle cx="12" cy="16" r="0.5" />
          <circle cx="15" cy="14" r="0.5" />
        </svg>
      );
    case "cookie":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <circle cx="8" cy="9" r="1.5" />
          <circle cx="15" cy="8" r="1.5" />
          <circle cx="9" cy="15" r="1.5" />
          <circle cx="14" cy="14" r="1.5" />
          <path d="M18.5 5.5a3 3 0 0 1 0 5 3 3 0 0 1-3 0" />
        </svg>
      );
    case "safe":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M20 12h2M2 12h2" />
        </svg>
      );
    case "goldbars":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M2 17h20M2 21h20M5 17L3 9h18l-2 8M6 9L4 2h16l-2 7" />
        </svg>
      );
    case "bank":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
        </svg>
      );
    case "coin":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="8" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <path d="M14.5 10a2.5 2.5 0 0 0-5 0c0 2 3 2 3 4a2.5 2.5 0 0 1-5 0" />
        </svg>
      );
    case "piggybank":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M19 12h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2M15 5c-1.5 0-2.8 1.4-3 3-1-.6-2.2-1-3.5-1A9.5 9.5 0 0 0 3 14c0 3 2.5 5 5.5 5h7.5c2 0 4-1.5 4-4.5V11c0-3.3-2.7-6-6-6z" />
          <path d="M7 19v2M13 19v2M12 2v4" />
        </svg>
      );
    case "shoppingbag":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case "shoppingcart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      );
    case "scale":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 3v17M12 20H8m8 0h-8M3 7h18M6 7l-3 6h6l-3-6M18 7l-3 6h6l-3-6" />
        </svg>
      );
    case "receipt":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z" />
          <line x1="8" y1="8" x2="16" y2="8" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="8" y1="16" x2="12" y2="16" />
        </svg>
      );
    case "banknote":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
      );
    case "euro":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8a4 4 0 1 0 0 8M9 10h6M9 14h6" />
        </svg>
      );
    case "yen":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 12V7M12 12L9 7M12 12l3-5M9 15h6M9 19h6" />
        </svg>
      );
    case "pound":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8a4 4 0 0 0-7.3-2h0a4 4 0 0 0-.7 2V16h7M9 12h6" />
        </svg>
      );



    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
  }
};

export const Fallback2D: React.FC<Fallback2DProps> = ({ id, color = "#6366f1", theme, preset = "glass" }) => {
  const isDark = theme === "dark";
  const strokeColor = (color.toLowerCase() === "#ffffff" || color.toLowerCase() === "#fff") && !isDark ? "#475569" : color;

  const grad = getPremiumGradientColors(preset, strokeColor, theme || "dark");

  const strokeGradId = `stroke-grad-${id}`;
  const fillGradId = `fill-grad-${id}`;
  const shadowId = `shadow-${id}`;

  const cloner = makeEnhanceElement(strokeGradId, fillGradId, shadowId, strokeColor, grad.strokeWidth);

  if (id.startsWith("letter-")) {
    const letter = id.replace("letter-", "").toUpperCase();
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation={grad.shadowRadius} floodColor={grad.shadowColor} floodOpacity={isDark ? "0.6" : "0.35"} />
          </filter>
          <linearGradient id={strokeGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            {grad.strokeGradient.stops.map((stop, index) => (
              <stop key={index} offset={stop.offset} stopColor={stop.color} stopOpacity={stop.opacity ?? 1} />
            ))}
          </linearGradient>
          <linearGradient id={fillGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            {grad.fillGradient.stops.map((stop, index) => (
              <stop key={index} offset={stop.offset} stopColor={stop.color} stopOpacity={stop.opacity} />
            ))}
          </linearGradient>
          <radialGradient id={`plate-bg-gradient-${id}`} cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor={isDark ? "#1f2937" : "#ffffff"} stopOpacity={isDark ? 0.9 : 0.95} />
            <stop offset="100%" stopColor={isDark ? "#0b0f19" : "#f8fafc"} stopOpacity={isDark ? 0.7 : 0.8} />
          </radialGradient>
        </defs>

        <circle cx="12" cy="12" r="7" fill={grad.glowColor} style={{ filter: "blur(3.5px)" }} />

        <text
          x="12"
          y="18.5"
          textAnchor="middle"
          fontSize="18.5"
          fontWeight="900"
          fill={`url(#${strokeGradId})`}
          filter={`url(#${shadowId})`}
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-0.5"
        >
          {letter}
        </text>
      </svg>
    );
  }

  const rawElement = getRawSVG(id, strokeColor, isDark);
  if (!rawElement) return null;

  const enhancedChildren = React.Children.map(rawElement.props.children, cloner);

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-full h-full"
      style={{ overflow: "visible" }}
    >
      <defs>
        <filter id={shadowId} x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="1.8" stdDeviation={grad.shadowRadius} floodColor={grad.shadowColor} floodOpacity={isDark ? "0.6" : "0.35"} />
        </filter>
        <linearGradient id={strokeGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          {grad.strokeGradient.stops.map((stop, index) => (
            <stop key={index} offset={stop.offset} stopColor={stop.color} stopOpacity={stop.opacity ?? 1} />
          ))}
        </linearGradient>
        <linearGradient id={fillGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          {grad.fillGradient.stops.map((stop, index) => (
            <stop key={index} offset={stop.offset} stopColor={stop.color} stopOpacity={stop.opacity} />
          ))}
        </linearGradient>
      </defs>

      {/* Ambient inner glow behind the icon */}
      <circle cx="12" cy="12" r="7" fill={grad.glowColor} style={{ filter: "blur(3.5px)" }} />

      {/* The main icon paths group, scaled down slightly and centered to stand freely with drop shadows */}
      <g transform="translate(1.8, 1.8) scale(0.85)">
        {enhancedChildren}
      </g>
    </svg>
  );
};

