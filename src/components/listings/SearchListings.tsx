import { getTranslations, type Locale } from "@/lib";
import Icon from "../../assets/Icon";

type Props = {
  value: string;
  onChange: (value: string) => void;
  locale: Locale;
};

export default function SearchListings({ value, onChange, locale }: Props) {
  const t = getTranslations(locale);

  return (
    <div className="relative flex items-center">
      <Icon
        icon="search"
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
      />

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={t.listings.filterPlaceholder}
        className="w-full rounded-full border border-white/10 bg-transparent pl-10 pr-10 py-2 text-sm text-white placeholder-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/20"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-white"
          aria-label={t.listings.clearFilterLabel}
        >
          <Icon icon="x" size={16} />
        </button>
      )}
    </div>
  );
}
