import Listings from "@/components/listings/Listings";
import { skills } from "@/lib/skills";

type Props = {
    params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
    const { locale } = await params;
    return (
        <div >
            <Listings locale={locale} skills={skills} />
        </div>
    )
}