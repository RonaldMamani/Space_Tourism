import { useState } from 'react'
import { Links } from "../Links"
import Logo from '../../assets/shared/logo.svg'
import { Link, useLocation } from "react-router-dom"

import Hamburger from "../../assets/shared/icon-hamburger.svg"
import Close from "../../assets/shared/icon-close.svg"

export const Header = () => {

    const {pathname} = useLocation()
    const [open, setOpen] = useState(false)

    return (
        <header className="
            px-4 py-4 relative
            lg:pt-10 [1023]: lg:flex lg:justify-between lg:items-center">
            <Link to="/" className="ml-20">
                <img src={Logo} alt="Logo da Space Tourist" />
            </Link>
            <div className="
                max-lg:hidden
                absolute left-44 w-[650px] border-b border-b-gray-500 z-10">
            </div>
            <div className='max-lg:hidden'>
                <div className="flex gap-28 bg-gray-200/5 backdrop-blur-xl px-40">
                    <Links 
                        href="" number={0} content="HOME" 
                        className={`${pathname === "/" ? 'border-b-4 text-white' : 'text-slate-300'}`}
                    />
                    <Links 
                        href="destination" number={1} content="DESTINATION" 
                        className={`${pathname === "/destination" || pathname === "/destination/mars" || pathname === "/destination/europa" || pathname === "/destination/titan" ? 'border-b-4 text-white' : 'text-slate-300'}`} 
                    />
                    <Links 
                        href="crew" number={2} content="CREW" 
                        className={`${pathname === "/crew" ? 'border-b-4 text-white' : 'text-slate-300'}`} 
                    />
                    <Links 
                        href="technology" number={3} content="TECHNOLOGY" 
                        className={`${pathname === "/technology" ? 'border-b-4 text-white' : 'text-slate-300'}`} 
                    />
                </div>
            </div>
            <button 
                className='lg:hidden absolute top-0 right-2'
                onClick={() => setOpen(!open)}
                >
                {!open ? (
                    <img className='my-14' src={Hamburger} alt="" />
                ) : (
                    <div className='bg-gray-500/5 backdrop-blur-xl px-14 py-14 flex flex-col h-screen '>
                        <div className='absolute right-0 '>
                            <img src={Close} alt="" />
                        </div>
                        <div className='flex flex-col text-white'>
                            <Links 
                            href="" number={0} content="HOME" 
                            />
                            <Links 
                                href="destination" number={1} content="DESTINATION" 
                            />
                            <Links 
                                href="crew" number={2} content="CREW" 
                            />
                            <Links 
                                href="technology" number={3} content="TECHNOLOGY" 
                            />
                        </div>
                    </div>
                ) }
            </button>
        </header>
    )
}