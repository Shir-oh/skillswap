type Props = { params: { id: string } }

export default function ListingsDetailPage({ params }: Props) {
    return <div className="text-2xl">ID: {params.id}</div>
}