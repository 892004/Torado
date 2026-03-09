import React, { useState } from "react";
import { categories } from "../../../../src/data/categories";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const CategorySlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className="category-slider w-full py-12 flex items-center justify-center relative">

      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        speed={2000}
        loop={true}
        onSwiper={setSwiperRef}
        modules={[Navigation]}
        grabCursor={true}
        allowTouchMove={true}
        className="w-[90%]"
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            
            <div className="flex flex-col items-center text-center">

              <img
                src={item.img}
                alt={item.name}
                className="w-40 h-40 object-cover rounded-full"
              />

              <h3 className="pt-5 text-xl">{item.name}</h3>

              <p className="text-[#CC9078] text-md">{item.count}</p>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}

      <div className="absolute w-[95%] flex justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">

        <button
          onClick={() => swiperRef?.slidePrev()}
          className="border bg-white border-[#CB927A] rounded-full p-4 cursor-pointer text-[#CB927A]"
        >
          <GoArrowLeft className="text-[18px]" />
        </button>

        <button
          onClick={() => swiperRef?.slideNext()}
          className="border bg-white border-[#CB927A] rounded-full p-4 cursor-pointer text-[#CB927A]"
        >
          <GoArrowRight className="text-[18px]" />
        </button>

      </div>

    </section>
  );
};

export default CategorySlider;