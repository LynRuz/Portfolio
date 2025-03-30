import React from "react";

// Sample projects data with images
const projects = [
  {
    title: "mapaWIT",
    description: "A web app that helps students navigate the campus with an interactive 2D map.",
    tech: "React, Vite, Tailwind CSS, Mappedin,  node.js",
    image: "map.svg", // Replace with actual image path
    link: "https://ruzlyn-kaw-portfolio.onrender.com",
  },
  {
    title: "Portfolio",
    description: "A portfolio showcasing my work and skills.",
    tech: "React, Tailwind CSS",
    image: "myproj.svg", // Replace with actual image path
    link: "https://ruzlyn-kaw-portfolio.onrender.com",
  },
  {
    title: "AwesomeToDos",
    description: "A website that you can add and delete what you want to do.",
    tech: "MongoDB, Express.js, React.js, Node.js ",
    image: "awesometodos.svg", // Replace with actual image path
    link: "https://awesometodosapp-i3v8.onrender.com",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen bg-gradient-to-b from-[#230A2A] to-[#2E0D39] py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-purple-400 mb-8">
        My Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-purple-200 border-1 border-purple-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-b from-[#2C0433] to-[#2E0D39]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-purple-400">{project.title}</h3>
              <p className="text-purple-200 mt-2">{project.description}</p>
              <p className="text-sm text-purple-400 mt-1">Tech: {project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-gradient-to-b from-blue-400 to-purple-500 text-purple-200 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 hover:from-blue-700 hover:to-purple-700 "
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;