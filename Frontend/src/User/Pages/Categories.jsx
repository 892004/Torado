import React from "react";
import { Link } from "react-router-dom";
import AllProducts from "../Components/AllProducts/AllProducts";
import CategorySlider from "../Components/Category-Slider/CategorySlider";
import Signup from '../Components/Signup/Signup'
import '../Components/AllProducts/MainCategory.css'
const Category = () => {
  return (
    <section className="Categories w-full flex flex-col items-center  py-50">
      
      <h3 className="text-6xl text-[#2A2826] mb-3">Category</h3>

      <div className="flex flex-row py-2 gap-2 text-[16px]">
        <Link to="/" className="text-gray-500 ">
          Home
        </Link>
        /
        <Link to="/Categories" className="text-[#CB927A]">
          Category
        </Link>
      </div>

      <CategorySlider />
      <AllProducts />

    </section>
  );
};

export default Category;