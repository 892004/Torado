import React, { useState } from "react";
import axios from "../../utils/axiosInstance";

const AddCategoryModal = ({ isOpen, onClose, refreshCategories }) => {

  const [form, setForm] = useState({
    category_name: "",
    description: ""
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // text input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // image select + preview
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const data = new FormData();

      data.append("category_name", form.category_name);
      data.append("description", form.description);

      // multer field name = thumbnail
      if (image) {
        data.append("image", image);
      }

      await axios.post("/category/add", data);

      refreshCategories();
      onClose();

    } catch (err) {
      console.log(err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-[400px] p-6 rounded-xl shadow-xl">

        <h2 className="text-xl font-semibold mb-4">Add Category</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          {/* Category Name */}
          <input
            name="category_name"
            placeholder="Category Name"
            className="border p-2 rounded"
            onChange={handleChange}
          />

          {/* Description */}
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
              className="w-20 h-20 object-cover rounded-md"
            />
          )}

          {/* Buttons */}
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

export default AddCategoryModal;
