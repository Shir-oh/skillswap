import FavoritesList from "@/components/favorites/FavoritesList"

type Props = {
    params: Promise<{ locale: string }>
}

export default async function FavoritesPage({ params }: Props) {
    const { locale } = await params

    return <FavoritesList locale={locale} />
}