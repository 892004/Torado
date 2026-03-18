import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Left = () => {
  return (
   <section className="Left h-full  w-[60%] p-10 flex flex-col items-start">
        <h3 className='text-5xl'>Send A Message</h3>

        <form className='flex flex-col item-center justify-center py-5 gap-5'>
<div className="flex flex-row gap-5 ">
        <div className="name flex flex-col ">
            <label>Your name</label>
            <input type="text" className='py-2 w-90 border mt-2 border-gray-300 text-gray-500 px-3' placeholder='Thomas Gillies' />
        </div>
        <div className="name flex flex-col ">
            <label>Email</label>
            <input type="text" className='py-2 w-90 border mt-2 border-gray-300 text-gray-500 px-3' placeholder='gillies@torado.com' />
        </div>
</div>

<div className="flex flex-row gap-5">
        <div className="name flex flex-col ">
            <label>Phone</label>
            <input type="text" className='py-2 w-90 border mt-2 border-gray-300 text-gray-500 px-3' placeholder='+91 1234567890' />
        </div>
        <div className="name flex flex-col ">
            <label>Subject</label>
            <input type="text" className='py-2 w-90 border mt-2 border-gray-300 text-gray-500 px-3' placeholder='Write subject here..' />
        </div>
</div>


<div className="flex flex-col">
    <label>Message</label>
    <textarea rows={6} cols={10} className='border mt-2 border-gray-300 text-gray-500 px-3' placeholder='Write your message here..'></textarea>
</div>

<div className="flex flex-row gap-2">
    <input type="checkbox" />
    <p>I accept to the <span className='text-[#CB927A] font-medium'>Terms & Conditions</span> and <span className='text-[#CB927A] font-medium'>Privacy Policy</span></p>
</div>

   <button className="px-5 w-48 py-3 relative bg-[#CB927A] text-white text-[15px] flex items-center gap-2 cursor-pointer ">
          Post A Comment
          <MdArrowOutward className="text-xl" />
        </button>

        </form>
   </section>
  )
}

export default Left