import ListingsView from "@/components/listings/ListingsView";
import { listings } from "@/lib/listings";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function ListingsPage({ params }: Props) {
    const { locale } = await params;

    return <ListingsView locale={locale} listings={listings} />;
}