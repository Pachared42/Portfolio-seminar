import { useEffect } from "react";
import Lenis from "lenis";

import "./App.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative z-0 flex flex-col items-center container mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
