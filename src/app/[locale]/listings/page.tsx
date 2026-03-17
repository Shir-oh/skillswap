import ListingsView from "@/components/listings/ListingsView";
import { type Locale } from "@/lib";
import { getListings } from "@/lib/listings";

type Props = {
    params: Promise<{ locale: Locale }>;
};

export default async function ListingsPage({ params }: Props) {
    const { locale } = await params;
    const listings = getListings(locale);

    return <ListingsView locale={locale} listings={listings} />;
}