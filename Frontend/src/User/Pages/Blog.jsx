import React from 'react'
import { BlogData } from '../../data/Blog'
import '../Components/Blog/blog.css'
import { Link } from 'react-router-dom'
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const navigate = useNavigate()
  return (
    <section className ="Blog h-auto w-full flex flex-col items-center justify-center mt-50">
      
      <h3 className="text-5xl">Blog</h3>
       <div className="flex flex-row items-center gap-1 mt-2">
        <Link to = '/' className='opacity-80'> Home  /</Link><span className='text-[#CC9078]'>Blog</span>
        </div>

        <div className="blog-cards grid grid-cols-3 items-center justify-center gap-20 py-10 ">
    {BlogData.map((item)=>(
        <div className=" blog-card flex flex-col items-start relative gap-2">
            <img src={item.img} alt="blog.img" className='h-120 w-100 scale-100'/>
            <h3 className='absolute bottom-40 right-10 text-center text-sm w-15 py-1 text-white bg-[#CC9078]'>{item.date}</h3>
            <p className='text-gray-500 text-sm'>{item.name}</p>
            <h3 onClick={()=>navigate(`/blogdetails/${item.id}`)} className='w-100 text-3xl cursor-pointer'>{item.heading}</h3>
            <button onClick={()=>navigate(`/blogdetails/${item.id}`)}  className='relative flex items-center justify-center gap-3 text-gray-600 cursor-pointer'>Read More <MdOutlineArrowOutward /></button>
        </div>
    ))}
    </div>
    </section>
  )
}

export default Blog