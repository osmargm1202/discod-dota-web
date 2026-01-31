"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const logoUrl =
    process.env.NEXT_PUBLIC_FIFREX_LOGO_URL || "https://r2.or-gm.com/fifrex.png";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src={logoUrl}
          alt="Fifrex Dev Logo"
          width={250}
          height={250}
          priority
          className="drop-shadow-2xl"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-4 font-[family-name:var(--font-cinzel)]">
        {t.title}
      </h1>

      {/* Subtitle */}
      <p className="text-xl sm:text-2xl md:text-3xl text-[#c9aa71] text-center mb-12 font-[family-name:var(--font-cinzel)]">
        {t.subtitle}
      </p>

      {/* Description */}
      <div className="max-w-2xl text-center mb-8">
        <p className="text-gray-300 text-base sm:text-lg mb-8">{t.description}</p>

        {/* Features */}
        <div className="text-left bg-black/30 rounded-lg p-6 mb-8">
          <h2 className="text-xl text-[#c9aa71] mb-4 font-[family-name:var(--font-cinzel)]">
            {t.features.title}
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-[#c9aa71]">•</span>
              {t.features.matchHistory}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c9aa71]">•</span>
              {t.features.publicProfile}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c9aa71]">•</span>
              {t.features.stats}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c9aa71]">•</span>
              {t.features.heroStats}
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h2 className="text-xl text-[#c9aa71] mb-2 font-[family-name:var(--font-cinzel)]">
            {t.contact.title}
          </h2>
          <p className="text-gray-400 mb-2">{t.contact.text}</p>
          <a
            href="mailto:xaviergm1013@gmail.com"
            className="text-[#c9aa71] hover:text-white transition-colors text-lg font-medium"
          >
            xaviergm1013@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
