import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Clubs from "./Clubs";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clubs" element={<Clubs />} />
    </Routes>
  );
}

export default App;
