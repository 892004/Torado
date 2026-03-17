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
    <div className="min-h-screen mt-50">
      {/* HEADER */}

      <div className="py-12 flex flex-col items-center justify-center gap-2">
        <h3 className="text-5xl">Checkout</h3>

        <div className="links flex flex-row text-center gap-1">
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

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT SIDE */}

        <div className="lg:col-span-2 space-y-10">
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <h3 className="text-5xl mb-4">Contact Information</h3>

              <label>Email or Phone Number</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="gillies@torado.com"
                className="w-full border border-gray-300 p-3 rounded outline-none"
              />
            </div>

            {/* SHIPPING ADDRESS */}

            <div className="flex flex-col p-2">
              <h3 className="text-5xl mb-6">Shipping Address</h3>

              {/* COUNTRY */}

              <div className="flex flex-col relative">
                <label>Country</label>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search country..."
                  className="p-3 mt-1 border border-gray-300 rounded-xl"
                />

                {search && (
                  <div className="absolute top-16 w-full bg-white max-h-60 overflow-y-auto shadow-lg z-10">
                    {filteredCountries.map((country, index) => (
                      <div
                        key={index}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleCountrySelect(country.name.common)}
                      >
                        {country.name.common}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* FIRST NAME + LAST NAME */}

              <div className="flex flex-row items-center gap-8 mt-3">
                <div className="flex flex-col">
                  <label>First Name</label>

                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="p-3 mt-1 w-[380px] border border-gray-300 rounded-xl"
                    placeholder="Thomas"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Last Name</label>

                  <input
                    type="text"
                    name="last_name"
                    onChange={handleChange}
                    value={formData.last_name}
                    className="p-3 mt-1 w-[380px] border border-gray-300 rounded-xl"
                    placeholder="Gillies"
                  />
                </div>
              </div>

              {/* ADDRESS */}

              <div className="flex flex-col mt-3">
                <label>Address</label>

                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  value={formData.address}
                  className="p-3 border border-gray-300 rounded-xl"
                  placeholder="94 East 84th Street , New York"
                />
              </div>

              {/* state */}

              <div className="flex flex-row mt-3 items-center gap-8">
                <div className="flex flex-col">
                  <label>State</label>

                  <select
                    value={selectedState}
                    name="state"
                    onChange={(e) => handleStateSelect(e.target.value)}
                    className="p-3 border border-gray-300 rounded-xl w-[380px]"
                  >
                    <option value="">Select State</option>

                    {states.map((state, index) => (
                      <option key={index} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* POSTAL CODE */}

                <div className="flex flex-col">
                  <label>Postal Code</label>

                  <input
                    type="text"
                    name="postal_code"
                    onChange={handleChange}
                    value={formData.postal_code}
                    className="w-[380px] border border-gray-300 p-3 rounded-xl"
                    placeholder="****"
                  />
                </div>
              </div>

              {/* city */}

              <div className="flex flex-row items-center gap-8 mt-3">
                <div className="flex flex-col relative">
                  <label>City</label>

                  <input
                    type="text"
                    name="city"
                    value={citySearch}
                    onChange={(e) => handleCitySearch(e.target.value)}
                    placeholder="Search city..."
                    className="p-3 mt-1 w-[380px] border border-gray-300 rounded-xl"
                  />

                  {citySearch && (
                    <div className="absolute top-16 w-full bg-white max-h-60 overflow-y-auto shadow-lg z-10">
                      {filteredCities.map((city, index) => (
                        <div
                          key={index}
                          className="p-2 hover:bg-gray-100 cursor-pointer"
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

                <div className="flex flex-col">
                  <label>Street</label>

                  <input
                    type="text"
                    name="street"
                    onChange={handleChange}
                    className="p-3 mt-1 w-[380px] border border-gray-300 rounded-xl"
                    placeholder="Street"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-3">
                <label>Phone</label>

                <input
                  type="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-xl"
                  placeholder="+91 1234567890"
                />
              </div>

              <p className="p-2 flex items-center gap-2 text-gray-500 ">
                <input type="checkbox" className="cursor-pointer h-4 w-4" />
                Save this information for next time.
              </p>

              <p className="p-2 flex items-center gap-2 text-gray-500 ">
                <input type="checkbox" className="cursor-pointer h-4 w-4" />
                I've read & agree to the{" "}
                <span className="text-[#CB927A]">
                  Terms & Conditions
                </span> and{" "}
                <span className="text-[#CB927A]">Privacy Policy</span>
              </p>

              <div className="order-notes flex flex-col mt-3">
                <label>Order Notes (Optional) </label>
                <textarea
                  cols={4}
                  rows={6}
                  className="border border-gray-300 rounded-xl mt-1 py-3 px-2 font-medium"
                  placeholder="Write your notes here ..."
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-6 h-fit">
          <h3 className="text-xl  mb-5">Cart Totals</h3>

          <div className="flex justify-between mb-3 text-sm">
            <span>Total Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between mb-3 text-sm font-semibold">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>

          <div className="flex justify-between mb-3 text-sm">
            <span>Shipping</span>
            <span>$0.00</span>
          </div>

          <div className="flex justify-between text-sm font-semibold">
            <span>Payable Total</span>
            <span>${subtotal}</span>
          </div>

          <div className="Payment-methods mt-10 text-gray-500 ">
            <h3 className="text-xl text-black">Payment Method</h3>
            <div className="flex flex-col mt-5 items-start gap-3">
              <h3 className="flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="payment_method"
                  value="Bank_transfer"
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                Direct Bank Transfer
              </h3>
              <span className="text-sm text-gray-500 mb-2">
                Make your payment directly into our bank account. Please use
                your order ID as the payment reference.
              </span>


              <h3 className="flex flex-row items-center gap-2">
                <input type="radio" name="payment_method" value="COD" onChange={handleChange}  className="h-4 w-4" />
                Cash On Delivery
              </h3>


              <h3 className="flex flex-row items-center gap-2"> 
                <input type="radio" name="payment_method" value="check_payment" onChange={handleChange} className="h-4 w-4" />
                Check Payment
              </h3>
            </div>
          </div>

          {/* Accepted Payment methods */}
          <div className="mt-5">
            <h3 className="text-xl py-2">Accepted payment method</h3>

            <div className="payment-methods flex flex-row gap-3">
              <img src={maestro} className="h-6" />
              <img src={visa} className="h-6" />
              <img src={paypal} className="h-6" />
              <img src={amex} className="h-6" />
              <img src={discover} className="h-6" />
            </div>
          </div>

          <button
            onClick={placeOrder}
            className="w-full mt-6 bg-[#c79377] cursor-pointer text-white py-3 rounded"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
