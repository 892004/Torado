import React, { useEffect, useState } from "react";
import ProductHeader from "./ProductHeader";
import axios from "axios";
import Ratings from "./Ratings";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";
import { TfiExchangeVertical } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi";

const AllProducts = () => {
  const [layout, setlayout] = useState(3);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/product")
      .then((res) => {
        console.table(res.data);
        setproducts(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="Allproducts w-full min-h-screen flex flex-col items-center py-20">
      <ProductHeader layout={layout} setlayout={setlayout} />

      {/* LIST VIEW */}

      {/* Lauout 1  */}
      {layout === 1 ? (
        <div className="flex flex-col gap-10 w-7xl mt-10">
          {products.map((item) => (
            <div
              key={item.product_id}
              className="flex gap-10 border-b border-gray-300 pb-10"
            >
              <img
                src={`http://localhost:5000/uploads/${item.thumbnail}`}
                className="w-80 h-80 object-cover bg-gray-100"
              />

              <div className="flex flex-col justify-center">
                <Ratings className="text-xl" />
                <h3 className="text-xl font-medium">{item.product_name}</h3>

                <div className="flex gap-3 mt-2">
                  <span className="text-[#CB927A]">₹{item.discount_price}</span>

                  <span className="line-through text-gray-400 text-sm">
                    ₹{item.price}
                  </span>
                </div>

                <p className="opacity-80 mt-4 max-w-5xl">
                  Pellentesque in ipsum id orci porta dapibus. Quisque velit
                  nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu
                  erat, accumsan id imperdiet et, porttitor at sem. Proin eget
                  tortor risus. Curabitur arcu erat, accumsan id imperdiet et,
                  porttitor at
                </p>

                {/* icons */}

                <div className="icons flex flex-row items-center justify-around w-80 px-2 py-6 mt-3 border border-gray-300">
                  <span className="text-xl font-bold border-r border-gray-400 px-5 cursor-pointer">
                    <MdOutlineShoppingBag />
                  </span>
                  <span className="text-xl font-bold border-r border-gray-400 px-5 cursor-pointer">
                    <FaRegHeart />
                  </span>
                  <span className="text-xl font-bold border-r border-gray-400 px-5 cursor-pointer">
                    <LuEye />
                  </span>
                  <span className="text-xl font-bold cursor-pointer">
                    <TfiExchangeVertical />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* GRID VIEW */

        <div
          className={`grid ${
            layout === 2
              ? "grid-cols-2"
              : layout === 3
                ? "grid-cols-3"
                : layout === 4
                  ? "grid-cols-4"
                  : "grid-cols-5"
          } gap-10 w-7xl mt-10`}
        >
          {products.map((item) => (
            <div key={item.product_id} className="group">
              <div className="relative bg-gray-100 overflow-hidden">
              <img
  src={`http://localhost:5000/uploads/${item.thumbnail}`}
  className={`w-full object-cover transition-transform duration-800 ease-in-out scale-80 group-hover:scale-85 ${
    layout === 2
      ? "h-[450px]"
      : layout === 3
      ? "h-[350px]"
      : layout === 4
      ? "h-[280px]"
      : "h-[220px]"
  }`}
/>

                {/* Hover Icons */}

                <div className="absolute right-3 top-3 flex flex-col gap-3">
                  <button
                    className="bg-white p-4 cursor-pointer rounded-full shadow
opacity-0 translate-x-5
group-hover:opacity-100 group-hover:translate-x-0
transition-all duration-500 delay-0"
                  >
                    <FaRegHeart />
                  </button>
                  <button
                    className="bg-white p-4 cursor-pointer rounded-full shadow
opacity-0 translate-x-5
group-hover:opacity-100 group-hover:translate-x-0
transition-all duration-500 delay-150"
                  >
                    <FiShoppingCart />
                  </button>

                  <button
                    className="bg-white p-4 cursor-pointer rounded-full shadow
opacity-0 translate-x-5
group-hover:opacity-100 group-hover:translate-x-0
transition-all duration-500 delay-300"
                  >
                    <LuEye />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex flex-col items-start justify-center">
                <Ratings
                  className={`${
                    layout === 2
                      ? "text-lg"
                      : layout === 3
                        ? "text-lg"
                        : layout === 4
                          ? "text-lg"
                          : "text-lg"
                  }`}
                />
                <h3 className="text-lg">{item.product_name}</h3>

                <div className="flex gap-2 mt-1">
                  <span className="text-[#CB927A] ">
                    ₹{item.discount_price}
                  </span>

                  {/* <span className="line-through text-gray-400">
                    ₹{item.price}
                  </span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AllProducts;
