"use client";
import React from "react";

const PreLoader = () => {
  return (
    <div className="h-screen bg-[#545454] fixed w-full z-[999] flex items-center justify-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-orange-500"></div>
    </div>
  );
};

export default PreLoader;
