import "./style.css"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
const Section3 = () => {
    return (

        <div className="w-[90%] m-auto mt-8 flex flex-col  ">
            <div className="w-[100%] py-8  md:h-[500px] lg:h-[500px] ">
                <div className="w-[100%] mx-auto flex flex-col lg:flex-row md:flex-row items-center md:items-start lg:items-start  justify-center ">
                    
                    <div className="w-[100%] lg:w-[50%] md:w-[50%] h-[450px]">
                        <div class="relative flex justify-center items-center  p-8 ">
                            <div class="absolute z-10 transform  -translate-x-32 top-[200px] -translate-y-1/2">
                                <div class=" bg-blue-600 rounded-[20px] p-2 shadow-2xl">
                                    <img src="./././images/section2/img1.jpg" alt="" width={'180px'} height={'400px'} />
                                </div>
                            </div>

                            <div class="absolute z-20 transform -translate-x-[10px] top-[240px] -translate-y-1/2">
                                <div class="rounded-[20px] shadow-2xl bg-white p-2 ">
                                    <img className="" src="./././images/section2/img2.jpg" alt="" width={'180px'} height={'400px'} />
                                </div>
                            </div>

                            <div class="absolute z-30 translate-x-[90px] top-[150px] transform  translate-y-1/2">
                                <div class="bg-white p-4 rounded-3xl shadow-xl flex flex-col items-center ">
                                    <img src="./././images/section2/img3.jpg" alt="" width={'100px'} height={'200px'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[100%] lg:w-[50%] md:w-[50%] items-center mt-8 mr-2 text-2xl lg:7xl md:text-6xl sm:text-4xl ">
                        <h2 className="font-Playfair mb-8 text-center lg:text-start md:text-start">Comprehensive Real Estate Development</h2>
                        <p className=" font-Poppins text-sm lg:text-xl md:text-lg sm:text-md text-center lg:text-start md:text-start" >
                            We support projects from concept to completion, combining technical expertise, strategic vision, and regulatory compliance in international markets.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-[90%] flex justify-between  m-auto flex-col lg:flex-row md:flex-row  mt-8 ">
                <div class="card">
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

                <div class="card">
                    <div class="card-details">
                        <p class="text-title mb-3.5">Early-Stage Project Management</p>
                        <p class="text-body">
                            <ul className='  -mt-4'  >
                                {[
                                    "Early-stage management including permits, schedules, and budgets.",
                                    "Coordination among architects, engineers, contractors, and stakeholders.",
                                    "Monitoring of technical and financial compliance.",
                                    "Risk assessment and contingency planning.",
                                    "Executive reports with key alerts and insights.",
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

                <div class="card">
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
