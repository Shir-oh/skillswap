import FavoritesList from "@/components/favorites/FavoritesList";
import { getTranslations, type Locale } from "@/lib";

type Props = {
    params: Promise<{ locale: Locale }>;
};

export default async function FavoritesPage({ params }: Props) {
    const { locale } = await params;
    const t = getTranslations(locale);

    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">
                    {t.favorites.title}
                </h1>

                <p className="max-w-2xl text-gray-400">
                    {t.favorites.description}
                </p>
            </div>

            <FavoritesList locale={locale} />
        </div>
    );
}