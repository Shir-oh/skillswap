"use client";

import Icon from "@/assets/Icon";

type Props = {
  message: string;
  variant: "success" | "error";
  onClose: () => void;
};

const baseClass =
  "flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-sm shadow-lg";

const variantClass = {
  success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-200",
  error: "border-red-500/30 bg-red-500/10 text-red-200",
};

export default function Toast({ message, variant, onClose }: Props) {
  return (
    <div
      className={`${baseClass} ${variantClass[variant]}`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3">
        <Icon
          icon={variant === "success" ? "check-circle" : "warning-circle"}
          size={16}
          weight="fill"
        />
        <span>{message}</span>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="inline-flex items-center justify-center rounded-full p-2 hover:bg-white/10"
        aria-label="Close notification"
      >
        <Icon icon="x" size={16} />
      </button>
    </div>
  );
}
