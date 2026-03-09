import React from "react";
import "../Instagram/insta.css";
import { RiInstagramFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import insta1 from "../../../assets/Images/Instagram/insta-1.jpg";
import insta2 from "../../../assets/Images/Instagram/insta-2.jpg";
import insta3 from "../../../assets/Images/Instagram/insta-3.jpg";
import insta4 from "../../../assets/Images/Instagram/insta-4.jpg";
import insta5 from "../../../assets/Images/Instagram/insta-5.jpg";
import insta6 from "../../../assets/Images/Instagram/insta-6.jpg";
import insta7 from "../../../assets/Images/Instagram/insta-7.jpg";
import insta8 from "../../../assets/Images/Instagram/insta-8.jpg";

const InstaPhotoes = [
  insta1,
  insta2,
  insta3,
  insta4,
  insta5,
  insta6,
  insta7,
  insta8,
];
const Instagram = () => {
  return (
    <section className="Instagram h-screen w-full flex flex-col items-start justify- p-10 relative gap-20">
      <h3 className="flex items-center justify-center text-5xl font-semibold text-[#2A2826] mx-15">
        <span className="text-[#CB927A]">
          <RiInstagramFill />
        </span>
        # Love Torado On Instagram
      </h3>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        className="h-full w-full"
      >
        {InstaPhotoes.map((img, index) => (
          <SwiperSlide>
            <div className="h-100 flex items-center justify-center text-white text-3xl cursor-pointer">
              <img
                src={img}
                alt={`slide-${index}`}
                className={`w-full h-full object-cover ${index % 2 !== 0 ? "translate-y-10" : ""}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Instagram;
