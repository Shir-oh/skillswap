import Listings from "@/components/listings/Listings";
import { skills } from "@/lib/skills";

type Props = {
    params: Promise<{ locale: string }>
}

export default async function ListingsPage({ params }: Props) {
    const { locale } = await params;
    return (
        <div className="space-y-4">
            <div className="text-sm">Listings Page Maker</div>
            <Listings locale={locale} skills={skills} />
        </div>

    )
}