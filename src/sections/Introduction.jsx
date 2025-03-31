import React from "react";

const Introduction = () => {
  return (
    <div
      id="home"
      className="h-screen flex flex-col justify-center items-center -mt-0 text-center z-10"
    >
      {/* Profile Picture */}
      <div className="relative">
        <div className="absolute inset-0 animate-spin-slow rounded-full border-[6px] border-t-transparent border-purple-950"></div>
        <img
          src="Ruzlyn.svg" // Replace with your actual image path
          alt="Your Name"
          className="w-90 h-90 rounded-full shadow-2xl mt-4 object-cover border-4 border-transparent bg-clip-border  
          transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-purple-500 animate-float"
        />
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-700 to-purple-900 mt-4 animate-bounce">
        Hi, I'm Ruzlyn P. Kaw
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-purple-300 mt-2 animate-bounce">
        A passionate Frontend Developer who loves coding and design.
      </p>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Introduction;