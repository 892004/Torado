import React, { useEffect, useState } from "react";
import axios from "../../utils/axiosInstance";

const EditCategoryModal = ({ data, onClose, refreshCategories }) => {
  const [form, setForm] = useState({
    category_name: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // 👇 jab editData change ho tab form fill
  useEffect(() => {
    if (data) {
      setForm({
        category_name: data.category_name || "",
        description: data.description || "",
      });

      setPreview(
        data.image
          ? `http://localhost:5000/uploads/${data.image}`
          : null
      );
    }
  }, [data]);

  if (!data) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("category_name", form.category_name);
      formData.append("description", form.description);

      if (image) {
        formData.append("image", image);
      }

      await axios.put(`/category/${data.category_id}`, formData);

      refreshCategories();
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[420px] shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Category</h2>

        <form onSubmit={handleUpdate} className="flex flex-col gap-3">
          <input
            name="category_name"
            value={form.category_name}
            onChange={handleChange}
            placeholder="Category Name"
            className="border p-2 rounded"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="border p-2 rounded"
          />

          <input type="file" onChange={handleImage} />

          {preview && (
            <img
              src={preview}
              className="w-20 h-20 object-cover rounded-full"
            />
          )}

          <div className="flex gap-2 mt-3">
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

export default EditCategoryModal;