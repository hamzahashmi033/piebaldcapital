import "./style.css"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
const Section2 = () => {
    return (

        <div className="w-[90%] m-auto flex flex-col ">
            <div className="relative w-[100%] ">

                <div className="w-[100%] mx-auto flex flex-col lg:flex-row md:flex-row items-center  justify-around ">
                    <div className=" w-[100%] lg:w-[50%] md:w-[50%] items-center mt-8 mr-2 text-2xl lg:7xl md:text-6xl sm:text-4xl ">
                        <h2 className="font-Playfair mb-8 text-center lg:text-start md:text-start">Corporate Financial Services</h2>
                        <p className=" font-Poppins text-sm lg:text-xl md:text-lg sm:text-md text-center lg:text-start md:text-start" >
                            We specialize in financial structuring, mergers and acquisitions, and corporate restructuring. Our team supports companies in strategic decisions to enhance financial health and maximize shareholder value.
                        </p>
                    </div>
                    <div className="w-[100%] md:w-[42%] ">
                        <img src="/images/Section2/financial.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="w-[90%] flex justify-between  m-auto flex-col lg:flex-row md:flex-row  mt-8 ">
                <div class="card">
                    <div class="card-details">
                        <p class="text-title ">Capital Structuring</p>
                        <p class="text-body ">
                            <ul className=' '  >
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
                        </p>
                    </div>
                    <button class="card-button">Request Specialized Consultation</button>
                </div>

                <div class="card">
                    <div class="card-details">
                        <p class="text-title">Mergers & Acquisitions</p>
                        <p class="text-body">
                            <ul className=''  >
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
                        </p>
                    </div>
                    <button class="card-button">Evaluate M&A Opportunity</button>
                </div>

                <div class="card">
                    <div class="card-details">
                        <p class="text-title">Corporate Restructuring</p>
                        <p class="text-body">
                            <ul className=' '  >
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
                        </p>
                    </div>
                    <button class="card-button">Restructuring Consultation</button>
                </div>
            </div>
        </div>
    )
}
export default Section2
