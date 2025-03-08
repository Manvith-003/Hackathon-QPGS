import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-500 p-4 text-white flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/users" className="hover:underline">Manage Users</Link>
        <Link to="/subjects" className="hover:underline">Manage Subjects</Link>
        <Link to="/syllabus" className="hover:underline">Upload Syllabus</Link>
      </div>
    </nav>
  );
};

export default Navbar;
