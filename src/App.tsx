import React from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Lock from "./pages/Lock/Lock";
import Portfolio from "./pages/Portfolio/Portfolio";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Vision from "./pages/Vision/Vision";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/lock" element={<Lock />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
