import React from "react";

const Introduction = () => {
  return (
    <div
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-pink-200 via-purple-100 to-purple-200 -mt-0 text-center"
    >
        
      {/* Profile Picture */}
      <img
        src="Ruzz.svg" // Replace with your actual image path
        alt="Your Name"
        className="w-80 h-80 rounded-full shadow-lg -mt-25 object-cover border-4 border-purple-500"
      />

      {/* Title */}
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400 mt-4 animate-bounce">
        Hi, I'm Ruzlyn P. Kaw
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-700 mt-2 animate-bounce">
        A passionate Frontend Developer who loves coding and design.
      </p>
    </div>
  );
};

export default Introduction;