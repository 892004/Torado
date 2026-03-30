import React from 'react'
import { Link } from 'react-router-dom'
import error from '../../assets/Images/404/error.png'
import '../Components/notfound/notfound.css'

const NotFound = () => {
 
  return (
    <section className="not-found flex flex-col items-center justify-center mt-50">
        <img src={error}/>
        <h2 className='mt-5 font-medium text-xl'>Sorry! Page you are looking can’t be found.</h2>
        <p className='text-gray-500 '>Go back to the <Link to = '/' className='text-black font-medium'>HomePage</Link></p>
    </section>
  )
}

export default NotFound