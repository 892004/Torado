import React, { useState } from "react";
import { MdOutlineZoomOutMap } from "react-icons/md";


const LeftSection = ({ product }) => {
  console.log(product);
  const [openImg, setopenImg] = useState(false);
  return (
    <section className="left-section h-full w-1/2 3p-5 flex flex-col items-center justify-center">
      {product && (
        <div className="relative h-full w-full p-10">
          <img
            src={`http://localhost:5000/uploads/${product.thumbnail}`}
            alt={product.product_name}
            className="h-full w-full object-cover "
          />
          <button onClick={() => setopenImg(true)}>
            <MdOutlineZoomOutMap className="absolute top-10 right-10 text-5xl cursor-pointer p-3 " />
          </button>
        </div>
      )}

      {openImg && (
  <div 
    className="fixed inset-0 bg-black/50 bg-opacity-80 flex items-center justify-center z-50"
    onClick={() => setopenImg(false)} // click outside to close
  >
    
    <div 
      className="relative"
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
    >
      
      {/* Close Button */}
      <button
        className="absolute top-5 right-6 text-black text-3xl cursor-pointer"
        onClick={() => setopenImg(false)}
      >
        ✕
      </button>

      {/* Image */}
      <img
        src={`http://localhost:5000/uploads/${product.thumbnail}`}
        alt={product.product_name}
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
      />

    </div>

  </div>
)}
    </section>
  );
};

export default LeftSection;
