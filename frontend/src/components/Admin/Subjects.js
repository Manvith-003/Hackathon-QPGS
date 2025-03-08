import React from "react";
import Navbar from "./Navbar";

const Subjects = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-semibold">Manage Subjects Page</h2>
        <p>Here you can add, edit, or remove subjects.</p>
      </div>
    </div>
  );
};

export default Subjects;
