import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BlogData } from '../../../data/Blog';


const RightSection = () => {
  return (
    <section className="Right-section h-full w-[30%]  p-5">
        <h3 className='text-xl mx-1'>Search</h3>
        <div className="flex flex-row relative">
        <input type="text" className=' bg-gray-100 w-full py-4 px-3 mt-1' placeholder='Search here....'  /> 
        <span className='absolute right-5 top-6 cursor-pointer'><FaMagnifyingGlass /></span>
        </div>

        {/* product Category */}
        <div className="product-category mt-5 flex flex-col items-start gap-2">
        <h3 className='text-xl mx-1'>Product Category</h3>


    <div className="flex flex-row items-center mx-2 gap-2 text-gray-500">
        <input type="checkbox" className='h-4 w-4'  />
        <label>Rings(3)</label>
    </div>
    <div className="flex flex-row items-center mx-2 gap-2 text-gray-500">
        <input type="checkbox" className='h-4 w-4'  />
        <label>Earings(5)</label>
    </div>
    <div className="flex flex-row items-center mx-2 gap-2 text-gray-500">
        <input type="checkbox" className='h-4 w-4'  />
        <label>Bracelets(2)</label>
    </div>
    <div className="flex flex-row items-center mx-2 gap-2 text-gray-500">
        <input type="checkbox" className='h-4 w-4'  />
        <label>Necklaces(4)</label>
    </div>
    <div className="flex flex-row items-center mx-2 gap-2 text-gray-500">
        <input type="checkbox" className='h-4 w-4'  />
        <label>Locket(1)</label>
    </div>
    <div className="flex flex-row items-center mx-2 gap-2 text-gray-500">
        <input type="checkbox" className='h-4 w-4'  />
        <label>Bundle Set(6)</label>
    </div>
    <div className="flex flex-row items-center mx-2 gap-2 text-gray-500">
        <input type="checkbox" className='h-4 w-4'  />
        <label>Accessories(2)</label>
    </div>
        </div>


{/* Latest Posts */}
<div className="Latest-posts flex flex-col items-start gap-2">
    <h3 className='text-xl mt-5 flex flex-col items-start'>Latest Posts</h3> 

    <div className="flex flex-row items-center gap-3 mt-3">
     <img src={BlogData[0].img} className='h-25 w-20' />

     <div className="content flex flex-col">
        <span className='text-[#CC9078]'>{BlogData[0].date}</span>
        <h3 className='text-xl'>{BlogData[0].heading}</h3>
     </div>
    </div>

    <div className="flex flex-row items-center gap-3 mt-3">
     <img src={BlogData[1].img} className='h-25 w-20' />

     <div className="content flex flex-col">
        <span className='text-[#CC9078]'>{BlogData[1].date}</span>
        <h3 className='text-xl'>{BlogData[1].heading}</h3>
     </div>
    </div>

    <div className="flex flex-row items-center gap-3 mt-3">
     <img src={BlogData[2].img} className='h-25 w-20' />

     <div className="content flex flex-col">
        <span className='text-[#CC9078]'>{BlogData[2].date}</span>
        <h3 className='text-xl'>{BlogData[2].heading}</h3>
     </div>
    </div>
</div>

{/* Tags */}
<div className="Tags flex flex-col ">
     <h3 className='text-xl mt-5 flex flex-col items-start'>Tags</h3> 
     <div className="flex flex-wrap items-start gap-2 text-sm mt-2">
    <button className='px-2 py-1 font-medium text-gray-500 border border-gray-400 bg-gray-200 cursor-pointer'>Jewelry</button>
    <button className='px-2 py-1 font-medium text-gray-500 border border-gray-400 bg-gray-200 cursor-pointer'>Diamond</button>
    <button className='px-2 py-1 font-medium text-gray-500 border border-gray-400 bg-gray-200 cursor-pointer'>Ring</button>
    <button className='px-2 py-1 font-medium text-gray-500 border border-gray-400 bg-gray-200 cursor-pointer'>Necklace</button>
    <button className='px-2 py-1 font-medium text-gray-500 border border-gray-400 bg-gray-200 cursor-pointer'>Bracelets</button>
    <button className='px-2 py-1 font-medium text-gray-500 border border-gray-400 bg-gray-200 cursor-pointer'>Locket</button>
    <button className='px-2 py-1 font-medium text-gray-500 border border-gray-400 bg-gray-200 cursor-pointer'>Bundle Set</button>
    <button className='px-2 py-1 font-medium text-gray-500 border border-gray-400 bg-gray-200 cursor-pointer'>Accessories</button>
    <button className='px-2 py-1 font-medium text-gray-500 border border-gray-400 bg-gray-200 cursor-pointer'>Fashion</button>
     </div>
</div>
    </section>
  )
}

export default RightSection