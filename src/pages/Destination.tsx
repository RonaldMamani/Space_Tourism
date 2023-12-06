import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export default function Destination() {
    return (
        <section className="bg-[url('./assets/destination/background-destination-desktop.jpg')] bg-cover h-screen">
            <Header />
            <div className="
                text-white
                lg:px-40 lg:pt-24
                ">
                <h3 className="uppercase text-4xl font-thin mb-10">
                    <span className="text-gray-700 font-bold mr-8">01</span>
                    Pick your destination
                </h3>
                <div>
                    <Outlet />
                </div>
            </div>
        </section>
    )
}