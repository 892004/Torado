import React from 'react'
import { useCartlist } from '../../Context/CartContext'

const Leftsec = () => {
  const { cart } = useCartlist()

  // Calculate subtotal from cart items
  const subtotal = cart.reduce((sum, item) => {
    return sum + (item.discount_price * item.qty);
  }, 0)

  return (
   <section className="left h-full w-[60%] border p-8">
    {/* Order Details */}
    <div className="mb-8">
      <h3 className='text-3xl font-bold text-gray-800 mb-6'>Order details</h3>
      
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-gray-500 text-sm">Tracking #</p>
            <p className="text-lg font-semibold text-gray-800">DAS758942LKJB15</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Subtotal</p>
            <p className="text-lg font-semibold text-gray-800">${subtotal.toFixed(2)}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">Order placed</p>
            <p className="text-lg font-semibold text-gray-800">Jan 25, 2025</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Estimated delivery</p>
            <p className="text-lg font-semibold text-gray-800">Feb 2, 2025</p>
          </div>
        </div>
      </div>
    </div>

    {/* Order Tracking Timeline */}
    <div className="mb-8">
      <h3 className='text-3xl font-bold text-gray-800 mb-6'>Order Tracking</h3>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gray-300"></div>
        
        {/* Timeline Items */}
        <div className="space-y-8">
          {/* Order Placed */}
          <div className="relative flex items-start gap-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold z-10">
              ✓
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800">Order placed</h4>
              <p className="text-gray-600 text-sm">Your order has been placed</p>
              <p className="text-gray-500 text-xs mt-1">Jan 25, 2025 - 10:30 AM</p>
            </div>
          </div>

          {/* Order Confirmed */}
          <div className="relative flex items-start gap-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold z-10">
              ✓
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800">Order Confirmed</h4>
              <p className="text-gray-600 text-sm">Your order has been confirmed</p>
              <p className="text-gray-500 text-xs mt-1">Jan 25, 2025 - 11:15 AM</p>
            </div>
          </div>

          {/* Order Processing */}
          <div className="relative flex items-start gap-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold z-10">
              ✓
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800">Order Processing</h4>
              <p className="text-gray-600 text-sm">Your order is being processed</p>
              <p className="text-gray-500 text-xs mt-1">Jan 26, 2025 - 9:00 AM</p>
            </div>
          </div>

          {/* Shipped */}
          <div className="relative flex items-start gap-4">
            <div className="w-12 h-12 bg-[#CC9078] rounded-full flex items-center justify-center text-white font-bold z-10 animate-pulse">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800">Shipped</h4>
              <p className="text-gray-600 text-sm">Your order has been shipped</p>
              <p className="text-gray-500 text-xs mt-1">Jan 27, 2025 - 2:30 PM</p>
              <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Expected delivery:</strong> Feb 2, 2025
                </p>
              </div>
            </div>
          </div>

          {/* Delivered (Upcoming) */}
          <div className="relative flex items-start gap-4 opacity-50">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800">Delivered</h4>
              <p className="text-gray-600 text-sm">Your order will be delivered</p>
              <p className="text-gray-500 text-xs mt-1">Expected: Feb 2, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Leftsec