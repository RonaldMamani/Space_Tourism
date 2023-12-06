import { useState } from 'react'
import { Links } from "../Links"
import Logo from '../../assets/shared/logo.svg'
import { Link, useLocation } from "react-router-dom"

export const Header = () => {

    const {pathname} = useLocation()

    return (
        <header className="pt-10 relative flex justify-between items-center">
            <Link to="/" className="ml-20">
                <img src={Logo} alt="Logo da Space Tourist" />
            </Link>
            <div className="absolute w-[650px] left-44 border border-b-white/10 z-10"></div>
            <div className="flex gap-28 bg-gray-200/5 backdrop-blur-xl px-40">
                <Links 
                    href="" number={0} content="HOME" 
                    className={`${pathname === "/" ? 'border-b-4' : ''}`}
                />
                <Links 
                    href="destination" number={1} content="DESTINATION" 
                    className={`${pathname === "/destination" || pathname === "/destination/mars" || pathname === "/destination/europa" || pathname === "/destination/titan" ? 'border-b-4' : ''}`} 
                />
                <Links 
                    href="crew" number={2} content="CREW" 
                    className={`${pathname === "/crew" ? 'border-b-4' : ''}`} 
                />
                <Links 
                    href="technology" number={3} content="TECHNOLOGY" 
                    className={`${pathname === "/technology" ? 'border-b-4' : ''}`} 
                />
            </div>
        </header>
    )
}