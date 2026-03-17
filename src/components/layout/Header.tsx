import Link from "next/link";
import LanguageMenu from "./LanguageMenu";
import { navButtonClass } from "../ui/buttonStyles";
import SearchButton from "../ui/SearchButton";
import { getTranslations, type Locale } from "@/lib/index";

type Props = {
    locale: Locale;
};

export default function Header({ locale }: Props) {
    const t = getTranslations(locale);

    return (
        <header className="border-b border-gray-800 bg-gray-950 text-white">
            <div className="mx-auto flex items-center justify-between px-6 py-4">
                <Link href={`/${locale}`} className="text-2xl font-bold">
                    Skill
                    <span className="text-brand">Swap</span>
                </Link>

                <nav className="flex items-center gap-4">
                    <Link href={`/${locale}/listings`} className={navButtonClass}>
                        {t.nav.listings}
                    </Link>

                    <Link href={`/${locale}/favorites`} className={navButtonClass}>
                        {t.nav.favorites}
                    </Link>

                    <div className="h-6 w-px bg-gray-700" />

                    <SearchButton locale={locale} />
                    <LanguageMenu locale={locale} />
                </nav>
            </div >
        </header >
    );
}