import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-10 mt-15 "
    >
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-700 to-purple-900 mb-6">
        My Skills
      </h2>

      <p className="text-lg text-purple-200 max-w-2xl text-center ">
        As a frontend developer, I specialize in crafting visually stunning and interactive
        websites. Here are some of the technologies and tools I use:
      </p>

      {/* Skills Grid */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-bounce" >
        <span className="px-6 py-3 text-purple-600 font-semibold rounded-lg shadow-md border-1 border-purple-700">
          HTML & CSS
        </span>
        <span className="px-6 py-3  text-purple-600 font-semibold rounded-lg shadow-md border-1 border-purple-700">
          JavaScript
        </span>
        <span className="px-6 py-3  text-purple-600 font-semibold rounded-lg shadow-md border-1 border-purple-700">
          React.js
        </span>
        <span className="px-6 py-3  text-purple-600 font-semibold rounded-lg shadow-md border-1 border-purple-700">
          Tailwind CSS
        </span>
        <span className="px-6 py-3  text-purple-600 font-semibold rounded-lg shadow-md border-1 border-purple-700">
          UI/UX Design
        </span>
        <span className="px-6 py-3 b text-purple-600 font-semibold rounded-lg shadow-md border-1 border-purple-700">
          Figma
        </span>
        <span className="px-6 py-3  text-purple-600 font-semibold rounded-lg shadow-md border-1 border-purple-700">
          Git & GitHub
        </span>
        <span className="px-6 py-3  text-purple-600 font-semibold rounded-lg shadow-md border-1 border-purple-700">
          Responsive Design
        </span>
      </div>

      {/* Call to Action */}
      <div className="mt-8">
        <a
          href="#projects"
          className="px-6 py-3 bg-gradient-to-b from-purple-700 to-purple-950 text-purple-200 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300  hover:to-purple-900"
        >
          See My Projects
        </a>
      </div>
    </div>
  );
};

export default Skills;