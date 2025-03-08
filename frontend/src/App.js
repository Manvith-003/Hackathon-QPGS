import React from "react";
import "./App.css";
import LoginPage from "./components/Pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Users from "./components/Admin/Users";
import Subjects from "./components/Admin/Subjects";
import Syllabus from "./components/Admin/Syllabus";
import Navbar from "./components/Admin/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/users" element={<Users />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/Navbar" element={<Navbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
