import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-10 bg-gradient-to-b from-[#2E0D39] to-[#230A2A]"
    >
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-purple-400 mb-6">
        My Skills
      </h2>

      <p className="text-lg text-purple-200 max-w-2xl text-center">
        As a frontend developer, I specialize in crafting visually stunning and interactive
        websites. Here are some of the technologies and tools I use:
      </p>

      {/* Skills Grid */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-bounce" >
        <span className="px-6 py-3 bg-purple-400 text-purple-800 font-semibold rounded-lg shadow-md">
          HTML & CSS
        </span>
        <span className="px-6 py-3 bg-blue-400 text-purple-800 font-semibold rounded-lg shadow-md">
          JavaScript
        </span>
        <span className="px-6 py-3 bg-purple-400 text-purple-800 font-semibold rounded-lg shadow-md">
          React.js
        </span>
        <span className="px-6 py-3 bg-blue-400 text-blue-800 font-semibold rounded-lg shadow-md">
          Tailwind CSS
        </span>
        <span className="px-6 py-3 bg-purple-400 text-purple-800 font-semibold rounded-lg shadow-md">
          UI/UX Design
        </span>
        <span className="px-6 py-3 bg-blue-400 text-blue-800 font-semibold rounded-lg shadow-md">
          Figma
        </span>
        <span className="px-6 py-3 bg-purple-400 text-purple-800 font-semibold rounded-lg shadow-md">
          Git & GitHub
        </span>
        <span className="px-6 py-3 bg-blue-400 text-blue-800 font-semibold rounded-lg shadow-md">
          Responsive Design
        </span>
      </div>

      {/* Call to Action */}
      <div className="mt-8">
        <a
          href="#projects"
          className="px-6 py-3 bg-gradient-to-b from-blue-400 to-purple-500 text-purple-200 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 hover:from-blue-700 hover:to-purple-700"
        >
          See My Projects
        </a>
      </div>
    </div>
  );
};

export default Skills;