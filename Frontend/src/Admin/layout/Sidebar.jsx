import React from 'react'
import Logo from '../../assets/Logo/logo.svg'
import { RxDashboard } from "react-icons/rx";
import { PiUsersFourLight } from "react-icons/pi";
import { GoPackage } from "react-icons/go";
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineLocalShipping } from "react-icons/md";
import './sidebar.css'






const Sidebar = () => {
  return (
    <section className="Sidebar p-8 flex flex-col  items-center justify-center">
      <img src={Logo} alt="Logo" className='h-12'/>

      <ul className='p-10 text-[18px] flex flex-col items-start gap-6'>
        <li className='flex items-center justify-center  gap-4 cursor-pointer'><span><RxDashboard className='text-2xl '/></span>Dashboard </li>
        <li  className='flex items-center justify-center gap-4 cursor-pointer'><span><PiUsersFourLight  className='text-2xl ' /></span>Users</li>
        <li className='flex items-center justify-center gap-4 cursor-pointer'><span><GoPackage className='text-2xl ' /></span>Products</li>
        <li className='flex items-center justify-center gap-4 cursor-pointer'><span><TbCategory2 className='text-2xl font-bold'/></span>Category</li>
        <li className='flex items-center justify-center gap-4 cursor-pointer'><span><MdOutlineLocalShipping className='text-2xl'/></span>Orders </li>
      </ul>
    </section>
  )
}

export default Sidebar