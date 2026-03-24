import Icon from "@/assets/Icon";
import { getTranslations, type Locale } from "@/lib";

type Props = {
  locale: Locale;
};

export default function Footer({ locale }: Props) {
  const t = getTranslations(locale);

  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-gray-400 sm:flex-row">
        <p>{t.footer.copyright}</p>

        <a
          href="https://github.com/your-username/skillswap"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Icon icon="github" size={16} />
          GitHub
        </a>
      </div>
    </footer>
  );
}
