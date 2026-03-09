import React ,{useState}from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import Cards from "../CollectionCard/Cards";
import collection1 from "../../../../src/assets/Images/collections/collection-1.jpg";
import collection2 from "../../../../src/assets/Images/collections/collection-2.jpg";
import collection3 from "../../../../src/assets/Images/collections/collection-3.jpg";
import collection4 from "../../../../src/assets/Images/collections/collection-4.jpg";
import collection5 from "../../../../src/assets/Images/collections/collection-5.jpg";
import '../NewCollection/newcollection.css'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";


const card = [
  {
    id: 1,
    bgimg: collection1,
    heading: "Wedding Ring",
    button: "Shop Now",
  },
  {
    id: 2,
    bgimg: collection2,
    heading: "Necklaces",
    button: "Shop Now",
  },
  {
    id: 3,
    bgimg: collection3,
    heading: "Bracelets",
    button: "Shop Now",
  },
  {
    id: 4,
    bgimg: collection4,
    heading: "Bridal Ring",
    button: "Shop Now",
  },
  {
    id: 5,
    bgimg: collection5,
    heading: "Accessories",
    button: "Shop Now",
  },
];  
const NewCollection = () => {
    const [swiperRef, setSwiperRef] = useState(null);
  return (
     <section className="New-collection h-auto min-h-screen w-full flex flex-col items-center gap-10 justify-center relative">
      <h3 className="mb-8 text-5xl font-bold text-[#2A2826]">
        New Collection
      </h3>

      <Swiper
        slidesPerView={3}
        speed={2000}
        loop={true}
        onSwiper={setSwiperRef}   
        modules={[Navigation]}
        grabCursor={true}
        simulateTouch={true}     // 👈 desktop drag enable
  allowTouchMove={true} 
        className="w-[87%] p-10"
      >
        {card.map((elem) => (
          <SwiperSlide key={elem.id}>
            <Cards
              img={elem.bgimg}
              heading={elem.heading}
              button={elem.button}
            />
          </SwiperSlide>
        ))}
      </Swiper>

   <div className="navigate-button flex flex-row absolute z-50 top-100  items-center justify-between gap-320 ">
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
  )
};

export default NewCollection;
