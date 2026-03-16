import FavoritesList from "@/components/favorites/FavoritesList";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function FavoritesPage({ params }: Props) {
    const { locale } = await params;

    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">
                    Favorites
                </h1>

                <p className="max-w-2xl text-gray-400">
                    Listings you saved to revisit later.
                </p>
            </div>

            <FavoritesList locale={locale} />
        </div>
    );
}