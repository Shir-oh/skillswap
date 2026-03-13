import ListingRow from "@/components/listings/ListingRow";
import { listings } from "@/lib/listings";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function ListingsPage({ params }: Props) {
    const { locale } = await params;

    return (
        <div>
            <h1 className="text-3xl font-bold tracking-tight">
                Skill swap listings
            </h1>

            <p className="mt-4 max-w-2xl text-gray-400">
                Browse developers offering skills they know and looking to learn
                something new through peer-to-peer exchanges.
            </p>

            <div className="mt-8 space-y-4">
                {listings.map((listing) => (
                    <ListingRow
                        key={listing.id}
                        locale={locale}
                        listing={listing}
                    />
                ))}
            </div>
        </div>
    );
}
