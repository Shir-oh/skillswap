"use client";

import { useState } from "react";
import { HeartIcon } from "@phosphor-icons/react";

type Props = {
    listingId: string;
};

export default function FavoriteButton({ listingId }: Props) {
    const [isFavorited, setIsFavorited] = useState(() => {
        const stored = localStorage.getItem("favorites");
        const favorites = stored ? JSON.parse(stored) : [];
        return favorites.includes(listingId);
    });

    function toggleFavorite() {
        const stored = localStorage.getItem("favorites");
        const favorites = stored ? JSON.parse(stored) : [];

        let updated;

        if (favorites.includes(listingId)) {
            updated = favorites.filter((id: string) => id !== listingId);
            setIsFavorited(false);
        } else {
            updated = [...favorites, listingId];
            setIsFavorited(true);
        }

        localStorage.setItem("favorites", JSON.stringify(updated));
    }

    return (
        <button
            type="button"
            onClick={toggleFavorite}
            className="flex items-center gap-2 rounded border px-3 py-1"
        >
            <HeartIcon size={20} weight={isFavorited ? "fill" : "regular"} />
            {isFavorited ? "Favorited" : "Favorite"}
        </button>
    );
}