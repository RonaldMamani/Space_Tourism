import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import ButtonTech from "../components/ButtonTech";

export default function Technology() {
    return (
        <section className="bg-[url('./assets/technology/background-technology-desktop.jpg')] bg-cover h-screen">
            <Header />
            <div className="
                text-white
                lg:px-40 lg:pt-24
                ">
                <h3 className="uppercase text-4xl font-thin mb-5">
                    <span className="text-gray-700 font-bold mr-8">03</span>
                    Space Launch 101
                </h3>
                <div>
                    <nav className="flex flex-col justify-between gap-5">
                        <ButtonTech content="1" className="" />
                        <ButtonTech content="2" className="" />
                        <ButtonTech content="3" className="" />
                    </nav>
                </div>
            </div>
        </section>
    )
}