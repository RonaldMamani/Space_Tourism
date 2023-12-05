import { useState } from 'react'
import { Links } from "../Links"
import Logo from '../../assets/shared/logo.svg'
import { Link } from "react-router-dom"

export const Header = () => {

    const [home, setHome] = useState(true)
    const [destination, setDestination] = useState(false)
    const [crew, setCrew] = useState(false)
    const [technology, setTechnology] = useState(false)

    const handleButtonHome = () => {
        setHome(true)
        setDestination(false)
        setCrew(false)
        setTechnology(false)
    }

    const handleButtonDestination = () => {
        setHome(false)
        setDestination(true)
        setCrew(false)
        setTechnology(false)
    }

    const handleButtonCrew = () => {
        setHome(false)
        setDestination(false)
        setCrew(true)
        setTechnology(false)
    }

    const handleButtonTech = () => {
        setHome(false)
        setDestination(false)
        setCrew(false)
        setTechnology(true)
    }

    return (
        <header className="pt-10 relative flex justify-between items-center">
            <Link to="/" className="ml-20">
                <img src={Logo} alt="Logo da Space Tourist" />
            </Link>
            <div className="absolute w-[650px] left-44 border border-b-white/10 z-10"></div>
            <div className="flex gap-28 bg-gray-200/5 backdrop-blur-xl px-40">
                <Links 
                    href="" number={0} content="HOME" 
                    className={`${home ? 'border-b-4' : ''}`}
                    onClick={handleButtonHome}
                />
                <Links 
                    href="destination" number={1} content="DESTINATION" 
                    className={`${destination ? 'border-b-4' : ''}`} 
                    onClick={handleButtonDestination}
                />
                <Links 
                    href="crew" number={2} content="CREW" 
                    className={`${crew ? 'border-b-4' : ''}`} 
                    onClick={handleButtonCrew}
                />
                <Links 
                    href="technology" number={3} content="TECHNOLOGY" 
                    className={`${technology ? 'border-b-4' : ''}`} 
                    onClick={handleButtonTech}
                />
            </div>
        </header>
    )
}