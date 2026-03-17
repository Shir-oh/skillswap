import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Locale } from "@/lib";

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params

    if (locale !== "en" && locale !== "no") {
        notFound();
    }
    return (
        <>
            <Header locale={locale} />
            <main className="p-8">{children}</main>
            <Footer locale={locale} />
        </>
    );
}