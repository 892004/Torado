import React from 'react'
import './Admincard.css'

const AdminCards = (props) => {
    console.log(props)
  return (
    <section className="Admin-Cards  min-h-auto p-5 ">
        <div className="card h-40 w-60 bg-[#ddf9c8] flex flex-col items-start p-5 text-black rounded-xl cursor-pointer gap-5">
            <h1 className='text-2xl font-medium'>{props.heading}</h1>
            <h1 className='text-5xl font-bold'>{props.total}</h1>
        </div>
    </section>
  )
}

export default AdminCards