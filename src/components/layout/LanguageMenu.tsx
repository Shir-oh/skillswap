"use client";

import Link from "next/link";
import { useState } from "react";

export default function LanguageMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative">
            <button
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="menu"
                onClick={() => setIsOpen((prev) => !prev)}
                className="rounded-full px-3 py-1 text-sm font-semibold text-white hover:bg-white/10"
            >
                Language
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-24 rounded-lg bg-white/10 p-2 text-white shadow">
                    <div className="flex flex-col gap-2">

                        <Link href="/en" className="rounded px-3 py-1 text-sm font-semibold hover:bg-white/10">
                            🇺🇸 EN
                        </Link>
                        <Link href="/no" className="rounded px-3 py-1 text-sm font-semibold hover:bg-white/10">
                            🇳🇴 NO
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}