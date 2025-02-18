import {
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiShadcnui,
} from "react-icons/si";
import {  Github, Linkedin, Phone, Mail, FileText } from "lucide-react";
import { TbBrandThreejs } from "react-icons/tb";

import { FaReact } from "react-icons/fa";
import p1img from '../Assests/netflix.png'
import p2img from '../Assests/zatoksi.png'



export const navbarData = {
  logoText: "MS.",
  logoLink: "/",
  navLinks: [
    { path: "#projects", label: "Projects" },
    { path: "#about", label: "About Me" },
    { path: "#contact", label: "Contact Me" },
  ],
};

export const heroData = {
  name: "Muzammil Shareef",
  title: "Full Stack Developer & Computer Science Engineer Student",
  location: "Telangana, India",
  contacts: [
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/muzammilx07",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/muzammil633/",
    },
    {
      name: "WhatsApp",
      icon: Phone,
      link: "https://wa.me/919030929925",
    },
    {
      name: "Email",
      icon: Mail,
      link: "mailto:muzammilxshareef@gmail.com",
    },
    {
      name: "Resume",
      icon: FileText,
      link: "https://docs.google.com/document/d/1APMAMLtOIx5Wiiu8SKwB52Q51-cNe_PBkIEbNd8V0Jk/edit?usp=drive_link",
    },
  ]
 
};


export const aboutData = [
  {
    id: 1,
    text: `Passionate Full-Stack Developer specializing in MERN stack. I love crafting interactive UIs, optimizing performance, and turning ideas into seamless web experiences.`,
  },
  {
    id: 2,
    text: `Final-year BTech (AI & ML) student exploring AI in web development. Skilled in React, Next.js, Node.js, and MongoDB, with a strong grasp of backend architecture and API design.`,
  },
  {
    id: 3,
    text: `Avid learner and problem solver, always seeking innovation. My mission? Building impactful digital solutions that fuse functionality, speed, and great design.`,
  },
];
export const projects = [
  {
    name: "NetFlix Clone",
    year: "2024",
    technologies: [
      FaReact,
      SiJavascript,
      SiTailwindcss,
      SiFirebase,
      SiMongodb,
      SiNodedotjs,
      SiExpress,
    ],
    description:
      "This is a Netflix Clone application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application mimics the core functionalities of Netflix, allowing users to browse and watch trailers of movies.",
    github: "https://github.com/muzammilx07/netflix-2.0",
    live: "https://netflix-2-0-blue.vercel.app",
    image: p1img,
  },
  {
    name: "TaskFlow",
    year: "2023",
    technologies: [
      FaReact,
      SiJavascript,
      SiTailwindcss,
      TbBrandThreejs,
      SiShadcnui,
    ],
    description:
      "A productivity app to track and manage daily tasks efficiently.",
    live: "https://p1-blush.vercel.app/",
    image: p2img,
  },
];
