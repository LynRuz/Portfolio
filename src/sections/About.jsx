import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen flex flex-col md:flex-row items-center justify-center px-10 bg-gradient-to-b from-purple-200 to-pink-200"
    >
      {/* Left Side - Image */}
      <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
        <img
          src="Ruz.jpg" // Replace this with your actual image path
          alt="Ruzlyn P. Kaw"
          className="w-70 h-70 object-cover rounded-full shadow-lg border-4 border-purple-400"
        />
      </div>

      {/* Right Side - Text */}
      <div className="md:w-2/3 text-center md:text-left mt-6">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400 mb-4">
          About Me
        </h2>

        <p className="max-w-lg text-gray-700 text-lg leading-relaxed">
          Hey there! I'm <span className="font-semibold text-purple-700">Ruzlyn P. Kaw</span>,  
          a passionate frontend developer who loves coding stunning designs, user-friendly websites.  
          I have a deep appreciation for modern UI/UX design and strive to create visually  
          engaging and interactive experiences.  
        </p>

        <p className="mt-4 max-w-lg text-gray-700 text-lg leading-relaxed">
          My journey in web development started with HTML & CSS, but I quickly  
          expanded my expertise to React, Tailwind CSS, and JavaScript. Currently, Im expanding 
          my skills in React, Tailwindcss, and interactive U/UX design to push the boundaries of 
          frontend development. I'm always eager to learn, innovate, and collaborate on exciting projects!.
        </p>


        {/* Call to Action */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 hover:from-purple-700 hover:to-pink-700"
          >
            Check Out My Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border-2 border-purple-500 text-purple-700 font-semibold rounded-full shadow-lg hover:bg-purple-500 hover:text-white transition-colors duration-300"
          >
            Let's Connect!
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;