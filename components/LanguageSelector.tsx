"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Language } from "@/lib/translations";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleLanguageChange("es")}
        className={`px-3 py-1 text-sm font-semibold rounded transition-colors ${
          language === "es"
            ? "bg-[#c9aa71] text-black"
            : "bg-transparent text-white/70 hover:text-white border border-white/30 hover:border-white/50"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => handleLanguageChange("en")}
        className={`px-3 py-1 text-sm font-semibold rounded transition-colors ${
          language === "en"
            ? "bg-[#c9aa71] text-black"
            : "bg-transparent text-white/70 hover:text-white border border-white/30 hover:border-white/50"
        }`}
      >
        EN
      </button>
    </div>
  );
}
