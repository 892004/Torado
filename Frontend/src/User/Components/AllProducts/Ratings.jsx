import React from 'react'

const Ratings = ({ratings = 5 , className=""}) => {
  return (
   <div className={`flex gap-1 text-[#CB927A] ${className}`}>
        {Array.from({length:ratings}).map((_, i)=>(
            <span key={i}>★</span>
        ))}
   </div>
  )
}

export default Ratings