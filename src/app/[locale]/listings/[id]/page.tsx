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
            <div className="space-y-4">
                <div className="text-xs text-gray-400">ID: {listing.id}</div>

                <h1 className="text-2xl font-bold">{listing.offer}</h1>

                <p className="text-sm text-gray-400">
                    {listing.name} wants to learn{" "}
                    <span className="text-white">{listing.want}</span>.
                </p>

                <p className="text-gray-400">{listing.description}</p>

                <div className="text-sm">
                    Level: <span className="font-medium">{listing.level}</span>
                </div>

                <div className="text-sm">
                    Rating: <span className="font-medium">⭐ {listing.rating}</span>
                </div>

                <Image
                    src={listing.image}
                    alt={listing.name}
                    width={500}
                    height={500}
                    className="rounded-xl"
                />

                <FavoriteButton listingId={listing.id} />
            </div>
        </div>
    );
}