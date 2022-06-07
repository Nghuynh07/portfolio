import About from "./components/About";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Nav />
      <Header />
      <main className='main'>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
