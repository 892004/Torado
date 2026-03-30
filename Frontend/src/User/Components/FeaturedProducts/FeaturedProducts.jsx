import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import FeaturedProductCard from "./FeaturedProductCard";
import product1 from "../../../assets/Images/products/earring.jpg";
import product2 from "../../../assets/Images/products/product-2.jpg";
import product3 from "../../../assets/Images/products/product-3.jpg";
import product4 from "../../../assets/Images/products/product-4.jpg";
import product5 from "../../../assets/Images/products/product-1.jpg";
import "../FeaturedProducts/featuredproducts.css";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const FeaturedCard = [
  {
    id: 1,
    img: product1,
    ratings: "★ ★ ★ ★ ★",
    productName: "New Fashion Earring",
    price: "$100.00",
    label: "Sale!",
  },
  {
    id: 2,
    img: product2,
    ratings: "★ ★ ★ ★ ★",
    productName: "Natural Stone Bracelet",
    price: "$200.00",
  },
  {
    id: 3,
    img: product3,
    ratings: "★ ★ ★ ★ ★",
    productName: "Engagement Lady Ring",
    price: "$150.00",
    label: "New!",
  },
  {
    id: 4,
    img: product4,
    ratings: "★ ★ ★ ★ ★",
    productName: "High Quality Necklace",
    price: "$350.00",
  },
  {
    id: 5,
    img: product5,
    ratings: "★ ★ ★ ★ ★",
    productName: "New Fashion Earring",
    price: "$100.00",
  },
];

const FeaturedProducts = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <section className="featured-products w-full flex flex-col items-center justify-start p-10 relative mt-10 gap-2">
      <h3 className="text-6xl">Featured Products</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        speed={1000}
        loop={true}
        onSwiper={setSwiperRef}
        modules={[Navigation]}
        grabCursor={true}
        simulateTouch={true} // 👈 desktop drag enable
        allowTouchMove={true}
         breakpoints={{
    0: {
      slidesPerView: 1, // mobile
    },
    768: {
      slidesPerView: 2, // tablet
    },
    1024: {
      slidesPerView: 4, // desktop
    },
  }}
        className="w-[90%] p-10 "
      >
        {FeaturedCard.map((elem) => (
          <SwiperSlide key={elem.id} className="flex justify-center">
            <FeaturedProductCard
              img={elem.img}
              rating={elem.ratings}
              productName={elem.productName}
              price={elem.price}
              label={elem.label}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="navigate-button flex flex-row absolute z-50 top-70  items-center justify-between gap-312  ">
        <button
          onClick={() => swiperRef?.slidePrev()}
          className="border bg-white border-[#CB927A] rounded-full px-4 py-4  cursor-pointer text-[#CB927A]"
        >
          <GoArrowLeft className="text-[18px] font-medium" />
        </button>
        <button
          onClick={() => swiperRef?.slideNext()}
          className="border bg-white  border-[#CB927A] rounded-full px-4 py-4 cursor-pointer text-[#CB927A]"
        >
          <GoArrowRight className="text-[18px] font-medium" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
