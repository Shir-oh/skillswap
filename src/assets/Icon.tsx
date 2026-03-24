"use client";

import {
  ArrowRightIcon,
  ArrowLeftIcon,
  CaretRightIcon,
  CaretLeftIcon,
  CaretDownIcon,
  HeartIcon,
  StarIcon,
  MagnifyingGlassIcon,
  PaperPlaneTiltIcon,
  XIcon,
  CheckCircleIcon,
  WarningCircleIcon,
  GithubLogoIcon,
  ListIcon,
} from "@phosphor-icons/react";

export type IconName =
  | "arrow-right"
  | "arrow-left"
  | "heart"
  | "star"
  | "search"
  | "list"
  | "caret-right"
  | "caret-left"
  | "caret-down"
  | "paper-plane-tilt"
  | "x"
  | "check-circle"
  | "warning-circle"
  | "github";

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
  list: ListIcon,
  "caret-right": CaretRightIcon,
  "caret-left": CaretLeftIcon,
  "caret-down": CaretDownIcon,
  "paper-plane-tilt": PaperPlaneTiltIcon,
  x: XIcon,
  "check-circle": CheckCircleIcon,
  "warning-circle": WarningCircleIcon,
  github: GithubLogoIcon,
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
      aria-hidden="true"
    />
  );
}
