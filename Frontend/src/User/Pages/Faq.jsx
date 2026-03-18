import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All questions' },
    { id: 'account', name: 'My Account' },
    { id: 'shopping', name: 'How To Shop'},
    { id: 'order', name: 'The Order' },
    { id: 'shipment', name: 'Shipment'},
    { id: 'security', name: 'Security'},
    { id: 'payment', name: 'Payment'}
  ]

  const faqs = [
    {
      question: "What shipping methods are available?",
      answer: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.",
      category: 'shipment'
    },
    {
      question: "Can I return the product after purchase?",
      answer: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.",
      category: 'order'
    },
    {
      question: "Do you ship internationally?",
      answer: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.",
      category: 'shipment'
    },
    {
      question: "How long will it take to get my package?",
      answer: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.",
      category: 'account'
    },
    {
      question: "How can i request a refund?",
      answer:"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.",
      category: 'account'
    },
    {
      question: "What payment methods do you accept?",
      answer:"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.",
      category: 'shopping'
    },
    {
      question: "How can i request a refund?",
      answer: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.",
      category: 'payment'
    },
    {
      question:  "What payment methods do you accept?",
      answer: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.",
      category: 'security'
    },
    {
      question: "How do I track my order?",
      answer: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.",
      category: 'order'
    },
    {
      question: "Can I cancel my order?",
      answer: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.",
      category: 'order'
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center    ">
      
      {/* Hero Section */}
      <div className="py-30">
        <div className="container mx-auto px-6 text-center translate-y-20   ">
          <h3 className="text-5xl">FAQ</h3>
           <div className="flex flex-row items-center justify-center gap-1 mb-8 ">
        <Link to = '/' className='opacity-80 text-center '> Home  /</Link><span className='text-[#CC9078]'>FAQ</span>
        </div>
        </div>
      </div>

      {/* Main FAQ Content */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="lg:w-1/4">
                 <h3 className="text-5xl w-full leading-14 text-gray-800 mb-4">Frequently Ask Questions</h3>
            <div className="p-8">
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-30 ${
                        selectedCategory === category.id
                          ? 'bg-[#2A2826] text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className='text-white text-xl '><IoIosArrowRoundForward /></span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-3/4">
            {/* FAQ Items */}
            <div className="space-y-4 mb-16">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-800">{faq.question}</span>
                      <span className="text-2xl text-[#CC9078]">
                        {activeIndex === index ? '−' : '+'}
                      </span>
                    </button>
                    {activeIndex === index && (
                      <div className="px-6 py-4 border-t border-gray-200">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                  <p className="text-gray-500">No questions found in this category.</p>
                </div>
              )}
            </div>

            {/* Ask A Question Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-16">
              <h3 className="text-5xl  text-gray-800 mb-6 text-left">Ask A Question</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC9078]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC9078]"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC9078]"
                />
                <textarea
                  placeholder="Message*"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC9078]"
                ></textarea>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-[#CC9078] text-white font-medium rounded-lg hover:bg-[#B88068] transition-colors"
                >
                  Post A Question
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq