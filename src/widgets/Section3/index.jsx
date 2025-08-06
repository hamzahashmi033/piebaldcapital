import "./style.css"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
const Section3 = () => {
    useGSAP(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 800px)", () => {
            gsap.set(".cardSec4", { y: 100, opacity: 0, scale: 0.95 })
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section4",
                    start: "top 60%",  // Changed from 75% to 60% - will trigger later
                    end: "bottom 30%",
                    toggleActions: "play none none none",
                }
            });

            // Animate all 3 together
            tl.from(".head4", {
                y: 200,
                opacity: 0,
                clipPath: "inset(100% 0% 0% 0%)",
                duration: 1.4,
                ease: "power4.out"
            }, 0);

            tl.from(".para4", {
                y: 200,
                opacity: 0,
                clipPath: "inset(100% 0% 0% 0%)",
                duration: 1.4,
                ease: "power4.out"
            }, 0);

            tl.from(".image4", {
                x: -500,
                opacity: 0,
                clipPath: "inset(100% 0% 0% 0%)",
                duration: 1.4,
                ease: "power4.out"
            }, 0);


            tl.to(".cardSec4", {
                y: 0,
                opacity: 1,
                scale: 1,
                // delay:2,
                duration: 1.2, // Uncomment duration (important for stagger timing)
                ease: "power4.out",
                stagger: 0.5, // Reduced stagger delay (0.3s between each card)
            });
        });
    }, []);
    return (

        <div className="w-[90%] m-auto mt-8 flex flex-col section4">
            <div className="w-[100%] py-8">
                <div className="w-[100%]  flex flex-col lg:flex-row md:flex-row items-center  justify-between ">

                    <div className="hidden lg:block w-[100%] lg:w-[45%]">
                        <div className="">
                            <div>
                                <img src="/images/section2/real_state1.png" alt="" className="image4" />
                            </div>
                        </div>
                    </div>
                    <div className=" w-[100%] lg:w-[50%] md:w-[40%] items-center mt-8 mr-2 text-2xl lg:7xl md:text-6xl sm:text-4xl ">
                        <h2 className="font-Playfair mb-8 text-3xl lg:text-[58px] text-center lg:text-start md:text-start font-bold text-[#c86e3b]  head4">Comprehensive Real Estate Development Experts</h2>
                        <p className="para4 font-Poppins text-sm lg:text-xl md:text-lg sm:text-md text-center lg:text-start md:text-start" >
                            We support projects from concept to completion, combining technical expertise, strategic vision, and regulatory compliance in international markets.
                        </p>
                        <div className="block lg:hidden w-[100%] lg:w-[45%]">
                            <div className="">
                                <div>
                                    <img src="/images/section2/real_state1.png" alt="w-[80%] lg:w-[90%] m-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[100%] lg:w-[90%] flex justify-center items-center lg:justify-between  m-auto flex-col lg:flex-row md:flex-row  mt-8">
                <div className="card cardSec4" style={{ height: "500px" }}>
                    <div className="card-details">
                        <p className="text-title  md:mb-9 lg:mb-9">Development Consulting</p>

                        <ul className='text-body'  >
                            {[
                                "Technical and financial feasibility analysis.",
                                "Market studies to assess demand and identify gaps.",
                                "Strategic development positioning for maximum return.",
                                "Design optimization and architectural advisory.",
                                "Highest and best use analysis for zoning and value.",
                            ].map((item, i) => (
                                <li key={i} className="flex mt-4 gap-1">
                                    <span className="mt-0.5">
                                        <IoIosCheckmarkCircleOutline size={20} color="black" />
                                    </span>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <button className="card-button">Request Project Analysis</button>
                </div>

                <div className="card cardSec4" style={{ height: "500px" }}>
                    <div className="card-details">
                        <p className="text-title mb-3.5">Early-Stage Project Management</p>

                        <ul className='text-body'  >
                            {[
                                "Early-stage management including permits, schedules, and budgets.",
                                "Coordination among architects, engineers, contractors, and stakeholders.",
                                "Monitoring of technical and financial compliance.",
                                "Risk assessment and contingency planning.",
                            ].map((item, i) => (
                                <li key={i} className="flex mt-4 gap-1">
                                    <span className="mt-0.5">
                                        <IoIosCheckmarkCircleOutline size={20} color="black" />
                                    </span>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <button className="card-button">Start Project Management</button>
                </div>

                <div className="card cardSec4" style={{ height: "500px" }}>
                    <div className="card-details">
                        <p className="text-title">Planning and Regulatory Compliance</p>

                        <ul className='text-body'  >
                            {[
                                "Guidance on zoning laws and local regulations.",
                                "End-to-end permitting and licensing management.",
                                "Strategies for accelerated government approvals.",
                                "Compliance with environmental, fiscal, and technical standards.",
                                "Specialization in U.S., Spain, and Mexico jurisdictions.",
                            ].map((item, i) => (
                                <li key={i} className="flex mt-4 gap-1">
                                    <span className="mt-0.5">
                                        <IoIosCheckmarkCircleOutline size={20} color="black" />
                                    </span>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <button className="card-button">Regulatory Consultation</button>
                </div>
            </div>
        </div>
    )
}
export default Section3
