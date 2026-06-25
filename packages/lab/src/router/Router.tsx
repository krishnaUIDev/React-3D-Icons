import React, { createContext, useContext, useState, useEffect } from "react";

export type AppRoute = "landing" | "explore" | "customize";

interface RouteState {
  route: AppRoute;
  color: string;       // Hex color parsed from URL (e.g., "#e67951")
  iconId: string;      // Icon ID parsed from URL (e.g., "locker")
}

interface RouterContextProps extends RouteState {
  navigate: (path: string) => void;
  updateCustomizerURL: (colorHex: string, iconId: string) => void;
}

const RouterContext = createContext<RouterContextProps | undefined>(undefined);

// Helper to parse hash into route state
function parseHash(hash: string): RouteState {
  const cleanHash = hash.replace(/^#\/?/, "");

  // Match /icons/([color])-([iconId])
  const iconMatch = cleanHash.match(/^icons\/([a-fA-F0-9]{6})-([a-zA-Z0-9][a-zA-Z0-9-]*)$/);
  if (iconMatch) {
    return {
      route: "customize",
      color: `#${iconMatch[1]}`,
      iconId: iconMatch[2]
    };
  }

  if (cleanHash === "explore") {
    return {
      route: "explore",
      color: "#6366f1", // default
      iconId: "database"
    };
  }

  // Default to Landing page
  return {
    route: "landing",
    color: "#6366f1",
    iconId: "database"
  };
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<RouteState>(() => parseHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setState(parseHash(window.location.hash));
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path.startsWith("/") ? path : `/${path}`;
  };

  const updateCustomizerURL = (colorHex: string, iconId: string) => {
    // Strip hash if present
    const cleanColor = colorHex.replace("#", "");
    // Replace hash silently without reloading, or via window.location.hash
    window.location.hash = `/icons/${cleanColor}-${iconId}`;
  };

  return (
    <RouterContext.Provider value={{ ...state, navigate, updateCustomizerURL }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
};
