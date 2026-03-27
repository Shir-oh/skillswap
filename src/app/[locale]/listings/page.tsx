import { notFound } from "next/navigation";
import ListingsView from "@/components/listings/ListingsView";
import { getListings } from "@/lib/listings";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ search?: string }>;
};

export default async function ListingsPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { search } = await searchParams;

  if (locale !== "en" && locale !== "no") {
    notFound();
  }

  const listings = getListings(locale);

  return (
    <ListingsView
      locale={locale}
      listings={listings}
      initialSearchQuery={search ?? ""}
    />
  );
}