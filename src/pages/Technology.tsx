import { useState } from "react"
import { Header } from "../components/Header";
import ButtonTech from "../components/ButtonTech";
import SectionTech from "../components/SectionTech";
import Launch from "../assets/technology/image-launch-vehicle-portrait.jpg"

export default function Technology() {

    const [launch, setLaunch] = useState(true)
    const [spaceport, setSpaceport] = useState(false)
    const [spacecapsule, setSpaceCapsule] = useState(false)

    const handleButtonSectionLaunch = () => {
        setLaunch(true)
        setSpaceport(false)
        setSpaceCapsule(false)
    }

    const handleButtonSectionSpaceport = () => {
        setLaunch(false)
        setSpaceport(true)
        setSpaceCapsule(false)
    }

    const handleButtonSectionSpaceCapsule = () => {
        setLaunch(false)
        setSpaceport(false)
        setSpaceCapsule(true)
    }

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
                <div className="grid grid-cols-2 gap-10 items-center">
                    <div className="flex gap-16">
                        <nav className="flex flex-col justify-between gap-10">
                            <ButtonTech 
                                content="1" 
                                className={`${launch ? "bg-white text-black" : ""}`}
                                onClick={handleButtonSectionLaunch}
                            />
                            <ButtonTech 
                                content="2" 
                                className={`${spaceport ? "bg-white text-black" : ""}`}
                                onClick={handleButtonSectionSpaceport}
                            />
                            <ButtonTech 
                                content="3" 
                                className={`${spacecapsule ? "bg-white text-black" : ""}`}
                                onClick={handleButtonSectionSpaceCapsule}
                            />
                        </nav>
                        a
                        <SectionTech 
                            title="LAUNCH VEHICLE" 
                            descrition="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from 
                            Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in 
                            operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!" 
                        />
                    </div>
                    <div className="flex justify-end">
                        <img 
                            className=""
                            src={Launch} 
                            alt="Imagem de Partida de Foguete" />
                    </div>
                </div>
            </div>
        </section>
    )
}