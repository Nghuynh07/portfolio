import About from "./components/About";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Title from "./components/Title";
function App() {
  return (
    <div className='container'>
      <Nav />
      <LandingPage />

      <About />
      <Title title='Projects' />
      <Projects />
      {/* <Title title="Lets's Talk" /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
