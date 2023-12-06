type Props = {
    title: string,
    statistic: string
}

export default function Statistics({title, statistic} : Props) {
    return (
        <div className="flex flex-col gap-1 items-start">
            <h6 className="text-sm text-gray-400 font-extralight">{title}</h6>
            <span className="text-3xl font-light">{statistic}</span>
        </div>
    )
}