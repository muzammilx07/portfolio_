import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import HoverButton from "./HoverButton";

const ProjectCard = ({ project }) => {
  return (
    <div
      id="about"
      className="border border-borderLight dark:border-borderDark bg-lightBg dark:bg-[#18181B] text-textLight dark:text-textDark  py-8 flex flex-col w-full max-w-full rounded-lg gap-6 overflow-hidden"
    >
      {/* Header Section - Name and Year */}
      <div className="flex justify-between w-full mb-4 px-6 ">
        <h3 className="text-xl font-semibold underline-offset-1 ">
          {project.name}
        </h3>
        <span className=" text-sm text-textLight dark:text-textDark">
          {project.year}
        </span>
      </div>
      <div className="flex-row flex ">
        {/* Body Section - Left Section with Description and Buttons */}
        <div className="flex-1 flex flex-col gap-4 px-6">
          {/* Technologies */}
          <div className="flex gap-2 mb-2">
            {project.technologies.map((TechIcon, index) => (
              <div
                key={index}
                className="p-2 rounded-full bg-iconBgLight dark:bg-iconBgDark hover:bg-hoverLight dark:hover:bg-hoverDark"
              >
                <TechIcon size={24} />
              </div>
            ))}
          </div>

          {/* Project Description */}
          <p className=" text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <HoverButton
                  text="Code"
                  icon={Github}
                  className="px-4 py-2 bg-buttonLight text-buttonLightText dark:bg-lightBg dark:text-textLight rounded-md hover:bg-buttonLightHover "
                />
              </a>
            )}

            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <HoverButton
                text="Live"
                icon={ExternalLink}
                className="px-4 py-2 bg-iconBgLight dark:bg-iconBgDark text-textLight dark:text-textDark rounded-md hover:bg-hoverLight dark:hover:bg-hoverDark "
              />
            </a>
          </div>
        </div>

        {/* Right Section - Project Image */}
        <motion.div
          whileHover={{ rotate: -4, scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative w-56 h-32 md:w-60 md:h-36 overflow-hidden"
        >
          {/* Apply static x position to hide part of the image */}
          <div
            className="absolute right-0 top-0 w-full h-full bg-cover bg-center rounded-lg"
            style={{ transform: "translateX(10px)" }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCard;
