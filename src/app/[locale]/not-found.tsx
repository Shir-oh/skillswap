import Link from "next/link";
import Image from "next/image";
import { tertiaryButtonClass } from "@/components/ui/buttonStyles";
import Icon from "@/components/ui/Icon";

export default function NotFound() {
    return (
        <div className="mx-auto max-w-2xl space-y-6 text-center">

            <h1 className="text-3xl font-bold tracking-tight">
                Page not found
            </h1>

            <Image
                src="/images/not-found.png"
                alt="404 error illustration"
                width={800}
                height={400}
                className="shrink-0 object-cover"
            />

            <p className="text-gray-400">
                The page you&apos;re looking for doesn&apos;t exist or may have been moved.
            </p>

            <Link
                href="/"
                className={tertiaryButtonClass}
            >
                <Icon icon="arrow-left" size={18} weight="regular" />
                Back to home
            </Link>
        </div>
    )
}