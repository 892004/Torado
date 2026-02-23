import React, { useEffect , useState} from 'react'
import AdminCards from '../../Components/AdminCards/AdminCards'
import axios from '../../utils/axiosInstance'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate();

  const [dashboard, setdashboard] = useState({})

  const getDashboard = async () =>{
    try{
      const res =  await axios.get('/admin/dashboard')
      setdashboard(res.data)
      console.log(res.data)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    getDashboard()
  },[])




  const cards = [
    {
      id:1,
      heading:"Total Users",
      total:dashboard.totalUsers,
      path:"/admin/users"
    },
    {
      id:2,
      heading:"Total Products",
      total:dashboard.totalProducts,
      path:"/admin/products"
    },
    {
      id:3,
      heading:"Total Categories",
      total:dashboard.totalCategories,
      path:"/admin/categories",
    },
    {
      id:4,
      heading:"Total Orders",
      total:dashboard.totalOrders,
      path:"/admin/orders"
    }

  ]
  return (
   <section className="dashboard flex flex-col">
      <h1 className='text-4xl font-medium mx-5'>Admin DashBoard</h1>
      <div className="cards flex flex-row items-start justify-center gap-10 p-5">
      {cards.map(function(elem,idx){
        return (
           <div key={idx} onClick={()=> navigate(elem.path)} className="cursor-pointer">
          <AdminCards key={idx} heading={elem.heading} total={elem.total || 0}/>
          </div>
        )
      })}
      </div>
   </section>
  )
}

export default Dashboard