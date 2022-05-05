import About from "./components/About";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Contact from "./components/Contact";
function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".hidden");
    sections.forEach((section) => {
      section.classList.add("hidden");
    });
    const sectionCallBack = (entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.classList.remove("hidden");
    };

    const options = {
      root: null,
      threshold: 0.3,
    };

    const sectionObserver = new IntersectionObserver(sectionCallBack, options);

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }, []);

  return (
    <div className='container'>
      <Nav />
      <LandingPage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
