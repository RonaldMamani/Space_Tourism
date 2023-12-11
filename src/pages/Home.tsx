import { Link } from "react-router-dom"
import { Header } from "../components/Header"

export default function Home() {
    return (
        <div className="
            bg-[url('./assets/home/background-home-mobile.jpg')] bg-center bg-cover h-screen
            md:bg-[url('./assets/home/background-home-tablet.jpg')]
            lg:bg-[url('./assets/home/background-home-desktop.jpg')]">
            <Header />
            <section className="
                px-4 py-4 grid grid-rows-3 items-center gap-24
                md:p-10
                lg:px-52 lg:pt-48 lg:flex lg:flex-row lg:justify-between lg:items-end
                ">
                <div className="
                    text-center row-span-2
                    lg:flex lg:flex-col gap-5 text-gray-300
                    lg:text-start lg:w-[470px]
                    ">
                    <h4 
                        className="
                            text-xl font-extralight
                            lg:text-3xl">SO, YOU WANT TO TRAVEL TO</h4>
                    <h3 
                        className="
                            text-8xl font-semibold
                            lg:text-[10rem] uppercase text-white">Space</h3>
                    <p 
                        className="
                            text px-5 pt-10
                            lg:text-lg
                            ">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <Link to="/destination" className="flex justify-center lg:pr-20">
                    <button className="
                        w-[150px] h-[150px]
                        lg:w-[300px] lg:h-[300px] flex-shrink bg-white rounded-full">
                        <p className="
                        text-2xl uppercase
                        lg:text-4xl">Explore</p>
                    </button>
                </Link>
            </section>
        </div>
    )
}