"use client";

import { useState } from "react";
import Icon from "../../assets/Icon";
import { secondaryButtonClass } from "../ui/buttonStyles";
import { getTranslations, type Locale } from "@/lib";

type Props = {
  listingId: string;
  locale: Locale;
};

function readFavorites(): string[] {
  try {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export default function FavoriteButton({ listingId, locale }: Props) {
  const [isFavorited, setIsFavorited] = useState(() => {
    return readFavorites().includes(listingId);
  });

  const t = getTranslations(locale);

  function toggleFavorite() {
    const favorites = readFavorites();

    let updated: string[];

    if (favorites.includes(listingId)) {
      updated = favorites.filter((id: string) => id !== listingId);
      setIsFavorited(false);
    } else {
      updated = [...favorites, listingId];
      setIsFavorited(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
    window.dispatchEvent(new Event("favorites-changed"));
  }

  return (
    <button
      type="button"
      onClick={toggleFavorite}
      aria-pressed={isFavorited}
      className={secondaryButtonClass}
    >
      <Icon
        icon="heart"
        size={16}
        weight={isFavorited ? "fill" : "regular"}
        className={isFavorited ? "text-red-400" : "text-white"}
      />
      {isFavorited ? t.favorites.saved : t.favorites.save}
    </button>
  );
}
