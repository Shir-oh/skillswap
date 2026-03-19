"use client";

import { useState } from "react";
import ListingRow from "./ListingRow";
import SearchListings from "./SearchListings";
import { tertiaryButtonClass } from "@/components/ui/buttonStyles";
import type { Listing } from "@/lib/listings";
import Icon from "../../assets/Icon";
import { getTranslations, type Locale } from "@/lib";
import Link from "next/link";

type Props = {
  locale: Locale;
  listings: Listing[];
  initialSearchQuery: string;
};

export default function ListingsView({
  locale,
  listings,
  initialSearchQuery,
}: Props) {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const t = getTranslations(locale);

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
          {t.listings.title}
        </h1>

        <p className="max-w-2xl text-gray-400">{t.listings.description}</p>
      </div>

      <SearchListings
        value={searchQuery}
        onChange={setSearchQuery}
        locale={locale}
      />

      <div className="space-y-4">
        {filteredListings.length === 0 ? (
          <p className="text-sm text-gray-400">{t.listings.emptyState}</p>
        ) : (
          filteredListings.map((listing) => (
            <ListingRow key={listing.id} locale={locale} listing={listing} />
          ))
        )}
      </div>

      <div className="space-y-3 rounded-2xl border border-white/10 p-6 text-center">
        <p className="text-sm text-gray-400">{t.listings.ctaText}</p>

        <Link
          href={`/${locale}/listings/create`}
          className={tertiaryButtonClass}
        >
          {t.listings.ctaButton}
          <Icon icon="arrow-right" size={16} weight="regular" />
        </Link>
      </div>
    </div>
  );
}
