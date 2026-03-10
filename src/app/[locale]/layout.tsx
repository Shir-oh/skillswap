import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>
}

export default async function Layout({ children, params }: Props) {
    const { locale } = await params

    if (locale !== "en" && locale !== "no") {
        notFound();
    }

    return (
        <div className="p-8 space-y-4">
            <Header locale={locale} />
            {children}
        </div >
    )
}