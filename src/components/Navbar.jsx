import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full  shadow-md py-4 px-8 flex justify-between items-center z-50 bg-gradient-to-b from-[#200C28] to-[#52106F] animate-pulse ">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-blue-500">Ruzlyn</h1>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="text-transparent bg-clip-text bg-gradient-to-b from-[#EEDDF1] to-[#77547F] hover:text-purple-800 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-transparent bg-clip-text bg-gradient-to-b from-[#EEDDF1] to-[#77547F] hover:text-purple-800 transition">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="text-transparent bg-clip-text bg-gradient-to-b from-[#EEDDF1] to-[#77547F] hover:text-purple-800 transition">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="text-transparent bg-clip-text bg-gradient-to-b from-[#EEDDF1] to-[#77547F] hover:text-purple-800 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="text-transparent bg-clip-text bg-gradient-to-b from-[#EEDDF1] to-[#77547F] hover:text-purple-800 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;