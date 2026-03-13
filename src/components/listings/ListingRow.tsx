import type { Listing } from "@/lib/listings";
import Link from "next/link";
import Image from "next/image";

type Props = {
    locale: string;
    listing: Listing;
};

export default function ListingRow({ locale, listing }: Props) {
    return (
        <Link
            href={`/${locale}/listings/${listing.id}`}
            className="flex items-center gap-4 rounded-2xl p-6 outline outline-white/10 transition hover:bg-white/10"
        >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                <Image
                    src={listing.image}
                    alt={listing.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="min-w-0 flex-1 space-y-1">
                <p className="text-sm text-gray-400">{listing.name}</p>

                <h2 className="font-semibold">
                    {listing.offer}
                    <span className="mx-2 text-gray-500">→</span>
                    {listing.want}
                </h2>

                <p className="text-sm text-gray-400">{listing.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{listing.level}</span>
                    <span>⭐ {listing.rating}</span>
                </div>
            </div>

            <span className="text-lg text-gray-500">›</span>
        </Link>
    );
}
