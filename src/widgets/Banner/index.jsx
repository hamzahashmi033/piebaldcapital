import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Button from '@/widgets/Button';


import { Autoplay, EffectCoverflow } from 'swiper/modules';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/all';


const array = [
    "/images/banner/main.jpg",
    "/images/banner/2.png",
    "/images/banner/3.png",
    "/images/banner/4.png",
    "/images/banner/5.png",
    // "/images/banner/re_1.avif",
    // "/images/banner/fs_1.jpg",
]
gsap.registerPlugin(useGSAP, SplitText)
const Banner = () => {
    useGSAP(() => {
        // Split the text into characters
        const split = new SplitText('.main-head', {
            type: 'chars,words,lines',
            linesClass: 'overflow-hidden'
        });

        // Create a timeline for sequenced animations
        const tl = gsap.timeline();

        // Animation for heading characters
        tl.from(split.chars, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.5)',
            stagger: 0.02,
            rotation: 10,
            scale: 0.5
        });

        tl.from(".para, .button-main", {
            duration: 0.8,
            y: 20,
            opacity: 0,
            ease: "power2.out"
        }, "-=1.4");


    });
    return (
        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            speed={1000}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
            // className="mySwiper"
            className=" bg-cover bg-center mySwiper"

        >
            <div className="absolute inset-0 bg-[#f0eee8] opacity-55 z-10" />
            <div className='absolute inset-0  z-10 w-full r'>
                <div className='w-[85%] m-auto h-[85%] flex flex-col justify-center md:items-center lg:items-start'>
                    <h1 className='text-black text-center text-[32px] lg:text-[100px]  md:text-[48px] lg:text-left leading-none main-head'> Financial Services & Real Estate Development
                    </h1>
                    <p className='text-black text-center text-sm w-[100%] lg:text-xl para lg:text-left md:w-[80%] lg:w-[80%]  mt-3'>
                        We deliver strategic solutions for business expansion and real estate development across the U.S., Spain, and Mexico, offering local insights and expert execution to drive growth and maximize investment value.
                    </p>
                    <div className='mt-3 button-main'>
                        <Button text='Get in Touch' href="/contact" />
                    </div>
                </div>
            </div>
            {array.map((n) => (
                <SwiperSlide key={n}>
                    <div className="relative w-full h-full">
                        {/* Black overlay */}


                        {/* Image below overlay */}
                        <img
                            src={n}
                            alt={`Nature ${n}`}
                            className="h-[90vh] object-cover"
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
export default Banner