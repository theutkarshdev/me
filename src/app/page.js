"use client";
import { Toaster } from "react-hot-toast";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import MyWork from "./sections/MyWorks";
import { useState, useEffect } from "react";
import PreLoader from "./components/PreLoader";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main className="min-h-screen">
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <Header />
          <Toaster />
          <Hero />
          <About />
          <MyWork />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}
