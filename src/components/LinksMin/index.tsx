import { Link } from "react-router-dom";

type Props = {
    name: string,
    className: string,
    href: string
}

export default function LinksMin({name,className,href} : Props) {
    return (
        <Link to={href} className={`${className} pb-2 text-lg text-white font-extralight uppercase`}>{name}</Link>
    )
}