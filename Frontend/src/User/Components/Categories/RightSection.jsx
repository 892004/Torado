import React from "react";
import "../Categories/category.css";
import Neckles from "../../../assets/Images/categories/necklace.png";
import Earrings from "../../../assets/Images/categories/earrings.png";
import Rings from "../../../assets/Images/categories/ring.png";
import Bracelate from "../../../assets/Images/categories/bracelets.png";
import Bundleset from "../../../assets/Images/categories/bundle-set.png";
import Locket from "../../../assets/Images/categories/locket.png";

const RightSection = () => {
  const categories = [
    { name: "Necklaces", count: "08 Products", img: Neckles },
    { name: "Earrings", count: "35 Products", img: Earrings },
    { name: "Rings", count: "27 Products", img: Rings },
    { name: "Bracelets", count: "12 Products", img: Bracelate },
    { name: "Bundle Set", count: "18 Products", img: Bundleset },
    { name: "Locket", count: "07 Products", img: Locket },
  ];

  return (
    <section className="Right h-auto flex-1 flex flex-col items-center relative">
      <h3 className="text-5xl py-20">Shop By Category</h3>

      <div className="category-box w-180 h-120 bg-[#FFFCF9] absolute right-20 top-40 flex items-center">
        <ul className="flex flex-col gap-10 px-20 p-20 w-full">
          {categories.map((item, index) => (
            <li
              key={index}
              className="group relative flex justify-between w-full cursor-pointer"
            >
              {item.name} <span>{item.count}</span>
              {/* 👇 Image SAME line ma show thase */}
              <img
                src={item.img}
                className="
    absolute right-0 top-1/2 -translate-y-1/2
    w-32 h-32 object-contain
    opacity-0
    translate-x-[40px]        /* 👈 default position */
    group-hover:translate-x-0 /* 👈 hover par slide */
    group-hover:opacity-100
    transition-all duration-500
  "
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RightSection;
