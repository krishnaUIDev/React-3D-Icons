import React, { useState } from "react";
import { Lazy3DIcon } from "../components/Lazy3DIcon";
import { IconPreset } from "r3d-icons";
import { Layout, Grid, ShoppingBag, Sliders } from "lucide-react";
import { audioEngine } from "../utils/audio";

interface SandboxProps {
  theme: "light" | "dark";
}

type SandboxLayoutType = "dashboard" | "features" | "checkout";

export const Sandbox: React.FC<SandboxProps> = ({ theme }) => {
  const [activeLayout, setActiveLayout] = useState<SandboxLayoutType>("dashboard");
  const [activePreset, setActivePreset] = useState<IconPreset>("glass");
  const [primaryColor, setPrimaryColor] = useState("#6366f1");
  const [accentColor, setAccentColor] = useState("#fbbf24");
  const [spinSpeed, setSpinSpeed] = useState(1.0);
  const [floatHeight, setFloatHeight] = useState(0.8);

  const presets: { id: IconPreset; label: string }[] = [
    { id: "glass", label: "Glass" },
    { id: "glassmorphism", label: "Glassmorphism" },
    { id: "metal", label: "Chrome" },
    { id: "clay", label: "Clay" },
    { id: "hologram", label: "Hologram" },
    { id: "gold", label: "Gold" },
    { id: "carbon", label: "Carbon" }
  ];

  const colors = [
    { label: "Indigo / Amber", primary: "#6366f1", accent: "#fbbf24" },
    { label: "Emerald / Cyan", primary: "#10b981", accent: "#06b6d4" },
    { label: "Rose / Purple", primary: "#f43f5e", accent: "#a855f7" },
    { label: "Sky / Pink", primary: "#0ea5e9", accent: "#ec4899" },
    { label: "Monochrome / Dark", primary: "#3f3f46", accent: "#a1a1aa" }
  ];

  const handleLayoutChange = (layout: SandboxLayoutType) => {
    audioEngine.playClick();
    setActiveLayout(layout);
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
    interactive: true
  };

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-10 relative">
      {/* Background ambient glow shapes */}
      <div className="absolute top-10 left-[10%] w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-[5%] w-80 h-80 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-900 via-indigo-950 to-zinc-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent">
          Layout Sandbox
        </h1>
        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
          Preview how our 3D components look and adjust dynamically inside real-world SaaS
          dashboards, product grids, and checkout templates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start relative z-10">
        {/* Controls Toolbar */}
        <div className="lg:col-span-1 p-5 rounded-3xl border border-zinc-200/50 dark:border-white/5 bg-white/45 dark:bg-[#0e111a]/45 backdrop-blur-md flex flex-col gap-6 shadow-xl shadow-zinc-500/5">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-indigo-500">
            <Sliders size={16} />
            <span>Sandbox Controls</span>
          </div>

          {/* Preset Picker */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Material Preset
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {presets.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handlePresetChange(p.id)}
                  className={`px-2 py-1.5 rounded-lg border text-[9px] font-bold uppercase tracking-wider transition cursor-pointer text-center ${
                    activePreset === p.id
                      ? "border-indigo-500 bg-indigo-50/30 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 shadow-sm"
                      : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#090b11]/30 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Color Palette Row */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Preset Themes
            </label>
            <div className="flex flex-col gap-1.5">
              {colors.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePaletteSelect(c.primary, c.accent)}
                  className={`flex items-center justify-between p-2 rounded-xl border text-[10px] font-medium transition cursor-pointer ${
                    primaryColor === c.primary && accentColor === c.accent
                      ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/10 text-indigo-600 dark:text-indigo-400"
                      : "border-zinc-150 dark:border-zinc-850 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 text-zinc-650 dark:text-zinc-350"
                  }`}
                >
                  <span>{c.label}</span>
                  <div className="flex items-center gap-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: c.primary }}
                    />
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: c.accent }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Color Picker Inputs */}
          <div className="flex flex-col gap-3.5 border-t border-zinc-200/60 dark:border-zinc-800/80 pt-4">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
              <span className="text-zinc-500">Primary Color</span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-16 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 font-mono text-[9px] focus:outline-none"
                />
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-5 h-5 rounded border-0 cursor-pointer overflow-hidden"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
              <span className="text-zinc-500">Accent Color</span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  className="w-16 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 font-mono text-[9px] focus:outline-none"
                />
                <input
                  type="color"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  className="w-5 h-5 rounded border-0 cursor-pointer overflow-hidden"
                />
              </div>
            </div>
          </div>

          {/* Range Sliders */}
          <div className="flex flex-col gap-4 border-t border-zinc-200/60 dark:border-zinc-800/80 pt-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
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

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
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
        </div>

        {/* Preview Canvas Area */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          {/* Layout Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl border border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-[#0c0f1a]/45 backdrop-blur-md shadow-inner">
            <button
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
              onClick={() => handleLayoutChange("features")}
              className={`flex items-center justify-center gap-2 flex-1 py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer select-none ${
                activeLayout === "features"
                  ? "bg-white dark:bg-[#121624] text-indigo-500 dark:text-indigo-400 shadow"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <Grid size={14} />
              <span>Features Grid</span>
            </button>
            <button
              onClick={() => handleLayoutChange("checkout")}
              className={`flex items-center justify-center gap-2 flex-1 py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer select-none ${
                activeLayout === "checkout"
                  ? "bg-white dark:bg-[#121624] text-indigo-500 dark:text-indigo-400 shadow"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <ShoppingBag size={14} />
              <span>Checkout Page</span>
            </button>
          </div>

          {/* Sandbox Mockup Component Canvas Container */}
          <div className="p-6 sm:p-8 min-h-[500px] rounded-3xl border border-zinc-200 dark:border-zinc-850 bg-white/55 dark:bg-[#0c0e17]/55 backdrop-blur-xl shadow-xl flex items-center justify-center">
            {activeLayout === "dashboard" && (
              <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 animate-page-fade">
                {/* Dashboard Mock Sidebar */}
                <div className="md:col-span-1 p-4 rounded-2xl border border-zinc-150 dark:border-zinc-850 bg-zinc-50/50 dark:bg-zinc-950/20 backdrop-blur-md flex flex-col gap-5">
                  <div className="flex items-center gap-2 px-1">
                    <div className="w-6 h-6 rounded-md overflow-hidden bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                      <Lazy3DIcon name="SettingsIcon" {...iconProps} size={22} spinSpeed={0.5} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-zinc-900 dark:text-white">
                      Admin Portal
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    <div className="flex items-center gap-2 px-2.5 py-2.5 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-150 dark:border-zinc-850 text-indigo-500 dark:text-indigo-400">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Lazy3DIcon name="GearIcon" {...iconProps} size={18} />
                      </div>
                      <span>Dashboard</span>
                    </div>

                    <div className="flex items-center gap-2 px-2.5 py-2.5 rounded-xl hover:bg-zinc-50/60 dark:hover:bg-zinc-900/20 hover:text-zinc-800 dark:hover:text-zinc-300 transition cursor-pointer">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Lazy3DIcon name="ShieldIcon" {...iconProps} size={18} />
                      </div>
                      <span>Security</span>
                    </div>

                    <div className="flex items-center gap-2 px-2.5 py-2.5 rounded-xl hover:bg-zinc-50/60 dark:hover:bg-zinc-900/20 hover:text-zinc-800 dark:hover:text-zinc-300 transition cursor-pointer">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Lazy3DIcon name="DatabaseIcon" {...iconProps} size={18} />
                      </div>
                      <span>Storage</span>
                    </div>

                    <div className="flex items-center gap-2 px-2.5 py-2.5 rounded-xl hover:bg-zinc-50/60 dark:hover:bg-zinc-900/20 hover:text-zinc-800 dark:hover:text-zinc-300 transition cursor-pointer">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Lazy3DIcon name="MailIcon" {...iconProps} size={18} />
                      </div>
                      <span>Inbox</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content Grid */}
                <div className="md:col-span-3 flex flex-col gap-6">
                  {/* Grid cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Card 1 */}
                    <div className="p-5 rounded-2xl border border-zinc-150 dark:border-zinc-850 bg-zinc-50/30 dark:bg-zinc-950/10 flex items-center justify-between gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none">
                          CPU Cluster Load
                        </span>
                        <span className="text-2xl font-black text-zinc-900 dark:text-white">
                          74.8%
                        </span>
                      </div>
                      <div className="w-14 h-14 bg-zinc-50 dark:bg-[#07090f] border border-zinc-150 dark:border-zinc-850 rounded-xl flex items-center justify-center relative overflow-hidden">
                        <Lazy3DIcon name="CpuIcon" {...iconProps} size={48} />
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-5 rounded-2xl border border-zinc-150 dark:border-zinc-850 bg-zinc-50/30 dark:bg-zinc-950/10 flex items-center justify-between gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none">
                          Storage Used
                        </span>
                        <span className="text-2xl font-black text-zinc-900 dark:text-white">
                          1.42 TB
                        </span>
                      </div>
                      <div className="w-14 h-14 bg-zinc-50 dark:bg-[#07090f] border border-zinc-150 dark:border-zinc-850 rounded-xl flex items-center justify-center relative overflow-hidden">
                        <Lazy3DIcon name="DatabaseIcon" {...iconProps} size={48} />
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="p-5 rounded-2xl border border-zinc-150 dark:border-zinc-850 bg-zinc-50/30 dark:bg-zinc-950/10 flex items-center justify-between gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none">
                          Firewall Blocks
                        </span>
                        <span className="text-2xl font-black text-zinc-900 dark:text-white">
                          240/hr
                        </span>
                      </div>
                      <div className="w-14 h-14 bg-zinc-50 dark:bg-[#07090f] border border-zinc-150 dark:border-zinc-850 rounded-xl flex items-center justify-center relative overflow-hidden">
                        <Lazy3DIcon name="ShieldIcon" {...iconProps} size={48} />
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="p-5 rounded-2xl border border-zinc-150 dark:border-zinc-850 bg-zinc-50/30 dark:bg-zinc-950/10 flex items-center justify-between gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none">
                          API Connections
                        </span>
                        <span className="text-2xl font-black text-zinc-900 dark:text-white">
                          1,050M
                        </span>
                      </div>
                      <div className="w-14 h-14 bg-zinc-50 dark:bg-[#07090f] border border-zinc-150 dark:border-zinc-850 rounded-xl flex items-center justify-center relative overflow-hidden">
                        <Lazy3DIcon name="NetworkIcon" {...iconProps} size={48} />
                      </div>
                    </div>
                  </div>

                  {/* Large Status Chart Panel */}
                  <div className="p-6 rounded-2xl border border-zinc-150 dark:border-zinc-850 bg-zinc-50/30 dark:bg-zinc-950/10 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                        Network Server Nodes
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[8px] font-black uppercase tracking-wider border border-emerald-500/20">
                        Online
                      </span>
                    </div>
                    <div className="h-28 w-full border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-center text-[10px] font-semibold text-zinc-400 tracking-wider">
                      Dynamic layout telemetry simulation chart block.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeLayout === "features" && (
              <div className="w-full flex flex-col gap-6 animate-page-fade">
                {/* 3-Column Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Feature 1 */}
                  <div className="p-6 rounded-2xl border border-zinc-150 dark:border-zinc-850 bg-zinc-50/20 dark:bg-zinc-950/5 flex flex-col gap-4 items-center text-center">
                    <div className="w-20 h-20 bg-zinc-50 dark:bg-[#07090f] border border-zinc-150 dark:border-zinc-850 rounded-3xl flex items-center justify-center relative overflow-hidden">
                      <Lazy3DIcon name="CloudIcon" {...iconProps} size={70} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-extrabold text-zinc-900 dark:text-white uppercase tracking-wider">
                        SaaS Cloud Infrastructure
                      </h4>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                        Seamlessly sync active nodes, telemetry database endpoints, and storage
                        profiles with auto-scaling models.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="p-6 rounded-2xl border border-zinc-150 dark:border-zinc-850 bg-zinc-50/20 dark:bg-zinc-950/5 flex flex-col gap-4 items-center text-center">
                    <div className="w-20 h-20 bg-zinc-50 dark:bg-[#07090f] border border-zinc-150 dark:border-zinc-850 rounded-3xl flex items-center justify-center relative overflow-hidden">
                      <Lazy3DIcon name="CpuIcon" {...iconProps} size={70} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-extrabold text-zinc-900 dark:text-white uppercase tracking-wider">
                        Hardware Offloading
                      </h4>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                        Leverage customized system architecture triggers to minimize overhead
                        latency and accelerate computations.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="p-6 rounded-2xl border border-zinc-150 dark:border-zinc-850 bg-zinc-50/20 dark:bg-zinc-950/5 flex flex-col gap-4 items-center text-center">
                    <div className="w-20 h-20 bg-zinc-50 dark:bg-[#07090f] border border-zinc-150 dark:border-zinc-850 rounded-3xl flex items-center justify-center relative overflow-hidden">
                      <Lazy3DIcon name="ShieldIcon" {...iconProps} size={70} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-extrabold text-zinc-900 dark:text-white uppercase tracking-wider">
                        Encrypted Security Vault
                      </h4>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                        Encrypt credentials, sensitive files, and database nodes with military-grade
                        transport layer encryptions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Action Card */}
                <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-850 bg-zinc-100/30 dark:bg-[#07090f]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
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
              <div className="w-full max-w-xl mx-auto border border-zinc-200 dark:border-zinc-850 bg-white/70 dark:bg-[#080a12]/70 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col gap-6 animate-page-fade">
                {/* Checkout Header */}
                <div className="flex items-center gap-3 border-b border-zinc-150 dark:border-zinc-850 pb-4">
                  <div className="w-12 h-12 bg-zinc-50 dark:bg-[#07090f] border border-zinc-150 dark:border-zinc-850 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <Lazy3DIcon name="WalletIcon" {...iconProps} size={40} />
                  </div>
                  <div className="flex flex-col text-left">
                    <h3 className="text-sm font-extrabold text-zinc-900 dark:text-white uppercase tracking-wider">
                      Purchase Order Summary
                    </h3>
                    <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider">
                      Enterprise Developer License
                    </span>
                  </div>
                </div>

                {/* Bill Items */}
                <div className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                  <div className="flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-900/30 p-3 rounded-xl border border-zinc-150 dark:border-zinc-850">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <Lazy3DIcon name="PlusIcon" {...iconProps} size={20} />
                      </div>
                      <span>Enterprise Mesh Assets</span>
                    </div>
                    <span className="text-zinc-900 dark:text-white">$79.00</span>
                  </div>

                  <div className="flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-900/30 p-3 rounded-xl border border-zinc-150 dark:border-zinc-850">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <Lazy3DIcon name="PlusIcon" {...iconProps} size={20} />
                      </div>
                      <span>Cloud Telemetry Server</span>
                    </div>
                    <span className="text-zinc-900 dark:text-white">$20.00</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center border-t border-zinc-200 dark:border-zinc-850 pt-4 px-1">
                  <span className="text-xs font-black uppercase tracking-wider text-zinc-400">
                    Total Amount Due
                  </span>
                  <span className="text-xl font-black text-zinc-900 dark:text-white">$99.00</span>
                </div>

                {/* Action button */}
                <button
                  onClick={() => {
                    audioEngine.playClick();
                    alert("Simulated sandbox payment complete!");
                  }}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-md transition hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <div className="w-5 h-5">
                    <Lazy3DIcon
                      name="WalletIcon"
                      preset="metal"
                      color="#ffffff"
                      size={20}
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
