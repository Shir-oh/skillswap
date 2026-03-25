"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { switchLocalePath } from "@/lib/switchLocalePath";
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
        {t.nav.language.label}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-10 mt-2 w-36 rounded-2xl border border-white/10 bg-gray-950 p-2 text-white shadow-lg">
          <div className="flex flex-col">
            <Link
              href={switchLocalePath(pathname, "en")}
              onClick={() => setIsOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm ${
                locale === "en"
                  ? "bg-brand font-medium text-black"
                  : "text-white hover:bg-white/5"
              }`}
            >
              English
            </Link>

            <Link
              href={switchLocalePath(pathname, "no")}
              onClick={() => setIsOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm ${
                locale === "no"
                  ? "bg-brand font-medium text-black"
                  : "text-white hover:bg-white/5"
              }`}
            >
              Norsk
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
