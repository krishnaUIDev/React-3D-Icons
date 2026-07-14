import React, { useState, useEffect } from "react";
import { useRouter } from "../router/Router";
import { ICONS_REGISTRY } from "./Customize";
import { Trash2, ExternalLink, Copy, Check, Download, Compass, Sparkles } from "lucide-react";
import { useTranslation } from "../i18n/useTranslation";
import { Fallback2D } from "r3d-icons";
import { createRoot } from "react-dom/client";
import { Lazy3DIcon } from "../components/Lazy3DIcon";

interface SavedProps {
  theme: "light" | "dark";
}

async function loadJSZip(): Promise<any> {
  if ((window as any).JSZip) {
    return (window as any).JSZip;
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";
    script.onload = () => {
      resolve((window as any).JSZip);
    };
    script.onerror = () => {
      reject(new Error("Failed to load JSZip from CDN"));
    };
    document.body.appendChild(script);
  });
}

function generateTSXContent(preset: any, iconName: string): string {
  const componentName = `Custom${iconName.replace("Icon", "")}`;
  const customMatStr =
    preset.customMaterial && Object.keys(preset.customMaterial).length > 0
      ? `const customMaterial = ${JSON.stringify(preset.customMaterial, null, 2).replace(/"([^"]+)":/g, "$1:")};\n\n  `
      : "";

  const gradientProps =
    preset.gradientType && preset.gradientType !== "none"
      ? `\n      gradientType="${preset.gradientType}"\n      gradientColorStart="${preset.gradientColorStart}"\n      gradientColorEnd="${preset.gradientColorEnd}"\n      gradientAngle={${preset.gradientAngle}}`
      : "";

  const ambientProps =
    preset.ambientLightIntensity !== undefined
      ? `\n      ambientLightIntensity={${preset.ambientLightIntensity}}\n      ambientLightColor="${preset.ambientLightColor}"`
      : "";

  return `import React from "react";
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
      lightingPreset="${preset.lightingPreset}"${gradientProps}${ambientProps}
      ${preset.customMaterial && Object.keys(preset.customMaterial).length > 0 ? "customMaterial={customMaterial}" : ""}
      {...props}
    />
  );
}
`;
}

