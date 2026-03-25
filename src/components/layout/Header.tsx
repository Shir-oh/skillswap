"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { switchLocalePath } from "@/lib/switchLocalePath";
import LanguageMenu from "./LanguageMenu";
import SearchButton from "../ui/SearchButton";
import { navButtonActiveClass, navButtonClass } from "../ui/buttonStyles";
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

  const pathname = usePathname();

  const listingsHref = `/${locale}/listings`;
  const favoritesHref = `/${locale}/favorites`;
  const isListingsActive = pathname === listingsHref;
  const isFavoritesActive = pathname === favoritesHref;

  const mobileNavItemClass =
    "rounded-lg px-3 py-2 text-sm text-white hover:bg-white/5";
  const mobileNavItemActiveClass =
    "rounded-lg bg-brand px-3 py-2 text-sm font-medium text-black";

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
      <div className="relative mx-auto px-4 py-4 sm:px-6">
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
            <div className="hidden lg:flex lg:items-center lg:gap-4">
              <Link
                href={listingsHref}
                className={
                  isListingsActive ? navButtonActiveClass : navButtonClass
                }
              >
                {t.nav.listings}
              </Link>

              <Link
                href={favoritesHref}
                className={
                  isFavoritesActive ? navButtonActiveClass : navButtonClass
                }
              >
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

            <div className="flex items-center gap-2 lg:hidden">
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
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
          <div className="absolute right-4 top-full z-20 mt-3 w-56 lg:hidden">
            <div className="rounded-2xl border border-white/10 bg-gray-950 p-4">
              <nav className="flex flex-col">
                <Link
                  href={listingsHref}
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    isListingsActive
                      ? mobileNavItemActiveClass
                      : mobileNavItemClass
                  }
                >
                  {t.nav.listings}
                </Link>

                <Link
                  href={favoritesHref}
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    isFavoritesActive
                      ? mobileNavItemActiveClass
                      : mobileNavItemClass
                  }
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
                    href={switchLocalePath(pathname, "en")}
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
                    href={switchLocalePath(pathname, "no")}
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
