import type en from "./en";

type Messages = typeof en;

const no: Messages = {
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
            "SkillSwap er en liten markedsplass hvor utviklere tilbyr programmeringsferdigheter de kan og ber om ferdigheter de ønsker å lære. Bla gjennom annonser, oppdag muligheter og kom i kontakt med andre for å utveksle kunnskap.",
        featuredSkills: "Utvalgte ferdigheter",
    },
};

export default no;