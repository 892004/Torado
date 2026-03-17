import React from 'react'
import {Link} from 'react-router-dom'
import OurStory from '../Components/Aboutus/OurStory/OurStory'
import OurFounder from '../Components/Aboutus/OurFounder/OurFounder'
import OutClients from '../Components/Aboutus/OurClients/OutClients'
import PopulerBrands from '../Components/Aboutus/PopulerBrands/PopulerBrands'
import Instagram from '../Components/Instagram/Instagram'

const Aboutus = () => {
  return (
    <section className="Aboutus min-h-screen w-full flex flex-col items-center justify-start pt-50">
        <h3 className='text-6xl text-[#2A2826] mb-4'>About us</h3>
        <div className="flex flex-row items-center gap-1 mb-8">
        <Link to = '/' className='opacity-80'> Home  /</Link><span className='text-[#CC9078]'>About Us</span>
        </div>

        <OurStory />
        <OurFounder />
        <OutClients />
        <PopulerBrands />
        <hr/>
        <div className="mt-10">
        </div>
        <Instagram />
    </section>
  )
}

export default Aboutus