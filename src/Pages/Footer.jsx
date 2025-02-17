import React, { useEffect, useState } from "react";
import { Sun, Moon, Info } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
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
    <div className="bg-lightBg dark:bg-darkBg text-textLight dark:text-textDark px-4 py-4 flex flex-col w-full max-w-full rounded-lg gap-2 overflow-hidden border-t border-borderLight dark:border-borderDark">
      <p className="text-center text-sm">
        Made by Muzammil Sharéef with React.js{" "}
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Red%20Heart.png"
          alt="Red Heart"
          className="inline-block w-5 h-5"
        />
      </p>

      <div className="flex justify-center items-center gap-2">
        {/* Country Flag and Info Icon with hover effect */}

        <button className="p-2 rounded-full hover:bg-hoverLight dark:hover:bg-hoverDark bg-iconBgLight dark:bg-iconBgDark">
          <img
            src="https://img.freepik.com/premium-vector/india-flag-simple-illustration-independence-day-election_599062-9674.jpg?semt=ais_hybrid"
            alt="India Flag"
            className="w-5 h-5 rounded-full"
          />
        </button>

        <button className="p-2 rounded-full hover:bg-hoverLight dark:hover:bg-hoverDark bg-iconBgLight dark:bg-iconBgDark">
          <span className="w-5 h-5 text-lg">
            <Info />
          </span>
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-hoverLight dark:hover:bg-hoverDark bg-iconBgLight dark:bg-iconBgDark"
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
    </div>
  );
};

export default Footer;
