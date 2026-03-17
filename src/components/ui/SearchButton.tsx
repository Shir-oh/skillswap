"use client";

import { secondaryButtonClass } from "./buttonStyles";
import Icon from "./Icon";
import { getTranslations, type Locale } from "@/lib/i18n";

type Props = {
    locale: Locale;
};

export default function SearchButton({ locale }: Props) {

    const t = getTranslations(locale);

    return (
        <button className={secondaryButtonClass} aria-label={t.search.ariaLabel}>
            <Icon
                icon="search"
                size={18}
                weight="regular" />
        </button>
    )
}