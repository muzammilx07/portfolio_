import React from 'react'

const Tooltip = ({ children, message }) => {
  return (
    <div className="relative group inline-block">
      {children}
      <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-max bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
        {message}
      </span>
    </div>
  );
};

export default Tooltip