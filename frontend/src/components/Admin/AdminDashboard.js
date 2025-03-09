import React from "react";
import Navbar from "./Navbar";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <p className="mb-6">Welcome to the admin panel! Use the navigation bar to manage users, subjects, and syllabus.</p>
        
        {/* Dashboard Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-6">
          <div className="bg-white p-6 shadow rounded-lg text-center">
            <h3 className="text-lg font-semibold">Total Subjects</h3>
            <p className="text-2xl font-bold text-blue-500">12</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg text-center">
            <h3 className="text-lg font-semibold">Total Questions</h3>
            <p className="text-2xl font-bold text-green-500">320</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg text-center">
            <h3 className="text-lg font-semibold">Generated Papers</h3>
            <p className="text-2xl font-bold text-red-500">45</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg text-center">
            <h3 className="text-lg font-semibold">Total Reports</h3>
            <p className="text-2xl font-bold text-yellow-500">10</p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="w-full max-w-6xl bg-white p-6 shadow rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <ul className="text-gray-600">
            <li className="mb-2">📌 New subject <strong>Artificial Intelligence</strong> added.</li>
            <li className="mb-2">📌 10 new questions added to <strong>Mathematics</strong>.</li>
            <li className="mb-2">📌 Question paper generated for <strong>Physics</strong>.</li>
            <li className="mb-2">📌 Report downloaded for <strong>Computer Science</strong>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
