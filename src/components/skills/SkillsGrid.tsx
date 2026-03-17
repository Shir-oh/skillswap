import type { Skill } from "@/lib/skills";
import SkillCard from "./SkillsCard";
import { Locale } from "@/lib";

type Props = {
    locale: Locale;
    skills: Skill[];
};

export default function SkillsGrid({ locale, skills }: Props) {
    return (
        <>
            {skills.map((skill) => (
                <SkillCard
                    key={skill.id}
                    locale={locale}
                    skill={skill}
                />
            ))}
        </>
    );
}
