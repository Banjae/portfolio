import React from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Lock from "./pages/Lock/Lock";
import Portfolio from "./pages/Portfolio/Portfolio";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Router basename="/banjae">
        <Header />
        <Routes>
          <Route path="/lock" element={<Lock />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
