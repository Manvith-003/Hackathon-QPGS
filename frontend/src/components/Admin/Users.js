import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin", email: "john@example.com" },
    { id: 2, name: "Jane Smith", role: "Teacher", email: "jane@example.com" },
    { id: 3, name: "Michael Brown", role: "Student", email: "michael@example.com" },
  ]);
  const [newUser, setNewUser] = useState({ name: "", role: "", email: "" });
  const [editUser, setEditUser] = useState(null);

  const handleAddUser = () => {
    if (newUser.name && newUser.role && newUser.email) {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
      setNewUser({ name: "", role: "", email: "" });
    }
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEditUser = (user) => {
    setEditUser(user);
    setNewUser({ name: user.name, role: user.role, email: user.email });
  };

  const handleUpdateUser = () => {
    if (editUser) {
      setUsers(users.map((user) => 
        user.id === editUser.id ? { ...user, ...newUser } : user
      ));
      setEditUser(null);
      setNewUser({ name: "", role: "", email: "" });
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <button
        onClick={() => navigate("/")}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mb-4"
      >
        ← Back to Dashboard
      </button>
      
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Users</h2>
      
      {/* Add or Edit User Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            type="text"
            placeholder="User Name"
            className="p-2 border rounded w-full md:w-1/3 mb-2 md:mb-0"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Role"
            className="p-2 border rounded w-full md:w-1/3 mb-2 md:mb-0"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded w-full md:w-1/3 mb-2 md:mb-0"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          {editUser ? (
            <button
              onClick={handleUpdateUser}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full md:w-auto"
            >
              Update User
            </button>
          ) : (
            <button
              onClick={handleAddUser}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto"
            >
              Add User
            </button>
          )}
        </div>
      </div>

      {/* Users Table Card */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">User List</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg border border-gray-300">
            <thead className="bg-gray-300 text-gray-700">
              <tr>
                <th className="p-4 text-left border-b">ID</th>
                <th className="p-4 text-left border-b">Name</th>
                <th className="p-4 text-left border-b">Role</th>
                <th className="p-4 text-left border-b">Email</th>
                <th className="p-4 text-left border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="p-4 border-b">{user.id}</td>
                  <td className="p-4 border-b">{user.name}</td>
                  <td className="p-4 border-b">{user.role}</td>
                  <td className="p-4 border-b">{user.email}</td>
                  <td className="p-4 border-b space-x-2">
                    <button
                      onClick={() => handleEditUser(user)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
