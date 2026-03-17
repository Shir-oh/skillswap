"use client";

import { useEffect, useState } from "react";
import ListingRow from "@/components/listings/ListingRow";
import { getListings } from "@/lib/listings";
import { getTranslations, type Locale } from "@/lib";

type Props = {
    locale: Locale;
};

function readFavoriteIds() {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
}

export default function FavoritesList({ locale }: Props) {
    const [favoriteIds, setFavoriteIds] = useState<string[]>(readFavoriteIds);
    const listings = getListings(locale);
    const t = getTranslations(locale);

    useEffect(() => {
        function handleFavoritesChanged() {
            setFavoriteIds(readFavoriteIds());
        }

        window.addEventListener("favorites-changed", handleFavoritesChanged);
        window.addEventListener("storage", handleFavoritesChanged);

        return () => {
            window.removeEventListener("favorites-changed", handleFavoritesChanged);
            window.removeEventListener("storage", handleFavoritesChanged);
        };
    }, []);

    const favoriteListings = listings.filter((listing) =>
        favoriteIds.includes(listing.id)
    );

    if (favoriteListings.length === 0) {
        return (
            <div className="rounded-2xl border border-white/10 p-6 text-center">
                <p className="text-sm text-gray-400">
                    {t.favorites.emptyState}
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {favoriteListings.map((listing) => (
                <ListingRow
                    key={listing.id}
                    locale={locale}
                    listing={listing}
                />
            ))}
        </div>
    );
}