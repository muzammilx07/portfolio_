import React from "react";
import { MapPin, Mail } from "lucide-react";
import { heroData } from "../Data/config";
import HoverButton from "../Components/HoverButton";
import Tooltip from '../Components/Tooltip'

const Hero = () => {
  return (
    <div className="border border-borderLight dark:border-borderDark bg-lightBg dark:bg-darkBg text-textLight dark:text-textDark px-8 py-10 flex flex-col gap-4 w rounded-lg ">
      {/* Intro Section */}
      <h1 className="text-3xl font-semibold leading-snug">
        Hey, <br /> I'm{" "}
        <span className="text-textLight dark:text-textDark">
          {heroData.name}
        </span>
        .
      </h1>
      <p className="text-md text-textMutedLight dark:text-textMutedDark">
        {heroData.title}
      </p>

      {/* Location */}
      <div className="flex items-center gap-2 text-textMutedLight dark:text-textMutedDark text-sm">
        <MapPin size={18} />
        <span>{heroData.location}</span>
        <button className="p-2 rounded-full hover:bg-hoverLight dark:hover:bg-hoverDark bg-iconBgLight dark:bg-iconBgDark">
          <img
            src="https://img.freepik.com/premium-vector/india-flag-simple-illustration-independence-day-election_599062-9674.jpg?semt=ais_hybrid"
            alt="India Flag"
            className="w-5 h-5 rounded-full"
          />
        </button>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <HoverButton
          text="Contact Me"
          icon={Mail}
          className="px-4 py-2 bg-buttonLight text-buttonLightText dark:bg-lightBg dark:text-textLight rounded-md hover:bg-buttonLightHover "
        />

        <HoverButton
          text="More About Me"
          className="px-4 py-2 bg-iconBgLight dark:bg-iconBgDark text-textLight dark:text-textDark rounded-md hover:bg-hoverLight dark:hover:bg-hoverDark "
        />
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 mt-2  text-textMutedLight dark:text-textMutedDark ">
        {heroData.contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 flex justify-center items-center rounded-lg relative bg-iconBgLight dark:bg-iconBgDark hover:bg-hoverLight dark:hover:bg-hoverDark "
          >
            {" "}
            <Tooltip message={contact.name}>
              <contact.icon size={22} />
            </Tooltip>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;
