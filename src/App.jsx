import { useState } from "react"; 
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Register from "./Pages/Register";


function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
