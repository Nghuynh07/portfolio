import About from "./components/About";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Contact from "./components/Contact";
function App() {
  useEffect(() => {
    const callbackFunc = (entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
      });
    };

    const options = {
      root: null,
      rootMargin: "100px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(callbackFunc, options);

    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <About />
      <Projects />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
