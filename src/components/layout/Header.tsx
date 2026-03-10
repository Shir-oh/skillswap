import Link from "next/link";

type Props = {
    locale: string;
}

// logo, navigation, search profile button
export default function Header({ locale }: Props) {
    return (
        <div className="bg-amber-600 flex items-center justify-between">
            <Link href={`/${locale}`} className="text-2xl font-bold">
                SkillSwap
            </Link>

            <nav className="flex items-center gap-4">
                <Link href={`/${locale}/listings`} className="px-3 py-1 border rounded">
                    Listings
                </Link>

                <Link href={`/${locale}/favorites`} className="px-3 py-1 border rounded">
                    Favorites
                </Link>

                <Link href="/en" className="px-3 py-1 border rounded">
                    EN
                </Link>
                <Link href="/en" className="px-3 py-1 border rounded">
                    NO
                </Link>
            </nav>

        </div>
    )
}