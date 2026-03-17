import type { Locale } from "@/lib";

export type Listing = {
    id: string;
    name: string;
    offer: string;
    want: string;
    description: string;
    level: string;
    rating: number;
    image: string;
};

const listingsByLocale: Record<Locale, Listing[]> = {
    en: [
        {
            id: "maya-react-for-typescript",
            name: "Maya",
            offer: "React Basics",
            want: "TypeScript",
            description:
                "Frontend developer offering help with React fundamentals in exchange for TypeScript support.",
            level: "Beginner",
            rating: 4.8,
            image: "/images/react-basics.png",
        },
        {
            id: "jon-typescript-for-nextjs",
            name: "Jon",
            offer: "Intermediate TypeScript",
            want: "Next.js Routing",
            description:
                "Developer looking to trade TypeScript guidance for help with more advanced Next.js routing patterns.",
            level: "Intermediate",
            rating: 4.6,
            image: "/images/intermediate-ts.png",
        },
        {
            id: "sara-advanced-ts-for-testing",
            name: "Sara",
            offer: "Advanced TypeScript",
            want: "Testing",
            description:
                "Experienced TypeScript developer interested in swapping advanced typing help for stronger testing skills.",
            level: "Advanced",
            rating: 4.9,
            image: "/images/ts-advanced.png",
        },
    ],
    no: [
        {
            id: "maya-react-for-typescript",
            name: "Maya",
            offer: "React-grunnleggende",
            want: "TypeScript",
            description:
                "Frontend-utvikler som tilbyr hjelp med React-grunnleggende i bytte mot støtte i TypeScript.",
            level: "Nybegynner",
            rating: 4.8,
            image: "/images/react-basics.png",
        },
        {
            id: "jon-typescript-for-nextjs",
            name: "Jon",
            offer: "TypeScript på mellomnivå",
            want: "Next.js-ruting",
            description:
                "Utvikler som ønsker å bytte veiledning i TypeScript mot hjelp med mer avanserte rutemønstre i Next.js.",
            level: "Mellomnivå",
            rating: 4.6,
            image: "/images/intermediate-ts.png",
        },
        {
            id: "sara-advanced-ts-for-testing",
            name: "Sara",
            offer: "Avansert TypeScript",
            want: "Testing",
            description:
                "Erfaren TypeScript-utvikler som ønsker å bytte hjelp med avansert typing mot sterkere ferdigheter i testing.",
            level: "Avansert",
            rating: 4.9,
            image: "/images/ts-advanced.png",
        },
    ],
};

export function getListings(locale: Locale) {
    return listingsByLocale[locale];
}