"use client";
import Image from "next/image";
import React from "react";
import AboutImg from "../assets/me-about.png";
import { Icon } from "@iconify/react";
import NewSkills from "../sections/NewSkill";
import TextReveal from "@magic-ui/text-reveal";
import OrbitingCircles from "@magic-ui/orbiting-circles";
import { skillsData } from "../JsonData/skills";
import { motion, useMotionValue, animate } from "framer-motion";
import WordPullUp from "@magic-ui/word-pull-up";

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

        <WordPullUp
          className="text-2xl sm:text-3xl w-full text-center md:text-5xl titan-font
         absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70"
          words="Do you know me ?"
        />
      </div>
      <div className="flex flex-wrap flex-col w-full max-w-screen-lg mx-auto items-center">
        <div className="w-full text-center lg:text-left">
          <h4 className="text-xl cursive-font text-center mb-5">
            Engaging content about <strong className="text-primary-orange">theutkarshdev</strong>
          </h4>

          <div className="z-10">
            <TextReveal text="Hello there! 👋 I'm Utkarsh Kushwaha, and I firmly believe in my abilities as one of the best Full Stack Developers. With 3+ years of valuable experience, I specialize as a React Frontend Developer. I am passionate about creating exceptional user experiences through innovative and responsive web applications." />
          </div>

          <ul className="mt-5 hidden font-semibold">
            {skills.map((skill, index) => (
              <li className="flex gap-2" key={index}>
                <Icon className="text-3xl text-green-500" icon="lets-icons:done-round-duotone" /> {skill}
              </li>
            ))}
          </ul>

          <div className="mt-5 text-center">
            <a
              target="_blank"
              className="max-w-sm mx-auto lg:mx-0 inline-flex gap-2 items-center justify-center mb-3 md:mb-0 md:mr-3 w-full md:w-auto py-2 px-6 leading-loose bg-primary-orange hover:bg-orange-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
              href="https://www.linkedin.com/in/theutkarshdev"
            >
              Find me on LinkedIn <Icon className="text-2xl" icon="pajamas:linkedin" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-20 flex w-full h-screen items-center justify-center overflow-hidden bg-background">
        <Image alt="image" className="rounded-xl w-full max-w-xl mask1" sizes="100vw" src={AboutImg} />

        {/* Inner Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[0, 1].map((index) => (
            <OrbitingCircles
              key={index}
              className="p-3 h-[80px] w-[80px] border-none bg-transparent"
              duration={20}
              delay={index * 10}
              radius={290}
            >
              <motion.img src={skillsData[index].logo.src} alt={`Logo ${index}`} />
            </OrbitingCircles>
          ))}
        </div>

        {/* Middle Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[2, 3, 4, 5, 6].map((index) => (
            <OrbitingCircles
              key={index}
              className="p-3 h-[80px] w-[80px] border-none bg-transparent"
              duration={20}
              delay={(index - 2) * 4}
              radius={390}
              reverse
            >
              <motion.img src={skillsData[index].logo.src} alt={`Logo ${index}`} />
            </OrbitingCircles>
          ))}
        </div>

        {/* Outer Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[7, 8, 9, 10, 11, 12, 13, 14].map((index) => (
            <OrbitingCircles
              key={index}
              className="p-3 h-[90px] w-[90px] border-none bg-transparent"
              duration={24}
              delay={(index - 7) * 3}
              radius={490}
            >
              <motion.img src={skillsData[index].logo.src} alt={`Logo ${index}`} />
            </OrbitingCircles>
          ))}
        </div>

        {/* Outer Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[7, 8, 9, 10, 11, 12, 13, 14].map((index) => (
            <OrbitingCircles
              key={index}
              className="p-3 h-[90px] w-[90px] border-none bg-transparent"
              duration={24}
              delay={(index - 7) * 3}
              radius={590}
              reverse
            >
              <motion.img src={skillsData[index].logo.src} alt={`Logo ${index}`} />
            </OrbitingCircles>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
