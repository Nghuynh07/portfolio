import About from "./components/About";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Contact from "./components/Contact";
function App() {
  useEffect(() => {}, []);

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
