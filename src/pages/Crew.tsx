import { Header } from "../components/Header";
import TitlePage from "../components/TitlePage";

export default function Crew() {
    return (
        <section className="bg-[url('./assets/crew/background-crew-desktop.jpg')] bg-cover h-screen">
            <Header />
            <div className="
                text-white
                lg:px-40 lg:pt-24
                ">
                <TitlePage number={2} title="Meet Your Crew" />
            </div>
        </section>
    )
}