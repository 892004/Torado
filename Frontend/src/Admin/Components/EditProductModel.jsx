import React, { useState, useEffect } from "react";
import axios from "../../utils/axiosInstance";

const EditProductModal = ({ isOpen, onClose, product, refreshProducts }) => {

  const [form, setForm] = useState(product || {});
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    setForm(product || {});
    setPreview(product?.thumbnail
      ? `http://localhost:5000/uploads/${product.thumbnail}`
      : null
    );
  }, [product]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(form).forEach((key) => {
      data.append(key, form[key]);
    });

    if (image) {
      data.append("thumbnail", image);
    }

    await axios.put(`/product/${form.product_id}`, data);

    refreshProducts();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-[450px]">

        <h2 className="text-xl font-semibold mb-4">Edit Product</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input
            name="product_name"
            value={form.product_name || ""}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            name="price"
            value={form.price || ""}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input type="file" onChange={handleImage} />

          {preview && (
            <img src={preview} className="h-24 w-24 object-cover rounded" />
          )}

          <div className="flex gap-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Update
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

export default EditProductModal;