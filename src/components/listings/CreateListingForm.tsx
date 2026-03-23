"use client";

import { tertiaryButtonClass } from "@/components/ui/buttonStyles";
import Toast from "@/components/ui/Toast";
import Icon from "@/assets/Icon";
import { getTranslations, type Locale } from "@/lib";
import { useState, useEffect, type FormEvent } from "react";

type Props = {
  locale: Locale;
};

type FieldName = "name" | "offer" | "want" | "description" | "level";

type Errors = {
  name?: boolean;
  offer?: boolean;
  want?: boolean;
  description?: boolean;
  level?: boolean;
};

type BaseFieldProps = {
  id: Exclude<FieldName, "level">
  label: string;
  placeholder: string;
  error?: boolean;
  inputClass: string;
  errorClass: string;
  errorMessage: string;
  onChange: () => void;
};

function FieldError({
  show,
  message,
}: {
  show?: boolean;
  message: string;
}) {
  if (!show) return null;

  return <p className="text-sm text-red-300">{message}</p>
}

function TextField({
  id,
  label,
  placeholder,
  error,
  inputClass,
  errorClass,
  errorMessage,
  onChange,
}: BaseFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm fonnt font-medium">{label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        placeholder={placeholder}
        className={`${inputClass} ${error ? errorClass : ""}`}
        required
        onChange={onChange}
      />

      <FieldError show={error} message={errorMessage} />
    </div>
  );
}

function TextareaField({
  id,
  label,
  placeholder,
  error,
  inputClass,
  errorClass,
  errorMessage,
  onChange,
}: BaseFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={5}
        placeholder={placeholder}
        className={`${inputClass} ${error ? errorClass : ""}`}
        required
        onChange={onChange}
      />
      <FieldError show={error} message={errorMessage} />
    </div>
  );
}

export default function CreateListingForm({ locale }: Props) {
  const t = getTranslations(locale);

  const [toast, setToast] = useState<{
    message: string;
    variant: "success" | "error";
  } | null>(null);

  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    if (!toast) return;

    const timeout = setTimeout(() => {
      setToast(null);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [toast]);

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none placeholder:text-gray-500";

  const errorClass = "border-red-500/60";

  function clearError(field: FieldName) {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      return { ...prev, [field]: false };
    })
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString().trim() ?? "";
    const offer = formData.get("offer")?.toString().trim() ?? "";
    const want = formData.get("want")?.toString().trim() ?? "";
    const description = formData.get("description")?.toString().trim() ?? "";
    const level = formData.get("level")?.toString().trim() ?? "";

    const nextErrors = {
      name: !name,
      offer: !offer,
      want: !want,
      description: !description,
      level: !level,
    };

    setErrors(nextErrors);

    if (
      nextErrors.name ||
      nextErrors.offer ||
      nextErrors.want ||
      nextErrors.description ||
      nextErrors.level
    ) {
      setToast({
        message: t.createListing.feedback.missingFields,
        variant: "error",
      });
      return;
    }

    setToast({
      message: t.createListing.feedback.success,
      variant: "success",
    });

    setErrors({});
    e.currentTarget.reset();
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-white/10 p-6"
    >
      {toast ? (
        <Toast
          message={toast.message}
          variant={toast.variant}
          onClose={() => setToast(null)}
        />
      ) : null}

      <TextField
        id="name"
        label={t.createListing.name}
        placeholder={t.createListing.placeholders.name}
        error={errors.name}
        inputClass={inputClass}
        errorClass={errorClass}
        errorMessage={t.createListing.feedback.requiredField}
        onChange={() => clearError("name")}
      />

      <TextField
        id="offer"
        label={t.createListing.offer}
        placeholder={t.createListing.placeholders.offer}
        error={errors.offer}
        inputClass={inputClass}
        errorClass={errorClass}
        errorMessage={t.createListing.feedback.requiredField}
        onChange={() => clearError("offer")}
      />

      <TextField
        id="want"
        label={t.createListing.want}
        placeholder={t.createListing.placeholders.want}
        error={errors.want}
        inputClass={inputClass}
        errorClass={errorClass}
        errorMessage={t.createListing.feedback.requiredField}
        onChange={() => clearError("want")}
      />

      <TextareaField
        id="description"
        label={t.createListing.description}
        placeholder={t.createListing.placeholders.description}
        error={errors.description}
        inputClass={inputClass}
        errorClass={errorClass}
        errorMessage={t.createListing.feedback.requiredField}
        onChange={() => clearError("description")}
      />

      <div className="space-y-2">
        <label htmlFor="level" className="text-sm font-medium">
          {t.createListing.level}
        </label>

        <div className="relative">
          <select
            id="level"
            name="level"
            defaultValue=""
            className={`${inputClass} ${errors.level ? errorClass : ""} appearance-none`}
            required
            onChange={() => clearError("level")}
          >
            <option value="" disabled>
              {t.createListing.levelPlaceholder}
            </option>
            <option value="beginner">{t.createListing.levels.beginner}</option>
            <option value="intermediate">
              {t.createListing.levels.intermediate}
            </option>
            <option value="advanced">{t.createListing.levels.advanced}</option>
          </select>

          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon icon="caret-down" size={16} />
          </span>
        </div>

        {errors.level ? (
          <p className="text-sm text-red-300">
            {t.createListing.feedback.requiredField}
          </p>
        ) : null}
      </div>

      <div className="flex justify-center">
        <button type="submit" className={tertiaryButtonClass}>
          {t.createListing.submit}
          <Icon icon="paper-plane-tilt" size={16} />
        </button>
      </div>
    </form >
  );
}
