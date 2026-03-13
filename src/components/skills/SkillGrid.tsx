import type { Skill } from "@/lib/skills";
import SkillCard from "./SkillCard";

type Props = {
    locale: string;
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
