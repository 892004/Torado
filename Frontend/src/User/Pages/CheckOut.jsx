import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getCountries, getStates, getCities } from "../../data/City";
import { useCartlist } from "../Context/CartContext";
import maestro from "../../assets/Images/Payment/maestro.jpg";
import visa from "../../assets/Images/Payment/visa.jpg";
import paypal from "../../assets/Images/Payment/paypal.jpg";
import amex from "../../assets/Images/Payment/american-express.jpg";
import discover from "../../assets/Images/Payment/discover.jpg";
import axios from "axios";
import '../Components/checkout.css'

const CheckoutPage = () => {
  const { cart } = useCartlist();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getCountries();
      setCountries(data);
      setFilteredCountries(data);
    };

    fetchCountries();
  }, []);

  const handleSearch = (value) => {
    setSearch(value);

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredCountries(filtered);
  };

  const handleCountrySelect = async (countryName) => {
    setSelectedCountry(countryName);
    setSearch(countryName);
    setFilteredCountries([]);

    setFormData({
      ...formData,
      country: countryName,
    });

    const stateData = await getStates(countryName);
    setStates(stateData);
  };

  const handleStateSelect = async (stateName) => {
    setSelectedState(stateName);

    setFormData({
      ...formData,
      state: stateName,
    });

    const cityData = await getCities(selectedCountry, stateName);
    setCities(cityData);
    setFilteredCities(cityData);
  };

  const handleCitySearch = (value) => {
    setCitySearch(value);

    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredCities(filtered);
  };

  const subtotal = cart.reduce((sum, item) => {
    return sum + item.discount_price * item.qty;
  }, 0);

  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    address: "",
    country: "",
    state: "",
    city: "",
    postal_code: "",
    phone: "",
    payment_method: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token");

      if(!formData.email || !formData.first_name || !formData.last_name || !formData.address || !formData.city || !formData.country || !formData.state || !formData.postal_code || !formData.phone || !formData.payment_method){
          alert("Please fill all Require Fields");
          return ;
      }

      const res = await axios.post(
        "http://localhost:5000/api/order/add",
        {
          user_id: user.user_id,
           total_amount: subtotal, 
          ...formData,
          payment_status: "pending",
          order_status: "placed",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(res.data);

      alert("Order Placed Successfully");
        setFormData({
      email: "",
      first_name: "",
      last_name: "",
      address: "",
      country: "",
      state: "",
      city: "",
      postal_code: "",
      phone: "",
      payment_method: ""
    });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="checkout-container min-h-screen mt-20 md:mt-50">
      {/* HEADER */}

      <div className="checkout-header py-8 md:py-12 flex flex-col items-center justify-center gap-2 px-4">
        <h3 className="text-3xl md:text-5xl text-center">Checkout</h3>

        <div className="checkout-links links flex flex-row text-center gap-1 text-sm md:text-base flex-wrap justify-center">
          <Link to="/" className="text-gray-600">
            Home /
          </Link>

          <Link to="/cart" className="text-gray-600">
            Cart /
          </Link>

          <Link to="/checkout" className="text-[#CC9078]">
            Checkout
          </Link>
        </div>
      </div>

      <div className="checkout-form max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        {/* LEFT SIDE */}

        <div className="lg:col-span-2 space-y-10">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-section">
              <h3 className="text-2xl md:text-4xl mb-4">Contact Information</h3>

              <label className="form-label block mb-2 text-sm md:text-base">Email or Phone Number</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="gillies@torado.com"
                className="form-input w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-[#CB927A] transition-colors"
              />
            </div>

            {/* SHIPPING ADDRESS */}

            <div className="form-section flex flex-col p-2">
              <h3 className="text-2xl md:text-4xl mb-6">Shipping Address</h3>

              {/* COUNTRY */}

              <div className="flex flex-col relative">
                <label className="form-label block mb-2 text-sm md:text-base">Country</label>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search country..."
                  className="form-input p-3 mt-1 border border-gray-300 rounded-lg focus:border-[#CB927A] transition-colors"
                />

                {search && (
                  <div className="dropdown-list absolute top-20 md:top-16 w-full bg-white max-h-60 overflow-y-auto shadow-lg z-10 border border-gray-200 rounded-lg">
                    {filteredCountries.map((country, index) => (
                      <div
                        key={index}
                        className="dropdown-item p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                        onClick={() => handleCountrySelect(country.name.common)}
                      >
                        {country.name.common}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* FIRST NAME + LAST NAME */}

              <div className="form-row flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mt-4">
                <div className="form-col flex flex-col flex-1">
                  <label className="form-label block mb-2 text-sm md:text-base">First Name</label>

                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="form-input p-3 mt-1 w-full border border-gray-300 rounded-lg focus:border-[#CB927A] transition-colors"
                    placeholder="Thomas"
                  />
                </div>

                <div className="form-col flex flex-col flex-1">
                  <label className="form-label block mb-2 text-sm md:text-base">Last Name</label>

                  <input
                    type="text"
                    name="last_name"
                    onChange={handleChange}
                    value={formData.last_name}
                    className="form-input p-3 mt-1 w-full border border-gray-300 rounded-lg focus:border-[#CB927A] transition-colors"
                    placeholder="Gillies"
                  />
                </div>
              </div>

              {/* ADDRESS */}

              <div className="flex flex-col mt-4">
                <label className="form-label block mb-2 text-sm md:text-base">Address</label>

                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  value={formData.address}
                  className="form-input p-3 border border-gray-300 rounded-lg focus:border-[#CB927A] transition-colors"
                  placeholder="94 East 84th Street , New York"
                />
              </div>

              {/* state */}

              <div className="form-row flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mt-4">
                <div className="form-col flex flex-col flex-1">
                  <label className="form-label block mb-2 text-sm md:text-base">State</label>

                  <select
                    value={selectedState}
                    name="state"
                    onChange={(e) => handleStateSelect(e.target.value)}
                    className="form-select p-3 border border-gray-300 rounded-lg focus:border-[#CB927A] transition-colors w-full"
                  >
                    <option value="">Select State</option>

                    {states.map((state, index) => (
                      <option key={index} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-col flex flex-col flex-1">
                  <label className="form-label block mb-2 text-sm md:text-base">Postal Code</label>

                  <input
                    type="text"
                    name="postal_code"
                    onChange={handleChange}
                    value={formData.postal_code}
                    className="form-input w-full border border-gray-300 p-3 rounded-lg focus:border-[#CB927A] transition-colors"
                    placeholder="****"
                  />
                </div>
              </div>

              {/* city */}

              <div className="form-row flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mt-4">
                <div className="form-col flex flex-col flex-1 relative">
                  <label className="form-label block mb-2 text-sm md:text-base">City</label>

                  <input
                    type="text"
                    name="city"
                    value={citySearch}
                    onChange={(e) => handleCitySearch(e.target.value)}
                    placeholder="Search city..."
                    className="form-input p-3 mt-1 w-full border border-gray-300 rounded-lg focus:border-[#CB927A] transition-colors"
                  />

                  {citySearch && (
                    <div className="dropdown-list absolute top-20 md:top-16 w-full bg-white max-h-60 overflow-y-auto shadow-lg z-10 border border-gray-200 rounded-lg">
                      {filteredCities.map((city, index) => (
                        <div
                          key={index}
                          className="dropdown-item p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                          onClick={() => {
                            setSelectedCity(city);
                            setCitySearch(city);
                            setFilteredCities([]);

                            setFormData({
                              ...formData,
                              city: city,
                            });
                          }}
                        >
                          {city}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="form-col flex flex-col flex-1">
                  <label className="form-label block mb-2 text-sm md:text-base">Street</label>

                  <input
                    type="text"
                    name="street"
                    onChange={handleChange}
                    className="form-input p-3 mt-1 w-full border border-gray-300 rounded-lg focus:border-[#CB927A] transition-colors"
                    placeholder="Street"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <label className="form-label block mb-2 text-sm md:text-base">Phone</label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input p-3 border border-gray-300 rounded-lg focus:border-[#CB927A] transition-colors"
                  placeholder="+91 1234567890"
                />
              </div>

              <div className="p-4 mt-6 space-y-4">
                <label className="checkbox-label flex items-center gap-3 text-gray-500 cursor-pointer hover:text-gray-700">
                  <input type="checkbox" className="cursor-pointer h-4 w-4" />
                  <span className="text-sm md:text-base">Save this information for next time.</span>
                </label>

                <label className="checkbox-label flex items-start gap-3 text-gray-500 cursor-pointer hover:text-gray-700">
                  <input type="checkbox" className="cursor-pointer h-4 w-4 mt-1" />
                  <span className="text-sm md:text-base">
                    I've read & agree to the{" "}
                    <span className="text-[#CB927A]">
                      Terms & Conditions
                    </span>{" "}
                    and{" "}
                    <span className="text-[#CB927A]">Privacy Policy</span>
                  </span>
                </label>
              </div>

              <div className="order-notes flex flex-col mt-6">
                <label className="form-label block mb-2 text-sm md:text-base">Order Notes (Optional)</label>
                <textarea
                  cols={4}
                  rows={4}
                  className="form-textarea border border-gray-300 rounded-lg mt-1 py-3 px-3 font-medium focus:border-[#CB927A] transition-colors resize-none"
                  placeholder="Write your notes here ..."
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="order-summary bg-white p-4 md:p-6 h-fit lg:sticky lg:top-24">
          <h3 className="text-xl md:text-2xl mb-5">Cart Totals</h3>

          <div className="space-y-3">
            <div className="summary-row flex justify-between items-center">
              <span className="text-sm md:text-base text-gray-600">Total Items</span>
              <span className="text-sm md:text-base font-medium">{cart.length}</span>
            </div>

            <div className="summary-row flex justify-between items-center">
              <span className="text-sm md:text-base text-gray-600">Subtotal</span>
              <span className="text-sm md:text-base font-semibold">${subtotal}</span>
            </div>

            <div className="summary-row flex justify-between items-center">
              <span className="text-sm md:text-base text-gray-600">Shipping</span>
              <span className="text-sm md:text-base">$0.00</span>
            </div>

            <div className="summary-row total flex justify-between items-center">
              <span className="text-base md:text-lg font-bold">Payable Total</span>
              <span className="text-base md:text-lg font-bold text-[#CB927A]">${subtotal}</span>
            </div>
          </div>

          <div className="Payment-methods mt-8 text-gray-500">
            <h3 className="text-xl text-black mb-4">Payment Method</h3>
            <div className="flex flex-col items-start gap-4">
              <label className="payment-method-option flex items-start gap-3 cursor-pointer hover:text-gray-700">
                <input
                  type="radio"
                  name="payment_method"
                  value="Bank_transfer"
                  onChange={handleChange}
                  className="h-4 w-4 mt-1"
                />
                <div>
                  <span className="text-sm md:text-base font-medium">Direct Bank Transfer</span>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    Make your payment directly into our bank account. Please use
                    your order ID as the payment reference.
                  </p>
                </div>
              </label>

              <label className="payment-method-option flex items-center gap-3 cursor-pointer hover:text-gray-700">
                <input 
                  type="radio" 
                  name="payment_method" 
                  value="COD" 
                  onChange={handleChange} 
                  className="h-4 w-4" 
                />
                <span className="text-sm md:text-base font-medium">Cash On Delivery</span>
              </label>

              <label className="payment-method-option flex items-center gap-3 cursor-pointer hover:text-gray-700">
                <input 
                  type="radio" 
                  name="payment_method" 
                  value="check_payment" 
                  onChange={handleChange} 
                  className="h-4 w-4" 
                />
                <span className="text-sm md:text-base font-medium">Check Payment</span>
              </label>
            </div>
          </div>

          {/* Accepted Payment methods */}
          <div className="mt-8">
            <h3 className="text-lg md:text-xl py-2">Accepted payment methods</h3>

            <div className="payment-methods payment-icons flex flex-wrap gap-3">
              <img src={maestro} className="h-8 md:h-6" alt="Maestro" />
              <img src={visa} className="h-8 md:h-6" alt="Visa" />
              <img src={paypal} className="h-8 md:h-6" alt="PayPal" />
              <img src={amex} className="h-8 md:h-6" alt="American Express" />
              <img src={discover} className="h-8 md:h-6" alt="Discover" />
            </div>
          </div>

          <button
            onClick={placeOrder}
            className="place-order-btn w-full mt-6 bg-[#c79377] cursor-pointer text-white py-3 md:py-4 rounded-lg hover:bg-[#B8826A] transition-colors font-semibold text-sm md:text-base"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
