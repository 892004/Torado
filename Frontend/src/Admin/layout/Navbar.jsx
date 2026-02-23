import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const navigate = useNavigate();
    
    const handleLogout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate("/admin/login");
  }
  return (
   <section className="Navbar p-5 w-full flex items-center justify-between">
        <h1 className='text-3xl font-medium'>Hey ,Admin👋</h1>
        <button onClick={handleLogout} className='bg-lime-600 px-2 py-1 text-white rounded-xs cursor-pointer font-medium'>Logout</button>
   </section>   
  )
}

export default Navbar