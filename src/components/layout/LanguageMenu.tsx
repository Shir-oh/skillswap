"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navButtonClass } from "../ui/buttonStyles";
import { getTranslations, type Locale } from "@/lib";

type Props = {
  locale: Locale;
};

export default function LanguageMenu({ locale }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = getTranslations(locale);
  const containerRef = useRef<HTMLDivElement>(null);

  function switchLocale(locale: "en" | "no") {
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = locale;
    return `/${segments.join("/")}`;
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen((prev) => !prev)}
        className={navButtonClass}
      >
        {t.nav.language}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-24 rounded-lg bg-white/10 p-2 text-white shadow">
          <div className="flex flex-col gap-2">
            <Link
              href={switchLocale("en")}
              onClick={() => setIsOpen(false)}
              className="rounded px-3 py-1 text-sm font-semibold hover:bg-white/10"
            >
              🇺🇸 EN
            </Link>

            <Link
              href={switchLocale("no")}
              onClick={() => setIsOpen(false)}
              className="rounded px-3 py-1 text-sm font-semibold hover:bg-white/10"
            >
              🇳🇴 NO
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
