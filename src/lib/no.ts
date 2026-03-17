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
            "SkillSwap er en liten markedsplass hvor utviklere tilbyr programmeringsferdigheter de kan og ber om ferdigheter de ønsker å lære.",
        featuredSkills: "Utvalgte ferdigheter",
    },
    listings: {
        title: "Finn ditt neste ferdighetsbytte",
        description:
            "Se utviklere som tilbyr ferdigheter de kan, og som ønsker å lære noe nytt gjennom kunnskapsutveksling mellom utviklere.",
        searchPlaceholder: "Søk etter ferdigheter eller teknologi...",
        emptyState: "Ingen annonser matcher søket ditt.",
        ctaText: "Vil du dele en ferdighet og lære noe nytt?",
        ctaButton: "Opprett annonse",
        offers: "Tilbyr",
        wants: "Ønsker",
    },
    listingDetail: {
        offers: "Tilbyr",
        wants: "Ønsker",
        level: "Nivå",
    },
    favorites: {
        title: "Favoritter",
        description: "Annonser du har lagret for å se senere.",
        emptyState: "Du har ikke lagret noen annonser ennå.",
        save: "Lagre",
        saved: "Lagret",
    },
    footer: {
        copyright: "© 2026 Porteføljeprosjekt | SkillSwap av Shir-oh",
    },
    notFound: {
        title: "Siden ble ikke funnet",
        description: "Siden du leter etter finnes ikke.",
        backHome: "Tilbake til forsiden",
        imageAlt: "404-feil illustrasjon"
    }
};

export default no;