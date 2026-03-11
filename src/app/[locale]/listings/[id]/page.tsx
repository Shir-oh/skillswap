import { skills } from "@/lib/skills";
import { notFound } from "next/navigation";
import Image from "next/image";
import FavoriteButton from "@/components/favorites/FavoriteButton";

type Props = { params: Promise<{ id: string }> }

export default async function ListingsDetailPage({ params }: Props) {
    const { id } = await params;

    const skill = skills.find((s) => s.id === id);

    if (!skill) notFound();

    return (
        <div className="flex items-center rounded-2xl bg-white p-6 sm:rounded-4xl sm:p-10 dark:bg-transparent dark:outline dark:outline-white/10">
            <div className="space-y-4">
                <div className="text-xs text-gray-400">ID: {skill.id}</div>
                <h1 className="text-2xl font-bold">{skill.title}</h1>
                <p className="text-gray-600">{skill.description}</p>
                <div className="text-sm">
                    Level: <span className="font-medium">{skill.level}</span>
                </div>

                <Image src={skill.image} alt={skill.title} width={500} height={500} />
                <FavoriteButton skillId={skill.id} />
            </div>
        </div>
    )
}