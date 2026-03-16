"use client";

import { useState } from "react";
import Icon from "../ui/Icon";
import { secondaryButtonClass } from "../ui/buttonStyles";

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
            className={secondaryButtonClass}
        >
            <Icon
                icon="heart"
                size={18}
                weight={isFavorited ? "fill" : "regular"}
                className={isFavorited ? "text-red-400" : "text-white"}
            />
            {isFavorited ? "Saved" : "Save"}
        </button>
    );
}