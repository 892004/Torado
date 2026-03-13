import React from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <div className=" min-h-screen mt-50">
      {/* Header Title */}
      <div className="py-12 flex flex-col items-center justify-center gap-2">
        <h3 className="text-5xl ">Checkout</h3>
        <div className="links flex flex-row text-center gap-1">
          <Link to="/" className="text-gray-600">
            Home /
          </Link>
          <Link to="/cart" className="text-gray-600">
            cart /
          </Link>
          <Link to="/Checkout" className="text-[#CC9078]">
            Checkout
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-5xl  mb-4">Contact Information</h3>
            
            <label>Email or Phone Number</label>
            <input
              type="text"
              placeholder="gillies@torado.com"
              className="w-full border border-gray-300 p-3 rounded outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Shipping Address */}
          <div>
            <h3 className="text-5xl  mb-6">Shipping Address</h3>

            <div className="country flex flex-col mb-4 ">
              <label>Country</label>
              <input
                className="border p-3 rounded"
                placeholder="United Kingdom"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label>First Name</label>
                <input
                  className="border p-3 rounded"
                  placeholder="Thomas"
                />
              </div>

              <div className="flex flex-col">
            <label>Last Name</label>
              <input className="border p-3 rounded" placeholder="Gillies " />
              </div>


            <div className="flex flex-col">
                <label>Address</label>
              <input
                className="border p-3 rounded md:col-span-2"
                placeholder="94 East 84th Street , 9th Flor , New York , GA 30030"
                />
                </div>

              <input className="border p-3 rounded" placeholder="City" />
              <input className="border p-3 rounded" placeholder="Post Code" />

              <input className="border p-3 rounded" placeholder="Division" />
              <input className="border p-3 rounded" placeholder="Street" />

              <input
                className="border p-3 rounded md:col-span-2"
                placeholder="Phone"
              />
            </div>

            <div className="mt-4 flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm text-gray-600">
                Save this information for next time.
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm text-gray-600">
                I’ve read & agree to the Terms & Conditions
              </span>
            </div>

            <textarea
              placeholder="Order Notes (Optional)"
              className="w-full border mt-5 p-3 rounded"
              rows="4"
            />
          </div>
        </div>

        {/* Right Section (Order Summary) */}
        <div className="bg-white shadow-md p-6 h-fit">
          <h3 className="text-xl font-semibold mb-5">Cart Totals</h3>

          <div className="flex justify-between mb-3">
            <span>Total</span>
            <span>4 Items</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>$2700.00</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>$0.00</span>
          </div>

          <div className="flex justify-between font-semibold text-lg border-t pt-3">
            <span>Payable Total</span>
            <span>$2700.00</span>
          </div>

          {/* Payment Method */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Payment Method</h3>

            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" />
                Direct Bank Transfer
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="payment" />
                Cash On Delivery
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="payment" />
                Check Payment
              </label>
            </div>
          </div>

          {/* Place Order */}
          <button className="w-full mt-6 bg-[#c79377] hover:bg-[#b87e5f] text-white py-3 rounded">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
