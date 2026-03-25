import React from 'react'
import {Link} from 'react-router-dom'
import GalleryCard from '../Components/Gallary/GallaryCard'
import { galleryData } from '../../data/Gallary'
import { RiInstagramFill } from "react-icons/ri";
import '../Components/Gallary/gallary.css'
import { MdArrowOutward } from "react-icons/md";

const Gallary = () => {
  return (
    <section className="gallary  min-h-screen w-full flex flex-col items-center justify-start pt-50">
        <h3 className='text-6xl text-[#2A2826] mb-4'>Gallary</h3>
        <div className="flex flex-row items-center gap-1">
        <Link to = '/' className='opacity-80'> Home  /</Link><span className='text-[#CC9078]'>Gallary</span>
        </div>

        <h3 className="heading flex items-center justify-center text-5xl font-semibold text-[#2A2826] mx-15 mt-10">
                <span className="text-[#CB927A]">
                  <RiInstagramFill />
                </span>
                # Love Torado On Instagram
        </h3>

      <div className="cards grid grid-cols-4 gap-6 mt-20">
        {galleryData.map((item) => (
          <GalleryCard key={item.id} image={item.image} isEven={item.id % 2 === 0}/>
        ))}
      </div>


       <button className="px-8 py-3 relative bg-[#CB927A] text-white text-[15px] flex items-center gap-2 cursor-pointer mt-20">
                  Load More
                  <MdArrowOutward className="text-xl" />
        </button>
    </section>
  )
}

export default Gallary