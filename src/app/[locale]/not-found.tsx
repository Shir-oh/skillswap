"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getTranslations, type Locale } from "@/lib";
import Image from "next/image";
import Icon from "@/assets/Icon";
import { tertiaryButtonClass } from "@/components/ui/buttonStyles";

export default function NotFound() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/no") ? "no" : "en";
  const t = getTranslations(locale);

  return (
    <div className="mx-auto max-w-2xl space-y-6 text-center">
      <h1 className="text-3xl font-bold tracking-tight">{t.notFound.title}</h1>

      <p className="text-gray-400">{t.notFound.description}</p>

      <Image
        src="/images/not-found.png"
        alt={t.notFound.imageAlt}
        width={800}
        height={200}
      />

      <Link href={`/${locale}`} className={tertiaryButtonClass}>
        <Icon icon="arrow-left" size={16} weight="regular" />
        {t.notFound.backHome}
      </Link>
    </div>
  );
}
