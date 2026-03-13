import { notFound } from "next/navigation";
import Image from "next/image";
import FavoriteButton from "@/components/favorites/FavoriteButton";
import { listings } from "@/lib/listings";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function ListingsDetailPage({ params }: Props) {
    const { id } = await params;

    const listing = listings.find((listing) => listing.id === id);

    if (!listing) notFound();

    return (
        <div className="rounded-2xl p-6 outline outline-white/10 sm:p-10">
            <div className="space-y-6">
                <div className="space-y-2">
                    <p className="text-sm text-gray-400">{listing.name}</p>

                    <h1 className="text-2xl font-bold">
                        {listing.offer}
                        <span className="mx-2 text-gray-500">→</span>
                        {listing.want}
                    </h1>

                    <p className="text-gray-400">{listing.description}</p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    <span>Level: {listing.level}</span>
                    <span>Rating: ⭐ {listing.rating}</span>
                </div>

                <Image
                    src={listing.image}
                    alt={listing.name}
                    width={500}
                    height={500}
                    className="w-full max-w-md rounded-xl object-cover"
                />

                <FavoriteButton listingId={listing.id} />
            </div>
        </div>
    );
}