export type Skill = {
    id: string
    title: string
    description: string
    level: "Beginner" | "Intermediate" | "Advanced"
    image: string
}

export const skills: Skill[] = [
    {
        id: "react-basics",
        title: "React Basics",
        description: "Learn components, props, and state.",
        level: "Beginner",
        image: "/images/react-basics.png"
    },
    {
        id: "ts-intermediate",
        title: "Intermediate TypeScript",
        description: "Generics, utility types, deep inference.",
        level: "Intermediate",
        image: "/images/intermediate-ts.png"
    },
    {
        id: "ts-advanced",
        title: "Advanced TypeScript",
        description: "Generics, utility types, deep inference.",
        level: "Advanced",
        image: "/images/ts-advanced.png"
    }
]