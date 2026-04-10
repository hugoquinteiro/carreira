import { createContext, useContext, useState, ReactNode } from "react";
import * as br from "@/data/portfolio-br";
import * as en from "@/data/portfolio-en";

type Lang = "br" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  data: typeof br;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const dataMap = { br, en };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("br");
  const data = dataMap[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, data }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
