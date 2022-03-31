import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
function App() {
  return (
    <div className='container'>
      <div className='background'></div>
      <Nav />
      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
