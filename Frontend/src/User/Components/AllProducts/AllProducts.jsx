import React, { useEffect, useState , useRef } from "react";
import ProductHeader from "./ProductHeader";
import axios from "axios";
import Ratings from "./Ratings";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";
import { TfiExchangeVertical } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";


const AllProducts = () => {
  const [layout, setlayout] = useState(3);
  const [products, setproducts] = useState([]);
  const [fade, setFade] = useState(true);

  // pagination
  const [currentPage, setcurrentPage] = useState(1);
  const productsRef = useRef(null);
  const ProductsPerPage =
  layout === 1
    ? 8
    : layout === 2
    ? 12
    : layout === 3
    ? 12
    : layout === 4
    ? 16
    : 20;

    useEffect(() => {
  setcurrentPage(1);
}, [layout]);

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

  const indexOfLastProduct = currentPage * ProductsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - ProductsPerPage;

  const currentProduct = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / ProductsPerPage);

useEffect(() => {

  setFade(false);

  const timer = setTimeout(() => {
    setFade(true);
  }, 200);

  productsRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  return () => clearTimeout(timer);

}, [currentPage]);

  return (
    <section
  ref={productsRef}
  className="Allproducts w-full min-h-screen flex flex-col items-center py-20"
>
      <ProductHeader layout={layout} setlayout={setlayout} />

      {/* LIST VIEW */}

      {/* Lauout 1  */}
      {layout === 1 ? (
      <div className={`flex flex-col gap-10 w-7xl mt-10 transition-all duration-500 ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {currentProduct.map((item) => (
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
          className={`grid transition-all duration-500 ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${
            layout === 2
              ? "grid-cols-2"
              : layout === 3
              ? "grid-cols-3"
              : layout === 4
              ? "grid-cols-4"
              : "grid-cols-5"
          } gap-10 w-7xl mt-10`}
        >
          {currentProduct.map((item) => (
            <div key={item.product_id} className="group">
              <div className="relative bg-gray-100 overflow-hidden">
                <img
                  src={`http://localhost:5000/uploads/${item.thumbnail}`}
                  className={`w-full object-cover transition-transform bg-transparent duration-800 ease-in-out scale-80 group-hover:scale-85 ${
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
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* PAGINATION */}

     <div className="flex justify-center items-center gap-3 mt-14">

  {/* Prev Button */}

  <button
    onClick={() => setcurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="px-3 cursor-pointer py-3 border border-gray-400 rounded-full hover:bg-[#CD9780] hover:text-white transition-colors duration-500   bg-white disabled:opacity-40"
  >
    <GoArrowLeft /> 
  </button>

  {/* Page Numbers */}

  {Array.from({ length: totalPages }).map((_, index) => (
    <button
      key={index}
      onClick={() => setcurrentPage(index + 1)}
      className={`px-4 py-2 border cursor-pointer border-gray-300 rounded-full transition-colors duration-500 ${
        currentPage === index + 1
          ? "bg-[#CD9780] text-white"
          : "bg-white  hover:bg-[#CD9780] hover:text-white "
      }`}
    >
      {index + 1}
    </button>
  ))}

  {/* Next Button */}

  <button
    onClick={() =>
      setcurrentPage((prev) =>
        Math.min(prev + 1, totalPages)
      )
    }
    disabled={currentPage === totalPages}
    className="px-3 py-3 border cursor-pointer border-gray-400 hover:bg-[#CD9780] hover:text-white transition-colors duration-500 rounded-full  bg-white disabled:opacity-80"
  >
    <GoArrowRight />
  </button>

</div>
    </section>
  );
};

export default AllProducts;