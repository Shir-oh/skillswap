export type Skill = {
    id: string
    title: string
    description: string
    level: "Beginner" | "Intermediate" | "Advanced"
}

export const skills: Skill[] = [
    {
        id: "react-basics",
        title: "React Basics",
        description: "Learn components, props, and state.",
        level: "Beginner",
    },
    {
        id: "ts-intermediate",
        title: "Intermediate TypeScript",
        description: "Generics, utility types, deep inference.",
        level: "Intermediate",
    },
    {
        id: "ts-advanced",
        title: "Advanced TypeScript",
        description: "Generics, utility types, deep inference.",
        level: "Advanced",
    }
]