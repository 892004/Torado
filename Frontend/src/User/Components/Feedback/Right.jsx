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
    <section className="feeback-right h-full w-1/2 flex items-center justify-center relative">

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
        className="btn-1 absolute -left-82 w-14 h-14 rounded-full bg-gradient-to-r from-[#CC9078] to-[#B87860] text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white"
      >
        <GoArrowLeft className="text-xl font-bold" />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextHandler}
        className="btn-2 absolute right-35 w-14 h-14 rounded-full bg-gradient-to-r from-[#CC9078] to-[#B87860] text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white"
      >
        <GoArrowRight className="text-xl font-bold" />
      </button>

    </section>
  )
}

export default Right