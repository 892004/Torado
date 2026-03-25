import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LeftSection from "../Components/ProductDetails/LeftSection";
import RightSection from "../Components/ProductDetails/RightSection";
import FeaturedProducts from "../Components/FeaturedProducts/FeaturedProducts";
import "../Components/ProductDetails/ProductDetails.css";
import { MdArrowOutward } from "react-icons/md";
import { CiStar } from "react-icons/ci";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setproduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

  const [ActiveTab, setActiveTab] = useState("Reviews");

  const [formData, setformData] = useState({
    name: "",
    email: "",
    title: "",
    comment: "",
  });

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.title ||
      !formData.comment ||
      rating === 0
    ) {
      alert("All fields are required including rating!");
      return;
    }

    const newReview = {
      ...formData,
      rating,
      date: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);

    // reset
    setformData({
      name: "",
      email: "",
      title: "",
      comment: "",
    });
    setRating(0);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/product/${id}`)
      .then((res) => {
        console.log(res); // ✅ full response
        console.log(res.data); // ✅ product data
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <section className="Products-details w-full flex flex-col items-center justify-center mt-50">
      <h3 className="text-6xl text-[#2A2826] mb-4">Product Details</h3>
      <div className="flex flex-row items-center gap-1 mb-8">
        <Link to="/" className="opacity-80">
          {" "}
          Home /
        </Link>
        <Link to="/categories">Categories /</Link>
        <span className="text-[#CC9078]">Product Details</span>
      </div>

      <div className="h-screen w-full Details flex flex-row items-center justify-between p-10">
        <LeftSection product={product} />
        <RightSection product={product} />
      </div>

      <div className="other-content flex flex-row items-center gap-2">
        <button
          onClick={() => setActiveTab("description")}
          className="border p-2 border-gray-400 cursor-pointer"
        >
          Desciption
        </button>
        <button
          onClick={() => setActiveTab("AdditionalInformation")}
          className="border p-2 border-gray-400 cursor-pointer"
        >
          Additional Information
        </button>
        <button
          onClick={() => setActiveTab("Reviews")}
          className="border p-2 border-gray-400 cursor-pointer"
        >
          Reviews
        </button>
      </div>

      {/* Description Content */}
      <div className="mt-5">
        {ActiveTab === "description" && (
          <div className="flex flex-col items-center px-30">
            <p className="opacity-60 tracking-wide">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Proin eget tortor risus.
              Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Praesent sapien massa,
              convallis a pellentesque nec, egestas non nisi. Mauris blandit
              aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam
              sit amet quam vehicula elementum sed sit amet dui.
            </p>
            <br />

            <p className="opacity-60  tracking-wide ">
              Vivamus suscipit tortor eget felis porttitor volutpat. Donec
              rutrum congue leo eget malesuada. Sed porttitor lectus nibh.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie
              malesuada. Mauris blandit aliquet elit, eget tincidunt nibh
              pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum
              id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
              ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        )}
      </div>

      {/* Additional information */}
      <div className="mt-5">
        {ActiveTab === "AdditionalInformation" && (
          <div className="flex flex-col px-30">
            <p className="opacity-60 tracking-wide">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Proin eget tortor risus.
              Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Praesent sapien massa,
              convallis a pellentesque nec, egestas non nisi. Mauris blandit
              aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam
              sit amet quam vehicula elementum sed sit amet dui.
            </p>
            <div className="flex flex-col mt-5 items-start gap-3">
              <p className="text-gray-600">
                <span className="text-black font-medium">Style:</span> 3 Stone
              </p>
              <p className="text-gray-600">
                <span className="text-black font-medium">Metal Type:</span> 14k
                Gold
              </p>
              <p className="text-gray-600">
                <span className="text-black font-medium">Atonic No:</span> 55
              </p>
              <p className="text-gray-600">
                <span className="text-black font-medium">Weight:</span> Above
                5.5kg
              </p>
              <p className="text-gray-600">
                <span className="text-black font-medium">Ring Size:</span>{" "}
                15.5mm
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Reviews */}
      {ActiveTab === "Reviews" && (
        <div className="review mt-5 h-screen w-full flex flex-row items-center justify-center p-5">
          <div className="left h-full w-[45%] border p-5 overflow-y-auto">
            {reviews.length === 0 ? (
              <p className="text-gray-500">No reviews yet</p>
            ) : (
              reviews.map((r, index) => (
                <div key={index} className="mb-5 border-b pb-3">
                  <h4 className="font-semibold">{r.name}</h4>
                  <p className="text-sm text-gray-500">{r.date}</p>

                  <div className="flex">
                    {[...Array(r.rating)].map((_, i) => (
                      <CiStar key={i} bg="[#CC9078]" />
                    ))}
                  </div>

                  <p className="font-medium">{r.title}</p>
                  <p className="text-gray-600">{r.comment}</p>
                </div>
              ))
            )}
          </div>
          <div className="right h-full w-[55%]  p-10">
            <h3 className="text-5xl font-bold text-gray-800">
              Write A Review{" "}
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col  px-5 items-start gap-2"
            >
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border py-2 px-3 mt-1 border-gray-400 w-xl placeholder-gray-400"
                placeholder="Beverly Gillish"
              />
              <label>Email</label>
              <input
                type="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border py-2 px-3 mt-1 border-gray-400 w-xl placeholder-gray-400"
                placeholder="Gillies@torado.com"
              />

              <label>Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => setRating(star)}
                    className={`cursor-pointer p-2 rounded ${
                      star <= rating ? "bg-[#CC9078]" : ""
                    }`}
                  >
                    <CiStar className="text-black" />
                  </span>
                ))}
              </div>
              <label>Review Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border py-2 px-3 mt-1 border-gray-400 w-xl placeholder-gray-400"
                placeholder="Write your review here..."
              />
              <label>Write you review</label>
              <textarea
                cols={10}
                rows={5}
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="border py-2 px-3 mt-1 border-gray-400 w-xl placeholder-gray-400"
                placeholder="Write your comment here..."
              />

              <button className="px-8 py-3 relative bg-[#CB927A] text-white text-[15px] flex items-center gap-2 cursor-pointer mt-4">
                Submit Review
                <MdArrowOutward className="text-xl" />
              </button>
            </form>
          </div>
        </div>
      )}

      <FeaturedProducts />
    </section>
  );
};

export default ProductDetails;
