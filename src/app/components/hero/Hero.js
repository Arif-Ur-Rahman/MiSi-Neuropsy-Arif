'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css/effect-creative";
// image 
import slide1 from '@../../../public/images/header/header1.jpeg';
import slide2 from '@../../../public/images/header/header2.jpeg';
import slide3 from '@../../../public/images/header/header3.webp';
import Image from 'next/image';
const Hero = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        effect={"creative"}
        spaceBetween={30}
        loop={true}
        speed={500}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='slide'>
            <Image 
            alt="slide1"
            src={slide1}
            style={{
                width: '100%',
                height: '110vh',
              }}
            >
             </Image>
             <div>
             <h2 className='tex-align-center testAnimSlideIn '>Love your Life</h2>
             </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
            <Image 
            alt="slide2"
            src={slide2}
            style={{
                width: '100%',
                height: '110vh',
              }}
            ></Image>
            <h2 className='tex-align-center testAnimSlideIn ' >Turn the stress into strength</h2>
        </SwiperSlide>
        <SwiperSlide className='slide'>
            <Image 
            alt="slide3"
            src={slide3}
            style={{
                width: '100%',
                height: '110vh',
              }}
            ></Image>
            <h2 className='tex-align-center testAnimSlideIn '>Heal the heart</h2>
        </SwiperSlide>
      </Swiper>
    </>
  )
};

export default Hero