import React, { useState } from "react";
import axios from "../../utils/axiosInstance";

const AddProductModal = ({ isOpen, onClose, refreshProducts }) => {

  const [form, setForm] = useState({
    product_name: "",
    category_id: "",
    price: "",
    discount_price: "",
    stock: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // image preview
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      Object.keys(form).forEach((key) => {
        data.append(key, form[key]);
      });

      if (image) {
        data.append("thumbnail", image); // 👈 multer field name
      }

      await axios.post("/product/add", data);

      refreshProducts(); // table refresh
      onClose();

    } catch (err) {
      console.log(err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white p-6 rounded-xl w-[450px] shadow-xl">

        <h2 className="text-xl font-semibold mb-4">Add Product</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input
            name="product_name"
            placeholder="Product Name"
            className="border p-2 rounded"
            onChange={handleChange}
          />

          <input
            name="category_id"
            placeholder="Category ID"
            className="border p-2 rounded"
            onChange={handleChange}
          />

          <input
            name="price"
            placeholder="Price"
            className="border p-2 rounded"
            onChange={handleChange}
          />

          <input
            name="discount_price"
            placeholder="Discount Price"
            className="border p-2 rounded"
            onChange={handleChange}
          />

          <input
            name="stock"
            placeholder="Stock"
            className="border p-2 rounded"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            className="border p-2 rounded"
            onChange={handleChange}
          />

          {/* IMAGE INPUT */}
          <input type="file" onChange={handleImage} />

          {/* PREVIEW */}
          {preview && (
            <img
              src={preview}
              alt="preview"
              className="h-24 w-24 object-cover rounded"
            />
          )}

          <div className="flex gap-2 mt-3">
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Add
            </button>

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
