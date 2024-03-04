"use client";
import Image from "next/image";
import React from "react";
import AboutImg from "../assets/me-about.png";
import { Icon } from "@iconify/react";
import NewSkills from "../sections/NewSkill";

const About = () => {
  const skills = [
    "Passionate React Developer",
    "Mastery in Fullstack Development",
    "Driven by Innovation",
    "Problem Solver Extraordinaire",
  ];

  return (
    <div id="about" className="min-h-screen bg-primary-lcard dark:bg-primary-dcard py-10 px-4">
      <div className="relative w-full">
        <h1 className="w-full text-6xl sm:text-7xl md:text-9xl text-center titan-font text-transparent l-font-outline dark:d-font-outline">
          ABOUT ME
        </h1>
        <p
          className="text-2xl sm:text-3xl w-full text-center md:text-5xl titan-font
         absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70"
        >
          Do you know me ?
        </p>
      </div>
      <div className="flex flex-wrap w-full mt-10 max-w-screen-lg mx-auto items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h4 className="text-xl cursive-font">
            Engaging content about <strong className="text-primary-orange">theutkarshdev</strong>
          </h4>
          <h2 className="text-4xl font-extrabold w-full uppercase opacity-80">
            I belive in me that I am one of the best FullStack Developers.
          </h2>

          <p className="text-sm mt-10 max-w-screen-md mx-auto">
            Hello there! 👋 I'm Utkarsh Kushwaha, and I have a firm belief in my abilities as a React Frontend
            Developer. With 2-3 years of valuable experience under my belt, I bring a passion for creating exceptional
            user experiences through innovative and responsive web applications.
          </p>
          <ul className="mt-5 font-semibold">
            {skills.map((skill, index) => (
              <li className="flex gap-2" key={index}>
                <Icon className="text-3xl text-green-500" icon="lets-icons:done-round-duotone" /> {skill}
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <a
              target="_blank"
              className="max-w-sm mx-auto lg:mx-0 inline-flex gap-2 items-center justify-center mb-3 md:mb-0 md:mr-3 w-full md:w-auto py-2 px-6 leading-loose bg-primary-orange hover:bg-orange-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
              href="https://www.linkedin.com/in/theutkarshdev"
            >
              Find me on LinkedIn <Icon className="text-2xl" icon="pajamas:linkedin" />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:p-10">
          <div className="flex justify-center">
            <Image alt="image" className="rounded-xl w-full max-w-xl mask1" sizes="100vw" src={AboutImg} />
          </div>
        </div>
      </div>

      <NewSkills />
    </div>
  );
};

export default About;
