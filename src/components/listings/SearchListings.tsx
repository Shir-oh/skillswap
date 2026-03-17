import { getTranslations, type Locale } from "@/lib";

type Props = {
    value: string;
    onChange: (value: string) => void;
    locale: Locale;
};

export default function SearchListings({ value, onChange, locale }: Props) {
    const t = getTranslations(locale);

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder={t.listings.searchPlaceholder}
                className="w-full rounded-full border border-white/10 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
            />
        </div>
    );
}