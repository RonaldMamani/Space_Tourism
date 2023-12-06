import NavDestination from "../components/NavDestination"
import Planet from "../assets/destination/image-mars.webp"
import Statistics from "../components/Statistics"

export default function Mars() {
    return (
        <section className="flex justify-around mt-12">
            <div className="mt-12">
                <img src={Planet} alt="Imagem da Marte" />
            </div >
            <div className="w-[440px] flex flex-col gap-10">
                <NavDestination />
                <div className="flex flex-col gap-5">
                    <h4 className="text-8xl uppercase">Mars</h4>
                    <p className="text-lg text-gray-200 font-light pb-10 border-b-gray-600 border-b">
                        Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain 
                        in our solar system. It’s two and a half times the size of Everest!
                    </p>
                    <div className="uppercase flex justify-between mt-2">
                        <Statistics title="Avg. Distance" statistic="225 Mil. Km" />
                        <Statistics title="Est. Travel Time" statistic="9 Months" />
                    </div>
                </div>
            </div>
        </section>
    )
}