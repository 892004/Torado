import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useCartlist } from "../../Context/CartContext";
import { useWishlist } from "../../Context/WishlistContext";


const RightSection = ({ product }) => {

const { addtoCart } = useCartlist();
const { addWishlist } = useWishlist();
const [quantity, setQuantity] = useState(1);
  return (
    <section className="Right-section h-full w-1/2 ">
      {product && (
        <div className="relative h-full w-full p-10 flex flex-col gap-3">
          <p className="text-green-500 tracking-wide opacity-70">● In Stock</p>
          <h3 className="text-4xl opacity-80">{product.product_name}</h3>
          <div className="flex flex-row items-center gap-2 text-gray-500">
            <h2 className="text-[#CB937B] text-xl">★★★★★</h2>{" "}
            <p className="text-sm">
              4.9 <span className="underline cursor-pointer">(05 Customer Reviews)</span>
            </p>
          </div>
          <h2 className="text-[#CB937B]">${product.price}</h2>
          <p className="leading-7 text-gray-500">
            Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
            pretium ut lacin in, elementum id enim. Curabitur arcu erat,
            accumsan id imperdiet et, portior at sem. Curabitur arcu erat,
            accumsan id imperdiet et, portitor at sem.
          </p>
          <p className="text-gray-500">
            {" "}
            <span className="font-medium text-black">10 people</span> are currently viewing
            this item.
          </p>

          <div className="flex flex-row">
            <div className="flex flex-row items-center justify-center gap-2">
              <span>Quantity:</span>
              <div className="flex items-center justify-between px-2 w-25 py-1 border border-gray-200 bg-gray-100  text-xl ">
                <button>-</button>
                <span className="font-normal' text-lg ">1</span>
                <button>+</button>
              </div>
            </div>
            <button onClick={()=> addtoCart(product)} className="bg-[#CB927A] text-white px-6 py-2 w-fit mx-12 cursor-pointer">
              Add To Cart
            </button>
            <button  onClick={()=> addWishlist(product)}  className="flex flex-row items-center justify-center gap-1 cursor-pointer">
              <FiHeart className="text-xl"/>
              <span>Add to Wishlist</span>
            </button>
          </div>

          <p className="text-gray-500 flex flex-row items-center gap-3"><span className="font-medium text-black">Tags:</span>Jewelry , Engagement</p>
          <p className="text-gray-500 flex flex-row items-center gap-3"><span className="font-medium text-black">SKU:</span>MK0940084</p>
          <p className="text-gray-500 flex flex-row items-center gap-3"><span className="font-medium text-black">categories:</span>Wedding</p>
           <p className="social-icons flex items-center gap-4 text-[16px] font-medium">
                    Follow us:{" "}
                    <span className="cursor-pointer text-gray-500">
                      <FaFacebookF />
                    </span>{" "}
                    <span className="cursor-pointer text-gray-500">
                      <AiFillInstagram />
                    </span>{" "}
                    <span className="cursor-pointer text-gray-500">
                      <FaTwitter />
                    </span>
                    <span className="cursor-pointer text-gray-500">
                      <FaYoutube />
                    </span>
                  </p>
        <p className="text-gray-500 flex flex-row items-center gap-3"><span className="font-medium text-black">Estimated delivery:</span>01/02/2025</p>
        <p className="text-gray-500 flex flex-row items-center gap-3"><span className="font-medium text-black">Free Shipping:</span>Free express shipping on orders over $150.00</p>
        </div>
      )}
    </section>
  );
};

export default RightSection;
