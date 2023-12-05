import { Header } from "../components/Header"
import { Links } from "../components/Links"

export default function Home() {
    return (
        <div className="bg-[url('./assets/home/background-home-desktop.jpg')] bg-cover h-screen">
            <Header />
            <section className="
                px-4 py-4
                md:p-10
                lg:px-40 lg:py-32 lg:grid lg:grid-cols-2 lg:gap-40 items-center
                ">
                <div className="flex flex-col gap-10 w-[470px] text-white">
                    <h4 className="text-3xl">SO, YOU WANT TO TRAVEL TO</h4>
                    <h3 className="text-9xl font-semibold text-center uppercase">Space</h3>
                    <p className="text-lg">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <button className="w-[300px] h-[300px] flex-shrink bg-white rounded-full z-10">
                    <p className="text-4xl font-light uppercase">Explore</p>
                </button>
            </section>
        </div>
    )
}