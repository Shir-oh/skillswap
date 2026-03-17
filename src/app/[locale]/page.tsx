import SkillsGrid from "@/components/skills/SkillsGrid";
import { getTranslations, type Locale } from "@/lib";
import { getSkills } from "@/lib/skills";

type Props = {
    params: Promise<{ locale: Locale }>;
};

export default async function HomePage({ params }: Props) {
    const { locale } = await params;
    const skills = getSkills(locale);
    const t = getTranslations(locale as Locale);

    return (
        <div>
            <h1 className="mt-2 max-w-3xl text-5xl tracking-tight sm:text-6xl">
                {t.home.titleLine1} <br />
                {t.home.titleLine2}
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium text-gray-400">
                {t.home.description}
            </p>

            <div className="mt-6">
                <h2 className="text-2xl font-bold">
                    {t.home.featuredSkills}</h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
                <SkillsGrid locale={locale} skills={skills} />
            </div>
        </div>
    );
}
