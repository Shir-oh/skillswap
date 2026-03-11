import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
        <div className="min-h-screen">
            < Header locale={locale} />
            <main className="p-8">
                <h1 className="mt-2 max-w-3xl dark:text-white text-5xl tracking-tight sm:text-6xl text-pretty">Lorem Ipsum
                </h1>

                <div>
                    <p className="max-w-2xl text-lg/7 font-medium text-pretty text-gray-600 dark:text-gray-400 p-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className="p-8">
                    {children}
                </div>
            </main>
            <Footer />
        </div >
    )
}