export const Saved: React.FC<SavedProps> = ({ theme }) => {
  const { navigate } = useRouter();
  const { t } = useTranslation();
  const [presets, setPresets] = useState<any[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Bulk ZIP Export States & Handlers
  const [exportingZip, setExportingZip] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [zipFormat, setZipFormat] = useState<"tsx" | "svg" | "json">("tsx");

  const handleBulkExportZIP = async () => {
    if (presets.length === 0 || exportingZip) return;
    setExportingZip(true);

    try {
      const JSZip = await loadJSZip();
      const zip = new JSZip();

      if (zipFormat === "tsx") {
        presets.forEach((preset) => {
          const registryEntry =
            ICONS_REGISTRY.find((item) => item.id === (preset.iconId || "shield")) ||
            ICONS_REGISTRY[0];
          const iconName = registryEntry.name;
          const tsxContent = generateTSXContent(preset, iconName);
          const componentName = `Custom${iconName.replace("Icon", "")}`;
          zip.file(`${componentName}.tsx`, tsxContent);
        });
      } else if (zipFormat === "json") {
        zip.file("r3d-saved-presets.json", JSON.stringify(presets, null, 2));
      } else if (zipFormat === "svg") {
        const container = document.createElement("div");
        container.style.position = "absolute";
        container.style.left = "-9999px";
        document.body.appendChild(container);

        for (let i = 0; i < presets.length; i++) {
          const preset = presets[i];
          const registryEntry =
            ICONS_REGISTRY.find((item) => item.id === (preset.iconId || "shield")) ||
            ICONS_REGISTRY[0];

          const tempDiv = document.createElement("div");
          container.appendChild(tempDiv);
          const root = createRoot(tempDiv);

          root.render(
            <Fallback2D
              id={registryEntry.id}
              color={preset.color}
              theme={theme}
              preset={preset.preset}
              gradientType={preset.gradientType}
              gradientColorStart={preset.gradientColorStart}
              gradientColorEnd={preset.gradientColorEnd}
              gradientAngle={preset.gradientAngle}
            />
          );

          await new Promise((resolve) => setTimeout(resolve, 100));

          const svgElement = tempDiv.querySelector("svg");
          if (svgElement) {
            zip.file(`${registryEntry.id}-2d-${preset.preset}.svg`, svgElement.outerHTML);
          }
          root.unmount();
          container.removeChild(tempDiv);
        }
        document.body.removeChild(container);
      }

      const content = await zip.generateAsync({ type: "blob" });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = `r3d-icons-presets-bulk-${zipFormat}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);

      setShowExportModal(false);
    } catch (err) {
      console.error("Failed to perform bulk zip export:", err);
      alert("Export failed: " + (err instanceof Error ? err.message : String(err)));
    } finally {
      setExportingZip(false);
    }
  };

  // Load presets from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("r3d_saved_presets:v1");
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
    localStorage.setItem("r3d_saved_presets:v1", JSON.stringify(updated));
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 border-b border-zinc-150 dark:border-zinc-850/60 pb-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-700 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
            {t("saved_presets_title" as any)}
          </h1>
          <p className="text-sm text-zinc-550 dark:text-zinc-450 max-w-xl font-medium leading-relaxed">
            {t("saved_presets_desc" as any)}
          </p>
        </div>

        {presets.length > 0 && (
          <button
            type="button"
            onClick={() => setShowExportModal(true)}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs uppercase tracking-wider transition active:scale-95 cursor-pointer shadow-md shadow-indigo-600/10 self-start sm:self-center"
          >
            <Download size={14} />
            <span>Bulk Export (ZIP)</span>
          </button>
        )}
      </div>

      {presets.length === 0 ? (
        /* Empty State */
        <div className="flex flex-col items-center justify-center p-12 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-[#0c0f17]/40 text-center min-h-[45vh] shadow-sm animate-page-fade">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/5 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 border border-indigo-500/15">
            <Sparkles size={28} />
          </div>
          <h3 className="font-extrabold text-lg text-zinc-800 dark:text-zinc-200 mb-2">
            {t("saved_presets_empty" as any)}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 max-w-xs leading-relaxed mb-6 font-medium">
            {t("saved_presets_empty_desc" as any)}
          </p>
          <button
            type="button"
            onClick={() => navigate("customize")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-indigo-600/20 cursor-pointer active:scale-95 transition"
          >
            <Compass size={14} />
            <span>{t("saved_presets_open_btn" as any)}</span>
          </button>
        </div>
      ) : (
        /* Grid of Custom Presets */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-page-fade">
          {presets.map((preset) => {
            const registryEntry =
              ICONS_REGISTRY.find((item) => item.id === (preset.iconId || "shield")) ||
              ICONS_REGISTRY[0];
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
                    <Lazy3DIcon
                      name={registryEntry.name}
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
                    type="button"
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
                    type="button"
                    onClick={(e) => handleCopyLink(preset, e)}
                    title={copiedId === preset.id ? "Copied Link!" : "Copy Share Link"}
                    className="p-2 rounded-lg bg-zinc-50 dark:bg-[#07090f] border border-zinc-200 dark:border-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-green-600 dark:hover:text-green-400 transition cursor-pointer"
                  >
                    {copiedId === preset.id ? <Check size={12} /> : <Copy size={12} />}
                  </button>

                  {/* Download TSX */}
                  <button
                    type="button"
                    onClick={(e) => handleDownloadTSX(preset, iconName, e)}
                    title="Download Wrapper TSX Component"
                    className="p-2 rounded-lg bg-zinc-50 dark:bg-[#07090f] border border-zinc-200 dark:border-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-amber-600 dark:hover:text-amber-400 transition cursor-pointer"
                  >
                    <Download size={12} />
                  </button>

                  {/* Delete Preset */}
                  <button
                    type="button"
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
      {/* Bulk Export ZIP Modal */}
      {showExportModal && (
        <div className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-page-fade">
          <div className="bg-white dark:bg-[#0b0e16] border border-zinc-200 dark:border-zinc-800 rounded-3xl w-full max-w-sm p-6 space-y-5 shadow-2xl relative animate-scale-up">
            <button
              type="button"
              onClick={() => setShowExportModal(false)}
              className="absolute top-4 right-4 text-zinc-400 dark:text-zinc-550 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors p-1 cursor-pointer"
            >
              <span className="text-sm font-bold">✕</span>
            </button>

            <div className="space-y-1">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2">
                <Download size={16} className="text-indigo-500" />
                <span>Bulk ZIP Exporter</span>
              </h3>
              <p className="text-[10px] text-zinc-550 dark:text-zinc-450 leading-normal">
                Choose your preferred export format. We will compile all your saved presets into a
                single compressed ZIP file.
              </p>
            </div>

            {/* ZIP Export Format Choice */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-450 dark:text-zinc-500 uppercase tracking-wider block">
                Export Format
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "tsx", name: "TSX React" },
                  { id: "svg", name: "SVG Fallback" },
                  { id: "json", name: "JSON Data" }
                ].map((fmt) => (
                  <button
                    type="button"
                    key={fmt.id}
                    onClick={() => setZipFormat(fmt.id as any)}
                    className={`py-2 px-1 rounded-xl text-[9px] font-bold border uppercase transition cursor-pointer text-center ${
                      zipFormat === fmt.id
                        ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                        : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-650 dark:text-zinc-450"
                    }`}
                  >
                    {fmt.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-3 border-t border-zinc-150 dark:border-zinc-800/80">
              <button
                type="button"
                onClick={() => setShowExportModal(false)}
                className="flex-grow py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-[10px] font-extrabold uppercase tracking-wider transition active:scale-95 cursor-pointer text-center"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleBulkExportZIP}
                disabled={exportingZip}
                className="flex-grow py-2 rounded-xl bg-indigo-600 text-white text-[10px] font-extrabold uppercase tracking-wider transition hover:bg-indigo-550 active:scale-95 cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-md shadow-zinc-900/10 disabled:opacity-50 disabled:pointer-events-none"
              >
                {exportingZip ? (
                  <>
                    <span className="w-3 h-3 rounded-full border-2 border-white border-t-transparent animate-spin inline-block" />
                    <span>Compiling...</span>
                  </>
                ) : (
                  <>
                    <span>Generate ZIP</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Saved;
