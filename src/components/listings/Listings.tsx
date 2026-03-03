import { skills } from "@/lib/skills"
import Link from "next/link"

export default function Listings({ locale }: { locale: string }) {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Skill Listings</h1>

            {skills.map((skill) => (
                <Link
                    key={skill.id}
                    href={`/${locale}/listings/${skill.id}`}
                    className="block border p-4 rounded-md"
                >
                    <h2 className="font-semibold">{skill.title}</h2>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                    <span className="text-xs">{skill.level}</span>
                </Link>
            ))}
        </div>
    )
}