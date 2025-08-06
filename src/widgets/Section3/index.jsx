import "./style.css"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
const Section3 = () => {
    return (

        <div className="w-[90%] m-auto mt-8 flex flex-col">
            <div className="w-[100%] py-8">
                <div className="w-[100%]  flex flex-col lg:flex-row md:flex-row items-center  justify-between ">

                    <div className="hidden lg:block w-[100%] lg:w-[45%]">
                        <div class="">
                            <div>
                                <img src="/images/section2/real_state1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className=" w-[100%] lg:w-[50%] md:w-[40%] items-center mt-8 mr-2 text-2xl lg:7xl md:text-6xl sm:text-4xl ">
                        <h2 className="font-Playfair mb-8 text-3xl lg:text-[58px] text-center lg:text-start md:text-start font-bold text-[#c86e3b]">Comprehensive Real Estate Development Experts</h2>
                        <p className=" font-Poppins text-sm lg:text-xl md:text-lg sm:text-md text-center lg:text-start md:text-start" >
                            We support projects from concept to completion, combining technical expertise, strategic vision, and regulatory compliance in international markets.
                        </p>
                        <div className="block lg:hidden w-[100%] lg:w-[45%]">
                            <div class="">
                                <div>
                                    <img src="/images/section2/real_state1.png" alt="w-[80%] lg:w-[90%] m-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[100%] lg:w-[90%] flex justify-center items-center lg:justify-between  m-auto flex-col lg:flex-row md:flex-row  mt-8">
                <div class="card" style={{ height: "500px" }}>
                    <div class="card-details">
                        <p class="text-title  md:mb-9 lg:mb-9">Development Consulting</p>
                        <p class="text-body ">
                            <ul className=' '  >
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
                        </p>
                    </div>
                    <button class="card-button">Request Project Analysis</button>
                </div>

                <div class="card" style={{ height: "500px" }}>
                    <div class="card-details">
                        <p class="text-title mb-3.5">Early-Stage Project Management</p>
                        <p class="text-body">
                            <ul className=''  >
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
                        </p>
                    </div>
                    <button class="card-button">Start Project Management</button>
                </div>

                <div class="card" style={{ height: "500px" }}>
                    <div class="card-details">
                        <p class="text-title">Planning and Regulatory Compliance</p>
                        <p class="text-body">
                            <ul className=' '  >
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
                        </p>
                    </div>
                    <button class="card-button">Regulatory Consultation</button>
                </div>
            </div>
        </div>
    )
}
export default Section3
