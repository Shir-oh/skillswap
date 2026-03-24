"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import LanguageMenu from "./LanguageMenu";
import SearchButton from "../ui/SearchButton";
import { navButtonClass } from "../ui/buttonStyles";
import { getTranslations, type Locale } from "@/lib";
import Logo from "@/components/ui/Logo";
import Icon from "@/assets/Icon";

type Props = {
  locale: Locale;
};

const searchRoutes = {
  favorites: ["favorites", "favoritter"],
  home: ["home", "hjem", "start"],
};

export default function Header({ locale }: Props) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(false);
  }

  function handleSearchToggle() {
    if (isSearchOpen) {
      setIsSearchOpen(false);
      setSearchQuery("");
      return;
    }

    setIsSearchOpen(true);
    setIsMenuOpen(false);
  }

  function handleMenuToggle() {
    setIsMenuOpen((prev) => !prev);
    setIsSearchOpen(false);
    setSearchQuery("");
  }

  return (
    <header className="border-b border-gray-800 bg-gray-950 text-white">
      <div className="mx-auto px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 whitespace-nowrap"
          >
            <Logo className="h-8 w-8 shrink-0 text-brand" />
            <span className="hidden text-2xl font-bold leading-none sm:inline">
              Skill<span className="text-brand">Swap</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex md:items-center md:gap-4">
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
            </div>

            <div className="flex items-center gap-2 md:hidden">
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
                    className="w-40 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
                  />
                )}

                <SearchButton
                  locale={locale}
                  onClick={handleSearchToggle}
                  isOpen={isSearchOpen}
                />
              </form>

              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
                onClick={handleMenuToggle}
                className="inline-flex items-center justify-center rounded-full border border-white/10 p-2"
              >
                <Icon icon="list" size={20} weight="regular" />
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-3 md:hidden">
            <div className="ml-auto w-56 rounded-2xl border border-white/10 bg-gray-950 p-4">
              <nav className="flex flex-col">
                <Link
                  href={`/${locale}/listings`}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm hover:bg-white/5"
                >
                  {t.nav.listings}
                </Link>

                <Link
                  href={`/${locale}/favorites`}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm hover:bg-white/5"
                >
                  {t.nav.favorites}
                </Link>
              </nav>

              <div className="my-3 h-px bg-white/10" />

              <div className="space-y-2">
                <p className="px-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {t.nav.language.label}
                </p>

                <div className="flex flex-col">
                  <Link
                    href="/en"
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm ${
                      locale === "en"
                        ? "bg-brand font-medium text-black"
                        : "text-white hover:bg-white/5"
                    }`}
                  >
                    English
                  </Link>

                  <Link
                    href="/no"
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm ${
                      locale === "no"
                        ? "bg-brand font-medium text-black"
                        : "text-white hover:bg-white/5"
                    }`}
                  >
                    Norsk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
