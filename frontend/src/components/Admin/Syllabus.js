import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Syllabus = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      alert(`File ${selectedFile.name} uploaded successfully!`);
      setSelectedFile(null);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate("/")}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mb-4"
      >
        ← Back to Dashboard
      </button>
      
      <h2 className="text-2xl font-bold mb-6 text-center">Upload Syllabus</h2>
      
      <div className="bg-white shadow-lg rounded-lg p-6">
        <label className="block text-lg font-semibold mb-4">Select Syllabus File:</label>
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="border p-2 w-full mb-4" 
        />
        <button
          onClick={handleUpload}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default Syllabus;
