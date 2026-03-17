import en from "./en";
import no from "./no";

export const messages = {
    en,
    no,
};

export type Locale = keyof typeof messages;

export function getTranslations(locale: Locale) {
    return messages[locale];
}