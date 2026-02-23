import React, { useEffect, useState } from 'react'
import '../../Components/Category/category.css';
import axios from '../../utils/axiosInstance'
import AddCategoryModal from '../Components/AddcategoryModel';
import EditCategoryModal from '../Components/EditCategoryModel';

const Category = () => {

  const [category, setcategory] = useState([])
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);

  // ✅ GET ALL
  const getCategories = async () =>{
    try{
      const res = await axios.get('/category')
      setcategory(res.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getCategories();
  },[])


  // ✅ DELETE CATEGORY
  const DeleteCategories = async (id) =>{
    try{
       if (!window.confirm("Are you sure want to delete?")) return;

       await axios.delete(`/category/${id}`);

       getCategories(); // 🔥 reload table
    }catch(err){
      console.log(err)
    }
  }

  return (
    <section className="Category w-full overflow-hidden">
      <div className="categoriesHeader">
        <h2 className='text-4xl font-medium'>Categories</h2>

        <button
          className="addCategoryBtn"
          onClick={() => setOpenModal(true)}
        >
          + Add Category
        </button>
      </div>

      <div className="tableWrapper w-full">
        <table className="categoriesTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {category.map((cat)=>(
              <tr key={cat.category_id}>

                <td>{cat.category_id}</td>

                <td className="categoryInfo">
                  <div className="categoryIcon">
                    <div className="productImg">
                      <img
                        src={`http://localhost:5000/uploads/${cat.image}`}
                        alt={cat.category_name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  </div>
                  {cat.category_name}
                </td>

                <td>
                  <span className="status active">Active</span>
                </td>

                <td>
                  {/* ✅ EDIT */}
                  <button
                    className="editBtn"
                    onClick={()=> setEditData(cat)}
                  >
                    Edit
                  </button>

                  {/* ✅ DELETE */}
                  <button
                    className="deleteBtn"
                    onClick={()=> DeleteCategories(cat.category_id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ADD MODAL */}
      <AddCategoryModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        refreshCategories={getCategories}
      />

      {/* EDIT MODAL */}
      <EditCategoryModal
        data={editData}
        onClose={()=> setEditData(null)}
        refreshCategories={getCategories}
      />

    </section>
  )
}

export default Category