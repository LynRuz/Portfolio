import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FakeVirus = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [showJoke, setShowJoke] = useState(false);

  useEffect(() => {
    // Show "Just Kidding" message before redirecting
    setTimeout(() => setShowJoke(true), 5000);
    setTimeout(() => navigate("/home"), 7000);
  }, [navigate]);

  const addError = () => {
    setErrors((prev) => [...prev, "⚠️ SYSTEM CORRUPTION DETECTED!"]);
  };

  return (
    <div
      className="h-screen w-screen bg-black text-green-400 font-mono text-2xl flex flex-col items-center justify-center relative"
      onClick={addError}
    >
      {!showJoke ? (
        <>
          <p>🔴 VIRUS DOWNLOADING... DO NOT EXIT 🔴</p>
          <p className="mt-2 animate-pulse">Processing...</p>
        </>
      ) : (
        <p className="text-white text-4xl font-bold mt-4 animate-bounce">
          😂 JUST KIDDING! 😂
        </p>
      )}

      {/* Error Messages */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        {errors.map((error, index) => (
          <p key={index} className="text-red-500 text-xl mt-2">{error}</p>
        ))}
      </div>
    </div>
  );
};

export default FakeVirus;