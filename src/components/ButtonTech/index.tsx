type Props = {
    content: string,
    className: string,
    onClick?: () => void
}


export default function ButtonTech({ content, className, onClick} : Props) {
    return (
        <button className={
            `${className} w-[90px] h-[90px] rounded-full bg-transparent border-gray-500 border text-4xl font-semibold
            hover:bg-white hover:text-black transition-colors
            `}
            onClick={onClick}
            >
            {content}
        </button>
    )
}