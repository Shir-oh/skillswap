"use client"

import { skills } from "@/lib/skills"
import Listings from "@/components/listings/Listings"
import { useEffect, useState } from "react"

type Props = {
    locale: string
}

export default function FavoritesList({ locale }: Props) {
    const [favoriteIds] = useState<string[]>(() => {
        const stored = localStorage.getItem("favorites")
        return stored ? JSON.parse(stored) : []
    })

    useEffect(() => { }, [])

    const favoriteSkills = skills.filter((skill) =>
        favoriteIds.includes(skill.id)
    )

    if (favoriteSkills.length === 0) {
        return <p>No favorites yet.</p>
    }

    return <Listings locale={locale} skills={favoriteSkills} />
}