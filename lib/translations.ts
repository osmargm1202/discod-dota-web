export type Language = "es" | "en";

export interface Translations {
  title: string;
  subtitle: string;
  description: string;
  features: {
    title: string;
    matchHistory: string;
    publicProfile: string;
    stats: string;
    heroStats: string;
  };
  contact: {
    title: string;
    text: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    title: "Fifrex Dev",
    subtitle: "En Desarrollo",
    description:
      "Bot de Discord para Dota 2 que te permite obtener estadísticas actualizadas de tus partidas.",
    features: {
      title: "Funcionalidades",
      matchHistory: "Datos actualizados de tus últimas partidas",
      publicProfile: "Verificación de perfiles públicos de usuarios",
      stats: "Estadísticas y records de tus últimas 20 partidas",
      heroStats: "Records de tus últimas 20 partidas con cada héroe",
    },
    contact: {
      title: "Contacto",
      text: "Para más información sobre el bot:",
    },
  },
  en: {
    title: "Fifrex Dev",
    subtitle: "In Development",
    description:
      "Discord bot for Dota 2 that allows you to get updated statistics from your matches.",
    features: {
      title: "Features",
      matchHistory: "Updated data from your latest matches",
      publicProfile: "User public profile verification",
      stats: "Statistics and records from your last 20 matches",
      heroStats: "Records from your last 20 matches with each hero",
    },
    contact: {
      title: "Contact",
      text: "For more information about the bot:",
    },
  },
};
