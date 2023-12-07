import { useState } from "react"
import { Header } from "../components/Header";
import ButtonTech from "../components/ButtonTech";
import SectionTech from "../components/SectionTech";

import Launch from "../assets/technology/image-launch-vehicle-portrait.jpg"
import SpacePort from "../assets/technology/image-spaceport-portrait.jpg"
import SpaceCapsule from "../assets/technology/image-space-capsule-portrait.jpg"
import TitlePage from "../components/TitlePage";

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
                <TitlePage number={3} title="Space Launch 101" />
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
                        {launch &&
                            <SectionTech 
                                title="LAUNCH VEHICLE" 
                                descrition="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from 
                                Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in 
                                operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!" 
                            />
                        }
                        {spaceport &&
                            <SectionTech 
                                title="SPACEPORT" 
                                descrition="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to 
                                the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is 
                                ideally situated to take advantage of the Earth’s rotation for launch." 
                            />
                        }
                        {spacecapsule &&
                            <SectionTech 
                                title="SPACE CAPSULE" 
                                descrition="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to 
                                reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the 
                                flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained." 
                            />
                        }
                    </div>
                    <div className="flex justify-end">
                        {launch &&
                            <img 
                                className=""
                                src={Launch} 
                                alt="Imagem de Partida de Foguete" 
                            />
                        }
                        {spaceport &&
                            <img 
                                className=""
                                src={SpacePort} 
                                alt="Imagem de Preparação do Foguete" 
                            />
                        }
                        {spacecapsule &&
                            <img 
                                className=""
                                src={SpaceCapsule} 
                                alt="Imagem de Foguete no Espaço" 
                            />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}