import React, { useState, useEffect } from "react";
import { useRouter } from "../router/Router";
import { ICONS_REGISTRY } from "./Customize";
import { Trash2, ExternalLink, Copy, Check, Download, Compass, Sparkles } from "lucide-react";

interface SavedProps {
  theme: "light" | "dark";
}

export const Saved: React.FC<SavedProps> = ({ theme }) => {
  const { navigate } = useRouter();
  const [presets, setPresets] = useState<any[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Load presets from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("r3d_saved_presets");
      if (stored) {
        setPresets(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load saved presets from localStorage", e);
    }
  }, []);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = presets.filter((p) => p.id !== id);
    setPresets(updated);
    localStorage.setItem("r3d_saved_presets", JSON.stringify(updated));
  };

  const handleCopyLink = (preset: any, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const targetIconId = preset.iconId || "shield";
      const data = {
        iconId: targetIconId,
        preset: preset.preset,
        angle: preset.angle,
        renderMode: "3d",
        color: preset.color,
        accentColor: preset.accentColor,
        spinSpeed: preset.spinSpeed,
        floatHeight: preset.floatHeight,
        environment: preset.environment,
        textureType: preset.textureType,
        emissivePulseSpeed: preset.emissivePulseSpeed,
        emissivePulseIntensity: preset.emissivePulseIntensity,
        lightingPreset: preset.lightingPreset,
        customMaterial: preset.customMaterial
      };
      const serialized = btoa(encodeURIComponent(JSON.stringify(data)));
      const shareUrl = `${window.location.origin}${window.location.pathname}?share=${serialized}#/icons/${preset.color.replace("#", "")}-${targetIconId}`;

      navigator.clipboard.writeText(shareUrl);
      setCopiedId(preset.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy share url", err);
    }
  };

  const handleLoadWorkbench = (preset: any) => {
    const targetIconId = preset.iconId || "shield";
    const data = {
      iconId: targetIconId,
      preset: preset.preset,
      angle: preset.angle,
      renderMode: "3d",
      color: preset.color,
      accentColor: preset.accentColor,
      spinSpeed: preset.spinSpeed,
      floatHeight: preset.floatHeight,
      environment: preset.environment,
      textureType: preset.textureType,
      emissivePulseSpeed: preset.emissivePulseSpeed,
      emissivePulseIntensity: preset.emissivePulseIntensity,
      lightingPreset: preset.lightingPreset,
      customMaterial: preset.customMaterial
    };
    const serialized = btoa(encodeURIComponent(JSON.stringify(data)));
    window.location.href = `${window.location.origin}${window.location.pathname}?share=${serialized}#/icons/${preset.color.replace("#", "")}-${targetIconId}`;
  };

  const handleDownloadTSX = (preset: any, iconName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const componentName = `Custom${iconName.replace("Icon", "")}`;
    const customMatStr =
      preset.customMaterial && Object.keys(preset.customMaterial).length > 0
        ? `const customMaterial = ${JSON.stringify(preset.customMaterial, null, 2).replace(/"([^"]+)":/g, "$1:")};\n\n  `
        : "";

    const fileContent = `import React from "react";
import { ${iconName} } from "r3d-icons";

export function ${componentName}(props: React.ComponentProps<typeof ${iconName}>) {
  ${customMatStr}return (
    <${iconName}
      preset="${preset.preset}"
      angle="${preset.angle}"
      environment="${preset.environment}"
      variant="3d"
      color="${preset.color}"
      accentColor="${preset.accentColor}"
      spinSpeed={${preset.spinSpeed}}
      floatHeight={${preset.floatHeight}}
      interactive={true}
      textureType="${preset.textureType}"
      emissivePulseSpeed={${preset.emissivePulseSpeed}}
      emissivePulseIntensity={${preset.emissivePulseIntensity}}
      lightingPreset="${preset.lightingPreset}"
      ${preset.customMaterial && Object.keys(preset.customMaterial).length > 0 ? "customMaterial={customMaterial}" : ""}
      {...props}
    />
  );
}
`;
    const blob = new Blob([fileContent], { type: "text/typescript" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${componentName}.tsx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex-grow">
      {/* Page Header */}
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-700 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
          My Saved Presets
        </h1>
        <p className="text-sm text-zinc-550 dark:text-zinc-450 max-w-xl font-medium leading-relaxed">
          Manage, share, and export the custom 3D physical material configurations you created in
          the Customizer laboratory.
        </p>
      </div>

      {presets.length === 0 ? (
        /* Empty State */
        <div className="flex flex-col items-center justify-center p-12 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-[#0c0f17]/40 text-center min-h-[45vh] shadow-sm animate-page-fade">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/5 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 border border-indigo-500/15">
            <Sparkles size={28} />
          </div>
          <h3 className="font-extrabold text-lg text-zinc-800 dark:text-zinc-200 mb-2">
            No Saved Presets Yet
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 max-w-xs leading-relaxed mb-6 font-medium">
            Jump into the Customizer laboratory, tweak material attributes, lighting parameters, and
            click "Save Preset" under the sidebar tab.
          </p>
          <button
            onClick={() => navigate("customize")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-indigo-600/20 cursor-pointer active:scale-95 transition"
          >
            <Compass size={14} />
            <span>Open Customizer</span>
          </button>
        </div>
      ) : (
        /* Grid of Custom Presets */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-page-fade">
          {presets.map((preset) => {
            const registryEntry =
              ICONS_REGISTRY.find((item) => item.id === (preset.iconId || "shield")) ||
              ICONS_REGISTRY[0];
            const Component = registryEntry.Component;
            const iconName = registryEntry.name;

            return (
              <div
                key={preset.id}
                onClick={() => handleLoadWorkbench(preset)}
                className="group relative flex flex-col p-5 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e111a] hover:border-indigo-500/40 dark:hover:border-indigo-500/30 transition shadow-md hover:shadow-xl cursor-pointer"
              >
                {/* 3D Canvas Preview Window */}
                <div className="h-40 w-full rounded-2xl bg-zinc-50 dark:bg-[#07090f] relative overflow-hidden flex items-center justify-center border border-zinc-100 dark:border-zinc-900 group-hover:bg-zinc-100/50 dark:group-hover:bg-[#05070c] transition">
                  <div className="absolute inset-0 z-0">
                    <Component
                      size={140}
                      preset={preset.preset}
                      angle={preset.angle}
                      environment={preset.environment}
                      color={preset.color}
                      accentColor={preset.accentColor}
                      spinSpeed={preset.spinSpeed}
                      floatHeight={preset.floatHeight}
                      interactive={true}
                      textureType={preset.textureType}
                      emissivePulseSpeed={preset.emissivePulseSpeed}
                      emissivePulseIntensity={preset.emissivePulseIntensity}
                      lightingPreset={preset.lightingPreset}
                      customMaterial={preset.customMaterial}
                      theme={theme}
                    />
                  </div>
                  {/* Hover visual tag */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-zinc-200/60 dark:bg-[#0e111a]/70 backdrop-blur-sm text-[8px] font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {preset.preset}
                  </div>
                </div>

                {/* Preset Details Info */}
                <div className="flex flex-col mt-4 gap-1">
                  <span className="font-extrabold text-sm text-zinc-950 dark:text-white leading-tight truncate">
                    {preset.name}
                  </span>
                  <span className="text-[10px] text-zinc-450 dark:text-zinc-500 font-bold uppercase tracking-wider">
                    {iconName.replace("Icon", "")} Icon
                  </span>
                </div>

                {/* Actions Ribbon */}
                <div className="flex items-center justify-end gap-1.5 mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                  {/* Load / Inspect */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLoadWorkbench(preset);
                    }}
                    title="Load Preset in Laboratory Customizer"
                    className="p-2 rounded-lg bg-zinc-50 dark:bg-[#07090f] border border-zinc-200 dark:border-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer"
                  >
                    <ExternalLink size={12} />
                  </button>

                  {/* Copy Share Link */}
                  <button
                    onClick={(e) => handleCopyLink(preset, e)}
                    title={copiedId === preset.id ? "Copied Link!" : "Copy Share Link"}
                    className="p-2 rounded-lg bg-zinc-50 dark:bg-[#07090f] border border-zinc-200 dark:border-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-green-600 dark:hover:text-green-400 transition cursor-pointer"
                  >
                    {copiedId === preset.id ? <Check size={12} /> : <Copy size={12} />}
                  </button>

                  {/* Download TSX */}
                  <button
                    onClick={(e) => handleDownloadTSX(preset, iconName, e)}
                    title="Download Wrapper TSX Component"
                    className="p-2 rounded-lg bg-zinc-50 dark:bg-[#07090f] border border-zinc-200 dark:border-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-amber-600 dark:hover:text-amber-400 transition cursor-pointer"
                  >
                    <Download size={12} />
                  </button>

                  {/* Delete Preset */}
                  <button
                    onClick={(e) => handleDelete(preset.id, e)}
                    title="Delete Preset"
                    className="p-2 rounded-lg bg-zinc-50 dark:bg-[#07090f] border border-zinc-200 dark:border-zinc-900 hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-600 dark:hover:text-red-400 transition cursor-pointer ml-auto"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
