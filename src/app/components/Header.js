"use client";
import { useState } from "react";
import ThemeSwitcher from "./theme/ThemeSwitcher";
import { UilEllipsisV } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import Logo from "../assets/main-logo.png";
import Image from "next/image";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
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
              Menu <UilEllipsisV />
            </button>
          </div>
          <div className="ps-3 sm:ps-6 sm:ms-6 sm:border-s sm:border-gray-300 dark:border-gray-700">
            <ThemeSwitcher />
          </div>
        </div>
        <div
          className={`${
            menu ? "" : "-translate-x-full"
          } transition-all duration-300 transform fixed top-0 start-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)]`}
        ></div>
        <div
          className={`${
            menu ? "" : "-translate-x-full"
          } fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-e basis-full grow sm:order-2 sm:static sm:block sm:h-auto sm:max-w-none sm:w-auto sm:border-r-transparent sm:transition-none sm:translate-x-0 sm:z-40 sm:basis-auto dark:bg-gray-800 dark:border-r-gray-700 sm:dark:border-r-transparent`}
          tabIndex={-1}
        >
          <button
            type="button"
            onClick={() => setMenu(false)}
            className="sm:hidden w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <UilTimes />
          </button>

          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <a
              className="font-medium text-blue-600 px-6 sm:py-6 sm:px-0 dark:text-blue-500"
              href="#"
              aria-current="page"
            >
              Home
            </a>
            <a
              className="font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0 dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
            >
              About
            </a>
            <a
              className="font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0 dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
            >
              My Works
            </a>
            <a
              className="font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0 dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
