import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md py-4 px-8 flex justify-between items-center z-50 bg-gradient-to-b from-purple-500 to-pink-300 animate-pulse">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-purple-600">Ruzlyn</h1>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="text-gray-700 hover:text-purple-500 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-gray-700 hover:text-purple-500 transition">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="text-gray-700 hover:text-purple-500 transition">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="text-gray-700 hover:text-purple-500 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-700 hover:text-purple-500 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;