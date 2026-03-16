type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function SearchListings({ value, onChange }: Props) {
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Search skills or technologies..."
                className="w-full rounded-full border border-white/10 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
            />
        </div>
    );
}