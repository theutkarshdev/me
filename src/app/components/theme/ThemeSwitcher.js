"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <button
        className="w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <IoMoonOutline size={22} /> : <IoSunnyOutline size={22} />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
