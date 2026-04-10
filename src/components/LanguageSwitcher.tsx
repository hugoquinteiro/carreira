import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-1.5 bg-card/80 backdrop-blur-md border border-border/50 rounded-full p-1">
      <button
        onClick={() => setLang("br")}
        className={`text-lg w-9 h-9 rounded-full flex items-center justify-center transition-all ${
          lang === "br" ? "bg-primary/20 scale-110" : "hover:bg-muted opacity-60 hover:opacity-100"
        }`}
        title="Português"
      >
        🇧🇷
      </button>
      <button
        onClick={() => setLang("en")}
        className={`text-lg w-9 h-9 rounded-full flex items-center justify-center transition-all ${
          lang === "en" ? "bg-primary/20 scale-110" : "hover:bg-muted opacity-60 hover:opacity-100"
        }`}
        title="English"
      >
        🇺🇸
      </button>
    </div>
  );
};

export default LanguageSwitcher;
