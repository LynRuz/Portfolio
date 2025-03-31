import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Introduction from "./sections/Introduction";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader with fade-out effect */}
      <div className={`transition-opacity duration-1000 ${loading ? "opacity-100" : "opacity-0 hidden"}`}>
        <Loader />
      </div>

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
}

export default App;