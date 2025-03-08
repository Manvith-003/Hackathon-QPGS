import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-500 p-4 text-white flex justify-center space-x-6">
      <Link to="/">Dashboard</Link>
      <Link to="/users">Manage Users</Link>
      <Link to="/subjects">Manage Subjects</Link>
      <Link to="/syllabus">Upload Syllabus</Link>
    </nav>
  );
};

export default Navbar;
