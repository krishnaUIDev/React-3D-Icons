import React from "react";
import { Sparkles, Heart } from "lucide-react";
import { LayersIcon, GearIcon, CodeIcon } from "r3d-icons";
import { useTranslation } from "../i18n/useTranslation";

export const Info: React.FC = () => {
  const { t } = useTranslation();

  const codeString = `import { DatabaseIcon } from "r3d-icons";

export default function App() {
  return (
    <div className="flex justify-center p-8">
      <DatabaseIcon 
        variant="glass" 
        color="#6366f1" 
        size={96} 
        interactive={true} 
      />
    </div>
  );
}`;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-page-fade">
      {/* Header */}
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
          <Sparkles size={10} className="animate-pulse" />
          <span>{t("doc_badge" as any)}</span>
        </div>
        <h1 className="text-3xl font-black tracking-tight text-zinc-950 dark:text-white uppercase tracking-tight">
          {t("doc_title" as any)}{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            React 3D Icons
          </span>
        </h1>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed font-semibold">
          {t("doc_subtitle" as any)}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Core Features */}
        <div className="p-5 rounded-2xl border border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-2xl space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/5 flex items-center justify-center relative overflow-hidden mb-1">
            <LayersIcon
              size="100%"
              color="#6366f1"
              preset="glass"
              interactive={false}
              spinSpeed={0.8}
              floatHeight={0.4}
              theme="dark"
            />
          </div>
          <h3 className="text-xs font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
            {t("doc_feature1_title" as any)}
          </h3>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
            {t("doc_feature1_desc" as any)}
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-2xl space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/10 dark:bg-purple-500/5 flex items-center justify-center relative overflow-hidden mb-1">
            <GearIcon
              size="100%"
              color="#8b5cf6"
              preset="glass"
              interactive={false}
              spinSpeed={0.8}
              floatHeight={0.4}
              theme="dark"
            />
          </div>
          <h3 className="text-xs font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
            {t("doc_feature2_title" as any)}
          </h3>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
            {t("doc_feature2_desc" as any)}
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-2xl space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-pink-500/10 dark:bg-pink-500/5 flex items-center justify-center relative overflow-hidden mb-1">
            <CodeIcon
              size="100%"
              color="#ec4899"
              preset="glass"
              interactive={false}
              spinSpeed={0.8}
              floatHeight={0.4}
              theme="dark"
            />
          </div>
          <h3 className="text-xs font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
            {t("doc_feature3_title" as any)}
          </h3>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
            {t("doc_feature3_desc" as any)}
          </p>
        </div>
      </div>

      {/* Main documentation content */}
      <div className="space-y-12">
        {/* Section: Installation */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-zinc-200/50 dark:border-white/5 pb-3">
            <h2 className="text-sm font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-100">
              {t("doc_install_title" as any)}
            </h2>
          </div>
          <div className="p-4 rounded-2xl border border-zinc-200/50 dark:border-white/5 bg-white/30 dark:bg-zinc-950/10 backdrop-blur-md space-y-2 animate-in fade-in duration-200">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider">
              {t("doc_install_desc" as any)}
            </p>
            <div className="flex flex-col gap-2 font-mono text-xs text-zinc-850 dark:text-zinc-200 bg-white/50 dark:bg-zinc-950/30 border border-zinc-200/50 dark:border-white/5 p-3 rounded-2xl">
              <div>
                <span className="text-indigo-500 font-bold">npm</span> install r3d-icons
              </div>
              <div className="border-t border-zinc-200/30 dark:border-white/5 my-1"></div>
              <div>
                <span className="text-purple-500 font-bold">yarn</span> add r3d-icons
              </div>
              <div className="border-t border-zinc-200/30 dark:border-white/5 my-1"></div>
              <div>
                <span className="text-pink-500 font-bold">pnpm</span> add r3d-icons
              </div>
            </div>
          </div>
        </section>

        {/* Section: Basic Usage */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-zinc-200/50 dark:border-white/5 pb-3">
            <h2 className="text-sm font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-100">
              {t("doc_usage_title" as any)}
            </h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-zinc-200/50 dark:border-white/5 bg-[#0b0c16]/95 text-zinc-100 p-5 font-mono text-xs shadow-lg shadow-indigo-500/5 animate-in fade-in duration-200">
            <pre className="overflow-x-auto">
              <code>{codeString}</code>
            </pre>
          </div>
        </section>

        {/* Section: TypeScript Support */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-zinc-200/50 dark:border-white/5 pb-3">
            <h2 className="text-sm font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-100">
              {t("doc_ts_title" as any)}
            </h2>
          </div>
          <div className="p-5 rounded-2xl border border-zinc-200/50 dark:border-white/5 bg-white/30 dark:bg-zinc-950/10 backdrop-blur-md space-y-3">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold uppercase tracking-wider">
              {t("doc_ts_desc" as any)}
            </p>
            <div className="relative rounded-xl overflow-hidden border border-zinc-200/50 dark:border-white/5 bg-[#0b0c16]/95 text-zinc-100 p-4 font-mono text-[11px] leading-relaxed shadow-lg shadow-indigo-500/5">
              <pre className="overflow-x-auto">
                <code>{`// Import component and its types
import { ShieldIcon } from "r3d-icons";
import type { ShieldIconProps, IconPreset } from "r3d-icons";

// strictly validate parameters at compile-time
const props: ShieldIconProps = {
  size: 120,
  preset: "glassmorphism",
  color: "#6366f1"
};

export default function Card() {
  return <ShieldIcon {...props} />;
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Section: Component Props */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-zinc-200/50 dark:border-white/5 pb-3">
            <h2 className="text-sm font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-100">
              {t("doc_props_title" as any)}
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-2xl shadow-sm">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-zinc-100/50 dark:bg-zinc-950/40 border-b border-zinc-200/50 dark:border-white/5">
                  <th className="p-3 font-extrabold uppercase text-[9px] tracking-wider text-zinc-400 dark:text-zinc-500">
                    {t("doc_table_prop" as any)}
                  </th>
                  <th className="p-3 font-extrabold uppercase text-[9px] tracking-wider text-zinc-400 dark:text-zinc-500">
                    {t("doc_table_type" as any)}
                  </th>
                  <th className="p-3 font-extrabold uppercase text-[9px] tracking-wider text-zinc-400 dark:text-zinc-500">
                    {t("doc_table_default" as any)}
                  </th>
                  <th className="p-3 font-extrabold uppercase text-[9px] tracking-wider text-zinc-400 dark:text-zinc-500">
                    {t("doc_table_description" as any)}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/30 dark:divide-white/5 text-zinc-700 dark:text-zinc-355">
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-500">variant</td>
                  <td className="p-3 font-mono">
                    "2d" | "glass" | "metallic" | "flat" | "neon" | "clay"
                  </td>
                  <td className="p-3 font-mono">"glass"</td>
                  <td className="p-3">{t("doc_row_variant_desc" as any)}</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-500">color</td>
                  <td className="p-3 font-mono">string</td>
                  <td className="p-3 font-mono">"#6366f1"</td>
                  <td className="p-3">{t("doc_row_color_desc" as any)}</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-500">accentColor</td>
                  <td className="p-3 font-mono">string</td>
                  <td className="p-3 font-mono">undefined</td>
                  <td className="p-3">{t("doc_row_accent_desc" as any)}</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-550">size</td>
                  <td className="p-3 font-mono">number | string</td>
                  <td className="p-3 font-mono">64</td>
                  <td className="p-3">{t("doc_row_size_desc" as any)}</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-505">interactive</td>
                  <td className="p-3 font-mono">boolean</td>
                  <td className="p-3 font-mono">false</td>
                  <td className="p-3">{t("doc_row_interactive_desc" as any)}</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-500">spinSpeed</td>
                  <td className="p-3 font-mono">number</td>
                  <td className="p-3 font-mono">0.5</td>
                  <td className="p-3">{t("doc_row_spin_desc" as any)}</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-500">floatHeight</td>
                  <td className="p-3 font-mono">number</td>
                  <td className="p-3 font-mono">0.4</td>
                  <td className="p-3">{t("doc_row_float_desc" as any)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Footer support notice */}
      <div className="mt-16 text-center border-t border-zinc-200/50 dark:border-white/5 pt-8 flex items-center justify-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
        <span>{t("doc_footer_crafted" as any)}</span>
        <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
        <span>{t("doc_footer_web" as any)}</span>
      </div>
    </div>
  );
};
