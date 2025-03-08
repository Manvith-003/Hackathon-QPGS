import React from "react";
import Navbar from "./Navbar";

const Syllabus = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-semibold">Upload Syllabus Page</h2>
        <p>Here you can upload syllabus documents.</p>
      </div>
    </div>
  );
};

export default Syllabus;
