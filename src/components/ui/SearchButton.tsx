"use client";

import { secondaryButtonClass } from "./buttonStyles";
import Icon from "./Icon";

export default function SearchButton() {
    return (
        <button className={secondaryButtonClass} aria-label="Search">
            <Icon
                icon="search"
                size={18}
                weight="regular" />
        </button>
    )
}