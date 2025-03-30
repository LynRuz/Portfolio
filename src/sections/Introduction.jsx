import React from "react";

const Introduction = () => {
  return (
    <div
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#2E0D39] via-[#570F75] to-[#230A2A] -mt-0 text-center"
    >
        
      {/* Profile Picture */}
      <img
        src="Ruzz.svg" // Replace with your actual image path
        alt="Your Name"
        className="w-80 h-80 rounded-full shadow-lg -mt-25 object-cover border-2 border-transparent bg-clip-border bg-gradient-to-b from-[#230A2A] to-[#EEDDF1]"
      />

      {/* Title */}
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-purple-400 mt-4 animate-bounce">
        Hi, I'm Ruzlyn P. Kaw
      </h1>
      {/* Subtitle */}
      <p className="text-lg text-purple-300 mt-2 animate-bounce">
        A passionate Frontend Developer who loves coding and design.
      </p>
    </div>
  );
};

export default Introduction;