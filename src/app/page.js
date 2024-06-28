import { Toaster } from "react-hot-toast";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import MyWork from "./sections/MyWorks";
import PreLoader from "./components/PreLoader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Skills from "./sections/Skills";

export default function Home() {

  return (
    <main className="min-h-screen">
      <Header />
      <Toaster />
      <Hero />
      <About />
      <MyWork />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
