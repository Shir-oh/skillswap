import { getTranslations, type Locale } from "@/lib";

type Props = {
    locale: Locale;
};

export default function Footer({ locale }: Props) {
    const t = getTranslations(locale);

    return (
        <footer className="border-t border-gray-800 bg-gray-950">
            <div className="flex items-center justify-center px-4 py-4">
                <p className="text-sm text-gray-400">
                    {t.footer.copyright}
                </p>
            </div>
        </footer>
    );
}