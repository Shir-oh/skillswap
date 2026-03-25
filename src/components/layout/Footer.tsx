import Icon from "@/assets/Icon";
import { getTranslations, type Locale } from "@/lib";

type Props = {
  locale: Locale;
};

export default function Footer({ locale }: Props) {
  const t = getTranslations(locale);

  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="mx-auto flex flex-col items-center justify-center gap-2 px-4 py-8 text-sm text-gray-400 sm:px-6">
        <p>{t.footer.copyright}</p>

        <a
          href="https://github.com/Shir-oh/skillswap"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Icon icon="github" size={14} weight="fill" />
          GitHub
        </a>
      </div>
    </footer>
  );
}
