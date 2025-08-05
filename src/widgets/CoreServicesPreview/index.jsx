import { useState } from 'react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
const data = [
    {
        title: "Capital structuring and M&A",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nemo?",
        image: "/images/coreservices/1.jpg"
    },
    {
        title: "Real estate project management",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nemo?",
        image: "/images/coreservices/2.jpg"
    },
    {
        title: "Automation and digital transformation",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nemo?",
        image: "/images/coreservices/3.jpg"
    }
]
const CoreServicesPreview = () => {
    return (
        <>
            <div
                className="relative w-screen pb-36"

            >
                <div className='relative w-[80%] m-auto mt-26 z-100'>
                    <h2 className='text-5xl text-[#c86e3b] font-bold p-3'>Competitive Advantages & <br /> Core Services Preview</h2>
                    <div className='w-full  flex justify-between  mt-16'>
                        <div className='w-[50%] p-4'>
                            <div className='flex gap-2'>
                                <IoIosCheckmarkCircleOutline color='black' size={25} />
                                <p className='text-md'>Solid track record in international markets: over 15 years managing projects in the U.S., Spain, and Mexico.</p>
                            </div>
                            <div className='flex gap-2 mt-6'>
                                <IoIosCheckmarkCircleOutline color='black' size={25} />
                                <p className='text-md'>Dual expertise in finance and real estate: ability to address complex challenges from an integrated perspective.</p>
                            </div>
                            <div className='flex gap-2 mt-6'>
                                <IoIosCheckmarkCircleOutline color='black' size={25} />
                                <p className='text-md'>Local presence in three countries: strong networks and regulatory knowledge in each region.</p>
                            </div>
                            <div className='flex gap-2 mt-6'>
                                <IoIosCheckmarkCircleOutline color='black' size={25} />
                                <p className='text-md'>Tailored project-based solutions: every client receives a strategy built specifically for their case.</p>
                            </div>
                        </div>
                        <div className='w-[50%] flex flex-col gap-4 justify-between items-center'>
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-[80%] border border-gray-200 flex rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                                    style={{
                                        boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.18)',
                                        backdropFilter: 'blur(2px)'
                                    }}
                                >
                                    <div className="w-[35%] h-30 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6 w-full">
                                        <h2 className="text-[16px] font-bold text-gray-800">{item.title}</h2>
                                        <p className="text-[12px] mt-1 text-gray-600">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nemo?
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                {/* <div className='absolute bottom-[-150px] left-[-150px]'>
                    <img src="/images/section2/circle2.png" alt="" className='w-[400px] blur-2xl '/>
                </div>
                <div className='absolute top-[-300px] right-[20px] -z-100'>
                    <img src="/images/section2/circle1.png" alt="" className='w-[700px]'/>
                </div> */}
            </div>
        </>
    );
};

export default CoreServicesPreview;
