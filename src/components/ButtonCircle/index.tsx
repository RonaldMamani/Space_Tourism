type Props = {
    className: string,
    onClick: () => void
}

export default function ButtonCircle( { className, onClick } : Props) {
    return (
        <button 
            className={`${className} rounded-full p-4 hover:bg-gray-400 transition-colors`}
            onClick={onClick}
            ></button>
    )
}