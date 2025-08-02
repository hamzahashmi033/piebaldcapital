'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './styles.css';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import Section2 from '@/widgets/Section2';

export default function App() {
  return (
    <>
      <section className="w-screen border p-12"></section>

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
        className="mySwiper"
      >
        <div className="absolute inset-0 bg-black opacity-15 z-10" />
        <div className='absolute inset-0  z-10 w-full flex items-center'>
          <h1 className='text-white'>Hdishdoih</h1>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <SwiperSlide key={n}>
            <div className="relative w-full h-full">
              {/* Black overlay */}


              {/* Image below overlay */}
              <img
                src={`https://swiperjs.com/demos/images/nature-${n}.jpg`}
                alt={`Nature ${n}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Section2/>
    </>
  );
}
