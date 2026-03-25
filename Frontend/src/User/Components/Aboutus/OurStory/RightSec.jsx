import React from 'react'
import '../../../Components/Aboutus/aboutus.css'

const RightSec = () => {
  return (
    <div className="right-sec h-screen w-1/2 flex items-start justify-start p-10 relative">
            <h3 className='text-5xl opacity-80'>Our Story</h3>

            <div className="content h-130 w-2xl -left-20 absolute top-30 bg-[#FFFCF9] p-10">
                <p className='opacity-80'>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada.</p> <br/>

                <p className='opacity-80'>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.</p><br/>

                <div className="our-philosophy">


                <h3 className='text-xl py-5'>Our Philosphy</h3>

                <p className='opacity-80'>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
                </div>
            </div>
    </div>  
  )
}

export default RightSec