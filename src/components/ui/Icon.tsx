"use client";

import {
    ArrowRightIcon,
    ArrowLeftIcon,
    CaretRightIcon,
    CaretLeftIcon,
    HeartIcon,
    StarIcon,
    MagnifyingGlassIcon,
} from "@phosphor-icons/react";

export type IconName =
    | "arrow-right"
    | "arrow-left"
    | "heart"
    | "star"
    | "search"
    | "caret-right"
    | "caret-left";

type Props = {
    icon: IconName;
    size?: number;
    className?: string;
    weight?: "regular" | "fill";
};

const icons = {
    "arrow-right": ArrowRightIcon,
    "arrow-left": ArrowLeftIcon,
    heart: HeartIcon,
    star: StarIcon,
    search: MagnifyingGlassIcon,
    "caret-right": CaretRightIcon,
    "caret-left": CaretLeftIcon,
};

export default function Icon({
    icon,
    size = 16,
    className,
    weight = "regular",
}: Props) {
    const Component = icons[icon];

    return (
        <Component
            size={size}
            weight={weight}
            className={className}
        />
    );
}