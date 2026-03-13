import Link from "next/link";
import LanguageMenu from "./LanguageMenu";
import { navButtonClass } from "../ui/buttonStyles";
import SearchButton from "../ui/SearchButton";

type Props = {
    locale: string;
};

export default function Header({ locale }: Props) {
    return (
        <header className="border-b border-gray-800 bg-gray-950 text-white">
            <div className="mx-auto flex items-center justify-between px-6 py-4">
                <Link href={`/${locale}`} className="text-2xl font-bold">
                    Skill
                    <span className="text-brand">Swap</span>
                </Link>

                <nav className="flex items-center gap-4">
                    <Link href={`/${locale}/listings`} className={navButtonClass}>
                        Listings
                    </Link>

                    <Link href={`/${locale}/favorites`} className={navButtonClass}>
                        Favorites
                    </Link>

                    <div className="h-6 w-px bg-gray-700" />
                    <SearchButton />
                    <LanguageMenu />
                </nav>
            </div >
        </header >
    );
}