import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { navbarData } from "../Data/config";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply theme on toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="border border-borderLight dark:border-borderDark bg-lightBg dark:bg-darkBg text-textLight dark:text-textDark px-6 py-2 flex justify-between items-center w-full rounded-lg ">
      {/* Left Section: Logo & Menu */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <a href={navbarData.logoLink} className="text-2xl font-bold">
          {navbarData.logoText}
        </a>

        {/* Menu (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          {navbarData.navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="relative px-3 py-2 rounded-md  group overflow-hidden"
            >
              {/* Background Effect - Syncs with hover */}
              <div className="absolute inset-0 bg-iconBgLight dark:bg-iconBgDark rounded-md  group-hover:bg-hoverLight dark:group-hover:bg-hoverDark"></div>

              {/* Text - Stays above the background */}
              <span className="relative z-10 text-textLight dark:text-textDark  group-hover:text-darkBg dark:group-hover:text-lightBg">
                {link.label}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Toggle Switch: Sun/Moon Icon */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg hover:bg-hoverLight dark:hover:bg-hoverDark bg-iconBgLight dark:bg-iconBgDark "
      >
        <motion.div
          key={darkMode ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-textDark" />
          ) : (
            <Moon className="w-5 h-5 text-textLight" />
          )}
        </motion.div>
      </button>
    </div>
  );
};

export default Navbar;
