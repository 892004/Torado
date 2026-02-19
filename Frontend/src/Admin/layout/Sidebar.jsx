import React from 'react'
import Logo from '../../assets/Logo/logo.svg'
import { RxDashboard } from "react-icons/rx";
import { PiUsersFourLight } from "react-icons/pi";
import { GoPackage } from "react-icons/go";
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineLocalShipping } from "react-icons/md";
import './sidebar.css'
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <section className="Sidebar p-8 flex flex-col  items-center justify-center">
      <img src={Logo} alt="Logo" className='h-12'/>
      <ul className='p-10 text-[18px] flex flex-col items-start gap-6'>
        <Link to='dashboard' className='flex items-center justify-center  gap-4 cursor-pointer'><span><RxDashboard className='text-2xl '/></span>Dashboard </Link>
        <Link to="users"  className='flex items-center justify-center gap-4 cursor-pointer'><span><PiUsersFourLight  className='text-2xl ' /></span>Users</Link>
        <Link to="products" className='flex items-center justify-center gap-4 cursor-pointer'><span><GoPackage className='text-2xl ' /></span>Products</Link>
        <Link to="categories" className='flex items-center justify-center gap-4 cursor-pointer'><span><TbCategory2 className='text-2xl font-bold'/></span>Category</Link>
        <Link to="orders " className='flex items-center justify-center gap-4 cursor-pointer'><span><MdOutlineLocalShipping className='text-2xl'/></span>Orders </Link>
      </ul>
    </section>
  )
}

export default Sidebar