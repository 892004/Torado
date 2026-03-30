import React from 'react'
import { Link, useParams } from 'react-router-dom'
import LeftScetion from '../Components/BlogDetails/LeftScetion'
import RightSection from '../Components/BlogDetails/RightSection'
import { BlogData } from '../../data/Blog'
import { use } from 'react'
import '../Components/BlogDetails/blogdetails.css'
const BlogDetails = () => {
  const {id} = useParams()
    const blog = BlogData.find((item) => item.id === parseInt(id));

   return (
    <section className="BlogDetails w-full flex flex-col items-center justify-center mt-50">
        <h3 className='text-5xl '>Blog Details</h3>
          <div className="flex flex-row items-center gap-1 mt-2">
        <Link to="/" className="opacity-80">
          {" "}
          Home /
        </Link>
        <Link to="/Blog" className="opacity-80">Blog /</Link>
        <span className="text-[#CC9078]">Blog Details</span>
      </div>


      <div className="details h-auto w-full mt-20 flex flex-row items-start justify-center p-10">
        <LeftScetion blog={blog } />
        <RightSection />
      </div>
    </section>
  )
}

export default BlogDetails