// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBg: "#ffffff", // bg-white
        darkBg: "#000000", // dark:bg-[#09090B]

        borderLight: "#D1D5DB", // border-gray-300
        borderDark: "#27272A", // dark:border-[#27272A]

        textLight: "#000000", // text-black
        textDark: "#ffffff", // dark:text-white

        textMutedLight: "#6B7280", // text-gray-600
        textMutedDark: "#D1D5DB", // dark:text-gray-300

        hoverLight: "#D1D5DB", // hover:bg-gray-300
        hoverDark: "#3A3A3D", // dark:hover:bg-[#3A3A3D]

        buttonLight: "#000000", // bg-black
        buttonLightText: "#ffffff", // text-white
        buttonLightHover: "#1F2937", // hover:bg-gray-800

        buttonDark: "#ffffff", // dark:bg-white
        buttonDarkText: "#000000", // dark:text-black
        buttonDarkHover: "#E5E7EB", // dark:hover:bg-gray-200

        iconBgLight: "#F4F4F5", // bg-[#F4F4F5]
        iconBgDark: "#18181B", // dark:bg-[#18181B]
      },
    },
  },
  plugins: [],
};
