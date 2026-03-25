import React from 'react'


const LeftScetion = ({blog}) => {
  return (
    <section className="Left-section h-full w-[70%] flex flex-col items-start gap-2 ">
           <img src={blog.img} alt="" className="w-full h-[1100px] object-cover" />
           <p>{blog.name}</p>
           <h3 className='font-semibold text-3xl'>In 2025, new jewelry will enter the market</h3>
           <p className='w-4xl'>Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat.</p><br/>

           <p className='w-4xl' >Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.</p><br/>

           <span className='text-lg tracking-wider w-4xl text-gray-500'>“ Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat."</span>

           <p className='text-gray-500'>Jesus Williams</p>

           <p className='w-4xl text-gray-500 text-sm mt-4'>Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><br/>

           <ul className='list-disc list-inside text-gray-500 text-sm ml-4'>
             <li>Curabitur aliquet quam id dui posuere blandit.</li>
             <li>Pellentesque in ipsum id orci porta dapibus.</li>
             <li>Vivamus suscipit tortor eget felis porttitor volutpat.</li>
           </ul><br/>

           <p className='w-4xl text-gray-500 text-sm'>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p><br/>

           <div className='flex flex-wrap gap-2 mt-6'>
             <span className='text-gray-500'>Tags:</span>
             <span className='bg-gray-200 px-3 py-1 rounded-sm text-sm'>Jewelry</span>
             <span className='bg-gray-200 px-3 py-1 rounded-sm text-sm'>Fashion</span>
             <span className='bg-gray-200 px-3 py-1 rounded-sm text-sm'>Trends</span>
           </div>

           <div className='mt-8 border-t pt-6'>
             <h3 className='text-xl font-semibold mb-4'>03 Comments</h3>
             
             <div className='mb-6'>
               <div className='flex items-start gap-3'>
                 <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
                 <div>
                   <h4 className='font-semibold'>Sarah Johnson</h4>
                   <p className='text-sm text-gray-500'>2 days ago</p>
                   <p className='text-gray-600 text-sm mt-2'>Great article! I love the new jewelry trends for 2025.</p>
                 </div>
               </div>
             </div>

             <div className='mb-6'>
               <div className='flex items-start gap-3'>
                 <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
                 <div>
                   <h4 className='font-semibold'>Mike Davis</h4>
                   <p className='text-sm text-gray-500'>1 day ago</p>
                   <p className='text-gray-600 text-sm mt-2'>Very informative. Looking forward to seeing these designs.</p>
                 </div>
               </div>
             </div>

             <div className='border-t pt-6'>
               <h3 className='text-xl font-semibold mb-4'>Leave A Comment</h3>
               <div className='space-y-4'>
                 <input type='text' placeholder='Name' className='w-full border border-gray-300 px-4 py-2' />
                 <input type='email' placeholder='Email' className='w-full border border-gray-300 px-4 py-2' />
                 <textarea placeholder='Comment' rows='4' className='w-full border border-gray-300 px-4 py-2'></textarea>
                 <button className='bg-black text-white px-6 py-2 hover:bg-gray-800'>Post Comment</button>
               </div>
             </div>
           </div>
    </section>
  )
}

export default LeftScetion