"use client";

import { useState } from "react";
import ListingRow from "./ListingRow";
import SearchListings from "./SearchListings";
import { tertiaryButtonClass } from "@/components/ui/buttonStyles";
import type { Listing } from "@/lib/listings";
import Icon from "../ui/Icon";

type Props = {
    locale: string;
    listings: Listing[];
};

export default function ListingsView({ locale, listings }: Props) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredListings = listings.filter((listing) => {
        const query = searchQuery.toLowerCase();

        return (
            listing.name.toLowerCase().includes(query) ||
            listing.offer.toLowerCase().includes(query) ||
            listing.want.toLowerCase().includes(query) ||
            listing.description.toLowerCase().includes(query)
        );
    });

    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">
                    Find your next skill swap
                </h1>

                <p className="max-w-2xl text-gray-400">
                    Browse developers offering skills they know and looking to learn
                    something new through peer-to-peer exchanges.
                </p>
            </div>

            <SearchListings value={searchQuery} onChange={setSearchQuery}
            />

            <div className="space-y-4">
                {filteredListings.length === 0 ? (
                    <p className="text-sm text-gray-400">
                        No listings match your search.
                    </p>
                ) : (
                    filteredListings.map((listing) => (
                        <ListingRow
                            key={listing.id}
                            locale={locale}
                            listing={listing}
                        />
                    ))
                )}
            </div>

            <div className="space-y-3 rounded-2xl border border-white/10 p-6 text-center">
                <p className="text-sm text-gray-400">
                    Want to share a skill and learn something new?
                </p>

                <button
                    type="button"
                    className={tertiaryButtonClass}
                >
                    Create listing
                    <Icon
                        icon="arrow-right"
                        size={18}
                        weight="regular"
                    />
                </button>
            </div>
        </div>
    );
}