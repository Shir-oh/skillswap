import { notFound } from "next/navigation";
import SkillsGrid from "@/components/skills/SkillsGrid";
import { getTranslations } from "@/lib";
import { getSkills } from "@/lib/skills";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "no") {
    notFound();
  }

  const skills = getSkills(locale);
  const t = getTranslations(locale);

  return (
    <div>
      <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {t.home.titleLine1} <br />
        {t.home.titleLine2}
      </h1>

      <p className="mt-6 max-w-2xl text-base font-medium text-gray-400 sm:text-lg">
        {t.home.description}
      </p>

      <div className="mt-6">
        <h2 className="text-2xl font-bold">{t.home.featuredSkills}</h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <SkillsGrid locale={locale} skills={skills} />
      </div>
    </div>
  );
}