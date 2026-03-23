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
        headerPlaceholder: "Søk",
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
        filterPlaceholder: "Filtrer ferdigheter eller teknologi...",
        clearFilterLabel: "Fjern filter",
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
    createListing: {
        title: "Opprett en ny annonse",
        description: "Del hva du kan og hva du ønsker å lære.",
        name: "Navn",
        offer: "Tilbyr",
        want: "Ønsker",
        descriptionField: "Beskrivelse",
        placeholders: {
            name: "f.eks. Maya",
            offer: "f.eks. React grunnleggende",
            want: "f.eks. TypeScript",
            description: "f.eks. Lær komponenter, props og state",
        },
        level: "Nivå",
        levelPlaceholder: "Velg nivå",
        levels: {
            beginner: "Nybegynner",
            intermediate: "Middels",
            advanced: "Avansert",
        },
        submit: "Publiser annonse",
        feedback: {
            missingFields: "Vennligst fyll ut alle feltene.",
            success: "Annonsen ble publisert.",
            requiredField: "Dette feltet er påkrevd.",
        }
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