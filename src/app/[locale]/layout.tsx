import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>
}

export default async function Layout({ children, params }: Props) {
    const { locale } = await params

    if (locale !== "en" && locale !== "no") {
        notFound();
    }

    return (
        <div className="p-8 space-y-4">
            <nav className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">SkillSwap</h1>
                {/* 
                <div>
                    <ul>
                        <h2 className="font-medium">5 Reasons a Skill Swap is a Great Idea</h2>
                        <li>1. save money</li>
                        <li>2. save money</li>
                        <li>3. save money</li>
                        <li>4. save money</li>
                        <li>5. save money</li>
                    </ul>
                </div> */}

                <div className="space-x-4">
                    <Link href="/en" className="px-3 py-1 border rounded">EN</Link>
                    <Link href="/no" className="px-3 py-1 border rounded">NO</Link>
                </div>
            </nav >

            {children}
        </div >
    )
}