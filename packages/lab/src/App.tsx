import { useState, useEffect } from "react";
import { LanguageProvider } from "./i18n/useTranslation";
import { RouterProvider, useRouter } from "./router/Router";
import { Header } from "./components/Header";
import { Landing } from "./pages/Landing";
import { Customize } from "./pages/Customize";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

function AppContent() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [search, setSearch] = useState("");
  const { route } = useRouter();

  // Sync theme class on HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // Scroll to top on route navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#090b11] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 flex flex-col">
      {/* Header with Navigation and Toggles */}
      <Header
        theme={theme}
        setTheme={setTheme}
        search={search}
        setSearch={setSearch}
      />

      {/* Dynamic Page Views */}
      <main className="flex-grow">
        {route === "landing" ? (
          <Landing theme={theme} search={search} setSearch={setSearch} />
        ) : (
          <Customize theme={theme} />
        )}
      </main>
      {/* Shared WebGL Canvas Port */}
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 10
        }}
        eventSource={window.document.getElementById("root") || undefined}
        gl={{ antialias: true, alpha: true }}
      >
        <View.Port />
      </Canvas>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </LanguageProvider>
  );
}
