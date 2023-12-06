import NavDestination from "../components/NavDestination"
import Planet from "../assets/destination/image-titan.webp"
import Statistics from "../components/Statistics"

export default function Titan() {
    return (
        <section className="flex justify-around mt-12">
            <div className="mt-12">
                <img src={Planet} alt="Imagem de Titan" />
            </div >
            <div className="w-[440px] flex flex-col gap-10">
                <NavDestination />
                <div className="flex flex-col gap-5">
                    <h4 className="text-8xl uppercase">Titan</h4>
                    <p className="text-lg text-gray-200 font-light pb-10 border-b-gray-600 border-b">
                    The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few 
                    hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
                    </p>
                    <div className="uppercase flex justify-between mt-2">
                        <Statistics title="Avg. Distance" statistic="1.6 Bil. Km" />
                        <Statistics title="Est. Travel Time" statistic="7 Years" />
                    </div>
                </div>
            </div>
        </section>
    )
}