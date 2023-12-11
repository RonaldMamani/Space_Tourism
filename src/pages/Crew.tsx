import { useState } from "react";
import { Header } from "../components/Header";
import TitlePage from "../components/TitlePage";
import PersonDescrition from "../components/PersonDescrition";
import ButtonCircle from "../components/ButtonCircle";

import Commander from "../assets/crew/image-douglas-hurley.webp"
import Specialist from "../assets/crew/image-mark-shuttleworth.webp"
import Pilot from "../assets/crew/image-victor-glover.webp"
import Engineer from "../assets/crew/image-anousheh-ansari.webp"

export default function Crew() {

    const [commander, setCommander] = useState(true)
    const [specialist, setSpecialist] = useState(false)
    const [pilot, setPilot] = useState(false)
    const [engineer, setEngineer] = useState(false)

    const handlerSectionCommander = () => {
        setCommander(true)
        setSpecialist(false)
        setPilot(false)
        setEngineer(false)
    }

    const handlerSectionSpecialist = () => {
        setCommander(false)
        setSpecialist(true)
        setPilot(false)
        setEngineer(false)
    }

    const handlerSectionPilot = () => {
        setCommander(false)
        setSpecialist(false)
        setPilot(true)
        setEngineer(false)
    }

    const handlerSectionEngineer = () => {
        setCommander(false)
        setSpecialist(false)
        setPilot(true)
        setEngineer(false)
    }

    return (
        <section className="bg-[url('./assets/crew/background-crew-desktop.jpg')] bg-cover h-screen">
            <Header />
            <div className="
                text-white
                lg:px-40 lg:pt-24
                ">
                <TitlePage number={2} title="Meet Your Crew" />
                <div className="">
                    <div className="">
                        {commander &&
                            <PersonDescrition 
                                carrer="Commander "  
                                name="Douglas Hurley"
                                descrition="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA 
                                astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
                            />
                        }
                        {specialist &&
                            <PersonDescrition 
                                carrer="Mission Specialist "  
                                name="MARK SHUTTLEWORTH"
                                descrition="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the 
                                Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space 
                                as a space tourist."
                            />
                        }
                        {pilot &&
                            <PersonDescrition 
                                carrer="PILOT"  
                                name="Victor Glover"
                                descrition="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space 
                                Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of 
                                Expedition 64, and served as a station systems flight engineer. "
                            />
                        }
                        {engineer &&
                            <PersonDescrition 
                                carrer="Flight Engineer"  
                                name="Anousheh Ansari"
                                descrition="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari 
                                was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first 
                                Iranian in space. "
                            />
                        }
                        <div className="flex gap-4 items-center">
                            <ButtonCircle 
                                className={`${commander ? 'bg-white' : 'bg-gray-600'}`}  
                                onClick={handlerSectionCommander}
                            />
                            <ButtonCircle 
                                className={`${specialist ? 'bg-white' : 'bg-gray-600'}`}  
                                onClick={handlerSectionSpecialist}
                            />
                            <ButtonCircle 
                                className={`${pilot ? 'bg-white' : 'bg-gray-600'}`}  
                                onClick={handlerSectionPilot}
                            />
                            <ButtonCircle 
                                className={`${engineer ? 'bg-white' : 'bg-gray-600'}`}  
                                onClick={handlerSectionEngineer}
                            />
                        </div>
                    </div>
                    <div className="">
                        {commander &&
                            <img src={Commander} alt="" />
                        }
                        {specialist &&
                            <img src={Specialist} alt="" />
                        }
                        {pilot &&
                            <img src={Pilot} alt="" />
                        }
                        {engineer &&
                            <img src={Engineer} alt="" />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}