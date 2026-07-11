import React from "react";
import { Sparkles, Heart } from "lucide-react";
import { LayersIcon, GearIcon, CodeIcon } from "r3d-icons";

export const Info: React.FC = () => {
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
          <span>Documentation</span>
        </div>
        <h1 className="text-3xl font-black tracking-tight text-zinc-950 dark:from-white dark:to-zinc-200">
          Getting Started with{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            React 3D Icons
          </span>
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
          A premium, tree-shakeable, and highly customizable React 3D icon library utilizing React
          Three Fiber, Three.js, and Tailwind CSS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Core Features */}
        <div className="p-5 rounded-3xl border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-[#0e111a] space-y-3">
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
            Fully Tree-Shakeable
          </h3>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Import only the icons you need. Only compiled icons are bundled into your final build,
            maintaining minimal bundle size.
          </p>
        </div>

        <div className="p-5 rounded-3xl border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-[#0e111a] space-y-3">
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
            Highly Customizable
          </h3>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Modify colors, variants, sizing, animation rotation, and floating thresholds directly
            via React component props.
          </p>
        </div>

        <div className="p-5 rounded-3xl border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-[#0e111a] space-y-3">
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
            Dual Build Support
          </h3>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Supports both CommonJS (CJS) and ES Modules (ESM) target setups, ensuring compatibility
            with Next.js, Vite, and Webpack.
          </p>
        </div>
      </div>

      {/* Main documentation content */}
      <div className="space-y-12">
        {/* Section: Installation */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-zinc-200/50 dark:border-zinc-800/80 pb-3">
            <h2 className="text-sm font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-100">
              1. Installation
            </h2>
          </div>
          <div className="p-4 rounded-3xl border border-zinc-200/60 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#0a0c14] space-y-2">
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Install the core package using your preferred package manager:
            </p>
            <div className="flex flex-col gap-2 font-mono text-xs text-zinc-850 dark:text-zinc-200 bg-white dark:bg-[#0e111a] border border-zinc-200/60 dark:border-zinc-800 p-3 rounded-2xl">
              <div>
                <span className="text-indigo-500 font-bold">npm</span> install r3d-icons
              </div>
              <div className="border-t border-zinc-100 dark:border-zinc-850 my-1"></div>
              <div>
                <span className="text-purple-500 font-bold">yarn</span> add r3d-icons
              </div>
              <div className="border-t border-zinc-100 dark:border-zinc-850 my-1"></div>
              <div>
                <span className="text-pink-500 font-bold">pnpm</span> add r3d-icons
              </div>
            </div>
          </div>
        </section>

        {/* Section: Basic Usage */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-zinc-200/50 dark:border-zinc-800/80 pb-3">
            <h2 className="text-sm font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-100">
              2. Basic Usage
            </h2>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800 bg-zinc-950 text-zinc-100 p-5 font-mono text-xs">
            <pre className="overflow-x-auto">
              <code>{codeString}</code>
            </pre>
          </div>
        </section>

        {/* Section: TypeScript Support */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-zinc-200/50 dark:border-zinc-800/80 pb-3">
            <h2 className="text-sm font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-100">
              3. TypeScript Support
            </h2>
          </div>
          <div className="p-5 rounded-3xl border border-zinc-200/60 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#0a0c14] space-y-3">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Every icon component exports its matching component-specific props type (e.g.{" "}
              <code>ShieldIconProps</code>) alongside core properties and material types for
              complete compile-time validation:
            </p>
            <div className="relative rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800 bg-zinc-950 text-zinc-100 p-4 font-mono text-[11px] leading-relaxed">
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
          <div className="flex items-center gap-2 border-b border-zinc-200/50 dark:border-zinc-800/80 pb-3">
            <h2 className="text-sm font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-100">
              4. Props Reference
            </h2>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-[#0e111a] shadow-sm">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-zinc-50 dark:bg-[#0d0f17] border-b border-zinc-100 dark:border-zinc-850">
                  <th className="p-3 font-extrabold uppercase text-[9px] tracking-wider text-zinc-400 dark:text-zinc-500">
                    Prop
                  </th>
                  <th className="p-3 font-extrabold uppercase text-[9px] tracking-wider text-zinc-400 dark:text-zinc-500">
                    Type
                  </th>
                  <th className="p-3 font-extrabold uppercase text-[9px] tracking-wider text-zinc-400 dark:text-zinc-500">
                    Default
                  </th>
                  <th className="p-3 font-extrabold uppercase text-[9px] tracking-wider text-zinc-400 dark:text-zinc-500">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-850 text-zinc-700 dark:text-zinc-300">
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-500">variant</td>
                  <td className="p-3 font-mono">
                    "2d" | "glass" | "metallic" | "flat" | "neon" | "clay"
                  </td>
                  <td className="p-3 font-mono">"glass"</td>
                  <td className="p-3">
                    Material preset applied to the 3D meshes inside the rendering scene.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-500">color</td>
                  <td className="p-3 font-mono">string</td>
                  <td className="p-3 font-mono">"#6366f1"</td>
                  <td className="p-3">
                    Primary hex or RGB color representing the base structure of the icon.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-500">accentColor</td>
                  <td className="p-3 font-mono">string</td>
                  <td className="p-3 font-mono">undefined</td>
                  <td className="p-3">
                    Secondary highlight color applied to accents, decals, or internal shapes.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-500">size</td>
                  <td className="p-3 font-mono">number | string</td>
                  <td className="p-3 font-mono">64</td>
                  <td className="p-3">
                    Canvas display height and width (values in pixels or percentage strings).
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-500">interactive</td>
                  <td className="p-3 font-mono">boolean</td>
                  <td className="p-3 font-mono">false</td>
                  <td className="p-3">
                    Enables interactive mouse drag rotation controls over the 3D viewport.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-500">spinSpeed</td>
                  <td className="p-3 font-mono">number</td>
                  <td className="p-3 font-mono">0.5</td>
                  <td className="p-3">
                    Sets speed factor for continuous idle rotation. Set to 0 to disable spinning.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-indigo-500">floatHeight</td>
                  <td className="p-3 font-mono">number</td>
                  <td className="p-3 font-mono">0.4</td>
                  <td className="p-3">
                    Idle vertical hover wave/floating amplitude. Set to 0 to make position static.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Footer support notice */}
      <div className="mt-16 text-center border-t border-zinc-150/40 dark:border-zinc-850/40 pt-8 flex items-center justify-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
        <span>Crafted with</span>
        <Heart size={10} className="text-red-500 fill-red-500" />
        <span>for the modern web</span>
      </div>
    </div>
  );
};
