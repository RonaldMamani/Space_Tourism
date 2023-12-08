import { Link } from "react-router-dom"

type Props = {
    number: number
    content: string,
    href?: string,
    className?: string,
}

export const Links = ({number,content,href,className} : Props) => {

    return (
        <Link to={`/${href}`} className={`${className} 
            flex gap-3 text-xl py-5 transition-colors hover:text-white
            lg:py-10
            `}>
            <span className="font-extrabold">0{number}</span>
            <span className="font-extralight">{content}</span>
        </Link>
    )
}