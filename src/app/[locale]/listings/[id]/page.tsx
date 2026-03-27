import { notFound } from "next/navigation";
import Image from "next/image";
import FavoriteButton from "@/components/favorites/FavoriteButton";
import Icon from "@/assets/Icon";
import { getListings } from "@/lib/listings";
import { getTranslations } from "@/lib";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export default async function ListingsDetailPage({ params }: Props) {
  const { locale, id } = await params;

  if (locale !== "en" && locale !== "no") {
    notFound();
  }

  const listings = getListings(locale);
  const listing = listings.find((listing) => listing.id === id);

  if (!listing) notFound();

  const t = getTranslations(locale);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              {listing.name}
            </h1>

            <p className="max-w-2xl text-gray-400">{listing.description}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {t.listingDetail.offers}
              </p>
              <p className="mt-2 font-medium">{listing.offer}</p>
            </div>

            <div className="rounded-2xl border border-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {t.listingDetail.wants}
              </p>
              <p className="mt-2 font-medium">{listing.want}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <span>
              {t.listingDetail.level}: {listing.level}
            </span>

            <span className="inline-flex items-center gap-1">
              <Icon
                weight="fill"
                icon="star"
                size={14}
                className="text-brand"
              />
              {listing.rating}
            </span>
          </div>

          <FavoriteButton listingId={listing.id} locale={locale} />
        </div>

        <div className="rounded-2xl border border-white/10 p-4">
          <Image
            src={listing.image}
            alt={listing.name}
            width={600}
            height={600}
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}