import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Brand1 from '../../../../assets/Images/Brands/brand-1.png'
import Brand2 from '../../../../assets/Images/Brands/brand-2.png'
import Brand3 from '../../../../assets/Images/Brands/brand-3.png'
import Brand4 from '../../../../assets/Images/Brands/brand-4.png'
import Brand5 from '../../../../assets/Images/Brands/brand-5.png'
import Brand6 from '../../../../assets/Images/Brands/brand-6.png'




const PopulerBrands = () => {
  return (
    <section className="Populer-brands relative h-50 w-full flex flex-row items-center justify-center p-30 gap-10">
        <h3 className='text-5xl absolute top-10 opacity-90 '>Populer Brands</h3>
     <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={5}
      spaceBetween={30}
      loop={true}
      speed={10000}
      autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  className='mt-30'
    >
      <SwiperSlide>
        <img src={Brand1} alt="banner1"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Brand2} alt="banner1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Brand3} alt="banner1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Brand4} alt="banner1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Brand5} alt="banner1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Brand6} alt="banner1" />
      </SwiperSlide>

    </Swiper>
    </section>
  )
}

export default PopulerBrands