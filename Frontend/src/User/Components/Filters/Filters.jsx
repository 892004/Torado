import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import Earrings from "../../../assets/Images/products/earring.jpg";
import Bracelet from "../../../assets/Images/products/product-2.jpg";
import ring from "../../../assets/Images/products/product-3.jpg";
import necklace from "../../../assets/Images/products/product-4.jpg";

const Filters = ({
  setshowFilters,
  selectedCategories,
  setSelectedCategories,
  selectedPrice,
  setSelectedPrice,
  selectedAvailability,
  setSelectedAvailability,
  selectedColor,
  setSelectedColor,
}) => {
  const [openCategory, setOpenCategory] = useState(true);
  const [openPrice, setOpenPrice] = useState(false);
  const [openAvailability, setOpenAvailability] = useState(false);
  const [openColor, setOpenColor] = useState(false);
  const [openBest, setOpenBest] = useState(false);

  // handle category filter
  const handleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category),
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  //  handle price filter
  const handlePrice = (range) => {
    if (selectedPrice.includes(range)) {
      setSelectedPrice(selectedPrice.filter((item) => item !== range));
    } else {
      setSelectedPrice([...selectedPrice, range]);
    }
  };

  //  handle availability filter
  const handleAvailability = (status) => {
    if (selectedAvailability.includes(status)) {
      setSelectedAvailability(
        selectedAvailability.filter((item) => item !== status),
      );
    } else {
      setSelectedAvailability([...selectedAvailability, status]);
    }
  };

  //  handle color filter
  const handleColor = (color) => {
    if (selectedColor.includes(color)) {
      setSelectedColor(selectedColor.filter((item) => item !== color));
    } else {
      setSelectedColor([...selectedColor, color]);
    }
  };
  return (
    <aside className="w-full p-10 relative ">
      <button
        className="cursor-pointer text-xl px-2 py-2  absolute top-0 right-5"
        onClick={() => setshowFilters(false)}
      >
        <IoCloseOutline />
      </button>

      {/* Product Categories */}

      <div className="border-b border-gray-100 py-4">
        <div
          onClick={() => setOpenCategory(!openCategory)}
          className="flex justify-between items-center cursor-pointer"
        >
          <h3 className="font-medium text-xl">Product Categories</h3>
          <span>{openCategory ? <FiMinus /> : <FiPlus />}</span>
        </div>

        {openCategory && (
          <div className="flex flex-col gap-3 mt-3 text-sm">
            <label className="flex gap-2 text-[16px] text-gray-600 cursor-pointer">
              <input type="checkbox" onChange={() => handleCategory(6)} />
              Rings
            </label>

            <label className="flex gap-2 text-[16px] text-gray-600 cursor-pointer">
              <input type="checkbox" onChange={() => handleCategory(5)} />
              Earrings
            </label>

            <label className="flex gap-2 text-[16px] text-gray-600 cursor-pointer">
              <input type="checkbox" onChange={() => handleCategory(8)} />
              Bracelets
            </label>

            <label className="flex gap-2 text-[16px] text-gray-600 cursor-pointer">
              <input type="checkbox" onChange={() => handleCategory(11)} />
              Necklaces
            </label>

            <label className="flex gap-2 text-[16px] text-gray-600 cursor-pointer">
              <input type="checkbox" onChange={() => handleCategory(7)} />
              Locket
            </label>

            <label className="flex gap-2 text-[16px] text-gray-600 cursor-pointer">
              <input type="checkbox" onChange={() => handleCategory(9)} />
              Bundle Set
            </label>

            <label className="flex gap-2 text-[16px] text-gray-600">
              <input type="checkbox" onChange={() => handleCategory(10)} />
              Accessories
            </label>
          </div>
        )}
      </div>

      {/* Filter By Price */}

      <div className="border-b border-gray-100 py-4">
        <div
          onClick={() => setOpenPrice(!openPrice)}
          className="flex justify-between items-center cursor-pointer"
        >
          <h3 className="font-medium">Filter By Price</h3>
          <span>{openPrice ? <FiMinus /> : <FiPlus />}</span>
        </div>

        {openPrice && (
          <div className="flex flex-col gap-3 mt-3 text-sm">
            <label className="flex gap-2  text-[16px] text-gray-600">
              <input type="checkbox" onChange={() => handlePrice("Under100")} />
              Under $100
            </label>

            <label className="flex gap-2  text-[16px] text-gray-600">
              <input type="checkbox" onChange={() => handlePrice("100-500")} />
              $101-$500
            </label>

            <label className="flex gap-2  text-[16px] text-gray-600">
              <input type="checkbox" onChange={() => handlePrice("500-1000")} />
              $501-$1000
            </label>

            <label className="flex gap-2  text-[16px] text-gray-600">
              <input
                type="checkbox"
                onChange={() => handlePrice("1000-3000")}
              />
              $1001-$3000
            </label>
            <label className="flex gap-2  text-[16px] text-gray-600">
              <input
                type="checkbox"
                onChange={() => handlePrice("3000-4000")}
              />
              $3001-$4000
            </label>
            <label className="flex gap-2  text-[16px] text-gray-600">
              <input
                type="checkbox"
                onChange={() => handlePrice("4000-5000")}
              />
              $4001-$5000
            </label>
            <label className="flex gap-2  text-[16px] text-gray-600">
              <input
                type="checkbox"
                onChange={() => handlePrice("Above5000")}
              />
              Above $5000
            </label>
          </div>
        )}
      </div>

      {/* Availability */}

      <div className="border-b border-gray-100 py-4">
        <div
          onClick={() => setOpenAvailability(!openAvailability)}
          className="flex justify-between items-center cursor-pointer"
        >
          <h3 className="font-medium">Availability</h3>
          <span>{openAvailability ? <FiMinus /> : <FiPlus />}</span>
        </div>

        {openAvailability && (
          <div className="flex flex-col gap-3 mt-3 text-sm">
            <label className="flex gap-2  text-[16px] text-gray-600">
              <input
                type="checkbox"
                checked={selectedAvailability.includes("inStock")}
                onChange={() => handleAvailability("inStock")}
              />
              In Stock
            </label>

            <label className="flex gap-2  text-[16px] text-gray-600">
              <input
                type="checkbox"
                onChange={() => handleAvailability("outStock")}
              />
              Out of Stock
            </label>
          </div>
        )}
      </div>

      {/* Filter By Color */}

      <div className="border-b border-gray-100 py-4">
        <div
          onClick={() => setOpenColor(!openColor)}
          className="flex justify-between items-center cursor-pointer"
        >
          <h3 className="font-medium">Filter By Color</h3>
          <span>{openColor ? <FiMinus /> : <FiPlus />}</span>
        </div>

        {openColor && (
          <div className="flex flex-col gap-3 mt-3 text-sm">
            <label className="flex gap-2 text-[16px] text-gray-600">
              <input
                type="checkbox"
                checked={selectedColor.includes("black")}
                onChange={() => handleColor("black")}
              />
              Black
            </label>

            <label className="flex gap-2 text-[16px] text-gray-600">
              <input
                type="checkbox"
                checked={selectedColor.includes("red")}
                onChange={() => handleColor("red")}
              />
              Red
            </label>

            <label className="flex gap-2 text-[16px] text-gray-600">
              <input
                type="checkbox"
                checked={selectedColor.includes("green")}
                onChange={() => handleColor("green")}
              />
              Green
            </label>

            <label className="flex gap-2 text-[16px] text-gray-600">
              <input
                type="checkbox"
                checked={selectedColor.includes("blue")}
                onChange={() => handleColor("blue")}
              />
              Blue
            </label>

            <label className="flex gap-2 text-[16px] text-gray-600">
              <input
                type="checkbox"
                checked={selectedColor.includes("yellow")}
                onChange={() => handleColor("yellow")}
              />
              Yellow
            </label>

            <label className="flex gap-2 text-[16px] text-gray-600">
              <input
                type="checkbox"
                checked={selectedColor.includes("white")}
                onChange={() => handleColor("white")}
              />
              White
            </label>

            <label className="flex gap-2 text-[16px] text-gray-600">
              <input
                type="checkbox"
                checked={selectedColor.includes("brown")}
                onChange={() => handleColor("brown")}
              />
              Brown
            </label>
          </div>
        )}
      </div>

      {/* Best Selling */}

      <div className="py-4">
        <div
          onClick={() => setOpenBest(!openBest)}
          className="flex justify-between items-center cursor-pointer"
        >
          <h3 className="font-medium">Best Selling Products</h3>
          <span>{openBest ? <FiMinus /> : <FiPlus />}</span>
        </div>

        {openBest && (
          <div className="flex flex-col gap-5 mt-3">
            <div className="flex items-center justify-center gap-4">
              <img src={Earrings} className="w-20 h-20" />
              <div className="flex flex-col items-start justify-center gap-2">
                <h3 className="text-[16px]">New Fashion Earring</h3>
                <span className="text-[#CB927A]">$200.00</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <img src={Bracelet} className="w-20 h-20" />
              <div className="flex flex-col items-start justify-center gap-2">
                <h3 className="text-[16px]">Natural Stone Bracelet</h3>
                <span className="text-[#CB927A]">$170.00</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <img src={ring} className="w-20 h-20" />
              <div className="flex flex-col items-start justify-center gap-2">
                <h3 className="text-[16px]">Engagement Lady Ring</h3>
                <span className="text-[#CB927A]">$150.00</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <img src={necklace} className="w-20 h-20" />
              <div className="flex flex-col items-start justify-center gap-2">
                <h3 className="text-[16px]">High Quality Necklace</h3>
                <span className="text-[#CB927A]">$350.00</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Filters;
