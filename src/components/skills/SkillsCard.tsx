"use client";

import type { Skill } from "@/lib/skills";
import Link from "next/link";
import Image from "next/image";
import Icon from "../ui/Icon";

type Props = {
    locale: string;
    skill: Skill;
};

export default function SkillsCard({ locale, skill }: Props) {
    return (
        <Link
            href={`/${locale}/listings`}
            className="block rounded-2xl p-4 outline outline-white/10 transition hover:bg-white/10"
        >
            <Image
                src={skill.image}
                alt={skill.title}
                width={400}
                height={240}
                className="h-48 w-full rounded-xl object-cover"
            />

            <div className="mt-4 space-y-2">
                <h2 className="font-semibold">{skill.title}</h2>

                <p className="text-sm text-gray-400">{skill.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{skill.level}</span>
                    <span className="inline-flex items-center gap-1">
                        <Icon
                            icon="star"
                            size={14} weight="fill"
                            className="text-brand"
                        />
                        {skill.rating}
                    </span>
                </div>
            </div>
        </Link>
    );
}