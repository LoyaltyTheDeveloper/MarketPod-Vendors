import { useState } from "react"; 
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Register from "./Pages/Register";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Toaster position="top-center" className="flex justify-center items-center" reverseOrder={false} />
      </Router>
    </>
  );
}

export default App;
