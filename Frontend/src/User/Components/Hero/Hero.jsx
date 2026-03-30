import React, { useState } from "react";
import Homebg from "../../../assets/Images/Hero/hero-bg.jpg";
import Slide1 from "../../../../src/assets/Images/Hero/hero-slide-1.png";
import Slide2 from "../../../../src/assets/Images/Hero/hero-slide-3.png";
import Slide3 from "../../../../src/assets/Images/Hero/hero-slide-2.png";
import { MdArrowOutward } from "react-icons/md";
import "./hero.css";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  const Slides = [
    {
      id: 1,
      smallHeading: "The art of beauty",
      Heading: "Essential Jewelry Collection",
      button: "Show Collection",
      img: Slide1,
    },
    {
      id: 2,
      smallHeading: "Grab your favorite",
      Heading: "New Arrivalse 15% OFF",
      button: "Show Collection",
      img: Slide2,
    },
    {
      id: 3,
      smallHeading: "The art of beauty",
      Heading: "The Perfect Essential Style",
      button: "Show Collection",
      img: Slide3,
    },
  ];

  console.log(Slides);

  const [currentIdx, setcurrentIdx] = useState(0);
  const currentSlide = Slides[currentIdx];
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setcurrentIdx((prev) => (prev === Slides.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 400); // fade out duration
  };

  const prevSlide = () => {
    setFade(false);

    setTimeout(() => {
      setcurrentIdx((prev) => (prev === 0 ? Slides.length - 1 : prev - 1));
      setFade(true);
    }, 400);
  };

  return (
    <section className="Hero h-auto min-h-[100vh]">
      <img
        src={Homebg}
        alt=""
        srcset=""
        className="h-full w-full object-cover"
      />

      <div className="hero-section h-auto w-full flex flex-row items-center ">
      <div className="left-side h-auto w-1/2  absolute top-0 flex items-center justify-start px-3 mt-2 text-xl  ">
        <div className="content flex flex-col items-start gap-5 absolute top-50">
          <p className="text-[20px] text-[#CB927A]">
            {currentSlide.smallHeading}
          </p>
          <h1 className="text-[80px] leading-26 text-[#2A2826]">
            {currentSlide.Heading}
          </h1>
          <button className="px-8 py-3 relative bg-[#CB927A] text-white text-[15px] flex items-center gap-2 cursor-pointer">
            {currentSlide.button}
            <MdArrowOutward className="text-xl" />
          </button>
         <h3 className="translate-y-20 text-2xl">{currentIdx+1} / {Slides.length}</h3>
        </div>

      </div>

      <div className="right-side auto w-1/2 absolute top-0   right-0 flex items-center justify-center">
        <img
          src={currentSlide.img}
          className={`h-180 absolute top-18 object-cover transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          />
        <div className="navigate-button flex flex-col absolute right-0 top-80 mx-10 gap-2 ">
          <button
            onClick={prevSlide}
            className="border border-[#CB927A] rounded-full px-3 py-3 cursor-pointer text-[#CB927A]"
            >
            <GoArrowLeft className="text-[18px] font-medium" />
          </button>
          <button
            onClick={nextSlide}
            className="border  border-[#CB927A] rounded-full px-3 py-3 cursor-pointer text-[#CB927A]"
            >
            <GoArrowRight className="text-[18px] font-medium" />
          </button>
        </div>
      </div>
  </div>
    </section>
  );
};

export default Hero;
