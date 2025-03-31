import React from "react";

const Loader = () => {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#1a001f] z-50"
      style={{
        backgroundImage:
          "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2ZxZDdtbmw5OHcxOXFtZTkwMW1kYzF4dnNsdWp5dHc2eTZsaGRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RJy4FQlLbxDz4kJ6GF/giphy.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* 3D Rotating Cube */}
        <div className="cube">
          <div className="side front"></div>
          <div className="side back"></div>
          <div className="side right"></div>
          <div className="side left"></div>
          <div className="side top"></div>
          <div className="side bottom"></div>
        </div>
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-2xl text-purple-300 animate-pulse">Loading......</p>

      {/* Custom CSS for 3D Cube */}
      <style>
        {`
          .cube {
            position: absolute;
            width: 150px;
            height: 100px;
            transform-style: preserve-3d;
            animation: rotate 3s infinite linear;
          }

          .side {
            position: absolute;
            width: 50px;
            height: 50px;
            background: linear-gradient(45deg, blue, purple);
            border: 2px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
          }

          .front  { transform: rotateY(  0deg) translateZ(50px); }
          .back   { transform: rotateY(180deg) translateZ(50px); }
          .right  { transform: rotateY( 90deg) translateZ(50px); }
          .left   { transform: rotateY(-90deg) translateZ(50px); }
          .top    { transform: rotateX( 90deg) translateZ(25px); }
          .bottom { transform: rotateX(-90deg) translateZ(25px); }

          @keyframes rotate {
            from { transform: rotateX(0deg) rotateY(0deg); }
            to   { transform: rotateX(360deg) rotateY(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;