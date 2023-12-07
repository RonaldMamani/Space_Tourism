type Props = {
    title: string,
    descrition: string
}

export default function SectionTech({ title, descrition } : Props) {
    return (
        <div className="flex flex-col gap-5">
            <span className="text-gray-300 text-lg uppercase">The Terminology ...</span>
            <h5 className="text-6xl uppercase">{title}</h5>
            <p className="text-gray-300 text-lg w-[455px] mt-5">{descrition}</p>
        </div>
    )
}