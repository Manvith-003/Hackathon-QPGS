import React from "react";
import Navbar from "./Navbar";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <p>Welcome to the admin panel! Use the navigation bar to manage users, subjects, and syllabus.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
