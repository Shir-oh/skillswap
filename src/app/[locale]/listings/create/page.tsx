import { tertiaryButtonClass } from "@/components/ui/buttonStyles";
import Icon from "@/assets/Icon";
import { getTranslations, Locale } from "@/lib";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function CreateListingPage({ params }: Props) {
  const { locale } = await params;
  const t = getTranslations(locale);
  const inputClass =
    "w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none placeholder:text-gray-500";

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">{t.createListing.title}</h1>
        <p className="text-gray-400">{t.createListing.description}</p>
      </div>

      <form className="space-y-6 rounded-2xl border border-white/10 p-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            {t.createListing.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder={t.createListing.placeholders.name}
            className={inputClass}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="offer" className="text-sm font-medium">
            {t.createListing.offer}
          </label>
          <input
            id="offer"
            name="offer"
            type="text"
            placeholder={t.createListing.placeholders.offer}
            className={inputClass}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="want" className="text-sm font-medium">
            {t.createListing.placeholders.want}
          </label>
          <input
            id="want"
            name="want"
            type="text"
            placeholder={t.createListing.placeholders.want}
            className={inputClass}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="text-sm font-medium">
            {t.createListing.descriptionField}
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            placeholder={t.createListing.placeholders.description}
            className={inputClass}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="level" className="text-sm font-medium">
            {t.createListing.level}
          </label>
          <div className="relative">
            <select
              id="level"
              name="level"
              defaultValue=""
              className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none appearance-none"
            >
              <option value="" disabled>
                {t.createListing.levelPlaceholder}
              </option>
              <option value="beginner">
                {t.createListing.levels.beginner}
              </option>
              <option value="intermediate">
                {t.createListing.levels.intermediate}
              </option>
              <option value="advanced">
                {t.createListing.levels.advanced}
              </option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Icon icon="caret-down" size={18} />
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <button type="submit" className={tertiaryButtonClass}>
            {t.createListing.submit}
            <Icon icon="paper-plane" size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}
