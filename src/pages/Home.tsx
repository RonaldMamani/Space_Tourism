import { Link } from "react-router-dom"
import { Header } from "../components/Header"

export default function Home() {
    return (
        <div className="bg-[url('./assets/home/background-home-desktop.jpg')] bg-center bg-cover h-screen">
            <Header />
            <section className="
                px-4 py-4
                md:p-10
                lg:px-52 lg:pt-48 lg:flex lg:justify-between lg:items-end
                ">
                <div className="flex flex-col gap-5 w-[470px] text-gray-300">
                    <h4 className="text-3xl">SO, YOU WANT TO TRAVEL TO</h4>
                    <h3 className="text-[10rem] font-semibold uppercase text-white">Space</h3>
                    <p className="text-lg">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <Link to="/destination" className="pr-20">
                    <button className="w-[300px] h-[300px] flex-shrink bg-white rounded-full">
                        <p className="text-4xl uppercase">Explore</p>
                    </button>
                </Link>
            </section>
        </div>
    )
}