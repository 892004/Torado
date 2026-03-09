import React from "react";

const FeaturedProductCard = (props) => {
  console.log(props);
  return (
    <div className="feature-card h-110 w-80 overflow-hidden cursor-pointer relative mt-10">
      <img src={props.img} className="h-80 w-full object-cover scale-100" />
    {props.label && (
  <div className="new-ribbon">
    <span>{props.label}</span>
  </div>
)}
      <p className="absolute left-2 bottom-20 text-xl text-[#CC9078]">
        {props.rating}
      </p>
      <h3 className="absolute bottom-12 left-2 text-black text-xl font-medium ">
        {props.productName}
      </h3>
      <p className="absolute left-2 bottom-4 text-[#CC9078]">{props.price}</p>
    </div>
  );
};

export default FeaturedProductCard;
