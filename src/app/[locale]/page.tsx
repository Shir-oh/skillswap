import Listings from "@/components/listings/Listings";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";

type Props = {
    params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
    const { locale } = await params;
    return (
        <div >
            {/* <Header /> */}
            <Listings locale={locale} />
            {/* <Footer /> */}
        </div>
    )
}