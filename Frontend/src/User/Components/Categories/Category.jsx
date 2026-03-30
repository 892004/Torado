import React from "react";
import { MdArrowOutward } from "react-icons/md";
import "../Categories/category.css";
import Leftsection from "./Leftsection";
import RightSection from "./RightSection";

const Category = () => {
  return (
    <section className="Category h-auto w-full flex flex-col items-center justify-start">
      <h3 className="text-center text-5xl leading-15">
        We Provide The Highest Quality Jewelry <br />
        To Our Customer
      </h3>
      <button className="flex items-center gap-2 py-2 cursor-pointer relative ">
        Know More About Us <MdArrowOutward />
      </button>

     <div className="section flex flex-row h-[100vh] w-[100%] p-8 items-stretch">
        <Leftsection />
        <RightSection />
      </div>
    </section>
  );
};

export default Category;
