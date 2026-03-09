import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const ProductHeader = ({ layout, setlayout }) => {
  const active = "text-[#CB927A]";
  const normal = "text-gray-400";

  return (
    <section className="Product-header h-16 w-7xl flex items-center justify-between p-5  bg-[#F7F7F7] ">
      <div className="sizing flex flex-row items-center justify-center gap-5 border p-2 text-gray-400">
        <span className={`font-bold cursor-pointer ${layout === 1 ? active:normal}`} onClick={() => setlayout(1)}>
          <GiHamburgerMenu />
        </span>
        <span
          className={`font-bold cursor-pointer ${layout === 2 ? active:normal}`}
          onClick={() => setlayout(2)}
        >
          ||
        </span>
        <span
          className={`font-bold cursor-pointer ${layout === 3 ? active:normal}`}
          onClick={() => setlayout(3)}
        >
          |||
        </span>
        <span
          className={`font-bold cursor-pointer ${layout === 4 ? active:normal}`}
          onClick={() => setlayout(4)}
        >
          ||||
        </span>
        <span
          className={`font-bold cursor-pointer ${layout === 5 ? active:normal}`}
          onClick={() => setlayout(5)}
        >
          |||||
        </span>
      </div>

      <div className="filter flex flex-row items-center justify-center gap-2 p-5 ">
        <p className="text-sm opacity-90">Sort by</p>
        <select className="bg-white p-2 flex items-center justify-between px-4 text-gray-500 text-sm">
          <option value="Recommended">Recommended</option>
          <option value="Price: High to Low">Price: High to Low</option>
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Most Viewed">Most Viewed</option>
          <option value="Recently Added">Recently Added</option>
        </select>
      </div>
    </section>
  );
};

export default ProductHeader;
