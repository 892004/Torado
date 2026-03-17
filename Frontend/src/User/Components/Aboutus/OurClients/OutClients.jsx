import React from 'react'
import Left from './Left'
import Right from './Right'

export const Feedbacks = [
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

const OutClients = () => {
  return (
    <section className="outClients h-screen w-full flex items-center justify-center ">
    <Left feedbacks={Feedbacks}/>
    <Right />
    </section>

  )

}



export default OutClients