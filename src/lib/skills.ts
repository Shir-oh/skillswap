import type { Locale } from "@/lib";

export type Skill = {
    id: string;
    title: string;
    description: string;
    level: string;
    rating: number;
    image: string;
};

const skillsByLocale: Record<Locale, Skill[]> = {
    en: [
        {
            id: "react-basics",
            title: "React Basics",
            description: "Learn components, props, and state.",
            level: "Beginner",
            rating: 4.8,
            image: "/images/react-basics.png",
        },
        {
            id: "ts-intermediate",
            title: "Intermediate TypeScript",
            description: "Generics, utility types, deep inference.",
            level: "Intermediate",
            rating: 4.6,
            image: "/images/intermediate-ts.png",
        },
        {
            id: "ts-advanced",
            title: "Advanced TypeScript",
            description: "Generics, utility types, deep inference.",
            level: "Advanced",
            rating: 4.9,
            image: "/images/ts-advanced.png",
        },
    ],
    no: [
        {
            id: "react-basics",
            title: "React-grunnleggende",
            description: "Lær komponenter, props og state.",
            level: "Nybegynner",
            rating: 4.8,
            image: "/images/react-basics.png",
        },
        {
            id: "ts-intermediate",
            title: "TypeScript på mellomnivå",
            description: "Generics, utility types og dyp inferens.",
            level: "Mellomnivå",
            rating: 4.6,
            image: "/images/intermediate-ts.png",
        },
        {
            id: "ts-advanced",
            title: "Avansert TypeScript",
            description: "Generics, utility types og dyp inferens.",
            level: "Avansert",
            rating: 4.9,
            image: "/images/ts-advanced.png",
        },
    ],
};

export function getSkills(locale: Locale) {
    return skillsByLocale[locale];
}