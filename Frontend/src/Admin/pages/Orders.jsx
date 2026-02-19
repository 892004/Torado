import React from 'react'
import '../../Components/Orders/order.css'

const Orders = () => {
  return (
    <section className="orders">
      <div className="ordersHeader">
        <h2>Orders</h2>
      </div>

      <div className="tableWrapper">
        <table className="ordersTable">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Address</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>#1001</td>

              <td className="userInfo">
                <div className="avatar"></div>
                Kaushal Vora
              </td>

              <td>₹ 12,500</td>

              <td>
                <span className="status pending">Pending</span>
              </td>

              <td className="address">
                Surat, Gujarat
              </td>

              <td>19 Feb 2026</td>

              <td>
                <button className="viewBtn">View Details</button>
                <button className="updateBtn">Update Status</button>
              </td>
            </tr>

            <tr>
              <td>#1002</td>

              <td className="userInfo">
                <div className="avatar"></div>
                Admin Demo
              </td>

              <td>₹ 45,000</td>

              <td>
                <span className="status placed">Placed</span>
              </td>

              <td className="address">
                Mumbai, Maharashtra
              </td>

              <td>18 Feb 2026</td>

              <td>
                <button className="viewBtn">View Details</button>
                <button className="updateBtn">Update Status</button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Orders