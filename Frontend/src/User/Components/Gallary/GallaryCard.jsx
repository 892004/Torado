import React from "react";
import '../../Components/Gallary/gallary.css'

const GalleryCard = ({ image, isEven }) => {
  return (
    <div className={`overflow-hidden ${isEven ? "translate-y-10" : ""}`}>
      <img
        src={image}
        alt="gallery"
        className="w-full h-full object-cover hover:scale-110 transition duration-500"
      />
    </div>
  );
};

export default GalleryCard;