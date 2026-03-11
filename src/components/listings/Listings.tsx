import type { Skill } from "@/lib/skills";
import Link from "next/link";
import Image from "next/image";

type Props = {
    locale: string
    skills: Skill[]
}

export default function Listings({ locale, skills }: Props) {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Skill Listings</h1>

            {skills.map((skill) => (
                <Link
                    key={skill.id}
                    href={`/${locale}/listings/${skill.id}`}
                    className="flex items-center rounded-2xl bg-white p-6 sm:rounded-4xl sm:p-10 dark:bg-transparent dark:outline dark:outline-white/10 gap-4"
                >

                    <Image src={skill.image}
                        alt={skill.title}
                        width={120}
                        height={120}
                        className="rounded-md object-cover shrink-0"
                    />

                    <div className="space-y-1">
                        <h2 className="font-semibold">{skill.title}</h2>
                        <p className="text-sm text-gray-600">{skill.description}</p>
                        <span className="text-xs">{skill.level}</span>

                    </div>
                </Link>
            ))
            }
        </div>
    )
}