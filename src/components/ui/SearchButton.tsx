"use client";

import Icon from "../../assets/Icon";
import { getTranslations, type Locale } from "@/lib";

type Props = {
  locale: Locale;
  onClick: () => void;
  isOpen: boolean;
};

export default function SearchButton({ locale, onClick, isOpen }: Props) {
  const t = getTranslations(locale);

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={t.search.ariaLabel}
      className={`inline-flex items-center justify-center px-4 py-2 ${
        isOpen ? "border-l border-white/10" : ""
      }`}
    >
      <Icon icon="search" size={18} weight="regular" />
    </button>
  );
}
