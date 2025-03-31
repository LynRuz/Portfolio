import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen flex flex-col md:flex-row items-center justify-center px-10"
    >
      {/* Left Side - Image */}
      <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
        <img
          src="Ruzlyn.svg" // Replace this with your actual image path
          alt="Ruzlyn P. Kaw"
          className="w-80 h-80 rounded-full shadow-2xl mt-4 object-cover border-4 border-purple-950 bg-clip-border  
          transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-purple-500 animate-float"
        />
      </div>

      {/* Right Side - Text */}
      <div className="md:w-2/3 text-center md:text-left mt-6">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-700 to-purple-900 mb-4">
          About Me
        </h2>

        <p className="max-w-lg text-purple-200 text-lg leading-relaxed">
          Hey there! I'm <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-b from-purple-600 to-purple-900">Ruzlyn P. Kaw</span>,  
          a passionate frontend developer who loves coding stunning designs, and user-friendly websites.  
          I have a deep appreciation for modern UI/UX design and strive to create visually  
          engaging and interactive experiences.  
        </p>

        <p className="mt-4 max-w-lg text-purple-200 text-lg leading-relaxed">
          My journey in frontend development started with HTML & CSS, but I now
          expanded my expertise to React, Tailwind CSS, and JavaScript.  I'm always eager to learn, innovate, and collaborate on exciting projects!.
        </p>


        {/* Call to Action */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-b from-purple-700 to-purple-950 text-purple-200 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300  hover:to-purple-900"
          >
            Check Out My Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border-1 border-purple-700 text-purple-300 font-semibold rounded-full shadow-lg hover:bg-purple-800 hover:text-white transition-colors duration-300"
          >
            Let's Connect!
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;