import React from 'react'
import testimonialBg from '../../../assets/Images/Hero/testimonial-bg.jpg'
import '../Feedback/feedback.css'


const Left = () => {
  return (
    <section className="feedback-left h-full w-1/2">
        <img src={testimonialBg} className='h-full w-full' />
    </section>
  )
}

export default Left