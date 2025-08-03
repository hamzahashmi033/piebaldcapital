import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Button from '@/widgets/Button';


import { Autoplay, EffectCoverflow } from 'swiper/modules';
const array = [
    "/images/banner/main.jpg",
    "/images/banner/2.png",
    "/images/banner/3.png",
    "/images/banner/4.png",
    "/images/banner/5.png",
    // "/images/banner/re_1.avif",
    // "/images/banner/fs_1.jpg",
]
const Banner = () => {
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
            <div className="absolute inset-0 bg-[#f0eee8] opacity-65 z-10"  />
            <div className='absolute inset-0  z-10 w-full r'>
                <div className='w-[85%]  m-auto h-[85%] flex flex-col justify-center'>
                    <h1 className='text-black text-[100px] font-extrabold leading-none main-head'> Financial Services & <br /> Real Estate Development
                    </h1>
                    <p className='text-black text-lg w-[80%] mt-3'>
                        We deliver strategic solutions for business expansion and real estate development across the U.S., Spain, and Mexico, offering local insights and expert execution to drive growth and maximize investment value.
                    </p>
                    <div className='mt-3'>
                        <Button />
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