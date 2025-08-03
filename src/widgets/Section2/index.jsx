import "./style.css"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
const Section2 = () => {
    return (
        <div className="w-screen py-8  border-black-2">
            <div className="w-[80%] mx-auto  flex flex-col justify-center ">
                <div className="  text-2xl lg:7xl md:text-6xl sm:text-4xl ">
                    <h2 className="font-Playfair mb-8">Corporate Financial Services</h2>
                    <p className=" font-Poppins text-sm lg:text-xl md:text-lg sm:text-md" >
                        We specialize in financial structuring, mergers and acquisitions, and corporate restructuring. Our team supports companies in strategic decisions to enhance financial health and maximize shareholder value.
                    </p>
                </div>
                <div>

                    <div className="flex justify-evenly text-black relative bg-cover  bg-center mt-[40px] py-8 pb-22 rounded-lg [box-shadow:0_3px_6px_rgba(1,1,0,1.16),0_3px_6px_rgba(1,1,0,1.23)]" style={{ backgroundImage: 'url("./././images/section2/bgCapitalStructure.jpg")', }}>
                        <div class="absolute inset-0 bg-[#e8e4d4] opacity-30 rounded-lg"></div>

                        <div className=" text-xl pl-8 w-[90%] md:text-5xl sm:text-3xl font-Playfair z-100">
                            <h3 className="mt-6">
                                Capital Structuring
                            </h3>
                            <p className="font-Poppins text-sm lg:text-xl md:text-lg sm:text-md ">
                                <ul className="space-y-2  lg:text-lg    font-semibold mt-4-xs mt-8  " >
                                    {[
                                        "Capital needs assessment to determine optimal debt/equity mix",
                                        "Structuring solutions that balance risk, return, and flexibility.",
                                        "Investor matchmaking and term sheet negotiation.",
                                        "Advising on debt, equity, and hybrid capital instruments.",
                                        "Financial due diligence to ensure viability and transparency.",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="">
                                                <IoIosCheckmarkCircleOutline size={20} color="black" />
                                            </span>
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-evenly text-black  relative bg-cover  bg-center mt-[40px] py-8 pb-22 rounded-lg [box-shadow:0_3px_6px_rgba(1,1,0,1.16),0_3px_6px_rgba(1,1,0,1.23)]" style={{ backgroundImage: 'url("./././images/section2/bgM&A.jpg")', }}>
                        <div class="absolute inset-0 bg-[#e8e4d4] rounded-lg opacity-30"></div>

                        <div className="text-xl pl-8 w-[90%] lg:6xl md:text-5xl z-100 sm:text-3xl font-Playfair">
                            <h3 className="mt-6">
                                Mergers & Acquisitions
                            </h3>
                            <p className="font-Poppins text-sm lg:text-xl md:text-lg sm:text-md ">
                                <ul className="space-y-2  lg:text-lg font-semibold mt-4-xs mt-8 " >
                                    {[
                                        "Identification of strategic acquisition or merger targets.",
                                        "Accurate valuation of assets and companies using market and financial methods.",
                                        "Deal structuring that considers legal and tax implications.",
                                        "Support throughout negotiation, closing, and post-merger integration.",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="">
                                                <IoIosCheckmarkCircleOutline size={20} color="black" />
                                            </span>
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-evenly text-black  relative bg-cover  bg-center mt-[40px] py-8
                    pb-22 rounded-lg [box-shadow:0_3px_6px_rgba(1,1,0,1.16),0_3px_6px_rgba(1,1,0,1.23)]" style={{ backgroundImage: 'url("./././images/section2/bgRestructuring.webp")', }}>
                        <div class="absolute rounded-lg inset-0 bg-[#e8e4d4] opacity-30"></div>
                        <div className="text-xl w-[90%] pl-8 lg:6xl md:text-5xl sm:text-3xl font-Playfair z-100">
                            <h3 className="mt-6">
                                Corporate Restructuring
                            </h3>
                            <p className="font-Poppins text-sm lg:text-xl md:text-lg sm:text-md ">
                                <ul className="space-y-2  lg:text-lg    font-semibold mt-4-xs mt-8 " >
                                    {[
                                        "Holistic diagnosis of financial and operational performance.",
                                        "Debt restructuring to restore liquidity.",
                                        "Organizational realignment to enhance efficiency.",
                                        "Recovery plans designed for long-term sustainability.",
                                        "Creditor negotiation to prevent escalation or litigation.",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="">
                                                <IoIosCheckmarkCircleOutline size={20} color="black" />
                                            </span>
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Section2