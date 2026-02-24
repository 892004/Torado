import React, { useState, useEffect } from "react";
import "../Components/Users/user.css";
import { GrUserAdmin } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import axios from "../../utils/axiosInstance";

const Users = () => {
  const [users, setusers] = useState([]);

  // ================= GET USERS =================
  const getusers = async () => {
    try {
      const res = await axios.get("/users");
      setusers(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getusers();
  }, []);

  // ================= TOGGLE STATUS =================
  const handleToggle = async (user) => {
    try {
      // status 1 → 0 , 0 → 1
      const newStatus = user.status === 1 ? 0 : 1;

      await axios.put(`/users/toggle-status/${user.user_id}`, {
        status: newStatus,
      });

      // UI instant update (no reload)
      setusers((prev) =>
        prev.map((u) =>
          u.user_id === user.user_id ? { ...u, status: newStatus } : u
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

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
              <th>Phone</th>
              <th>Role</th>
              <th>Toggle</th> {/* ✅ NEW COLUMN */}
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.user_id}>
                <td>{user.user_id}</td>

                {/* USER INFO */}
                <td className="userInfo">
                  <div className="avatar flex items-center justify-center">
                    {user.role === "admin" ? <GrUserAdmin /> : <FaRegUser />}
                  </div>
                  {user.name}
                </td>

                <td>{user.email}</td>
                <td>{user.phone}</td>

                {/* ROLE */}
                <td>
                  <span className={`role ${user.role} font-medium`} >
                    {user.role}
                  </span>
                </td>

                {/* ===== TOGGLE SWITCH ===== */}
                <td>
                  <div
                    onClick={() => handleToggle(user)}
                    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition 
                    ${user.status === 1 ? "bg-green-500" : "bg-red-500"}`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition
                      ${user.status === 1 ? "translate-x-6" : ""}`}
                    />
                  </div>
                </td>

                {/* ACTION */}
                <td>
                  <button className="editBtn">Edit</button>
                  {/* ❌ DELETE BUTTON REMOVED */}
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