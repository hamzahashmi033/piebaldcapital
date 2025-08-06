import "./style.css"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
const Section2 = () => {
    useGSAP(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 800px)", () => {
            gsap.set(".cardSec2", { y: 100, opacity: 0, scale: 0.95 })
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section2",
                    start: "top 60%",  // Changed from 75% to 60% - will trigger later
                    end: "bottom 30%",
                    toggleActions: "play none none none",
                }
            });

            // Animate all 3 together
            tl.from(".head3", {
                y: 200,
                opacity: 0,
                clipPath: "inset(100% 0% 0% 0%)",
                duration: 1.4,
                ease: "power4.out"
            }, 0);

            tl.from(".para3", {
                y: 200,
                opacity: 0,
                clipPath: "inset(100% 0% 0% 0%)",
                duration: 1.4,
                ease: "power4.out"
            }, 0);

            tl.from(".image3", {
                x: 500,
                opacity: 0,
                clipPath: "inset(100% 0% 0% 0%)",
                duration: 1.4,
                ease: "power4.out"
            }, 0);


            tl.to(".cardSec2", {
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

        <div className="w-[90%] m-auto flex flex-col section2">
            <div className="relative w-[100%] ">
                <div className="w-[100%] mx-auto flex flex-col lg:flex-row md:flex-row items-center  justify-around ">
                    <div className=" w-[100%] lg:w-[50%] md:w-[50%] items-center mt-8 mr-2 text-2xl lg:7xl md:text-6xl sm:text-4xl ">
                        <h2 className="head3 mb-8 text-4xl lg:text-[58px] text-center lg:text-start md:text-start font-bold text-[#c86e3b]">Corporate Financial Services Experts</h2>
                        <p className="para3 font-Poppins text-sm lg:text-xl md:text-lg sm:text-md text-center lg:text-start md:text-start" >
                            We specialize in financial structuring, mergers and acquisitions, and corporate restructuring. Our team supports companies in strategic decisions to enhance financial health and maximize shareholder value.
                        </p>
                    </div>
                    <div className="w-[100%] md:w-[42%] ">
                        <img src="/images/Section2/real_state1.png" alt="" className="w-[80%] lg:w-[90%] m-auto image3" />
                    </div>
                </div>
            </div>

            <div className="w-[100%] lg:w-[90%] flex justify-center items-center lg:justify-between  m-auto flex-col lg:flex-row md:flex-row  mt-8 ">
                <div className="card cardSec2">
                    <div className="card-details">
                        <p className="text-title ">Capital Structuring</p>

                        <ul className='text-body'  >
                            {[
                                "Optimal debt/equity mix for capital needs.",
                                "Structuring solutions that balance risk, return, and flexibility.",
                                "Investor matchmaking and term sheet negotiation.",
                                "Advising on debt, equity, and hybrid capital instruments.",
                                "Financial due diligence to ensure viability and transparency.",
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
                    <button className="card-button">Request Specialized Consultation</button>
                </div>

                <div className="card cardSec2">
                    <div className="card-details">
                        <p className="text-title">Mergers & Acquisitions</p>

                        <ul className='text-body'  >
                            {[
                                "Identification of strategic acquisition or merger targets.",
                                "Accurate valuation of assets and companies using market and financial methods.",
                                "Deal structuring that considers legal and tax implications.",
                                "Support throughout negotiation, closing, and post-merger integration.",
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
                    <button className="card-button">Evaluate M&A Opportunity</button>
                </div>

                <div className="card cardSec2">
                    <div className="card-details">
                        <p className="text-title">Corporate Restructuring</p>

                        <ul className='text-body'  >
                            {[
                                "Holistic diagnosis of financial and operational performance.",
                                "Debt restructuring to restore liquidity.",
                                "Organizational realignment to enhance efficiency.",
                                "Recovery plans designed for long-term sustainability.",
                                "Creditor negotiation to prevent escalation or litigation.",
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
                    <button className="card-button">Restructuring Consultation</button>
                </div>
            </div>
        </div>
    )
}
export default Section2