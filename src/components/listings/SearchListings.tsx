export default function SearchListings() {
    return (
        <div className="flex gap-4">
            < input
                type="text"
                placeholder="Search skills or technologies..."
                className="w-full rounded-full border border-white/10 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
            />

            <button
                type="button"
                className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10"
            >
                Filter
            </button>
        </div >
    );
}