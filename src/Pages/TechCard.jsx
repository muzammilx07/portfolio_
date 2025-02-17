import React from "react";
import Tooltip from "../Components/Tooltip";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNpm,
  SiGit,
  SiGithub,
  SiFigma,
  SiMysql,
  SiMongodb,
  SiDiscord,
  SiDocker,
  SiVercel,
  SiEslint,
  SiFirebase,
  SiPostman,
  SiGithubactions,
  SiShadcnui,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { FaVuejs, FaWindows } from "react-icons/fa";
import { VscVscode, VscCopilot } from "react-icons/vsc";
import { AiOutlineOpenAI } from "react-icons/ai";



const technologies = [
  { name: "React", icon: <SiReact />, info: "JavaScript library for UI" },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    info: "React framework for production",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
    info: "Utility-first CSS framework",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    info: "Popular programming language",
  },
  { name: "TypeScript", icon: <SiTypescript />, info: "Typed JavaScript" },
  { name: "Node.js", icon: <SiNodedotjs />, info: "JavaScript runtime" },
  {
    name: "Express.js",
    icon: <SiExpress />,
    info: "Web framework for Node.js",
  },
  { name: "NPM", icon: <SiNpm />, info: "Node package manager" },
  { name: "Git", icon: <SiGit />, info: "Version control system" },
  { name: "GitHub", icon: <SiGithub />, info: "Code hosting platform" },
  { name: "Figma", icon: <SiFigma />, info: "Design tool" },
  { name: "MySQL", icon: <SiMysql />, info: "SQL database" },
  { name: "MongoDB", icon: <SiMongodb />, info: "NoSQL database" },
  { name: "Discord.js", icon: <SiDiscord />, info: "Discord bot framework" },
  { name: "Docker", icon: <SiDocker />, info: "Containerization tool" },
  { name: "Vercel", icon: <SiVercel />, info: "Hosting for web projects" },
  { name: "ESLint", icon: <SiEslint />, info: "JavaScript linter" },
  { name: "Vue.js", icon: <FaVuejs />, info: "JavaScript framework" },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    info: "Platform for building apps",
  },
  { name: "Shadcn", icon: <SiShadcnui />, info: "UI component library" },
  { name: "Three.js", icon: <TbBrandThreejs />, info: "3D graphics library" },
  { name: "VS Code", icon: <VscVscode />, info: "Code editor" },
  { name: "Windows", icon: <FaWindows />, info: "Operating system" },
  { name: "Postman", icon: <SiPostman />, info: "API testing tool" },
  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    info: "CI/CD automation",
  },
  { name: "Copilot", icon: <VscCopilot />, info: "AI-powered code assistant" },
  { name: "OpenAI", icon: <AiOutlineOpenAI />, info: "AI research and tools" },
];

const TechCard = () => {
  return (
    <div className="border border-borderLight dark:border-borderDark bg-lightBg dark:bg-darkBg text-textLight dark:text-textDark px-6 py-8 flex flex-col w-full max-w-full rounded-lg gap-6 overflow-hidden">
      <h2 className="text-black dark:text-white text-2xl font-bold mb-4">
        Technologies I use.
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Over the years, I have worked with various technologies. Here are some I
        have experience with:
      </p>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <div key={index} className="relative group">
            <Tooltip message={tech.info}>
              <div className="flex items-center space-x-2 px-3 py-2 border border-gray-300 dark:border-[#27272A] rounded-md bg-[#F4F4F5] dark:bg-[#18181B] hover:bg-gray-300 dark:hover:bg-[#3A3A3D] cursor-pointer">
                <span className="text-xl">{tech.icon}</span>
                <span className="text-sm text-black dark:text-white">
                  {tech.name}
                </span>
              </div>
            </Tooltip>
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center flex-col items-center">
        <h2 className="text-md text-gray-600 dark:text-gray-300 mb-4">
          ...and many more!
        </h2>
      </div>
    </div>
  );
};

export default TechCard;
