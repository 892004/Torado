import React from "react";
import collection4 from "../../../assets/Images/collections/collection-4.jpg";
import collection5 from "../../../assets/Images/collections/collection-5.jpg";

const bottomCard = [
  {
    id: 1,
    img: collection4,
    smallHeading: "Upto 80% off",
    Heading: "Classic Diamond Ring",
    button: "Shop Now",
  },
  {
    id: 2,
    img: collection5,
    smallHeading: "100% Original",
    Heading: "Make Your Style Everyday",
    button: "Shop Now",
  },
];

const BottomCard = () => {
  return (
    <section className="bottom-card max-w-[1320px] mx-auto mt-70 flex gap-8">
      {bottomCard.map((elem) => {
        return (
          <div key={elem.id} className="relative w-1/2 h-[350px] overflow-hidden cursor-pointer ">
            
            {/* IMAGE */}
            <img
              src={elem.img}
              alt=""
              className="h-full w-full object-cover object-center"
            />

            {/* GLASS BOX */}
            <div className="absolute left-5 bottom-2 bg-white/30 backdrop-blur-xl p-6 w-[280px]">
              <p className=" mb-2">{elem.smallHeading}</p>

              <h3 className="text-2xl leading-tight mb-3">
                {elem.Heading}
              </h3>

              <button className="relative">
                {elem.button} ↗
              </button>
            </div>

          </div>
        );
      })}
    </section>
  );
};

export default BottomCard;