import React from 'react'
import FreeShipping from '../../../../src/assets/Images/Logo/free-delivery.svg'
import Support from '../../../../src/assets/Images/Logo/support.svg'
import Payment from '../../../../src/assets/Images/Logo/payment-method.svg'
import Return from '../../../../src/assets/Images/Logo/return-box.svg'
import '../Homepageservices/services.css'

const Services = () => {
  return (
    <section className="Services flex flex-row items-center justify-around">
        {/* Shipping */}
        <div className="shipping mt-10 flex items-start justify-start gap-5">
            <img src = {FreeShipping} className=''/>
            <div className="shipping-content flex flex-col">
                <h3 className='text-xl'>Free Shipping</h3>
                <p className='text-gray-500'>What you want, delivered to <br/> where you want</p>
            </div>
        </div>
        <div className="shipping mt-10 flex items-start justify-start gap-5">
            <img src = {Support} className=''/>
            <div className="shipping-content flex flex-col">
                <h3 className='text-xl'>Support 24/7</h3>
                <p className='text-gray-500'>24/7 We are customer care <br />best support</p>
            </div>
        </div>
        <div className="shipping mt-10 flex items-start justify-start gap-5">
            <img src = {Payment} className=''/>
            <div className="shipping-content flex flex-col">
                <h3 className='text-xl'>Flexible Payment</h3>
                <p className='text-gray-500'>Pay with the world's top <br /> payment methods</p>
            </div>
        </div>
        <div className="shipping mt-10 flex items-start justify-start gap-5">
            <img src = {Return} className=''/>
            <div className="shipping-content flex flex-col">
                <h3 className='text-xl'>30 Days Return</h3>
                <p className='text-gray-500'>There is a return facility within <br /> 30 days</p>
            </div>
        </div>
    </section>
  )
}

export default Services