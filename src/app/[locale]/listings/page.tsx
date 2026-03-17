import ListingsView from "@/components/listings/ListingsView";
import { type Locale } from "@/lib";
import { getListings } from "@/lib/listings";

type Props = {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ search?: string }>;
};

export default async function ListingsPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { search } = await searchParams;

  const listings = getListings(locale);

  return (
    <ListingsView
      locale={locale}
      listings={listings}
      initialSearchQuery={search ?? ""}
    />
  );
}
