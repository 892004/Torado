import React from "react";
import '../CollectionCard/card.css'
import { MdArrowOutward } from "react-icons/md";

const Cards = (props) => {
  console.log(props);
  return (
    <div className="Cards h-120 w-100 overflow-hidden mx-10 cursor-pointer relative">
      <img src={props.img} className="h-full w-full object-cover scale-100" />

      <div className="content-box h-20 w-40 absolute bg-white/30 backdrop-blur-md left-5 bottom-5">
        <h3 className="absolute bottom-10 left-2 text-black text-xl font-medium ">
          {props.heading}
        </h3>

        <button className="absolute  bottom-4 left-2 text-black flex items-center justify-center gap-2 mt-2 cursor-pointer ">
          {props.button} <MdArrowOutward />
        </button>
      </div>
    </div>
  );
};

export default Cards;
