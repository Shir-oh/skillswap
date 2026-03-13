import SkillsGrid from "@/components/skills/SkillGrid";
import { skills } from "@/lib/skills";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
    const { locale } = await params;

    return (
        <div>
            <h1 className="mt-2 max-w-3xl text-5xl tracking-tight sm:text-6xl">
                Exchange developer skills. <br />
                Learn from other developers.
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium text-gray-400">
                SkillSwap is a small marketplace where developers offer programming skills
                they know and request skills they want to learn. Browse listings, discover
                opportunities, and connect with others to exchange knowledge.
            </p>

            <div className="mt-6">
                <h2 className="text-2xl font-bold">Featured skills</h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
                <SkillsGrid locale={locale} skills={skills} />
            </div>
        </div>
    );
}
