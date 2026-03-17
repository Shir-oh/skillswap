export type Locale = "en" | "no";

export const messages = {
    en: {
        nav: {
            listings: "Listings",
            favorites: "Favorites",
            language: "Language",
        },
        search: {
            ariaLabel: "Search",
        },
        home: {
            titleLine1: "Exchange developer skills.",
            titleLine2: "Learn from other developers.",
            description:
                "SkillSwap is a small marketplace where developers offer programming skills they know and request skills they want to learn. Browse listings, discover opportunities, and connect with others to exchange knowledge.",
            featuredSkills: "Featured skills",
        },
    },

    no: {
        nav: {
            listings: "Annonser",
            favorites: "Favoritter",
            language: "Språk",
        },
        search: {
            ariaLabel: "Søk",
        },
        home: {
            titleLine1: "Bytt utviklerferdigheter.",
            titleLine2: "Lær fra andre utviklere.",
            description:
                "SkillSwap er en liten markedsplass hvor utviklere tilbyr programmeringsferdigheter de kan og etterspør ferdigheter de ønsker å lære. Bla gjennom annonser, oppdag muligheter og koble deg med andre for å utveksle kunnskap.",
            featuredSkills: "Utvalgte ferdigheter",
        },
    },
} as const;

export function getTranslations(locale: Locale) {
    return messages[locale];
}
