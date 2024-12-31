import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registation from "./components/Registation";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registation />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;