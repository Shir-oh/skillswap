import Listings from "@/components/listings/Listings";

type Props = {
    params: Promise<{ locale: string }>
}

// listings page
export default async function ListingsPage({ params }: Props) {
    const { locale } = await params
    return (
        <div className="space-y-4">
            <div className="text-sm">Listings Page Maker</div>
            <Listings locale={locale} />
        </div>
    )
}