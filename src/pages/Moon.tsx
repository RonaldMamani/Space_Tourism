import NavDestination from "../components/NavDestination"
import Planet from "../assets/destination/image-moon.webp"
import Statistics from "../components/Statistics"

export default function Moon() {
    return (
        <section className="flex justify-around mt-20">
            <div className="">
                <img src={Planet} alt="Imagem da Lua" />
            </div >
            <div className="w-[440px] flex flex-col gap-10">
                <NavDestination />
                <div className="flex flex-col gap-5">
                    <h4 className="text-9xl uppercase">Moon</h4>
                    <p className="text-lg text-gray-200 font-light pb-10 border-b-gray-600 border-b">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    <div className="uppercase flex justify-between mt-2">
                        <Statistics title="Avg. Distance" statistic="225 Mil. Km" />
                        <Statistics title="Est. Travel Time" statistic="9 Months" />
                    </div>
                </div>
            </div>
        </section>
    )
}