import FavoritesList from "@/components/favorites/FavoritesList";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function FavoritesPage({ params }: Props) {
    const { locale } = await params;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Favorites</h1>
            <FavoritesList locale={locale} />
        </div>
    );
}