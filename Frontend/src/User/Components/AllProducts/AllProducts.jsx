import React, { useEffect, useState, useRef } from "react";
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
import Filters from "../Filters/Filters";
import { VscFilter } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";
import "../Filters/filter.css";
import { useWishlist } from "../../Context/WishlistContext";
import { useCartlist } from "../../Context/CartContext";

const AllProducts = () => {
  const { cart, addtoCart, removeCart } = useCartlist();
  const { wishlist, addWishlist, removeWishlist } = useWishlist();
  const [layout, setlayout] = useState(3);
  const [products, setproducts] = useState([]);
  const [fade, setFade] = useState(true);
  const [showFilters, setshowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);

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

  const filteredProducts = products.filter((product) => {
    // for category
    let categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category_id);

    // for price
    let priceMatch =
      selectedPrice.length === 0 ||
      selectedPrice.some((range) => {
        const price = Number(product.price);

        if (range === "Under100") return price < 100;
        if (range === "100-500") return price >= 100 && price <= 500;
        if (range === "500-1000") return price >= 500 && price <= 1000;
        if (range === "1000-3000") return price >= 1000 && price <= 3000;
        if (range === "3000-4000") return price >= 3000 && price <= 4000;
        if (range === "4000-5000") return price >= 4000 && price <= 5000;
        if (range === "Above5000") return price > 5000;

        return false;
      });

    // for availability
    let availabilityMatch =
      selectedAvailability.length === 0 ||
      selectedAvailability.some((status) => {
        if (status === "inStock") return product.stock > 0;
        if (status === "outStock") return product.stock === 0;

        return false;
      });

    // for color
    let colorMatch =
      selectedColor.length === 0 || selectedColor.includes(product.color);

    return categoryMatch && priceMatch && availabilityMatch && colorMatch;
  });

  const indexOfLastProduct = currentPage * ProductsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - ProductsPerPage;

  const currentProduct = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const totalPages = Math.ceil(filteredProducts.length / ProductsPerPage);

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

  products.forEach((p) => console.log(p.category));
  console.log(products);

  const categoryNames = {
    6: "Rings",
    5: "Earrings",
    8: "Bracelets",
    11: "Necklaces",
    7: "Locket",
    9: "Bundle Set",
    10: "Accessories",
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.product_id === productId);
  };

  const isInCart = (productId) => {
    return cart.some((item) => item.product_id === productId);
  };

  const toggleWishlist = (productId) => {
    if (!localStorage.getItem("token")) {
      alert("Please login first");
      return;
    }

    const existingItem = wishlist.find((item) => item.product_id === productId);

    if (existingItem) {
      removeWishlist(existingItem.wishlist_id);
    } else {
      addWishlist(productId);
    }
  };

  const toggleCart = (productId) => {
    if (!localStorage.getItem("token")) {
      alert("Please Login First");
      return;
    }

    const exitingItem = cart.find((item) => item.product_id === productId);

    if (exitingItem) {
      removeCart(exitingItem.cart_id);
    } else {
      addtoCart(productId);
    }
  };

  return (
    <section
      ref={productsRef}
      className="Allproducts w-full min-h-screen py-20"
    >
      <div className="max-w-[1400px] mx-auto w-full ">
        <ProductHeader layout={layout} setlayout={setlayout} />
        <div className="Filters mx-2">
          <button
            onClick={() => setshowFilters(!showFilters)}
            className=" border px-4 py-2 flex items-center gap-2 cursor-pointer justify-center mt-6"
          >
            <VscFilter />
            <span className="text-sm">Filters</span>
          </button>
        </div>
        <div className="flex mt-5 gap-10">
          {showFilters && (
            <div className="flex gap-10  w-[400px]">
              <Filters
                showFilters={showFilters}
                setshowFilters={setshowFilters}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedPrice={selectedPrice}
                setSelectedPrice={setSelectedPrice}
                selectedAvailability={selectedAvailability}
                setSelectedAvailability={setSelectedAvailability}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
            </div>
          )}

          <div className={`${showFilters ? "w-[calc(100%-280px)]" : "w-full"}`}>
            {/* ACTIVE FILTERS */}

            {(selectedCategories.length > 0 ||
              selectedPrice.length > 0 ||
              selectedAvailability.length > 0) && (
              <div className="flex flex-wrap gap-3 mb-6">
                {/* Category Filters */}
                {selectedCategories.map((cat) => (
                  <span
                    key={cat}
                    className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    Category: {categoryNames[cat]}
                    <button
                      onClick={() =>
                        setSelectedCategories(
                          selectedCategories.filter((c) => c !== cat),
                        )
                      }
                      className="text-lg"
                    >
                      <IoCloseOutline className="text-red-500" />
                    </button>
                  </span>
                ))}

                {/* Price Filters */}
                {selectedPrice.map((price) => (
                  <span
                    key={price}
                    className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    Price: {price}
                    <button
                      onClick={() =>
                        setSelectedPrice(
                          selectedPrice.filter((p) => p !== price),
                        )
                      }
                      className="text-lg"
                    >
                      <IoCloseOutline className="text-red-500" />
                    </button>
                  </span>
                ))}

                {/* Availability Filters  */}
                {selectedAvailability.map((status) => (
                  <span
                    key={status}
                    className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    Availability:{" "}
                    {status === "inStock" ? "In Stock" : "Out Of Stock"}
                    <button
                      onClick={() =>
                        setSelectedAvailability(
                          selectedAvailability.filter((s) => s !== status),
                        )
                      }
                      className="text-lg"
                    >
                      <IoCloseOutline className="text-red-500" />
                    </button>
                  </span>
                ))}

                {/* color filter */}
                {selectedColor.map((color) => (
                  <span
                    key={color}
                    className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    Color: {color}
                    <button
                      onClick={() =>
                        setSelectedColor(
                          selectedColor.filter((c) => c !== color),
                        )
                      }
                      className="text-lg"
                    >
                      <IoCloseOutline className="text-red-500" />
                    </button>
                  </span>
                ))}

                {/* clear all button */}
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedPrice([]);
                    setSelectedAvailability([]);
                    setSelectedColor([]);
                  }}
                  className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition cursor-pointer"
                >
                  Clear All
                </button>
              </div>
            )}
            {/* LIST VIEW */}

            {/* Layout 1  */}
            {layout === 1 ? (
              <div
                className={`flex flex-col gap-10  transition-all duration-500 ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
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
                      <h3 className="text-xl font-medium">
                        {item.product_name}
                      </h3>

                      <div className="flex gap-3 mt-2">
                        <span className="text-[#CB927A]">
                          ₹{item.discount_price}
                        </span>

                        <span className="line-through text-gray-400 text-sm">
                          ₹{item.price}
                        </span>
                      </div>

                      <p className="opacity-80 mt-4 max-w-5xl">
                        Pellentesque in ipsum id orci porta dapibus. Quisque
                        velit nisi, pretium ut lacinia in, elementum id enim.
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem. Proin eget tortor risus. Curabitur arcu erat,
                        accumsan id imperdiet et, porttitor at
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
                } gap-10  mt-10`}
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
                          onClick={() => toggleWishlist(item.product_id)}
                          className={`p-4 rounded-full shadow
  opacity-0 translate-x-5
  group-hover:opacity-100 group-hover:translate-x-0
  transition-all duration-500 delay-0
  ${
    isInWishlist(item.product_id)
      ? "bg-red-500 text-white"
      : "bg-white text-black"
  }`}
                        >
                          <FaRegHeart />
                        </button>
                        <button
                          onClick={() => toggleCart(item.product_id)}
                          className={`p-4 cursor-pointer rounded-full shadow
  opacity-0 translate-x-5
  group-hover:opacity-100 group-hover:translate-x-0
  transition-all duration-500 delay-150
  ${
    isInCart(item.product_id)
      ? "bg-green-400 text-white"
      : "bg-white text-black"
  }`}
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
          </div>
        </div>
      </div>

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
            setcurrentPage((prev) => Math.min(prev + 1, totalPages))
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
