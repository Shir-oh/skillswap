import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params

    if (locale !== "en" && locale !== "no") {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            < Header locale={locale} />
            <main className="p-8">{children}</main>
            <Footer />
        </div >
    )
}