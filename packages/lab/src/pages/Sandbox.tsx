import React, { useState } from "react";
import { Lazy3DIcon } from "../components/Lazy3DIcon";
import { IconPreset } from "r3d-icons";
import { Layout, Grid, ShoppingBag, Sliders } from "lucide-react";
import { audioEngine } from "../utils/audio";

interface SandboxProps {
  theme: "light" | "dark";
}

type SandboxLayoutType = "dashboard" | "features" | "checkout";

const PRESETS: { id: IconPreset; label: string }[] = [
  { id: "glass", label: "Glass" },
  { id: "glassmorphism", label: "Glassmorphism" },
  { id: "metal", label: "Chrome" },
  { id: "clay", label: "Clay" },
  { id: "hologram", label: "Hologram" },
  { id: "gold", label: "Gold" },
  { id: "carbon", label: "Carbon" }
];

const COLORS = [
  { label: "Indigo / Amber", primary: "#6366f1", accent: "#fbbf24" },
  { label: "Emerald / Cyan", primary: "#10b981", accent: "#06b6d4" },
  { label: "Rose / Purple", primary: "#f43f5e", accent: "#a855f7" },
  { label: "Sky / Pink", primary: "#0ea5e9", accent: "#ec4899" },
  { label: "Monochrome / Dark", primary: "#3f3f46", accent: "#a1a1aa" }
];

