type Props = {
    number: number,
    title: string
}

export default function TitlePage({ number, title } : Props) {
    return (
        <h3 className="uppercase text-4xl font-thin mb-5">
            <span className="text-gray-700 font-bold mr-8">0{number}</span>
            {title}
        </h3>
    )
}