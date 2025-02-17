import React from "react";
import ProjectCard from "../Components/ProjectCard";
import { projects } from "../Data/config";
import HoverButton from "../Components/HoverButton";




const Project = () => {
  return (
    <div
      id="projects"
      className="border border-borderLight dark:border-borderDark bg-lightBg dark:bg-darkBg text-textLight dark:text-textDark px-6 py-8 flex flex-col w-full max-w-full rounded-lg gap-6 overflow-hidden"
    >
      <div>
        {/* Heading */}
        <h2 className="text-3xl  text-textLight dark:text-textDark font-semibold mb-4">
          Project
        </h2>
        {/* Sub Heading */}
        <h2 className="text-md text-gray-600 dark:text-gray-300 mb-4">
          Explore some of my recent projects below. For more, visit my GitHub
          profile.
        </h2>
      </div>

      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
      <div className="flex w-full justify-center flex-col items-center">
        <h2 className="text-md text-gray-600 dark:text-gray-300 mb-4">
          Want to see more?
        </h2>
        <HoverButton
          text="View all projects"
          className="px-4 py-2 bg-buttonLight text-buttonLightText dark:bg-lightBg dark:text-textLight rounded-md hover:bg-buttonLightHover "
        />
      </div>
    </div>
  );
};

export default Project;
