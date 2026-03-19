import type { Listing } from "@/lib/listings";
import Link from "next/link";
import Image from "next/image";
import Icon from "../../assets/Icon";
import { getTranslations, type Locale } from "@/lib";

type Props = {
  locale: Locale;
  listing: Listing;
};

export default function ListingRow({ locale, listing }: Props) {
  const t = getTranslations(locale);

  return (
    <Link
      href={`/${locale}/listings/${listing.id}`}
      className="flex items-center gap-4 rounded-2xl p-6 outline outline-white/10 transition hover:bg-white/10"
    >
      <Image
        src={listing.image}
        alt={listing.name}
        width={80}
        height={80}
        className="shrink-0 rounded-md object-cover"
      />

      <div className="min-w-0 flex-1 space-y-3">
        <p className="text-sm text-gray-400">{listing.name}</p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-white/5 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              {t.listings.offers}
            </p>
            <p className="mt-1 font-medium">{listing.offer}</p>
          </div>

          <div className="rounded-xl bg-white/5 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              {t.listings.wants}
            </p>
            <p className="mt-1 font-medium">{listing.want}</p>
          </div>
        </div>

        <p className="text-sm text-gray-400">{listing.description}</p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{listing.level}</span>
          <span className="inline-flex items-center gap-1">
            <Icon icon="star" size={16} weight="fill" className="text-brand" />
            {listing.rating}
          </span>
        </div>
      </div>

      <Icon icon="caret-right" size={16} className="shrink-0 text-gray-500" />
    </Link>
  );
}
