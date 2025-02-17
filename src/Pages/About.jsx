import React from "react";
import { Github, Mail } from "lucide-react";
import HoverButton from "../Components/HoverButton";
import { aboutData } from "../Data/config";

const buttonsData = [
  {
    id: 1,
    text: "View my GitHub",
    icon: Github,
    className:
      "px-4 py-2 flex gap-2 bg-buttonLight text-buttonLightText dark:bg-lightBg dark:text-textLight rounded-md hover:bg-buttonLightHover transition-all",
  },
  {
    id: 2,
    text: "Contact Me",
    icon: Mail,
    className:
      "px-4 py-2 bg-iconBgLight dark:bg-iconBgDark text-textLight dark:text-textDark rounded-md hover:bg-hoverLight dark:hover:bg-hoverDark transition-all",
  },
];

const About = () => {
  return (
    <div id="about" className="border border-borderLight dark:border-borderDark bg-lightBg dark:bg-darkBg text-textLight dark:text-textDark px-6 py-8 flex flex-col w-full max-w-full rounded-lg gap-6 overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>

      {/* Content Wrapper */}
      <div className="flex flex-col gap-6 w-full max-w-2xl overflow-hidden">
        {aboutData.map((item) => (
          <p
            key={item.id}
            className="text-md text-gray-600 dark:text-gray-300 w-full break-words whitespace-normal"
          >
            {item.text}
          </p>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 w-full mt-4">
        {buttonsData.map((btn) => (
          <HoverButton
            key={btn.id}
            text={btn.text}
            icon={btn.icon}
            className={btn.className}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
