import React from 'react'
import '../ExploreCollection/explorecollection.css'


const ExploreCards = (props) => {
    console.log(props)
  return (
   <div className="Explore-cards h-100 w-90 shadow relative bg-[#F7F7F7] cursor-pointer">
     <img src={props.img} className='h-80 w-full scale-80'/>
     <h3 className='absolute bottom-10 left-5 font-medium text-xl'>{props.heading}</h3>
     <p className='px-5 py-10 text-[#CC9078]'>{props.price}</p>
   </div>
  )
}

export default ExploreCards