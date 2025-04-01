import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Introduction from "./sections/Introduction";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import PrankPage from "./prank/PrankPage";
import FakeVirus from "./prank/FakeVirus";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Detects route changes

  useEffect(() => {
    setLoading(true); // Reset loader when navigating to home

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [location.pathname]); // Runs when path changes

  return (
    <>
      {/* Loader with fade-out effect */}
      {loading && (
        <div className="transition-opacity duration-1000 opacity-100">
          <Loader />
        </div>
      )}

      {/* Main content */}
      {!loading && (
        <div
          className="min-h-screen"
          style={{
            backgroundImage:
              "url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExenNrYWtkaWphcGVwYXdheTNnbTg2dzc3MWFoeWN5NTVneDVhd3pxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5Jup7Z0h0QhdqIJe70/giphy.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <Navbar />
          <Introduction />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrankPage />} />
        <Route path="/virus" element={<FakeVirus />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;