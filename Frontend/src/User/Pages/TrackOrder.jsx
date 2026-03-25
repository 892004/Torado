import React from "react";
import { Link } from "react-router-dom";
import Leftsec from "../Components/TrackOrders/Leftsec";
import RightSec from "../Components/TrackOrders/RightSec";
const TrackOrder = () => {
  return (
    <section className="Track-Orders h-auto w-full flex flex-col items-center justify-center mt-40">
        <div className="heading h-auto w-full flex flex-col items-center justify-center bg-[#FFFCF9] p-10">

      <h3 className="text-6xl text-[#2A2826] mb-4 ">Product Details</h3>
      <div className="flex flex-row items-center gap-1 mb-8">
        <Link to="/" className="opacity-80">
          {" "}
          Home /
        </Link>
        <span className="text-[#CC9078]">Track My Orders</span>
      </div>
        </div>

        <div className="h-screen w-full flex items-center justify-center p-10">
            <Leftsec />
            <RightSec />
        </div>
    </section>
  );
};

export default TrackOrder;
