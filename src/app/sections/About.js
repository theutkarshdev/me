"use client";
import Image from "next/image";
import React from "react";
import AboutImg from "../assets/me-about.png";
import { Icon } from "@iconify/react";

const About = () => {
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
      <div className="flex flex-wrap w-full mt-10 max-w-screen-lg mx-auto">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h4 className="text-xl cursive-font">
            Engaging content about <strong className="text-primary-orange">theutkarshdev</strong>
          </h4>
          <h2 className="text-4xl font-extrabold w-full uppercase opacity-80">
            I belive in me that I am one of the best FullStack Developers.
          </h2>

          <p className="text-sm mt-10 max-w-screen-md mx-auto">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
            previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            <br />
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
            previewing layouts and visual mockups.
          </p>
          <div className="mt-5">
            <a
              className="max-w-sm mx-auto lg:mx-0 inline-flex gap-2 items-center justify-center mb-3 md:mb-0 md:mr-3 w-full md:w-auto py-2 px-6 leading-loose bg-primary-orange hover:bg-orange-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
              href="#"
            >
              Find me on LinkedIn <Icon className="text-2xl" icon="pajamas:linkedin" />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <div className="flex justify-center">
            <Image alt="image" className="rounded-xl w-4/5 mask1" sizes="100vw" src={AboutImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
