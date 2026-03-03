import Listings from "@/components/listings/Listings"

type Props = {
    params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
    const { locale } = await params

    return (
        <div>
            {/* <div>LOCALE ON PAGE: {locale}</div> */}
            <div>Home</div>
            <Listings locale={locale} />
        </div>
    )
}