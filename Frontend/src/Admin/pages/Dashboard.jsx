import React from 'react'
import AdminCards from '../../Components/AdminCards/AdminCards'

const Dashboard = () => {
  const cards = [
    {
      id:1,
      heading:"Total Users",
      total:120
    },
    {
      id:2,
      heading:"Total Products",
      total:70
    },
    {
      id:3,
      heading:"Total Categories",
      total:10
    },
    {
      id:4,
      heading:"Total Orders",
      total:250
    }

  ]
  return (
   <section className="dashboard flex flex-col">
      <h1 className='text-4xl font-medium mx-5'>Admin DashBoard</h1>
      <div className="cards flex flex-row items-start justify-center gap-10 p-5">
      {cards.map(function(elem,idx){
        return <AdminCards key={idx} heading={elem.heading} total={elem.total}/>
      })}
      </div>
   </section>
  )
}

export default Dashboard