export const Sandbox: React.FC<SandboxProps> = ({ theme }) => {
  const [activeLayout, setActiveLayout] = useState<SandboxLayoutType>("dashboard");
  const [dashboardTab, setDashboardTab] = useState<"dashboard" | "security" | "storage" | "inbox">(
    "dashboard"
  );
  const [activePreset, setActivePreset] = useState<IconPreset>("glass");
  const [primaryColor, setPrimaryColor] = useState("#6366f1");
  const [accentColor, setAccentColor] = useState("#fbbf24");
  const [spinSpeed, setSpinSpeed] = useState(1.0);
  const [floatHeight, setFloatHeight] = useState(0.8);
  const [particleSystem, setParticleSystem] = useState<"none" | "sparkles" | "dust" | "stars">(
    "none"
  );
  const [particleCount, setParticleCount] = useState(50);
  const [particleSpeed, setParticleSpeed] = useState(1.0);
  const [particleColor, setParticleColor] = useState("#ffffff");

  const handleLayoutChange = (layout: SandboxLayoutType) => {
    audioEngine.playClick();
    setActiveLayout(layout);
  };

  const handleDashboardTabChange = (tab: "dashboard" | "security" | "storage" | "inbox") => {
    audioEngine.playClick();
    setDashboardTab(tab);
  };

  const handlePresetChange = (preset: IconPreset) => {
    audioEngine.playClick();
    setActivePreset(preset);
  };

  const handlePaletteSelect = (p: string, a: string) => {
    audioEngine.playClick();
    setPrimaryColor(p);
    setAccentColor(a);
  };

  // Base icon props derived from current sandbox sliders
  const iconProps = {
    preset: activePreset,
    theme,
    color: primaryColor,
    accentColor,
    spinSpeed,
    floatHeight,
    interactive: true,
    particleSystem,
    particleCount,
    particleSpeed,
    particleColor
  };

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-6 relative">
      {/* Background ambient glow shapes */}
      <div className="absolute top-10 left-[10%] w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-[5%] w-80 h-80 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6 relative z-10 animate-page-fade">
        <h1 className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-zinc-900 via-indigo-950 to-zinc-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent uppercase">
          Layout Sandbox
        </h1>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 font-semibold leading-relaxed uppercase tracking-wider">
          Preview how our 3D components look and adjust dynamically inside real-world SaaS
          dashboards, product grids, and checkout templates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
        {/* Controls Toolbar */}
        <div className="lg:col-span-3 p-5 rounded-2xl border border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-2xl flex flex-col gap-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.15)] shadow-indigo-500/5">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-indigo-500">
            <Sliders size={16} />
            <span>Visualization Settings</span>
          </div>

          {/* Preset Picker */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Material Preset
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {PRESETS.map((p) => (
                <button
                  type="button"
                  key={p.id}
                  onClick={() => handlePresetChange(p.id)}
                  className={`px-2 py-1.5 rounded-lg border text-[9px] font-bold uppercase tracking-wider transition cursor-pointer text-center ${
                    activePreset === p.id
                      ? "border-indigo-500 bg-indigo-50/30 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 shadow-sm"
                      : "border-zinc-200/50 dark:border-white/5 bg-zinc-50/50 dark:bg-[#090b11]/30 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Preset Themes Swatches Grid */}
          <div className="flex flex-col gap-2 border-t border-zinc-200/50 dark:border-white/5 pt-3.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Preset Themes
            </label>
            <div className="grid grid-cols-5 gap-2">
              {COLORS.map((c, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handlePaletteSelect(c.primary, c.accent)}
                  title={c.label}
                  className={`w-9 h-9 rounded-xl border relative cursor-pointer transition flex items-center justify-center overflow-hidden ${
                    primaryColor === c.primary && accentColor === c.accent
                      ? "border-indigo-500 shadow-md shadow-indigo-500/20 scale-[1.05]"
                      : "border-zinc-200/50 dark:border-white/5 hover:border-zinc-350 dark:hover:border-zinc-700"
                  }`}
                >
                  <span
                    className="absolute inset-0 bg-gradient-to-br"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${c.primary} 0%, ${c.primary} 50%, ${c.accent} 50%, ${c.accent} 100%)`
                    }}
                  />
                  {primaryColor === c.primary && accentColor === c.accent && (
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white shadow" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Color Pickers */}
          <div className="grid grid-cols-2 gap-3 border-t border-zinc-200/50 dark:border-white/5 pt-3.5">
            <div className="flex flex-col gap-1.5 p-2 rounded-xl bg-zinc-50/30 dark:bg-zinc-950/10 border border-zinc-200/50 dark:border-white/5">
              <span className="text-[9px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                Primary
              </span>
              <div className="flex items-center gap-1.5">
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-6 h-6 rounded-lg border-0 cursor-pointer overflow-hidden bg-transparent"
                />
                <input
                  type="text"
                  value={primaryColor.toUpperCase()}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-full px-1 py-0.5 rounded border border-zinc-200/40 dark:border-white/5 bg-white/50 dark:bg-zinc-950 font-mono text-[9px] focus:outline-none uppercase"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 p-2 rounded-xl bg-zinc-50/30 dark:bg-zinc-950/10 border border-zinc-200/50 dark:border-white/5">
              <span className="text-[9px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                Accent
              </span>
              <div className="flex items-center gap-1.5">
                <input
                  type="color"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  className="w-6 h-6 rounded-lg border-0 cursor-pointer overflow-hidden bg-transparent"
                />
                <input
                  type="text"
                  value={accentColor.toUpperCase()}
                  onChange={(e) => setAccentColor(e.target.value)}
                  className="w-full px-1 py-0.5 rounded border border-zinc-200/40 dark:border-white/5 bg-white/50 dark:bg-zinc-950 font-mono text-[9px] focus:outline-none uppercase"
                />
              </div>
            </div>
          </div>

          {/* Range Sliders */}
          <div className="flex flex-col gap-3 border-t border-zinc-200/50 dark:border-white/5 pt-3.5">
            <div className="flex flex-col gap-1.5 p-2.5 rounded-xl bg-zinc-50/30 dark:bg-zinc-950/10 border border-zinc-200/50 dark:border-white/5">
              <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                <span>Spin Speed</span>
                <span>{spinSpeed.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0"
                max="3"
                step="0.2"
                value={spinSpeed}
                onChange={(e) => setSpinSpeed(parseFloat(e.target.value))}
                className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
            </div>

            <div className="flex flex-col gap-1.5 p-2.5 rounded-xl bg-zinc-50/30 dark:bg-zinc-950/10 border border-zinc-200/50 dark:border-white/5">
              <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                <span>Float Height</span>
                <span>{floatHeight.toFixed(1)}m</span>
              </div>
              <input
                type="range"
                min="0"
                max="2.5"
                step="0.2"
                value={floatHeight}
                onChange={(e) => setFloatHeight(parseFloat(e.target.value))}
                className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
            </div>
          </div>

          {/* Particle FX Controls */}
          <div className="flex flex-col gap-3 border-t border-zinc-200/50 dark:border-white/5 pt-3.5">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Particle System
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {(["none", "sparkles", "dust", "stars"] as const).map((sys) => (
                  <button
                    type="button"
                    key={sys}
                    onClick={() => {
                      audioEngine.playClick();
                      setParticleSystem(sys);
                    }}
                    className={`px-2 py-1.5 rounded-lg border text-[9px] font-bold uppercase tracking-wider transition cursor-pointer text-center ${
                      particleSystem === sys
                        ? "border-indigo-500 bg-indigo-50/30 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 shadow-sm"
                        : "border-zinc-200/50 dark:border-white/5 bg-zinc-50/50 dark:bg-[#090b11]/30 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {sys}
                  </button>
                ))}
              </div>
            </div>

            <div
              className={`flex flex-col gap-3 transition-opacity duration-300 ${
                particleSystem === "none"
                  ? "opacity-35 pointer-events-none select-none"
                  : "opacity-100"
              }`}
            >
              <div className="flex flex-col gap-1.5 p-2.5 rounded-xl bg-zinc-50/30 dark:bg-zinc-950/10 border border-zinc-200/50 dark:border-white/5">
                <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  <span>Particle Count</span>
                  <span>{particleCount}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="120"
                  step="5"
                  value={particleCount}
                  disabled={particleSystem === "none"}
                  onChange={(e) => setParticleCount(parseInt(e.target.value, 10))}
                  className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              <div className="flex flex-col gap-1.5 p-2.5 rounded-xl bg-zinc-50/30 dark:bg-zinc-950/10 border border-zinc-200/50 dark:border-white/5">
                <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  <span>Particle Speed</span>
                  <span>{particleSpeed.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="3"
                  step="0.2"
                  value={particleSpeed}
                  disabled={particleSystem === "none"}
                  onChange={(e) => setParticleSpeed(parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-zinc-50/30 dark:bg-zinc-950/10 border border-zinc-200/50 dark:border-white/5 text-[9px] font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                <span>Particle Color</span>
                <div className="flex items-center gap-1.5">
                  <input
                    type="color"
                    value={particleColor}
                    disabled={particleSystem === "none"}
                    onChange={(e) => setParticleColor(e.target.value)}
                    className="w-5 h-5 rounded border-0 cursor-pointer overflow-hidden bg-transparent"
                  />
                  <input
                    type="text"
                    value={particleColor.toUpperCase()}
                    disabled={particleSystem === "none"}
                    onChange={(e) => setParticleColor(e.target.value)}
                    className="w-14 px-1 py-0.5 rounded border border-zinc-200/40 dark:border-white/5 bg-white/50 dark:bg-zinc-950 font-mono text-[9px] focus:outline-none uppercase"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Canvas Area */}
        <div className="lg:col-span-9 flex flex-col gap-5">
          {/* Layout Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl border border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-[#0c0f1a]/45 backdrop-blur-md shadow-inner">
            <button
              type="button"
              onClick={() => handleLayoutChange("dashboard")}
              className={`flex items-center justify-center gap-2 flex-1 py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer select-none ${
                activeLayout === "dashboard"
                  ? "bg-white dark:bg-[#121624] text-indigo-500 dark:text-indigo-400 shadow"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <Layout size={14} />
              <span>SaaS Dashboard</span>
            </button>
            <button
              type="button"
              onClick={() => handleLayoutChange("features")}
              className={`flex items-center justify-center gap-2 flex-1 py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer select-none ${
                activeLayout === "features"
                  ? "bg-white dark:bg-[#121624] text-indigo-500 dark:text-indigo-400 shadow"
                  : "text-zinc-550 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <Grid size={14} />
              <span>Features Grid</span>
            </button>
            <button
              type="button"
              onClick={() => handleLayoutChange("checkout")}
              className={`flex items-center justify-center gap-2 flex-1 py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer select-none ${
                activeLayout === "checkout"
                  ? "bg-white dark:bg-[#121624] text-indigo-500 dark:text-indigo-400 shadow"
                  : "text-zinc-550 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <ShoppingBag size={14} />
              <span>Checkout Page</span>
            </button>
          </div>

          {/* Sandbox Mockup Component Canvas Container */}
          <div className="p-5 sm:p-6 min-h-[420px] rounded-2xl border border-zinc-200/50 dark:border-white/5 bg-white/30 dark:bg-zinc-950/15 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.25)] flex items-center justify-center relative overflow-hidden">
            {activeLayout === "dashboard" && (
              <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 animate-page-fade">
                {/* Dashboard Mock Sidebar */}
                <div className="md:col-span-1 p-3.5 rounded-xl border border-zinc-200/40 dark:border-white/5 bg-white/30 dark:bg-zinc-900/10 backdrop-blur-md flex flex-col gap-4 shadow-sm">
                  <div className="flex items-center gap-2 px-1">
                    <div className="w-6 h-6 rounded-md overflow-hidden bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                      <Lazy3DIcon name="SettingsIcon" {...iconProps} size={22} spinSpeed={0.5} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-zinc-900 dark:text-white">
                      Admin Portal
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 text-[11px] font-bold uppercase tracking-wider">
                    {/* Tab: Dashboard */}
                    <button
                      type="button"
                      onClick={() => handleDashboardTabChange("dashboard")}
                      className={`flex items-center gap-2 px-2.5 py-2.5 rounded-xl transition cursor-pointer select-none text-left w-full border ${
                        dashboardTab === "dashboard"
                          ? "bg-white/60 dark:bg-zinc-950/50 border-zinc-200/50 dark:border-white/5 text-indigo-500 dark:text-indigo-400 shadow-sm"
                          : "border-transparent text-zinc-400 dark:text-zinc-500 hover:bg-white/30 dark:hover:bg-white/5 hover:text-zinc-800 dark:hover:text-zinc-300"
                      }`}
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Lazy3DIcon name="GearIcon" {...iconProps} size={18} />
                      </div>
                      <span>Dashboard</span>
                    </button>

                    {/* Tab: Security */}
                    <button
                      type="button"
                      onClick={() => handleDashboardTabChange("security")}
                      className={`flex items-center gap-2 px-2.5 py-2.5 rounded-xl transition cursor-pointer select-none text-left w-full border ${
                        dashboardTab === "security"
                          ? "bg-white/60 dark:bg-zinc-950/50 border-zinc-200/50 dark:border-white/5 text-indigo-500 dark:text-indigo-400 shadow-sm"
                          : "border-transparent text-zinc-400 dark:text-zinc-500 hover:bg-white/30 dark:hover:bg-white/5 hover:text-zinc-800 dark:hover:text-zinc-300"
                      }`}
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Lazy3DIcon name="ShieldIcon" {...iconProps} size={18} />
                      </div>
                      <span>Security</span>
                    </button>

                    {/* Tab: Storage */}
                    <button
                      type="button"
                      onClick={() => handleDashboardTabChange("storage")}
                      className={`flex items-center gap-2 px-2.5 py-2.5 rounded-xl transition cursor-pointer select-none text-left w-full border ${
                        dashboardTab === "storage"
                          ? "bg-white/60 dark:bg-zinc-950/50 border-zinc-200/50 dark:border-white/5 text-indigo-500 dark:text-indigo-400 shadow-sm"
                          : "border-transparent text-zinc-400 dark:text-zinc-500 hover:bg-white/30 dark:hover:bg-white/5 hover:text-zinc-800 dark:hover:text-zinc-300"
                      }`}
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Lazy3DIcon name="DatabaseIcon" {...iconProps} size={18} />
                      </div>
                      <span>Storage</span>
                    </button>

                    {/* Tab: Inbox */}
                    <button
                      type="button"
                      onClick={() => handleDashboardTabChange("inbox")}
                      className={`flex items-center gap-2 px-2.5 py-2.5 rounded-xl transition cursor-pointer select-none text-left w-full border ${
                        dashboardTab === "inbox"
                          ? "bg-white/60 dark:bg-zinc-950/50 border-zinc-200/50 dark:border-white/5 text-indigo-500 dark:text-indigo-400 shadow-sm"
                          : "border-transparent text-zinc-400 dark:text-zinc-500 hover:bg-white/30 dark:hover:bg-white/5 hover:text-zinc-800 dark:hover:text-zinc-300"
                      }`}
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Lazy3DIcon name="MailIcon" {...iconProps} size={18} />
                      </div>
                      <span>Inbox</span>
                    </button>
                  </div>
                </div>

                {/* Dashboard Content Grid */}
                <div className="md:col-span-3 flex flex-col gap-4">
                  {dashboardTab === "dashboard" && (
                    <div className="flex flex-col gap-4 animate-page-fade">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-xl border border-cyan-500/25 dark:border-cyan-500/15 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex items-center justify-between gap-3 shadow-md shadow-cyan-500/5">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none">
                              CPU Cluster Load
                            </span>
                            <span className="text-xl font-black text-cyan-600 dark:text-cyan-400">
                              74.8%
                            </span>
                          </div>
                          <div className="w-12 h-12 bg-cyan-500/5 dark:bg-[#07090f] border border-cyan-500/20 dark:border-cyan-500/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <Lazy3DIcon name="CpuIcon" {...iconProps} size={36} />
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl border border-amber-500/25 dark:border-amber-500/15 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex items-center justify-between gap-3 shadow-md shadow-amber-500/5">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none">
                              Storage Used
                            </span>
                            <span className="text-xl font-black text-amber-600 dark:text-amber-400">
                              1.42 TB
                            </span>
                          </div>
                          <div className="w-12 h-12 bg-amber-500/5 dark:bg-[#07090f] border border-amber-500/20 dark:border-amber-500/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <Lazy3DIcon name="DatabaseIcon" {...iconProps} size={36} />
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl border border-emerald-500/25 dark:border-emerald-500/15 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex items-center justify-between gap-3 shadow-md shadow-emerald-500/5">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none">
                              Firewall Blocks
                            </span>
                            <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">
                              240/hr
                            </span>
                          </div>
                          <div className="w-12 h-12 bg-emerald-500/5 dark:bg-[#07090f] border border-emerald-500/20 dark:border-emerald-500/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <Lazy3DIcon name="ShieldIcon" {...iconProps} size={36} />
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl border border-purple-500/25 dark:border-purple-500/15 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex items-center justify-between gap-3 shadow-md shadow-purple-500/5">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none">
                              API Connections
                            </span>
                            <span className="text-xl font-black text-purple-600 dark:text-purple-400">
                              1,050M
                            </span>
                          </div>
                          <div className="w-12 h-12 bg-purple-500/5 dark:bg-[#07090f] border border-purple-500/20 dark:border-purple-500/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <Lazy3DIcon name="NetworkIcon" {...iconProps} size={36} />
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex flex-col gap-3 shadow-md">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                            Network Server Nodes
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[8px] font-black uppercase tracking-wider border border-emerald-500/20">
                            Online
                          </span>
                        </div>
                        <div className="h-20 w-full border border-dashed border-indigo-500/25 dark:border-white/5 rounded-lg flex items-center justify-center text-[10px] font-semibold text-zinc-400 tracking-wider bg-zinc-950/10 relative overflow-hidden">
                          <span className="relative z-10 uppercase tracking-wider text-[9px] font-bold">
                            Telemetry Analytics Simulation Active
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  )}

                  {dashboardTab === "security" && (
                    <div className="flex flex-col gap-4 animate-page-fade">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-xl border border-red-500/25 dark:border-red-500/15 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex items-center justify-between gap-3 shadow-md shadow-red-500/5">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none">
                              Active Threats
                            </span>
                            <span className="text-xl font-black text-red-600 dark:text-red-400">
                              0
                            </span>
                          </div>
                          <div className="w-12 h-12 bg-red-500/5 dark:bg-[#07090f] border border-red-500/20 dark:border-red-500/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <Lazy3DIcon name="ShieldIcon" {...iconProps} size={36} />
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl border border-indigo-500/25 dark:border-indigo-500/15 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex items-center justify-between gap-3 shadow-md shadow-indigo-500/5">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none">
                              SSL Certificate
                            </span>
                            <span className="text-xl font-black text-indigo-600 dark:text-indigo-400">
                              Valid
                            </span>
                          </div>
                          <div className="w-12 h-12 bg-indigo-500/5 dark:bg-[#07090f] border border-indigo-500/20 dark:border-indigo-500/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <Lazy3DIcon name="KeyIcon" {...iconProps} size={36} />
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex flex-col gap-3 shadow-md">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                            Security Shield Status
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[8px] font-black uppercase tracking-wider border border-emerald-500/20">
                            Secured
                          </span>
                        </div>
                        <div className="h-20 w-full border border-dashed border-red-500/25 dark:border-white/5 rounded-lg flex items-center justify-center text-[10px] font-semibold text-zinc-400 tracking-wider bg-zinc-950/10 relative overflow-hidden p-4 text-center">
                          <span className="relative z-10 uppercase tracking-wider text-[9px] font-bold leading-normal">
                            All systems secure. Threat detection shields fully operational.
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-transparent pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  )}

                  {dashboardTab === "storage" && (
                    <div className="flex flex-col gap-4 animate-page-fade">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-xl border border-amber-500/25 dark:border-amber-500/15 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex items-center justify-between gap-3 shadow-md shadow-amber-500/5">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none">
                              Available Volume
                            </span>
                            <span className="text-xl font-black text-amber-600 dark:text-amber-400">
                              580 GB
                            </span>
                          </div>
                          <div className="w-12 h-12 bg-amber-500/5 dark:bg-[#07090f] border border-amber-500/20 dark:border-amber-500/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <Lazy3DIcon name="DatabaseIcon" {...iconProps} size={36} />
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl border border-emerald-500/25 dark:border-emerald-500/15 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex items-center justify-between gap-3 shadow-md shadow-emerald-500/5">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none">
                              R/W Throughput
                            </span>
                            <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">
                              125 MB/s
                            </span>
                          </div>
                          <div className="w-12 h-12 bg-emerald-500/5 dark:bg-[#07090f] border border-emerald-500/20 dark:border-emerald-500/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <Lazy3DIcon name="CloudIcon" {...iconProps} size={36} />
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex flex-col gap-3 shadow-md">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                            Storage Optimizations
                          </span>
                          <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-500 text-[8px] font-black uppercase tracking-wider border border-indigo-500/20 animate-pulse">
                            Replicating
                          </span>
                        </div>
                        <div className="h-20 w-full border border-dashed border-amber-500/25 dark:border-white/5 rounded-lg flex items-center justify-center text-[10px] font-semibold text-zinc-400 tracking-wider bg-zinc-950/10 relative overflow-hidden p-4 text-center">
                          <span className="relative z-10 uppercase tracking-wider text-[9px] font-bold leading-normal">
                            Defragmentation & replication queues running in cluster region.
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  )}

                  {dashboardTab === "inbox" && (
                    <div className="flex flex-col gap-4 animate-page-fade">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-xl border border-indigo-500/25 dark:border-indigo-500/15 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex items-center justify-between gap-3 shadow-md shadow-indigo-500/5">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none">
                              Unread Messages
                            </span>
                            <span className="text-xl font-black text-indigo-600 dark:text-indigo-400">
                              3
                            </span>
                          </div>
                          <div className="w-12 h-12 bg-indigo-500/5 dark:bg-[#07090f] border border-indigo-500/20 dark:border-indigo-500/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <Lazy3DIcon name="MailIcon" {...iconProps} size={36} />
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl border border-purple-500/25 dark:border-purple-500/15 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex items-center justify-between gap-3 shadow-md shadow-purple-500/5">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none">
                              Support Tickets
                            </span>
                            <span className="text-xl font-black text-purple-600 dark:text-purple-400">
                              2 Active
                            </span>
                          </div>
                          <div className="w-12 h-12 bg-purple-500/5 dark:bg-[#07090f] border border-purple-500/20 dark:border-purple-500/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <Lazy3DIcon name="MessageSquare" size={36} />
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex flex-col gap-3 shadow-md">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                            Inbox Server Dispatch
                          </span>
                          <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-500 text-[8px] font-black uppercase tracking-wider border border-purple-500/20">
                            Synced
                          </span>
                        </div>
                        <div className="h-20 w-full border border-dashed border-purple-500/25 dark:border-white/5 rounded-lg flex items-center justify-center text-[10px] font-semibold text-zinc-400 tracking-wider bg-zinc-950/10 relative overflow-hidden p-4 text-center">
                          <span className="relative z-10 uppercase tracking-wider text-[9px] font-bold leading-normal">
                            Synchronized with background mail servers. 3 messages pending response.
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeLayout === "features" && (
              <div className="w-full flex flex-col gap-4 animate-page-fade">
                {/* 3-Column Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Feature 1 */}
                  <div className="p-4.5 rounded-xl border border-indigo-500/25 dark:border-indigo-500/15 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex flex-col gap-3 items-center text-center shadow-md shadow-indigo-500/5">
                    <div className="w-16 h-16 bg-indigo-500/5 dark:bg-[#07090f] border border-indigo-500/20 dark:border-indigo-500/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <Lazy3DIcon name="CloudIcon" {...iconProps} size={52} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-xs font-black text-zinc-900 dark:text-white uppercase tracking-wider">
                        SaaS Cloud Infrastructure
                      </h4>
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                        Seamlessly sync active nodes, telemetry database endpoints, and storage
                        profiles with auto-scaling models.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="p-4.5 rounded-xl border border-purple-500/25 dark:border-purple-500/15 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex flex-col gap-3 items-center text-center shadow-md shadow-purple-500/5">
                    <div className="w-16 h-16 bg-purple-500/5 dark:bg-[#07090f] border border-purple-500/20 dark:border-purple-500/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <Lazy3DIcon name="CpuIcon" {...iconProps} size={52} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-xs font-black text-zinc-900 dark:text-white uppercase tracking-wider">
                        Hardware Offloading
                      </h4>
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                        Leverage customized system architecture triggers to minimize overhead
                        latency and accelerate computations.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="p-4.5 rounded-xl border border-emerald-500/25 dark:border-emerald-500/15 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex flex-col gap-3 items-center text-center shadow-md shadow-emerald-500/5">
                    <div className="w-16 h-16 bg-emerald-500/5 dark:bg-[#07090f] border border-emerald-500/20 dark:border-emerald-500/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <Lazy3DIcon name="ShieldIcon" {...iconProps} size={52} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-xs font-black text-zinc-900 dark:text-white uppercase tracking-wider">
                        Encrypted Security Vault
                      </h4>
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                        Encrypt credentials, sensitive files, and database nodes with military-grade
                        transport layer encryptions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Action Card */}
                <div className="p-4 rounded-xl border border-zinc-200/50 dark:border-white/5 bg-zinc-100/30 dark:bg-[#07090f]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex-shrink-0">
                      <Lazy3DIcon name="RocketIcon" {...iconProps} size={36} />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-black text-zinc-900 dark:text-white uppercase tracking-wider">
                        Boost Deployment Speed
                      </span>
                      <span className="text-[10px] font-medium text-zinc-500">
                        Initialize layouts with optimized 3D component renders instantly.
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      audioEngine.playClick();
                      alert("Integration layout configured!");
                    }}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/10 hover:scale-[1.03] transition cursor-pointer"
                  >
                    Deploy Sandbox Template
                  </button>
                </div>
              </div>
            )}

            {activeLayout === "checkout" && (
              <div className="w-full max-w-md mx-auto border border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-2xl rounded-2xl p-5 shadow-lg shadow-indigo-500/5 flex flex-col gap-4 animate-page-fade">
                {/* Checkout Header */}
                <div className="flex items-center gap-3 border-b border-zinc-200/50 dark:border-white/5 pb-3">
                  <div className="w-10 h-10 bg-indigo-500/5 dark:bg-[#07090f] border border-indigo-500/20 dark:border-indigo-500/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <Lazy3DIcon name="WalletIcon" {...iconProps} size={32} />
                  </div>
                  <div className="flex flex-col text-left">
                    <h3 className="text-xs font-black text-zinc-900 dark:text-white uppercase tracking-wider">
                      Purchase Order Summary
                    </h3>
                    <span className="text-[9px] font-bold text-indigo-500 uppercase tracking-wider">
                      Enterprise Developer License
                    </span>
                  </div>
                </div>

                {/* Bill Items */}
                <div className="flex flex-col gap-2.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  <div className="flex justify-between items-center bg-white/60 dark:bg-zinc-950/40 p-2.5 rounded-xl border border-zinc-200/40 dark:border-white/5 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Lazy3DIcon name="PlusIcon" {...iconProps} size={16} />
                      </div>
                      <span>Enterprise Mesh Assets</span>
                    </div>
                    <span className="text-zinc-900 dark:text-white font-black">$79.00</span>
                  </div>

                  <div className="flex justify-between items-center bg-white/60 dark:bg-zinc-950/40 p-2.5 rounded-xl border border-zinc-200/40 dark:border-white/5 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Lazy3DIcon name="PlusIcon" {...iconProps} size={16} />
                      </div>
                      <span>Cloud Telemetry Server</span>
                    </div>
                    <span className="text-zinc-900 dark:text-white font-black">$20.00</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center border-t border-zinc-200/50 dark:border-white/5 pt-3 px-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">
                    Total Amount Due
                  </span>
                  <span className="text-lg font-black text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text">
                    $99.00
                  </span>
                </div>

                {/* Action button */}
                <button
                  type="button"
                  onClick={() => {
                    audioEngine.playClick();
                    alert("Simulated sandbox payment complete!");
                  }}
                  className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <div className="w-4 h-4">
                    <Lazy3DIcon
                      name="WalletIcon"
                      preset="metal"
                      color="#ffffff"
                      size={16}
                      interactive={false}
                    />
                  </div>
                  <span>Process Secure Payment</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
