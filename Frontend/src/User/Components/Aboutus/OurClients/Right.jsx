import React from 'react'
import rightimg from '../../../../assets/Images/Hero/testimonial-bg.jpg'
import '../../Aboutus/aboutus.css'


const Right = () => {
  return (
    <section className="Right h-full w-1/2 flex items-center justify-center">
        <div className="img h-full w-full  overflow-hidden">
          <img src={rightimg} className='h-full w-full object-cover -scale-x-100'/>
        </div>
    </section>
  )
}

export default Right