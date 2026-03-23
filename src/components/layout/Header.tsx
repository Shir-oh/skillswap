"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LanguageMenu from "./LanguageMenu";
import SearchButton from "../ui/SearchButton";
import { navButtonClass } from "../ui/buttonStyles";
import { getTranslations, type Locale } from "@/lib";
import Logo from "@/components/ui/Logo";
import { FormEvent } from "react";

type Props = {
  locale: Locale;
};

const searchRoutes = {
  favorites: ["favorites", "favoritter"],
  home: ["home", "hjem", "start"],
};

export default function Header({ locale }: Props) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const t = getTranslations(locale);

  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      setIsSearchOpen(false);
      setSearchQuery("");
      return;
    }

    if (searchRoutes.favorites.includes(query)) {
      router.push(`/${locale}/favorites`);
    } else if (searchRoutes.home.includes(query)) {
      router.push(`/${locale}`);
    } else {
      router.push(`/${locale}/listings?search=${encodeURIComponent(query)}`);
    }

    setIsSearchOpen(false);
    setSearchQuery("");
  }

  function handleSearchToggle() {
    if (isSearchOpen) {
      setIsSearchOpen(false);
      setSearchQuery("");
      return;
    }

    setIsSearchOpen(true);
  }

  return (
    <header className="border-b border-gray-800 bg-gray-950 text-white">
      <div className="mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 whitespace-nowrap"
        >
          <Logo className="h-8 w-8 shrink-0 text-brand" />
          <span className="text-2xl font-bold leading-none">
            Skill<span className="text-brand">Swap</span>
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href={`/${locale}/listings`} className={navButtonClass}>
            {t.nav.listings}
          </Link>

          <Link href={`/${locale}/favorites`} className={navButtonClass}>
            {t.nav.favorites}
          </Link>

          <div className="h-6 w-px bg-gray-700" />

          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center rounded-full border border-white/10"
          >
            {isSearchOpen && (
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder={t.search.headerPlaceholder}
                className="w-64 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
              />
            )}

            <SearchButton
              locale={locale}
              onClick={handleSearchToggle}
              isOpen={isSearchOpen}
            />
          </form>

          <LanguageMenu locale={locale} />
        </nav>
      </div>
    </header>
  );
}
