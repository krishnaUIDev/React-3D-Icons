import React, { useState, useEffect, Suspense } from "react";
import { LanguageProvider } from "./i18n/useTranslation";
import { RouterProvider, useRouter } from "./router/Router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

const Landing = React.lazy(() => import("./pages/Landing").then((m) => ({ default: m.Landing })));
const Customize = React.lazy(() =>
  import("./pages/Customize").then((m) => ({ default: m.Customize }))
);
const Info = React.lazy(() => import("./pages/Info").then((m) => ({ default: m.Info })));
const Saved = React.lazy(() => import("./pages/Saved.tsx")); // lazy-loaded saved page
const Sandbox = React.lazy(() => import("./pages/Sandbox").then((m) => ({ default: m.Sandbox })));
const Requests = React.lazy(() =>
  import("./pages/Requests").then((m) => ({ default: m.Requests }))
);
const ChatPage = React.lazy(() =>
  import("./pages/ChatPage").then((m) => ({ default: m.ChatPage }))
);

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-4 border-zinc-200 dark:border-zinc-800 opacity-20" />
          <div className="absolute inset-0 rounded-full border-4 border-t-indigo-600 dark:border-t-indigo-500 animate-spin" />
        </div>
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 animate-pulse">
          Loading visual modules...
        </span>
      </div>
    </div>
  );
}

function AppContent() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("r3d-theme");
    if (saved === "light" || saved === "dark") return saved;
    // Check user's operating system dark-mode preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  });
  const [search, setSearch] = useState("");
  const { route } = useRouter();
  const [installPrompt, setInstallPrompt] = useState<any>(null);

  // Capture PWA browser install prompts
  useEffect(() => {
    const handlePrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handlePrompt);
    return () => window.removeEventListener("beforeinstallprompt", handlePrompt);
  }, []);

  const handleInstallApp = () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    installPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === "accepted") {
        console.log("PWA installed successfully by user");
      }
      setInstallPrompt(null);
    });
  };

  // Sync theme class on HTML element & localStorage
  useEffect(() => {
    localStorage.setItem("r3d-theme", theme);
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

  const isEmbed = new URLSearchParams(window.location.search).get("embed") === "true";

  return (
    <div
      className={`min-h-screen ${isEmbed ? "bg-transparent" : "bg-zinc-50 dark:bg-[#090b11] text-zinc-900 dark:text-zinc-100 transition-colors duration-300"} flex flex-col`}
    >
      {/* Header with Navigation and Toggles */}
      {!isEmbed && (
        <Header
          theme={theme}
          setTheme={setTheme}
          search={search}
          setSearch={setSearch}
          installPrompt={installPrompt}
          onInstall={handleInstallApp}
        />
      )}

      {/* Dynamic Page Views */}
      <main className={isEmbed ? "w-screen h-screen overflow-hidden" : "flex-grow"}>
        <Suspense fallback={<LoadingFallback />}>
          {route === "catalog" && (
            <div key="catalog" className="animate-page-fade">
              <Landing theme={theme} search={search} setSearch={setSearch} />
            </div>
          )}
          {route === "customize" && (
            <div key="customize" className="animate-page-fade w-full h-full">
              <Customize theme={theme} />
            </div>
          )}
          {route === "info" && (
            <div key="info" className="animate-page-fade">
              <Info />
            </div>
          )}
          {route === "saved" && (
            <div key="saved" className="animate-page-fade">
              <Saved theme={theme} />
            </div>
          )}
          {route === "sandbox" && (
            <div key="sandbox" className="animate-page-fade">
              <Sandbox theme={theme} />
            </div>
          )}
          {route === "requests" && (
            <div key="requests" className="animate-page-fade">
              <Requests theme={theme} />
            </div>
          )}
          {route === "chat" && (
            <div key="chat" className="animate-page-fade">
              <ChatPage theme={theme} />
            </div>
          )}
        </Suspense>
      </main>

      {/* Footer */}
      {!isEmbed && <Footer />}

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
