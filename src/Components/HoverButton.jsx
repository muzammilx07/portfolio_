import React from "react";
import "../App.css";

const HoverButton = ({ text, icon: Icon, className }) => {
  return (
    <button
      className={`link flex items-center gap-2 no-underline ${className}`}
    >
      {Icon && <Icon className="w-5 h-5" />} 
      <span className="mask relative overflow-hidden h-5">
        <div className="link-container transition-transform duration-400 ease">
          <span className="link-title1 title block text-lg leading-5 transition-transform duration-400 ease origin-right">
            {text}
          </span>
          <span className="link-title2 title block text-lg leading-5 transition-transform duration-400 ease origin-left rotate-20">
            {text}
          </span>
        </div>
      </span>
    </button>
  );
};

export default HoverButton;

