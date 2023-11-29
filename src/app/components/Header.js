"use client";
import { useState } from "react";
import ThemeSwitcher from "./theme/ThemeSwitcher";
import { IoEllipsisVertical } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Logo from "../assets/main-logo.png";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 300 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  });

  const headerVariants = {
    hidden: { y: -83 },
  };

  return (
    <header className="sticky top-0">
      <motion.div
        variants={headerVariants}
        animate={hidden ? "hidden" : "visible"}
        className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-3 sm:py-0 bg-primary-lcard dark:bg-primary-dcard shadow-primary-lcard dark:shadow-primary-dcard"
      >
        <nav
          className="relative max-w-[85rem] flex flex-wrap basis-full items-center w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">
              <Image src={Logo} width={70} alt="Picture of the author" />
            </a>
          </div>
          <div className="flex items-center ms-auto sm:ms-0 sm:order-3">
            <div className="sm:hidden">
              <button
                type="button"
                onClick={() => setMenu(true)}
                className="h-9 pl-2.5 px-1 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Menu <IoEllipsisVertical />
              </button>
            </div>
            <div className="ps-3 sm:ps-6 sm:ms-6 sm:border-s sm:border-gray-300 dark:border-gray-700">
              <ThemeSwitcher />
            </div>
          </div>

          <div
            className={`hidden sm:block h-full max-w-xs w-full bg-primary-lcard dark:bg-primary-dcard border-e basis-full grow sm:order-2 sm:static sm:h-auto sm:max-w-none sm:w-auto sm:border-r-transparent sm:transition-none sm:translate-x-0 sm:z-40 sm:basis-auto dark:border-r-gray-700 sm:dark:border-r-transparent`}
            tabIndex={-1}
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <a className="font-medium text-primary-orange px-6 sm:py-6 sm:px-0" href="#home" aria-current="page">
                Home
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0 dark:text-gray-400 dark:hover:text-gray-500"
                href="#about"
              >
                About
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0 dark:text-gray-400 dark:hover:text-gray-500"
                href="#my-works"
              >
                My Works
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0 dark:text-gray-400 dark:hover:text-gray-500"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </motion.div>
      <div
        className={`${
          menu ? "" : "-translate-x-full"
        } sm:hidden transition-all duration-300 transform fixed top-0 start-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)]`}
      ></div>
      <div
        className={`${
          menu ? "" : "-translate-x-full"
        } sm:hidden fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-primary-lcard dark:bg-primary-dcard border-e basis-full grow sm:order-2 sm:static sm:h-auto sm:max-w-none sm:w-auto sm:border-r-transparent sm:transition-none sm:translate-x-0 sm:z-40 sm:basis-auto dark:border-r-gray-700 sm:dark:border-r-transparent`}
        tabIndex={-1}
      >
        <button
          type="button"
          onClick={() => setMenu(false)}
          className="sm:hidden w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          <IoClose />
        </button>

        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
          <a className="font-medium text-primary-orange px-6 sm:py-6 sm:px-0" href="#home" aria-current="page">
            Home
          </a>
          <a
            className="font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0 dark:text-gray-400 dark:hover:text-gray-500"
            href="#about"
          >
            About
          </a>
          <a
            className="font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0 dark:text-gray-400 dark:hover:text-gray-500"
            href="#my-works"
          >
            My Works
          </a>
          <a
            className="font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0 dark:text-gray-400 dark:hover:text-gray-500"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
