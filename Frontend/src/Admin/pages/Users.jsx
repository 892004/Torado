import React, { useState, useEffect } from "react";
import "../../Components/Users/user.css";
import { GrUserAdmin } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import axios from "../../utils/axiosInstance";

const Users = () => {
  const [users, setusers] = useState([]);

  const getusers = async () => {
    try {

      const res = await axios.get("/users")

      setusers(res.data);
      console.log(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getusers();
  }, []);

  return (
    <section className="users">
      <div className="usersHeader">
        <h2 className="text-4xl font-medium">Users</h2>
        <button className="addUserBtn">+ Add User</button>
      </div>

      <div className="tableWrapper">
        <table className="usersTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Phone</th> {/* 👈 NEW COLUMN */}
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.user_id}>
                <td>{user.user_id}</td>

                <td className="userInfo">
                  <div className="avatar flex items-center justify-center">
                    {user.role === "admin" ? <GrUserAdmin /> : <FaRegUser />}
                  </div>
                  {user.name}
                </td>

                <td>{user.email}</td>

                <td>{user.phone}</td> {/* 👈 PHONE SHOW */}

                <td>
                  <span className={`role ${user.role}`}>
                    {user.role}
                  </span>
                </td>

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
    </section>
  );
};

export default Users;
