import Link from "next/link";
import { getTranslations, type Locale } from "@/lib";

type Props = {
    params: { locale: Locale };
};

export default function NotFound({ params }: Props) {
    const { locale } = params;
    const t = getTranslations(locale);

    return (
        <div className="mx-auto max-w-2xl space-y-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
                {t.notFound.title}
            </h1>

            <p className="text-gray-400">
                {t.notFound.description}
            </p>

            <Link
                href={`/${locale}`}
                className="inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
                {t.notFound.backHome}
            </Link>
        </div>
    );
}