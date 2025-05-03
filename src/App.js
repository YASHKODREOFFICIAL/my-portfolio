import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./style.css";

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("inview");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });
  }, []);

  return (
    <>
      <div ref={el => (sectionsRef.current[0] = el)} className="appear">
        <Navbar />
      </div>

      <div ref={el => (sectionsRef.current[1] = el)} className="appear">
        <AboutMe />
      </div>

      <section ref={el => (sectionsRef.current[2] = el)} className="appear">
        <Projects />
      </section>

      <section ref={el => (sectionsRef.current[3] = el)} className="appear">
        <Skills />
      </section>

      <section ref={el => (sectionsRef.current[4] = el)} className="appear">
        <Achievements />
      </section>

      <section ref={el => (sectionsRef.current[5] = el)} className="appear">
        <Education />
      </section>

      <footer ref={el => (sectionsRef.current[6] = el)} className="appear">
        <Contact />
      </footer>
    </>
  );
}

export default App;
