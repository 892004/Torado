import React from 'react'
import CategoryBg from '../../../assets/Images/categories/category-bg.jpg' 
import "../Categories/category.css";

const Leftsection = () => {
  return (
    <section className="category-left flex-1 h-full ">
       <img src={CategoryBg} className='h-full w-full object-cover'/>
    </section>
  )
}

export default Leftsection