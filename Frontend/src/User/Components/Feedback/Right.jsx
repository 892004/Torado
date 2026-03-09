import React, { useState } from 'react'
import { RiDoubleQuotesR } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";



const Right = ({ feedbacks }) => {

  const [index , setIndex] = useState(0)

   // ✅ LOOP NEXT
  const nextHandler = () => {
    setIndex((prev) => (prev + 1) % feedbacks.length)
  }

  // ✅ LOOP PREV
  const prevHandler = () => {
    setIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length)
  }

  const item = feedbacks[index]

  return (
    <section className="right h-full w-1/2 flex items-center justify-center relative">

      {/* MAIN CARD */}
      <div  key={index} className="feddback-card w-220 h-120 absolute right-40 flex flex-col items-center text-center p-8 shadow-xl bg-[#FFFCF9]  transition-all duration-2000 ease-in-out animate-fade">

        <h1 className='text-6xl text-[#CC9078] '>
          <RiDoubleQuotesR />
        </h1>

        <p className=' leading-12 text-2xl'>
          {item.para}
        </p>

        <h3 className='mt-8 text-2xl text-[#CC9078] font-semibold'>
          {item.name}
        </h3>

        <span className='text-gray-400'>
          {item.occupation}
        </span>
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prevHandler}
        className="absolute -left-82 w-12 h-12 rounded-full border bg-white text-[#CC9078] border-[#CC9078] cursor-pointer flex items-center justify-center"
      >
        <GoArrowLeft />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextHandler}
        className="absolute right-35 w-12 h-12 rounded-full border text-[#CC9078] bg-white  border-[#CC9078] cursor-pointer flex items-center justify-center"
      >
        <GoArrowRight />
      </button>

    </section>
  )
}

export default Right