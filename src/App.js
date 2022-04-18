import { useEffect, useState, useRef } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import ProjectTitle from "./components/ProjectTitle";
function App() {
  const container = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);
  // console.log(container);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    // sections.forEach((section) => {
    //   section.classList.add("hidden");
    // });

    const callbackFunction = (entries, observer) => {
      const [entry] = entries;
      console.log(entry.target);

      if (!entry.isIntersecting) return;

      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    };

    const options = {
      root: null,
      threshold: 0.5,
    };

    const sectionObserver = new IntersectionObserver(callbackFunction, options);
    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }, []);
  return (
    <div className='container'>
      <div className='background'></div>
      <Nav />
      <LandingPage />
      <About />
      <ProjectTitle />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
