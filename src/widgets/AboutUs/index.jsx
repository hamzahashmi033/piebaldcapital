import React from 'react'
// import './style.css'

const About = () => {
    return (
        <section className="relative bg-[#f0eee8] h-screen about-bg">
            <div className='absolute top-0 w-full opacity-11 h-full'>
                <img src="/images/about-us/about-main.jpg" className='w-full h-full' alt="" />
            </div>

            <div className=' w-[90%] m-auto mt-5 flex justify-around p-10'>
                <div className="w-[25%]">
                    <h1 className='text-[#c86e3b] text-6xl'>About Us</h1>
                </div>

                <div className="relative w-[33%]  border border-r-3 border-l-0 border-t-6  border-b-0 border-[#c86e3b]  p-6" >

                    <div className="absolute top-0 left-0 bg-[#c86e3b] text-black font-bold text-xs px-6 py-3 tracking-widest">
                        <h1 className='text-lg'>Our Story</h1>
                    </div>


                    {/* <div className="absolute inset-0 flex items-center justify-center text-[180px] text-white font-bold select-none pointer-events-none">
                    </div> */}


                    <div class="relative z-10 mt-10 space-y-2">
                        <h2 class="text-lg font-bold text-black leading-tight">
                            Founded with the vision of being the preferred strategic partner for growing companies and real estate developers, Piebald Capital has evolved into a comprehensive consultancy with presence in three key markets: United States, Spain, and Mexico.
                        </h2>
                    </div>
                </div>

                <div className="relative w-[33%]  border border-r-3 border-l-0 border-t-6  border-b-0 border-[#c86e3b]  p-6">

                    <div className="absolute top-0 left-0 bg-[#c86e3b] text-black font-bold text-xs px-6 py-3 tracking-widest">
                        <h1 className='text-lg'>Our Team</h1>
                    </div>

                    <div class="relative z-10 mt-10 space-y-2">
                        <h2 class="text-lg font-bold text-black leading-tight">
                            We have a multidisciplinary team of experts in corporate finance, real estate development, and digital transformation, with international certifications and proven experience in complex markets.
                        </h2>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default About
