import React from 'react'
import { BadgeCheck, ShieldCheck, Zap, Target, Globe } from 'lucide-react';


const About = () => {
    return (
        <section className="relative bg-[#f0eee8] pb-5 about-bg">
            <div className='absolute top-0 w-full opacity-11 h-full'>
                <img src="/images/about-us/about-main.jpg" className='w-full h-full' alt="" />
            </div>

            <div className='w-[90%] m-auto pt-26 flex flex-col gap-20 lg:gap-0 lg:flex-row justify-around p-10'>
                <div className="w-[100%] lg:w-[25%]">
                    <h2 className='text-[#c86e3b] text-6xl text-center lg:text-left font-bold'>About Us</h2>
                </div>

                <div className="relative w-[100%] lg:w-[33%]  border border-r-3 border-l-0 border-t-6  border-b-0 border-[#c86e3b]  p-6 rounded-lg" >

                    <div className="absolute top-0 left-0 bg-[#c86e3b] text-black font-bold text-xs px-6 py-3 tracking-widest rounded-bl-lg rounded-br-lg">
                        <h2 className='text-lg '>Our Story</h2>
                    </div>

                    <div class="relative z-10 mt-10 space-y-2">
                        <p class="text-md lg:text-lg  text-black leading-tight">
                            Founded with the vision of being the preferred strategic partner for growing companies and real estate developers, Piebald Capital has evolved into a comprehensive consultancy with presence in three key markets: United States, Spain, and Mexico.
                        </p>
                    </div>
                </div>

                <div className="relative w-[100%] lg:w-[33%] border border-r-3 border-l-0 border-t-6  border-b-0 border-[#c86e3b]  p-6 rounded-lg">

                    <div className="absolute top-0 left-0 bg-[#c86e3b] text-black font-bold text-xs px-6 py-3 tracking-widest rounded-bl-lg rounded-br-lg">
                        <h2 className='text-lg'>Our Team</h2>
                    </div>

                    <div class="relative z-10 mt-10 space-y-2">
                        <p class="text-md lg:text-lg text-black leading-tight">
                            We have a multidisciplinary team of experts in corporate finance, real estate development, and digital transformation, with international certifications and proven experience in complex markets.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full text-center mt-12">
                <h2 className='text-[#c86e3b] text-6xl font-bold'>Our Values</h2>
            </div>
            <div className='w-[90%] m-auto mt-5 flex justify-between p-10'>


                <div className="relative w-[100%] flex flex-col lg:flex-row gap-3 lg:gap-12 border border-r-3 border-l-0 border-t-6  border-b-0 border-[#c86e3b]  p-6 rounded-lg">



                    <div class="relative text-center w-[100%] lg:w-[32%] z-10 mt-10 space-y-2">
                        <BadgeCheck className="text-black h-8 w-8 m-auto" />
                        <h3 className='text-[16px] font-bold nav-links'>Service excellence</h3>
                        <p class="text-[12px]  text-black leading-tight">
                            Rigorous processes and commitment to exceed client expectations.

                        </p>
                    </div>
                    <div class="relative text-center w-[100%] lg:w-[32%] z-10 mt-10 space-y-2 ">
                        <ShieldCheck className="text-black h-8 w-8 m-auto" />
                        <h3 className='text-[16px] font-bold nav-links'>Trustworthiness</h3>
                        <p class="text-[12px]  text-black leading-tight">
                            Building trust through honest and clear communication.
                        </p>
                    </div>
                    <div class="relative text-center w-[100%] lg:w-[32%] z-10 mt-10 space-y-2">
                        <Globe className="text-black h-8 w-8 m-auto" />
                        <h3 className='text-[16px] font-bold nav-links'>Social responsibility</h3>
                        <p class="text-[12px]  text-black leading-tight">
                            Acting with awareness of our economic and human impact.
                        </p>
                    </div>
                    <div class="relative text-center w-[100%] lg:w-[32%] z-10 mt-10 space-y-2">
                        <Target className="text-black h-8 w-8 m-auto" />
                        <h3 className='text-[16px] font-bold nav-links'>Accountability</h3>
                        <p class="text-[12px]  text-black leading-tight">
                            Focused on measurable and sustainable success.
                        </p>
                    </div>

                </div>
            </div>

        </section>


    )
}

export default About
