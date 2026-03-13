const popularSkills = [
    "React",
    "TypeScript",
    "Next.js",
    "Testing",
    "Node.js",
    "IO Design"
];

export default function PopularSkills() {
    return (
        <section className="space-y-4">
            <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tight">Explore popular skills</h2>
                <p className="text-sm text-gray-400">Start with the skills developers are most often offering and requesting.</p>
            </div>

            <div className="flex flex-wrap gap-3">
                {popularSkills.map((skill) => (
                    <button
                        key={skill}
                        type="button"
                        className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                    >
                        {skill}
                    </button>
                ))}

            </div>
        </section>
    )
}