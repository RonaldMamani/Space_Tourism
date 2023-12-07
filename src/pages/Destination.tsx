import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import TitlePage from "../components/TitlePage";

export default function Destination() {
    return (
        <section className="bg-[url('./assets/destination/background-destination-desktop.jpg')] bg-cover h-screen">
            <Header />
            <div className="
                text-white
                lg:px-40 lg:pt-24
                ">
                <TitlePage number={1} title="Pick Your Destination" />
                <div>
                    <Outlet />
                </div>
            </div>
        </section>
    )
}