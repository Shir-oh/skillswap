import Link from "next/link";

type Props = {
    locale: string;
}

export default function Header({ locale }: Props) {
    return (
        <header className="bg-red-500">
            <div className="flex items-center justify-between px-6 py-4">
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

                    <button className="px-3 py-1 border rounded">Login</button>


                    {/* <Link href="/en" className="px-3 py-1 border rounded">
                        EN
                    </Link>
                    <Link href="/en" className="px-3 py-1 border rounded">
                        NO
                    </Link> */}

                </nav>
            </div>
        </header >
    )
}