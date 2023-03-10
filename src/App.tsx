import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Lock from "./pages/Lock/Lock";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Vision from "./pages/Vision/Vision";
import Skills from "./pages/Skills/Skills";
import { AnimatePresence } from "framer-motion";
import TeamProject from "./pages/TeamProject/TeamProject";
import SideProject from "./pages/SideProject/SideProject";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Router basename="/banjae">
        <Header />
        <AnimatePresence>
          <Routes>
            <Route path="/lock" element={<Lock />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/teamp" element={<TeamProject />} />
            <Route path="/sidep" element={<SideProject />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </>
  );
}

export default App;
