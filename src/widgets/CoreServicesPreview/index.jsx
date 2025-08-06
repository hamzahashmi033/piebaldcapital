import { useState } from 'react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const CoreServicesPreview = () => {
    useGSAP(() => {
        // Split the text into characters
        gsap.set(".service-card, .bullet-point", { opacity: 1, y: 0 });
        gsap.set(".head2", {
            y: 100,
            opacity: 0,
            // skewY: 8,
            clipPath: "inset(100% 0% 0% 0%)"
        });

        gsap.to(".head2", {
            y: 0,
            opacity: 1,
            skewY: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".coreservicespreview",
                start: "top 75%",
                end: "bottom 30%",
                toggleActions: "play none none none"
            }
        });


        gsap.from(".bullet-point, .service-card", {
            y: 100,
            opacity: 0,
            duration: 0.3,
            stagger: {
                each: 0.2,
                from: "center" // or "random", or "edges"
            },
            ease: "back.out(1.2)",
            scrollTrigger: {
                trigger: ".bullet-container",
                start: "top 70%",
                end: "bottom 30%",
                // markers: true,
            }
        });

    }, []);
    return (
        <>
            <div
                className="relative w-screen pb-12 lg:pb-36 coreservicespreview"

            >
                <div className='relative w-[100%] lg:w-[80%] m-auto mt-16 lg:mt-26 z-100'>
                    <h2 className='text-3xl text-center lg:text-left lg:text-5xl text-[#c86e3b] font-bold p-3 head2'>Competitive Advantages & <br /> Core Services Preview</h2>
                    <div className='w-full flex flex-col lg:flex-row justify-between mt-2 lg:mt-16'>
                        <div className='w-[100%] lg:w-[50%] p-4 bullet-container '>
                            <div className='flex gap-2 bullet-point'>
                                <IoIosCheckmarkCircleOutline color='black' size={25} />
                                <p className='text-md'>Solid track record in international markets: over 15 years managing projects in the U.S., Spain, and Mexico.</p>
                            </div>
                            <div className='flex gap-2 mt-6 bullet-point'>
                                <IoIosCheckmarkCircleOutline color='black' size={25} />
                                <p className='text-md'>Dual expertise in finance and real estate: ability to address complex challenges from an integrated perspective.</p>
                            </div>
                            <div className='flex gap-2 mt-6 bullet-point'>
                                <IoIosCheckmarkCircleOutline color='black' size={25} />
                                <p className='text-md'>Local presence in three countries: strong networks and regulatory knowledge in each region.</p>
                            </div>
                            <div className='flex gap-2 mt-6 bullet-point'>
                                <IoIosCheckmarkCircleOutline color='black' size={25} />
                                <p className='text-md'>Tailored project-based solutions: every client receives a strategy built specifically for their case.</p>
                            </div>
                        </div>
                        <div className='w-[100%] lg:w-[50%] mt-6 lg:mt-0 flex container-service flex-col gap-4 justify-between items-center'>
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-[90%] lg:w-[80%] border service-card border-gray-200 flex rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                                    style={{
                                        boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.18)',
                                        backdropFilter: 'blur(2px)'
                                    }}
                                >
                                    <div className="w-[35%] overflow-hidden">
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
