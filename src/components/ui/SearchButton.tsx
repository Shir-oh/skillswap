"use client";

import { secondaryButtonClass } from "./buttonStyles";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export default function SearchButton() {
    return (
        <button className={secondaryButtonClass} aria-label="Search">
            <MagnifyingGlassIcon size={18} />
        </button>
    )
}