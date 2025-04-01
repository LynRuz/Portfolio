import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PrankPage = () => {
  const [glitched, setGlitched] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setGlitched(true);
    setTimeout(() => navigate("/virus"), 2000);
  };

  return (
    <div
      className={`h-screen w-screen bg-black flex items-center justify-center text-white text-4xl font-bold cursor-pointer ${
        glitched ? "animate-shake" : ""
      }`}
      onClick={handleClick}
    >
      {glitched ? "⚠️ SYSTEM FAILURE ⚠️" : "Click Anywhere 😈"}
      
      <style>
        {`
          @keyframes shake {
            0% { transform: translate(0px, 0px); }
            25% { transform: translate(5px, 5px); }
            50% { transform: translate(-5px, -5px); }
            75% { transform: translate(5px, -5px); }
            100% { transform: translate(0px, 0px); }
          }
          
          .animate-shake {
            animation: shake 0.1s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default PrankPage;