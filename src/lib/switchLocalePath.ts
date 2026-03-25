import type { Locale } from "@/lib";

export function switchLocalePath(
    pathname: string,
    locale: Locale
) {
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = locale;
    return `/${segments.join("/")}`;
}