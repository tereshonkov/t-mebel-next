"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Carusel.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Carusel() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/1/tablet.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/4/tablet.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/7/tablet.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/5384567338008963271.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/4/tablet.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/7/tablet.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/1/tablet.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/modern/1/tablet.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/modern/3/tablet.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
