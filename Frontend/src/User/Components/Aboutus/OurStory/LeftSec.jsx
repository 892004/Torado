import React from 'react'
import Cartegorybg from '../../../../assets/Images/categories/category-bg.jpg'
import '../../../Components/Aboutus/aboutus.css'

const LeftSec = () => {
  return (
    <section className="left-sec h-screen w-1/2 ">
        <img src={Cartegorybg} className='h-full w-full object-cover'/>
    </section>
  )
}

export default LeftSec