import { getTranslations, type Locale } from "@/lib";
import Icon from "../ui/Icon";

type Props = {
  value: string;
  onChange: (value: string) => void;
  locale: Locale;
};

export default function SearchListings({ value, onChange, locale }: Props) {
  const t = getTranslations(locale);

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={t.listings.filterPlaceholder}
        className="w-full rounded-full border border-white/10 bg-transparent px-4 py-2 pr-10 text-sm text-white placeholder-gray-500 focus:outline-none"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          aria-label={t.listings.clearFilterLabel}
        >
          <Icon icon="x" size={16} />
        </button>
      )}
    </div>
  );
}
