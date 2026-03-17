import React , {useState} from 'react'
import { RiDoubleQuotesR } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";


const Left = ({feedbacks}) => {
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
    <section className="left h-full w-1/2 flex flex-col items-center justify-center relative ">
      <h3 className='text-5xl opacity-80 pb-20'>Our Happy Clients</h3>
        
              {/* MAIN CARD */}
              <div  key={index} className="feddback-card w-220 h-120 left-30 flex flex-col items-center text-center p-8  bg-[#FFFCF9]  transition-all duration-2000 ease-in-out animate-fade translate-x-30 z-10">
        
                <h1 className='text-6xl text-[#CC9078] '>
                  <RiDoubleQuotesR />
                </h1>
        
                <p className=' leading-10 text-xl'>
                  {item.para}
                </p>
        
                <h3 className='mt-8 text-2xl text-[#CC9078] font-semibold'>
                  {item.name}
                </h3>
        
                <span className='text-gray-400'>
                  {item.occupation}
                </span>
        
              {/* LEFT BUTTON */}
              <button
                onClick={prevHandler}
                className="absolute -left-8 top-50 z-99  w-14 h-14 rounded-full bg-gradient-to-r from-[#CC9078] to-[#B87860] text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white "
                >
                <GoArrowLeft className="text-xl font-bold" />
              </button>
        
              {/* RIGHT BUTTON */}
              <button
                onClick={nextHandler}
                className="absolute -right-8 top-50 z-99 w-14 h-14 rounded-full bg-gradient-to-r from-[#CC9078] to-[#B87860] text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white"
                >
                <GoArrowRight className="text-xl font-bold" />
              </button>
                </div>
        
    </section>
  )
}

export default Left