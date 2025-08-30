import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../constants";

// Animation Variants
const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

// Card Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Projects Component
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Open Modal
  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate="show"
        className="grid gap-10 grid-cols-1 md:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ scale: 1.04, y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={() => handleOpenModal(project)}
            className="border border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2 line-clamp-1">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 pt-2 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2 ">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1 hover:bg-purple-700/40 transition"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Extra Fields */}
              <div className="flex justify-between items-center text-sm text-white-500">
                {project.year && <p>📅 {project.year}</p>}
                {project.role && <p>👨‍💻 {project.role}</p>}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[100%] max-w-3xl overflow-hidden relative">
            <div className="pr-4 mb-5 mt-5 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col overflow-y-auto max-h-[calc(90vh-4rem)]">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 justify-center">
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
