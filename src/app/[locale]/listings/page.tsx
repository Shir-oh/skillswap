import ListingRow from "@/components/listings/ListingRow";
import PopularSkills from "@/components/listings/PopularSkills";
import SearchListings from "@/components/listings/SearchListings";
import { tertiaryButtonClass } from "@/components/ui/buttonStyles";
import { listings } from "@/lib/listings";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function ListingsPage({ params }: Props) {
    const { locale } = await params;

    return (
        <div className="space-y-8">
            <PopularSkills />

            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">
                    Find your next skill swap
                </h1>

                <p className="max-w-2xl text-gray-400">
                    Browse developers offering skills they know and looking to learn
                    something new through peer-to-peer exchanges.
                </p>
            </div>

            <SearchListings />

            <div className="space-y-4">
                {listings.map((listing) => (
                    <ListingRow
                        key={listing.id}
                        locale={locale}
                        listing={listing}
                    />
                ))}
            </div>

            <div className="space-y-3 rounded-2xl border border-white/10 p-6 text-center">
                <p className="text-sm text-gray-400">
                    Want to share a skill and learn something new?
                </p>

                <button
                    type="button"
                    className={tertiaryButtonClass}
                >
                    Create listing
                </button>
            </div>
        </div>
    );
}