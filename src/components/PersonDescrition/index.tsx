type Props = {
    carrer: string,
    name: string,
    descrition: string
}

export default function PersonDescrition({ carrer, name, descrition } : Props) {
    return (
        <div className="flex flex-col gap-5">
            <h5 className="text-4xl uppercase text-gray-500">{carrer}</h5>
            <h6 className="text-7xl uppercase font-extralight text-white">{name}</h6>
            <p className="text-lg text-gray-300 py-5 w-[444px]">{descrition}</p>
        </div>
    )
}