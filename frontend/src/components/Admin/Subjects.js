import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Subjects = () => {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([
    { id: 1, name: "Mathematics", code: "MATH101" },
    { id: 2, name: "Physics", code: "PHY102" },
    { id: 3, name: "Computer Science", code: "CS103" },
  ]);
  const [newSubject, setNewSubject] = useState({ name: "", code: "" });
  const [editSubject, setEditSubject] = useState(null);

  const handleAddSubject = () => {
    if (newSubject.name && newSubject.code) {
      setSubjects([...subjects, { id: subjects.length + 1, ...newSubject }]);
      setNewSubject({ name: "", code: "" });
    }
  };

  const handleDeleteSubject = (id) => {
    setSubjects(subjects.filter((subject) => subject.id !== id));
  };

  const handleEditSubject = (subject) => {
    setEditSubject(subject);
    setNewSubject({ name: subject.name, code: subject.code });
  };

  const handleUpdateSubject = () => {
    if (editSubject) {
      setSubjects(subjects.map((subject) => 
        subject.id === editSubject.id ? { ...subject, ...newSubject } : subject
      ));
      setEditSubject(null);
      setNewSubject({ name: "", code: "" });
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <button
        onClick={() => navigate("/")}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mb-4 margin-left"
      >
        ← Back to Dashboard
      </button>
      
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Subjects</h2>
      
      {/* Add or Edit Subject Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            type="text"
            placeholder="Subject Name"
            className="p-2 border rounded w-full md:w-1/3 mb-2 md:mb-0"
            value={newSubject.name}
            onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Subject Code"
            className="p-2 border rounded w-full md:w-1/3 mb-2 md:mb-0"
            value={newSubject.code}
            onChange={(e) => setNewSubject({ ...newSubject, code: e.target.value })}
          />
          {editSubject ? (
            <button
              onClick={handleUpdateSubject}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full md:w-auto"
            >
              Update Subject
            </button>
          ) : (
            <button
              onClick={handleAddSubject}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto"
            >
              Add Subject
            </button>
          )}
        </div>
      </div>

      {/* Subjects Table Card */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Subject List</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg border border-gray-300">
            <thead className="bg-gray-300 text-gray-700">
              <tr>
                <th className="p-4 text-left border-b">ID</th>
                <th className="p-4 text-left border-b">Subject Name</th>
                <th className="p-4 text-left border-b">Subject Code</th>
                <th className="p-4 text-left border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr key={subject.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="p-4 border-b">{subject.id}</td>
                  <td className="p-4 border-b">{subject.name}</td>
                  <td className="p-4 border-b">{subject.code}</td>
                  <td className="p-4 border-b space-x-2">
                    <button
                      onClick={() => handleEditSubject(subject)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteSubject(subject.id)}
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

export default Subjects;
