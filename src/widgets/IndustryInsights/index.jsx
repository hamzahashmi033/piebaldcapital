const IndustryInsights = () => {
    return (
        <>
            <div className="w-[85%] m-auto  pt-16 pb-16">
                <div className="p-2">
                    <h2 className="text-6xl text-[#c86e3b]">Industry Insight</h2>
                </div>
                <div className="mt-6">
                    <h3 className="p-2 text-lg ">Market Sector</h3>
                </div>
                <div className="mt-2 p-2 flex gap-3">
                    <div className="p-2 text-center px-6 border-2 border-[#c86e3b] rounded-4xl hover:bg-[#c86e3b] hover:text-white
                    cursor-pointer transition-all duration-300 delay-150 ease-in-out">
                        <p>
                            All
                        </p>
                    </div>
                    <div className="p-2 text-center px-6 border-2 border-[#c86e3b] rounded-4xl hover:bg-[#c86e3b] hover:text-white
                    cursor-pointer transition-all duration-300 delay-150 ease-in-out">
                        <p>
                            Residential Area
                        </p>
                    </div>
                    <div className="p-2 text-center px-6 border-2 border-[#c86e3b] rounded-4xl hover:bg-[#c86e3b] hover:text-white
                    cursor-pointer transition-all duration-300 delay-150 ease-in-out">
                        <p>
                            Commercial Area
                        </p>
                    </div>
                    <div className="p-2 text-center px-6 border-2 border-[#c86e3b] rounded-4xl hover:bg-[#c86e3b] hover:text-white
                    cursor-pointer transition-all duration-300 delay-150 ease-in-out">
                        <p>
                            Industrial Area
                        </p>
                    </div>
                    <div className="p-2 text-center px-6 border-2 border-[#c86e3b] rounded-4xl hover:bg-[#c86e3b] hover:text-white
                    cursor-pointer transition-all duration-300 delay-150 ease-in-out">
                        <p>
                            Development
                        </p>
                    </div>
                    <div className="p-2 text-center px-6 border-2 border-[#c86e3b] rounded-4xl cursor-pointer transition-all         duration-300 delay-150 ease-in-out hover:bg-[#c86e3b] hover:text-white">
                        <p>
                            Real Estate Investment Trusts
                        </p>
                    </div>
                </div>

                <div className="w-[100%]  flex  gap-0  p-2 mt-4">
                    <div className="w-[50%] pb-26 cursor-pointer group relative overflow-hidden" style={{ backgroundImage: 'url(/images/industry/1.jpg)', backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>




                        <div className="absolute inset-0 bg-[#c86e3b] opacity-50 transition-all duration-500 ease-in-out z-10"></div>
                        <div className="w-[90%] border-black mt-4 m-auto flex justify-between items-center">
                            <div className="flex gap-2">
                                <div className="p-2 z-10 text-black text-center bg-white px-6 border-2 border-[#c86e3b] rounded-4xl hover:bg-[#c86e3b] hover:text-white cursor-pointer transition-all duration-300 delay-150 ease-in-out">
                                    <p>
                                        Residential Area
                                    </p>
                                </div>
                                <div className="p-2 z-10 text-black text-center bg-white px-6 border-2 border-[#c86e3b] rounded-4xl hover:bg-[#c86e3b] hover:text-white cursor-pointer transition-all duration-300 delay-150 ease-in-out">
                                    <p>
                                        Development
                                    </p>
                                </div>
                            </div>
                            <div className="text-white z-10 text-lg cursor-pointer hover:text-black">
                                <p>Read More</p>
                            </div>
                        </div>
                        <div className="flex z-10 h-full  w-[90%] m-auto p-2 items-center">
                            <h2 className="text-white z-10 text-3xl font-bold industry-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eligendi voluptatem quam aperiam quibusdam nulla doloremque porro facere provident! Voluptatem.</h2>
                        </div>
                    </div>
                    <div className="w-[50%] flex flex-wrap">
                        <div className="relative pb-26 w-[50%]" style={{ backgroundImage: 'url(/images/industry/1.jpg)', backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
                            <div className="absolute inset-0 bg-[#fb9b00] opacity-50 transition-all duration-500 ease-in-out z-10"></div>
                            <div className="w-[90%] border-black mt-4 m-auto flex justify-between items-center">
                                <div className="flex gap-2">
                                    <div className="p-2 z-10 text-[16px] text-black text-center bg-white px-2 border-2 border-[#c86e3b] rounded-4xl hover:bg-[#c86e3b] hover:text-white cursor-pointer transition-all duration-300 delay-150 ease-in-out">
                                        <p className="text-[12px]">
                                            Residential Area
                                        </p>
                                    </div>

                                </div>
                                <div className="text-white z-10 text-[16px] cursor-pointer hover:text-black">
                                    <p>Read More</p>
                                </div>
                            </div>
                            <div className="flex z-10 h-full  w-[90%] m-auto p-2 items-center">
                                <h2 className="text-white z-10 text-3xl font-bold industry-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h2>
                            </div>

                        </div>
                        <div className="relative pb-26 w-[50%]" style={{ backgroundImage: 'url(/images/industry/2.jpg)', backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
                            <div className="absolute inset-0 bg-[#ffa434] opacity-50 transition-all duration-500 ease-in-out z-10"></div>
                            <div className="w-[90%] border-black mt-4 m-auto flex justify-between items-center">
                                <div className="flex gap-2">
                                    <div className="p-2 z-10 text-[16px] text-black text-center bg-white px-2 border-2 border-[#c86e3b] rounded-4xl hover:bg-[#c86e3b] hover:text-white cursor-pointer transition-all duration-300 delay-150 ease-in-out">
                                        <p className="text-[12px]">
                                            Industrial Area
                                        </p>
                                    </div>

                                </div>
                                <div className="text-white z-10 text-[16px] cursor-pointer hover:text-black">
                                    <p>Read More</p>
                                </div>
                            </div>
                            <div className="flex z-10 h-full  w-[90%] m-auto p-2 items-center">
                                <h2 className="text-white z-10 text-3xl font-bold industry-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h2>
                            </div>

                        </div>
                        <div className="relative pb-26 w-[50%]" style={{ backgroundImage: 'url(/images/industry/4.jpg)', backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
                            <div className="absolute inset-0 bg-[#ffa434] opacity-50 transition-all duration-500 ease-in-out z-10"></div>
                            <div className="w-[90%] border-black mt-4 m-auto flex justify-between items-center">
                                <div className="flex gap-2">
                                    <div className="p-2 z-10 text-[16px] text-black text-center bg-white px-2 border-2 border-[#c86e3b] rounded-4xl hover:bg-[#c86e3b] hover:text-white cursor-pointer transition-all duration-300 delay-150 ease-in-out">
                                        <p className="text-[12px]">
                                            Development
                                        </p>
                                    </div>

                                </div>
                                <div className="text-white z-10 text-[16px] cursor-pointer hover:text-black">
                                    <p>Read More</p>
                                </div>
                            </div>
                            <div className="flex z-10 h-full  w-[90%] m-auto p-2 items-center">
                                <h2 className="text-white z-10 text-3xl font-bold industry-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h2>
                            </div>

                        </div>
                        <div className="relative pb-26 w-[50%]" style={{ backgroundImage: 'url(/images/industry/3.jpg)', backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
                            <div className="absolute inset-0 bg-[#fb9b00] opacity-50 transition-all duration-500 ease-in-out z-10"></div>
                            <div className="w-[90%] border-black mt-4 m-auto flex justify-between items-center">
                                <div className="flex gap-2">
                                    <div className="p-2 z-10 text-[16px] text-black text-center bg-white px-2 border-2 border-[#c86e3b] rounded-4xl hover:bg-[#c86e3b] hover:text-white cursor-pointer transition-all duration-300 delay-150 ease-in-out">
                                        <p className="text-[12px]">
                                            Commercial Area
                                        </p>
                                    </div>

                                </div>
                                <div className="text-white z-10 text-[16px] cursor-pointer hover:text-black">
                                    <p>Read More</p>
                                </div>
                            </div>
                            <div className="flex z-10 h-full  w-[90%] m-auto p-2 items-center">
                                <h2 className="text-white z-10 text-3xl font-bold industry-text">Lorem ipsum, dolor sit amet consectetur. </h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default IndustryInsights