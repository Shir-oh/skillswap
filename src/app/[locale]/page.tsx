export default function Page() {
    const listings = [
        { id: "1", title: "Review your React component", category: "Dev", duration: 20 },
        { id: "2", title: "CSS debugging help", category: "Dev", duration: 15 },
        { id: "3", title: "Focus buddy Pomodoro session", category: "Focus", duration: 25 }
    ]

    return (
        <div className="p-8 space-y-4">
            <h1 className="text-2xl font-bold">SkillSwap</h1>

            {listings.map((listing) => (
                <div
                    key={listing.id}
                    className="border rounded-lg p-4"
                >
                    <h2 className="font-semibold">{listing.title}</h2>
                    <p className="text-sm text-gray-500">{listing.category} · {listing.duration} min</p>
                </div>
            ))}
        </div>
    )
}