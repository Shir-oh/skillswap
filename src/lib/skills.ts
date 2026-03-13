export type Skill = {
    id: string;
    title: string;
    description: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    rating: number;
    image: string;
};

export const skills: Skill[] = [
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
];