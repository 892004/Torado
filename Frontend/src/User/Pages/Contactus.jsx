import React from 'react'
import { Link } from 'react-router-dom'
import Left from '../Components/contactus/Left'
import Right from '../Components/contactus/Right'
import '../Components/contactus/contact.css'

const Contactus = () => {
  return (
   <section className="contact-us w-full flex flex-col items-center justify-center mt-50">
      <h3 className='text-6xl text-[#2A2826] mb-4'>Contact Us</h3>
        <div className="flex flex-row items-center gap-1 mb-8">
        <Link to = '/' className='opacity-80'> Home  /</Link><span className='text-[#CC9078]'>Contact Us</span>
        </div>

        <div className="h-full w-full flex flex-row items-center justify-center p-10">
            <Left />
            <Right />
        </div>

        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.842126865058!2d144.9558764!3d-37.8171667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1773836234486!5m2!1sen!2sbd"
  className='w-full h-screen'
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
   </section>
  )
}

export default Contactus