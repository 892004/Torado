import React from 'react'
import LeftSec from './LeftSec'
import RightSec from './RightSec'

const OurStory = () => {
  return (
    <section className="OurStory w-full py-20 flex flex-col items-center justify-center">
        <h3 className='text-5xl text-center leading-14 opacity-90 mb-12'>We Provide The Highest Quality Jewelry <br/>To Our Customers</h3>
        <div className="flex items-center justify-center w-full max-w-7xl">
        <LeftSec />
        <RightSec />
        </div>
    </section>
  )
}

export default OurStory