import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { LanguageSelector } from "@/components/LanguageSelector";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fifrex Dev - Discord Dota 2 Bot",
  description:
    "Bot de Discord para Dota 2. Obtén estadísticas actualizadas de tus partidas, verifica perfiles públicos y consulta tus records con cada héroe.",
  keywords: ["Dota 2", "Discord", "Bot", "Stats", "Estadísticas", "Fifrex"],
  authors: [{ name: "Fifrex Dev", url: "mailto:xaviergm1013@gmail.com" }],
  openGraph: {
    title: "Fifrex Dev - Discord Dota 2 Bot",
    description:
      "Bot de Discord para Dota 2. Obtén estadísticas actualizadas de tus partidas y consulta tus records.",
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    siteName: "Fifrex Dev",
    images: [
      {
        url: process.env.NEXT_PUBLIC_FIFREX_LOGO_URL || "https://r2.or-gm.com/fifrex.png",
        width: 512,
        height: 512,
        alt: "Fifrex Dev Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Fifrex Dev - Discord Dota 2 Bot",
    description:
      "Bot de Discord para Dota 2. Estadísticas de partidas y records por héroe.",
    images: [process.env.NEXT_PUBLIC_FIFREX_LOGO_URL || "https://r2.or-gm.com/fifrex.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const backgroundUrl = process.env.NEXT_PUBLIC_BACKGROUND_URL || "/dota2.png";

  return (
    <html lang="es">
      <body className={`${cinzel.variable} antialiased`}>
        <Providers>
          {/* Background layer with image and opacity */}
          <div
            className="fixed inset-0 bg-[#0a0a0a] bg-cover bg-center bg-no-repeat bg-fixed -z-10"
            style={{
              backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : undefined,
            }}
          >
            {/* Overlay for reduced opacity */}
            <div className="absolute inset-0 bg-black/70" />
          </div>
          {/* Language selector */}
          <div className="fixed top-4 right-4 z-50">
            <LanguageSelector />
          </div>
          {/* Content */}
          <main className="relative min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
