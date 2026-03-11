"use client";

import { useState } from "react";
import { HeartIcon } from "@phosphor-icons/react";

type Props = {
    skillId: string
}

export default function FavoriteButton({ skillId }: Props) {
    const [isFavorited, setIsFavorited] = useState(() => {
        const stored = localStorage.getItem("favorites")
        const favorites = stored ? JSON.parse(stored) : []
        return favorites.includes(skillId)
    })

    function toggleFavorite() {
        const stored = localStorage.getItem("favorites")
        const favorites = stored ? JSON.parse(stored) : []

        let updated

        if (favorites.includes(skillId)) {
            updated = favorites.filter((id: string) => id !== skillId)
            setIsFavorited(false)
        } else {
            updated = [...favorites, skillId]
            setIsFavorited(true)
        }

        localStorage.setItem("favorites", JSON.stringify(updated))
    }

    return (
        <button
            onClick={toggleFavorite}
            className="flex items-center gap-2 border px-3 py-1 rounded"
        >
            <HeartIcon size={20} weight={isFavorited ? "fill" : "regular"} />
            {isFavorited ? "Favorited" : "Favorite"}
        </button>
    )
}