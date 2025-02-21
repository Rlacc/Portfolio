import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.error("Error loading projects:", err);
      });
  }, []);

  return (
    <section id="projects" className="pt-20 bg-gray-800">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-2xl font-bold text-white">My Projects</h1>
      </div>
      <div className="flex items-center justify-center px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-3 shadow rounded bg-gray-400/40 text-white flex flex-col h-full"
            >
              {" "}
              <img
                src={`${import.meta.env.BASE_URL}/${project.image}`}
                alt={project.title}
                className="mb-4 w-full h-48 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h2>
                <p className="text-white">{project.description}</p>
              </div>
              <div className="mt-auto pt-4 flex space-x-4">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition flex items-center space-x-2"
                  >
                    <FaGithub size={22} />
                    <span>GitHub</span>
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition flex items-center space-x-2"
                  >
                    <FaExternalLinkAlt size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
