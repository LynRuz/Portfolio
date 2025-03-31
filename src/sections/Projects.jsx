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
    <div id="projects" className="min-h-screen py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-purple-700 to-purple-950 mb-8">
        My Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className=" border-1 border-purple-800 p-4 rounded-lg shadow-lg  bg-clip-border  
          transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-purple-500 animate-float ">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-purple-700 to-purple-900">{project.title}</h3>
              <p className="text-purple-200 mt-2">{project.description}</p>
              <p className="text-sm text-purple-400 mt-1">Tech: {project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-gradient-to-b from-purple-700 to-purple-950 text-purple-200 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300  hover:to-purple-900 "
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