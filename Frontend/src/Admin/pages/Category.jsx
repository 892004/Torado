import React, { useEffect, useState } from 'react'
import '../../Components/Category/category.css';
import axios from '../../utils/axiosInstance'
import AddCategoryModal from '../Components/AddcategoryModel';
const Category = () => {

  const [category, setcategory] = useState([])
  const [openModal, setOpenModal] = useState(false);


  const getCategories = async () =>{
    try{
      const res = await axios.get('/category')
      setcategory(res.data)
      console.log(res.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getCategories();
  },[])

  return (
    <section className="Category">
        <div className="categoriesHeader">
        <h2 className='text-4xl font-medium'>Categories</h2>
       <button
  className="addCategoryBtn"
  onClick={() => setOpenModal(true)}
>
  + Add Category
</button>
      </div>

      <div className="tableWrapper">
        <table className="categoriesTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {category.map((category)=>(

              <tr key = {category.category_id}>
              <td>{category.category_id}</td>

              <td className="categoryInfo">
                <div className="categoryIcon">
                  <div className="productImg"><img
      src={`http://localhost:5000/uploads/${category.image}`}
      alt={category.category_name}
      className="w-full h-full object-cover rounded-md"
      /></div>
                </div>
                {category.category_name}
              </td>

              <td>lGod & Diamond Rings</td>

              <td>
                <span className="status active">Active</span>
              </td>

              <td>
                <button className="editBtn">Edit</button>
                <button className="deleteBtn">Delete</button>
              </td>
            </tr>
    ))}
          </tbody>
        </table>
      </div>
      <AddCategoryModal isOpen={openModal}
  onClose={() => setOpenModal(false)}
  refreshCategories={getCategories}/>
    </section>
  )
}

export default Category