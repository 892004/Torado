import React, { useEffect, useState } from "react";
import "../../Components/Products/product.css";
import axios from "../../utils/axiosInstance";
import AddProductModal from "../Components/AddProductModel";
import EditProductModal from "../Components/EditProductModel";

const Products = () => {
  const [products, setproducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  // ✅ edit states
  const [editModal, setEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ================= GET PRODUCTS =================
  const getProducts = async () => {
    try {
      const res = await axios.get("/product");
      setproducts(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // ================= DELETE PRODUCT =================
  const handleDelete = async (id) => {
    try {
      if (!window.confirm("Delete this product?")) return;

      await axios.delete(`/product/${id}`);
      getProducts(); // refresh table
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="Products">
      <div className="productsHeader">
        <h2 className="text-4xl font-medium">Products</h2>

        <button
          className="addProductBtn"
          onClick={() => setOpenModal(true)}
        >
          + Add Product
        </button>
      </div>

      {/* ================= TABLE ================= */}
      <div className="tableWrapper">
        <table className="productsTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Discount Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.product_id}>
                <td>{product.product_id}</td>

                {/* PRODUCT INFO */}
                <td className="productInfo">
                  <div className="productImg">
                    <img
                      src={`http://localhost:5000/uploads/${product.thumbnail}`}
                      alt={product.product_name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  {product.product_name}
                </td>

                <td>{product.category_name}</td>

                <td>$ {product.price}</td>

                <td>$ {product.discount_price}</td>

                <td>
                  <span className="status active">Active</span>
                </td>

                <td>
                  {/* ===== EDIT ===== */}
                  <button
                    className="editBtn"
                    onClick={() => {
                      setSelectedProduct(product);
                      setEditModal(true);
                    }}
                  >
                    Edit
                  </button>

                  {/* ===== DELETE ===== */}
                  <button
                    className="deleteBtn"
                    onClick={() => handleDelete(product.product_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= ADD MODAL ================= */}
      <AddProductModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        refreshProducts={getProducts}
      />

      {/* ================= EDIT MODAL ================= */}
      <EditProductModal
        isOpen={editModal}
        onClose={() => setEditModal(false)}
        product={selectedProduct}
        refreshProducts={getProducts}
      />
    </section>
  );
};

export default Products;