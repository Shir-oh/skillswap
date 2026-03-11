import Link from "next/link";
import LanguageMenu from "./LanguageMenu";
import { navButtonClass, secondaryButtonClass } from "../ui/buttonStyles";
import SearchButton from "../ui/SearchButton";

type Props = {
    locale: string;
};

export default function Header({ locale }: Props) {
    return (
        <header className="dark:bg-gray-950 dark:text-white">
            <div className="mx-auto flex items-center justify-between px-6 py-4">
                <Link href={`/${locale}`} className="text-2xl font-bold">
                    SkillSwap
                </Link>

                <nav className="flex items-center gap-4">
                    <Link href={`/${locale}/listings`} className={navButtonClass}>
                        Listings
                    </Link>

                    <Link href={`/${locale}/favorites`} className={navButtonClass}>
                        Favorites
                    </Link>
                    <SearchButton />
                    <LanguageMenu />

                </nav>
            </div>
        </header>
    );
}