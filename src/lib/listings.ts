export type Listing = {
    id: string;
    name: string;
    offer: string;
    want: string;
    description: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    rating: number;
    image: string;
}

export const listings: Listing[] = [
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
];