import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./sections/Introduction";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
      <Introduction />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </main>
      </>
  );
}

export default App;