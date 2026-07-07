import React, { createContext, useContext, useState } from "react";
import { translations, LanguageCode, TranslationKey } from "./translations";

interface LanguageContextProps {
  lang: LanguageCode;
  setLang: (code: LanguageCode) => void;
  t: (key: TranslationKey, replacements?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial language from localStorage or default to English
  const [lang, setLangState] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem("react-3d-icons-lang");
    if (saved === "en" || saved === "es" || saved === "de") {
      return saved as LanguageCode;
    }
    return "en";
  });

  const setLang = (code: LanguageCode) => {
    setLangState(code);
    localStorage.setItem("react-3d-icons-lang", code);
  };

  const t = (key: TranslationKey, replacements?: Record<string, string | number>): string => {
    let str: string = translations[lang][key] || translations.en[key] || String(key);
    if (replacements) {
      Object.entries(replacements).forEach(([k, v]) => {
        str = str.replace(`{${k}}`, String(v));
      });
    }
    return str;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
};
