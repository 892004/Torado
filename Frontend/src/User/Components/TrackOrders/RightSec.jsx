import React from 'react'
import { useCartlist } from '../../Context/CartContext'

const RightSec = () => {
  const { cart } = useCartlist()

  // Calculate subtotal from cart items
  const subtotal = cart.reduce((sum, item) => {
    return sum + (item.discount_price * item.qty);
  }, 0)

  return (
   <section className="right h-full w-[40%] p-8">
    {/* Shipping Information */}
    <div className="mb-8">
      <h3 className='text-2xl font-bold text-gray-800 mb-6'>Shipping Information</h3>
      
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">John Doe</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            123 Main Street, Apt 4B<br />
            New York, NY 10001<br />
            United States
          </p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="text-sm font-medium text-gray-800">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm font-medium text-gray-800">john.doe@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Billing Information */}
    <div className="mb-8">
      <h3 className='text-2xl font-bold text-gray-800 mb-6'>Billing Information</h3>
      
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">John Doe</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            123 Main Street, Apt 4B<br />
            New York, NY 10001<br />
            United States
          </p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500">Payment Method</p>
              <p className="text-sm font-medium text-gray-800">Credit Card ending in 4242</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500">Total Amount</p>
              <p className="text-sm font-medium text-gray-800">${subtotal.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

   </section>
  )
}

export default RightSec