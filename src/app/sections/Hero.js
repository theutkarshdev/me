"use client";
import Image from "next/image";
import UserImg from "../assets/4.png";
import BgImage from "../assets/bg-image-1.jpg";
import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex flex-wrap min-h-screen items-center justify-center bg-[rgba(242,242,242,0.5)] dark:bg-[rgba(0,0,0,0.70)]"
    >
      <Image alt="image" sizes="100vw" className="top-0 bottom-0 left-0 right-0 absolute z-[-1] h-full" src={BgImage} />
      <motion.div className="relative w-full lg:w-1/2 px-4 flex items-center justify-center mt-16 sm:mt-0">
        <Image alt="image" sizes="100vw" className="relative w-2/3" src={UserImg} />
        <div className="absolute top-3/4 inline-flex gap-2 items-center border p-1 rounded-full pr-3 bg-primary-lcard dark:bg-primary-dcard border-gray-300 dark:border-gray-500">
          <div className="bg-slate-200 w-8 h-8 flex justify-center items-center rounded-full">
            <motion.div
              animate={{
                rotate: [0, -10, 10, -10, 10, 0, 0, 0],
                transition: { delay: 0.1, repeat: Infinity, duration: 2 },
              }}
              style={{ transformOrigin: "bottom" }}
            >
              <Icon className="text-2xl" icon="emojione:raised-hand" />
            </motion.div>
          </div>
          <p className="text-sm font-semibold">Welcome, Stranger</p>
        </div>
      </motion.div>

      <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center mt-5 sm:mt-0">
        <div className="w-full text-center lg:text-left">
          <div className="max-w-lg mx-auto lg:mx-0">
            <h2 className="mb-3 text-4xl md:text-6xl font-bold">
              <span>Build &amp; Launch without </span>
              <span className="text-primary-orange"> problems</span>
            </h2>
            <h4 className="cursive-font text-2xl font-bold mt-3">Get your project estimations by today...</h4>
          </div>
          <div className="max-w-lg mx-auto lg:mx-0 mt-5">
            <p className="mb-6">
              Innovator by day, UX crafter by night. I build webapps come alive with my creative touch and build
              user-friendly interfaces that make the internet a better place.
            </p>
            <div>
              <a
                className="inline-flex gap-2 items-center justify-center mb-3 md:mb-0 md:mr-3 w-full md:w-auto py-2 px-6 leading-loose bg-primary-orange border-2 border-primary-orange hover:bg-orange-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                href="#"
              >
                Hire Me <Icon className="text-2xl" icon="uil:user-check" />
              </a>
              <a
                className="inline-flex cursor-pointer gap-2 items-center justify-center w-full md:w-auto py-2 px-6 leading-loose text-[#303030] font-semibold border-2 bg-transparent border-gray-600 rounded-l-xl rounded-t-xl transition duration-200 dark:border-white dark:text-white"
                onClick={() => {
                  // Function to download the resume
                  const downloadResume = () => {
                    const anchor = document.createElement("a");
                    anchor.href = "/UtkarshKushwahaResume.pdf"; // Replace 'your_resume_filename.pdf' with the actual filename and extension of your resume
                    anchor.download = "UtkarshKushwahaResume.pdf"; // This attribute tells the browser to download the file with the specified name
                    anchor.click();
                  };

                  // Function to open the resume in a new tab
                  const openResumeInNewTab = () => {
                    window.open("/UtkarshKushwahaResume.pdf", "_blank"); // Replace 'your_resume_filename.pdf' with the actual filename and extension of your resume
                  };

                  // Perform both actions
                  downloadResume();
                  openResumeInNewTab();
                }}
              >
                View Resume <Icon className="text-2xl" icon="fluent:document-person-20-regular" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
