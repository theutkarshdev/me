import { Toaster } from "react-hot-toast";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import MyWork from "./sections/MyWorks";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Toaster />
      <Hero />
      <About />
      <MyWork />
      <Contact />
    </main>
  );
}
