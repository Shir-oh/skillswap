import { notFound } from "next/navigation";
import { getTranslations } from "@/lib";
import CreateListingForm from "@/components/listings/CreateListingForm";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CreateListingPage({ params }: Props) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "no") {
    notFound();
  }

  const t = getTranslations(locale);

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t.createListing.title}
        </h1>
        <p className="text-gray-400 leading-relaxed">
          {t.createListing.description}
        </p>
      </div>

      <CreateListingForm locale={locale} />
    </div>
  );
}