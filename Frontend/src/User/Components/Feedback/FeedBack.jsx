import React from 'react'
import '../Feedback/feedback.css'
import Left from './Left'
import Right from './Right'


const Feedbacks = [
    {
        id:1,
        para:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
        name:"Gouglas Robledo",
        occupation:"Manager"
    },
    {
        id:2,
        para:"Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
        name:"Gouglas Robledo",
        occupation:"Manager"
    },
    {
        id:3,
        para:"Elementum id enim Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
        name:"Gouglas Robledo",
        occupation:"Manager"
    },


]
const FeedBack = () => {
  return (
    <section className="FeedBack h-screen flex flex-col items-center justify-center mt-20">
        <h3 className='text-5xl text-[#2A2826] font-bold mb-10'>Our Happy Clients</h3>

        <div className='flex flex-row h-full w-full items-center justify-center gap-10 p-2 '>
            <Left />
              <Right feedbacks={Feedbacks}/>
        </div>
    </section>
  )
}

export default FeedBack