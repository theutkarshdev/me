import React from "react";
import BgImage from "../assets/bg-image-1.jpg";
import Image from "next/image";
import { skillsData } from "../JsonData/skills";
const Skills = () => {
  return (
    <div
      id="my-skills"
      className="relative min-h-screen py-10 px-4 bg-[rgba(242,242,242,0.5)] dark:bg-[rgba(0,0,0,0.70)]"
    >
      <Image alt="image" sizes="100vw" className="top-0 bottom-0 left-0 right-0 absolute z-[-1] h-full" src={BgImage} />
      <div className="relative w-full">
        <h1 className="w-full text-6xl sm:text-7xl md:text-9xl text-center titan-font text-transparent l-font-outline dark:d-font-outline">
          MY SKILLS
        </h1>
        <p
          className="text-2xl sm:text-3xl w-full text-center md:text-5xl titan-font
         absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70"
        >
          List of my Tech Array
        </p>
      </div>

      <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10 max-w-screen-lg mx-auto">
        {skillsData.map((item, index) => (
          <div
            key={index}
            className="relative p-3 border-[1.2px] rounded-3xl bg-primary-lcard dark:bg-[rgba(0,0,0,0.2)] dark:border-gray-400/[.55]"
          >
            <div className="flex gap-3 items-center">
              <div className="w-[50px] h-[50px] rounded-2xl border dark:border-gray-400/[.55] flex justify-center items-center">
                <img alt="image" width={30} src={item.logo.src} />
              </div>

              <h2 className="text-lg font-bold">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
