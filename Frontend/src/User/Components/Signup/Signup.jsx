import React from 'react'
import '../Signup/signup.css'
import subscribebg from '../../../assets/Images/Hero/subscribe-bg.jpg'
import { MdArrowOutward } from "react-icons/md";


const Signup = () => {
  return (
   <section className="Sign-up h-screen w-full flex items-center justify-center">
     <div className="flex items-start justify-center relative ">
       <img src={subscribebg} className='h-130 object-fill' />
       <h3 className='absolute text-5xl top-30'>Sign Up To Love Torado</h3>
       <p className='absolute top-48 opacity-70'>Join the Torado family and you'll get access to exclusive discounts, special offers and more!</p>

       <input type="text" className='absolute border border-gray-400 bottom-50 bg-white w-4xl py-4 px-6 placeholder:text-gray-400 text-gray-500' placeholder='Your Email Address ' />
       <button className='flex items-center justify-center absolute bottom-51 right-80 bg-[#CB927A] py-3 px-6 cursor-pointer text-white gap-2'>Subscribe Now <MdArrowOutward /></button>
       <span className='absolute bottom-30 opacity-70'>We’ll never share your email address with a third-party</span>
     </div>
   </section>
  )
}

export default Signup