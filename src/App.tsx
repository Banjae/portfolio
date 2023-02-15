import React from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Lock from "./pages/Lock/Lock";

function App() {
  return (
    <>
      <Router basename="/banjae">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/lock" element={<Lock />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
