import { Link, useLocation } from "react-router-dom";
import LinksMin from "../LinksMin";

export default function NavDestination() {

    const {pathname} = useLocation()

    return (
        <nav className="flex gap-5">
            <LinksMin 
                href="/destination" 
                className={`${pathname === "/destination" ? "border-b-white border-b-4 font-semibold" : "hover:text-gray-300 hover:border-b-gray-400 hover:border-b-4"}`} 
                name="Moon" 
            />
            <LinksMin 
                href="/destination/mars" 
                className={`${pathname === "/destination/mars" ? "border-b-white border-b-4 font-semibold" : "hover:text-gray-300 hover:border-b-gray-400 hover:border-b-4"}`} 
                name="Mars" 
            />
            <LinksMin 
                href="/destination/europa" 
                className={`${pathname === "/destination/europa" ? "border-b-white border-b-4 font-semibold" : "hover:text-gray-300 hover:border-b-gray-400 hover:border-b-4"}`} 
                name="Europa" 
            />
            <LinksMin 
                href="/destination/titan" 
                className={`${pathname === "/destination/titan" ? "border-b-white border-b-4 font-semibold" : "hover:text-gray-300 hover:border-b-gray-400 hover:border-b-4"}`} 
                name="Titan" 
            />
        </nav>
    )
}