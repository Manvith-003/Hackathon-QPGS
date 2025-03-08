import React from "react";
import Navbar from "./Navbar";

const Users = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-semibold">Manage Users Page</h2>
        <p>Here you can add, edit, or remove users.</p>
      </div>
    </div>
  );
};

export default Users;
