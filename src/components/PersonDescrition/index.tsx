type Props = {
    carrer: string,
    name: string,
    descrition: string
}

export default function PersonDescrition({ carrer, name, descrition } : Props) {
    return (
        <div className="">
            <h5 className="text-2xl text-gray-600">{carrer}</h5>
            <h6 className="text-4xl text-white">{name}</h6>
            <p className="text-sm text-gray-400">{descrition}</p>
        </div>
    )
}