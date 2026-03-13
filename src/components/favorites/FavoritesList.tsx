"use client";

import { listings } from "@/lib/listings";
import { useState } from "react";

type Props = {
    locale: string;
};

export default function FavoritesList({ locale }: Props) {
    const [favoriteIds] = useState<string[]>(() => {
        const stored = localStorage.getItem("favorites");
        return stored ? JSON.parse(stored) : [];
    });

    const favoriteListings = listings.filter((listing) =>
        favoriteIds.includes(listing.id)
    );

    if (favoriteListings.length === 0) {
        return <p>No favorites yet.</p>;
    }

    return;
}