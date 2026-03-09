import React from 'react'
import rightbg from '../../../assets/Images/collections/collection-6.jpg'
import { MdArrowOutward } from "react-icons/md";


const RightCollection = () => {
  return (
    <div className="right-collection h-full w-[40%] bg-purple-500 mt-6 relative">
        <img src={rightbg} className='relative' />
        <div className="content w-70 h-40 absolute cursor-pointer -bottom-40 left-10 flex flex-col items-start gap-4 p-5 bg-white/30 backdrop-blur-xl">
            <p className='text-[#CC9078] px-1'>Upto 50% OFF</p>
            <h3 className='text-5xl text-[#2A2826]'>BIG SALE </h3>
            <button className='flex items-center gap-1 mx-1 cursor-pointer relative'>Shop Now <MdArrowOutward /></button>
        </div>
   </div>
  )
}

export default RightCollection