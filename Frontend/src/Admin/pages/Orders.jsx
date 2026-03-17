import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Components/Orders/order.css";

const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/order/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrders(res.data);

    } catch (error) {
      console.log(error);
    }
  };

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

            {orders.map((order) => (
              <tr key={order.order_id}>

                <td>#{order.order_id}</td>

                <td className="userInfo">
                  <div className="avatar"></div>
                  {order.user_name}
                </td>

                <td>₹ {order.total_amount}</td>

                <td>
                  <span className={`status ${order.order_status}`}>
                    {order.order_status}
                  </span>
                </td>

                <td className="address">
                  {order.address}
                </td>

                <td>
                  {new Date(order.created_at).toLocaleDateString()}
                </td>

                <td>
                  <button className="viewBtn">View Details</button>
                  <button className="updateBtn">Update Status</button>
                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orders;