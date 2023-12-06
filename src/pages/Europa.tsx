import NavDestination from "../components/NavDestination"
import Planet from "../assets/destination/image-europa.webp"
import Statistics from "../components/Statistics"

export default function Europa() {
    return (
        <section className="flex justify-around mt-12">
            <div className="mt-12">
                <img src={Planet} alt="Imagem da Europa" />
            </div >
            <div className="w-[440px] flex flex-col gap-10">
                <NavDestination />
                <div className="flex flex-col gap-5">
                    <h4 className="text-8xl uppercase">Europa</h4>
                    <p className="text-lg text-gray-200 font-light pb-10 border-b-gray-600 border-b">
                    The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, 
                    it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                    </p>
                    <div className="uppercase flex justify-between mt-2">
                        <Statistics title="Avg. Distance" statistic="628 Mil. Km" />
                        <Statistics title="Est. Travel Time" statistic="3 Years" />
                    </div>
                </div>
            </div>
        </section>
    )
}